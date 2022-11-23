import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "./context";
function Container({ children }) {
  const [userName, setUserName] = useState("");
  const [isUserExit, setIsUserExit] = useState(false);
  const [yourSelection, setYourSelection] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setIsUserExit(true);
    } else {
      setIsUserExit(false);
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        userName,
        setUserName,
        isUserExit,
        setIsUserExit,
        yourSelection,
        setYourSelection,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Container;
