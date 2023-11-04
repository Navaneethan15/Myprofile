import React from "react";
import "./Toggle.css";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { themeContext } from '../../Context';
// import { useContext } from 'react';

const Toggle = () => {
  //  const theme = useContext(themeContext);
  //  const darkMode = theme.state.darkMode;

  return (
    <div className="toggle">
      <BsFillMoonStarsFill />
      <BsFillSunFill />
      <div
        className="t-button"
        // style = {darkMode ? {left : '2px'} : {right : '2px'}}
      ></div>
    </div>
  );
};

export default Toggle;
