import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
  <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px"}}>
      </h1>
      
      <Container>
        <Row>
          <img src="img/logo.svg" alt="kino app logo" className="logo"></img> 
       <Column>
            <Heading>MENU</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Cinema</FooterLink>
            <FooterLink href="#">Ranking</FooterLink>
            <FooterLink href="#">Favorite</FooterLink>
          </Column>
          <Column>
            <Heading>EVENTS</Heading>
            <FooterLink href="#">Movie Festivals</FooterLink>
            <FooterLink href="#">Movie Nights</FooterLink>
            <FooterLink href="#">Training Videography</FooterLink>
          </Column>
          <Column>
              <Heading>Contact US</Heading>
              <FooterLink href="#">info@kino.com</FooterLink>
              <FooterLink href="#">+354 800-200-300</FooterLink>
              <FooterLink href="#">Laugavegur 8, 101 Reykjavík</FooterLink>
            </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
