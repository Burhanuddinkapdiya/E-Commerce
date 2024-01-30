import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;

`
const Announcement = () => {
  return (
    <Container>
        Big Billion Sale. Get 50% off on Exclusive Products.
    </Container>
  )
}

export default Announcement