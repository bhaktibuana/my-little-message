import styled from "@emotion/styled";

const primaryColor = "#fdad54";
const secondaryColor = "#ffffff";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 10px;
  background: ${primaryColor};
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 10px 50px;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 150px;
  }

  @media screen and (min-width: 1600px) {
    padding: 10px 200px;
  }

  @media screen and (min-width: 1920px) {
    padding: 10px 250px;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;

  & > a.logo-container {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    & > img.logo {
      height: 100%;
      objec-fit: cover;
      margin-left: 5px;
    }

    & > p.title {
      margin-left: 10px;
      font-size: 1.3rem;
      color: ${secondaryColor};
      font-weight: bold;
      display: none;

      @media screen and (min-width: 768px) {
        display: inherit;
      }
    }
  }
`;

export const MiddleContent = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > a.nav-item {
    height: auto;
    width: 85px;
    margin: 5px;
    padding: 5px;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    color: ${secondaryColor};
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-radius: 0.75rem;
      background: ${secondaryColor};
      color: ${primaryColor};
    }
  }

  & > a.nav-item.active {
    border-radius: 0.75rem;
    background: ${secondaryColor};
    color: ${primaryColor};
    font-weight: bold;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const RightContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  & > button.create {
    width: auto;
    height: auto;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 1rem;
    background: ${secondaryColor};
    color: ${primaryColor};
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    & > p {
      margin: 0;
      margin-left: 5px;
      font-weight: bold;
    }

    @media screen and (min-width: 768px) {
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 8px 0px rgb(0, 0, 0, 0.15);
      }
    }
  }
`;
