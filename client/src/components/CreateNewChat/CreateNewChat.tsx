import {
  BgWrapper,
  CreateChatModal,
  Participant,
  Participants,
  Remove,
  Friends,
  Friend,
  AddFriend,
  HeaderDiv,
} from "./Styled-Components";
import { useContext, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SmallChatBox from "./SmallChatBox";
import { UserContext } from "../../contexts/UserContext";

interface ParticipantsProp {
  _id: string;
  username: string;
}

const CreateNewChat = () => {
  const { user } = useContext(UserContext);
  const [participants, setParticipants] = useState<Array<ParticipantsProp>>([]);

  const closeModal = () => {
    const chatModal: any = document.getElementById("newChatModal");
    chatModal.style.opacity = "0";
    chatModal.style.visibility = "hidden";
  };

  useEffect(() => {
    const ListenForClose = (ev: { key: string }) => {
      if (ev.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", ListenForClose);

    return () => {
      document.removeEventListener("keydown", ListenForClose);
    };
  }, []);

  const ToggleParticipant = (clickedFriend: {
    _id: string;
    username: string;
  }) => {
    let partiCopy = [...participants];

    if (
      participants.some(
        (partici) => partici.username === clickedFriend.username
      )
    ) {
      setParticipants(
        partiCopy.filter((parti) => parti._id !== clickedFriend._id)
      );
    } else {
      partiCopy.push(clickedFriend);
      setParticipants(partiCopy);
    }
  };

  return (
    <BgWrapper onClick={closeModal} id="newChatModal">
      <CreateChatModal
        onClick={(ev) => {
          ev.stopPropagation();
          ev.preventDefault();
        }}
      >
        <HeaderDiv>
          New Message
          <SearchBar callbackFunc={ToggleParticipant} reason="add to chat" />
        </HeaderDiv>
        {user?.friends.length > 0 && (
          <Friends>
            Friends:
            {user.friends.map((friend) => {
              return (
                <Friend>
                  {friend.username}
                  {!participants.some(
                    (partici) => partici.username === friend.username
                  ) && (
                    <AddFriend
                      onClick={(ev) => {
                        ev.preventDefault();
                        ToggleParticipant(friend);
                      }}
                    >
                      +
                    </AddFriend>
                  )}
                </Friend>
              );
            })}
          </Friends>
        )}
        <Participants>
          Participants :
          {participants.map((participant) => {
            return (
              <Participant>
                {participant.username}
                <Remove
                  onClick={(ev) => {
                    ev.preventDefault();
                    ToggleParticipant(participant);
                  }}
                >
                  x
                </Remove>
              </Participant>
            );
          })}
        </Participants>
        <SmallChatBox
          participants={participants}
          setParticipants={setParticipants}
          closeModal={closeModal}
        />
      </CreateChatModal>
    </BgWrapper>
  );
};

export default CreateNewChat;
