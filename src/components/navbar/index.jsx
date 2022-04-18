import React from "react";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  LeftContent,
  MiddleContent,
  NavbarContainer,
  RightContent,
} from "./styled";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarContainer>
        <LeftContent>
          <a
            href="/"
            className="logo-container"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img
              src={require("../../images/logo.png")}
              alt="logo"
              className="logo"
            />
            <p className="title">My Little Message</p>
          </a>
        </LeftContent>

        <MiddleContent>
          <a
            href="/"
            className={
              props.pageName === "home" ? "nav-item active" : "nav-item"
            }
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </a>

          <a
            href="/setting"
            className={
              props.pageName === "setting" ? "nav-item active" : "nav-item"
            }
            onClick={(e) => {
              e.preventDefault();
              navigate("/setting");
            }}
          >
            Setting
          </a>
        </MiddleContent>

        <RightContent>
          <button className="create" onClick={() => navigate("/create")}>
            <MdAddCircle size={20} />

            <p>Create</p>
          </button>
        </RightContent>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
