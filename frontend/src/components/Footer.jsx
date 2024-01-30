import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #e7ffe6;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0px;
  letter-spacing: 1px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.div`
  width: 50%;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Commerce</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          odio autem, recusandae tempora voluptatum corrupti aspernatur possimus
          commodi aliquam nostrum.
        </Desc>
        <SocialContainer>
          <SocialIcon color="332FD0">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="FB2576">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="0081B4">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms&Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          153,Broklin street, Indore
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> +91-9893xxxxx
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> e-commerce@mail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
