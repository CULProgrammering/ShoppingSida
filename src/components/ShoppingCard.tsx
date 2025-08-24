import React from "react";
import Stars from './Stars.tsx';
import Circles from './ColorCircles.tsx';
import InfoItem from './InfoItem.tsx';

interface ShoppingCardProps {
  imageLänk: string;
  info: string[];
  stars: number;
  colors: string[];
  price: number;
}


const ShoppingCard: React.FC<ShoppingCardProps> = ({imageLänk, info, stars, colors, price}) => {
    const [modell, minne, info1, info2, info3] = info;
  return (
    <div>
      <img src={imageLänk} alt="Product Image" />
      <h3>{modell} {minne} GB</h3>
      <Stars rating={stars} />
      <Circles colors={colors} />
      <InfoItem info={[info1, info2, info3]} />
      <p>Pris: ${price} kr</p>
    </div>
  );
}

export default ShoppingCard;