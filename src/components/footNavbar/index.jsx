import React from "react";
import { IoHome } from "react-icons/io5";
import { FootNavbarContainer, LeftContent } from "./styled";

const FootNavbar = () => {
  return (
    <>
      <FootNavbarContainer>
        <LeftContent>
          <div className="item-container">
            <button>
              <IoHome size={20} />
              <p>Home</p>
            </button>
          </div>
        </LeftContent>
      </FootNavbarContainer>
    </>
  );
};

export default FootNavbar;
