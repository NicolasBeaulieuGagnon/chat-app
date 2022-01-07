import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import LoginDrawer from "./components/LoginDrawer/LoginDrawer";
import SideNav from "./components/SideNav/SideNav";
import ChatBox from "./components/ChatBox/ChatBox";
import RightSideNav from "./components/RightSideNav/RightSideNav";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSideBars, setOpenSideBars] = useState(false);

  const openingSideBars = () => {
    setOpenSideBars(true);
  };

  const closingSideBars = () => {
    setOpenSideBars(false);
  };

  return (
    <Router>
      <GlobalStyles />
      <LoginDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <SideNav
        openSideBars={openSideBars}
        openingSideBars={openingSideBars}
        closingSideBars={closingSideBars}
      />
      <RightSideNav openSideBars={openSideBars} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          }
        />
        <Route path="/chat/:_id" element={<ChatBox />} />
      </Routes>
    </Router>
  );
};

export default App;
