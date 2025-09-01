import React from "react";
import styled from "styled-components";
import ShoppingCard from "../components/ShoppingCard.tsx";
import ShoppingList from "../data/ShoppingInfo.tsx";

const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const HomePage: React.FC = () => {
  const list = ShoppingList();
  return (
    <Body>
      <h1>Welcome to the Shopping Page</h1>
      <ItemsContainer>
        {list.map((item, index) => (
          <ShoppingCard
            key={index}
            imageLänk={item.imageLänk}
            info={item.info}
            stars={item.stars}
            colors={item.colors}
            price={item.price}
          />
        ))}
        ;
      </ItemsContainer>
    </Body>
  );
};

export default HomePage;
