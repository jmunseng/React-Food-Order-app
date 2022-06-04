import React, { Fragment } from "react";
import mealsImage from "../../assets/bbq.jpeg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BBQ Korea</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full if delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;
