import styled from "styled-components";
/*  Box is a styled component that wraps the entire footer */
export const Box = styled.div`
  padding: 80px 0px;
  background: #2d2d2d;
  position: absolute;
  width: 100%;
  margin-bottom: -130px;

  /*  MENU is a styled component that wraps the entire footer */
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
/*  Container is a styled component that wraps the content of the footer */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1160px;
  margin: 0 auto;
`;
/* Column is around all the text in the footer */
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
/* Row is around all the columns in the footer */
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  /*  Columns is a styled component that wraps the content of the footer */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
/* a href is the links in the footer */
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  /* Our hovering automatically changes the color of the link and transitions it to the default color */
  &:hover {
    color: #ffc93f;
    transition: 200ms ease-in;
  }
`;

/* Heading is styling MENU, EVENTS and CONTACT US  */
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  margin-top: 0px;
`;
