import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eff5d6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 50%;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.div`
font-size:60px;
`
const Desc = styled.h1`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
cursor: pointer;
background-color: transparent;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);


  const handleClick = (direction)=>{
    console.log('clicked')
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
    console.log(slideIndex);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(items=>(
        <Slide key={items.id}>
          <ImgContainer>
            <Image src={items.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{items.title}</Title>
            <Desc>{items.desc}</Desc>
            <Button>SHOP NOW !</Button>
          </InfoContainer>
        </Slide>))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
