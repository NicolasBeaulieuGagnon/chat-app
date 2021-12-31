import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import LoginDrawer from "./components/LoginDrawer/LoginDrawer";
import SideNav from "./components/SideNav/SideNav";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Router>
      <GlobalStyles />
      <LoginDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <SideNav />
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
      </Routes>
    </Router>
  );
};

export default App;