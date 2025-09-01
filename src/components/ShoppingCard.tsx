import React from "react";
import Stars from "./Stars.tsx";
import Circles from "./ColorCircles.tsx";
import InfoItem from "./InfoItem.tsx";
import styled from "styled-components";
import { ShoppingCart, ShoppingCartIcon } from "lucide-react";

interface ShoppingCardProps {
  imageLänk: string;
  info: string[];
  stars: number;
  colors: string[];
  price: number;
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const ImageContainer = styled.div`
  height: 240px;
  width: 192px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ModelMemoryDiv = styled.div`
  display: inline-block;
`;

const PrisDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const PrisButton = styled.button`
  width: 100%
  height: auto;
  display: flex;
  background: beige;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

const ModelMemoryH3 = styled.h3``;

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  imageLänk,
  info,
  stars,
  colors,
  price,
}) => {
  const [modell, minne, info1, info2, info3] = info;
  return (
    <MainDiv>
      <ImageContainer>
        <ProductImage src={imageLänk} alt="Product Image" />
      </ImageContainer>
      <ModelMemoryDiv>
        <ModelMemoryH3>
          {modell} {minne} GB
        </ModelMemoryH3>
      </ModelMemoryDiv>
      <Stars rating={stars} />
      <Circles colors={colors} />
      <InfoItem info={[info1, info2, info3]} />
      <PrisDiv>
        <p>Pris: ${price} kr</p>
        <PrisButton>
          <ShoppingCart size={24} color="black"></ShoppingCart>
        </PrisButton>
      </PrisDiv>
    </MainDiv>
  );
};

export default ShoppingCard;
