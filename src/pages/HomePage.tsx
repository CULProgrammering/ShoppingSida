import React from "react";
import styled from "styled-components";
import ShoppingCard from "../components/ShoppingCard.tsx";
import ShoppingList from "../data/ShoppingInfo.tsx";

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    padding: 20px;`;

const HomePage: React.FC = () => {
    const list = ShoppingList();
    return (
        <ItemsContainer>
            <h1>Welcome to the Shopping Page</h1>
            {list.map((item, index) => (
                <ShoppingCard 
                    key={index} 
                    imageLänk={item.imageLänk}
                    info={item.info}
                    stars={item.stars}
                    colors={item.colors}
                    price={item.price}
                />
            ))};
        </ItemsContainer>
    );
}

export default HomePage;