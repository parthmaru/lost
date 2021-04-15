import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./Styles";

const Footer = () => {
  return (
    <>
      <Box>
        <h1 style={{ color: "black", textAlign: "center" }}>
          LOST - LOCAL STORE
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Fast Delivery</FooterLink>
              <FooterLink href="#">Safety Precautions</FooterLink>
              <FooterLink href="#">AZ Availability</FooterLink>
              <FooterLink href="#">Transparency</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Gandhinagar</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Surat</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f" />
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram" />
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter" />
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube" />
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
