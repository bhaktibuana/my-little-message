import styled from "@emotion/styled";

const primaryColor = "#fdad54";
const secondaryColor = "#ffffff";

export const FootNavbarContainer = styled.div`
  top: calc(100vh - 60px);
  width: 100%;
  height: 60px;
  padding: 5px 10px;
  background: ${secondaryColor};
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px -5px 20px 5px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;

  & > div.item-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      background: transparent;
      color: ${primaryColor};

      & > p {
        padding-top: 3px;
      }
    }
  }
`;
