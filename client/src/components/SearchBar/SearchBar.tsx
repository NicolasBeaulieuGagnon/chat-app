import { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  Input,
  Label,
  Submit,
  Results,
  Result,
  ErrorMessage,
  Link,
} from "./StyledComponents";
import {
  Props,
  searchResultInitial,
  SearchResultsInt,
} from "./searchBarInterfaces";

import { BiSearchAlt } from "react-icons/bi";
import Tippy from "@tippyjs/react";
import { UserContext } from "../../contexts/UserContext";

const SearchBar = ({ callbackFunc, reason }: Props) => {
  const { user } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] =
    useState<SearchResultsInt>(searchResultInitial);
  useEffect(() => {
    if (searchResults.error) {
      setSearchResults(searchResultInitial);
    }
  }, [searchValue]);

  const searchForUser = () => {
    setSearchResults({ ...searchResults, loading: true });
    if (searchValue.trim().length > 0) {
      fetch(`/users-search/${searchValue}`).then((res) =>
        res.json().then(({ data }) => {
          if (data.length === 0) {
            setSearchResults({ ...searchResults, error: true, loading: false });
          } else {
            const filteredSearchResults = data.map(
              (foundUser: { _id: string; username: string }) => {
                if (
                  user.friends.some((friend) => friend._id === foundUser._id)
                ) {
                  return { ...foundUser, friend: true };
                } else {
                  return { ...foundUser, friend: false };
                }
              }
            );

            setSearchResults({
              ...searchResults,
              loading: false,
              foundUsers: filteredSearchResults,
            });
          }
        })
      );
    }
  };
  return (
    <Wrapper
      autoComplete="off"
      onSubmit={(ev) => {
        console.log("heading in!");
        ev.preventDefault();
        searchForUser();
      }}
    >
      <Input
        name="hidden"
        autoComplete="off"
        value={searchValue}
        onChange={(ev) => setSearchValue(ev.target.value)}
        id="searchInput"
        type="text"
      />
      <Label hasValue={searchValue.trim().length > 0} htmlFor="searchInput">
        Find a Friend
      </Label>
      {searchValue.trim().length > 0 && (
        <Submit
          type="submit"
          onClick={() => {
            searchForUser();
          }}
        >
          <BiSearchAlt />
        </Submit>
      )}
      {!searchResults.loading && (
        <Results>
          {searchResults.error ? (
            <ErrorMessage>
              No user found with <span>'{searchValue}'</span> in their name.
            </ErrorMessage>
          ) : (
            searchResults.foundUsers.map((foundUser) => {
              return user._id !== foundUser._id ? (
                <Tippy content={reason}>
                  <Link
                    onClick={(ev) => {
                      ev.preventDefault();
                      callbackFunc(foundUser);
                      setSearchResults(searchResultInitial);
                      setSearchValue("");
                    }}
                  >
                    <Result>{foundUser.username}</Result>
                  </Link>
                </Tippy>
              ) : (
                <div></div>
              );
            })
          )}
        </Results>
      )}
    </Wrapper>
  );
};

export default SearchBar;
