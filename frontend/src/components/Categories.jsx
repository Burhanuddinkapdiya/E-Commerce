import styled from "styled-components";
import CategoryItems from "./CategoryItems";
import { categories } from "../data";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
