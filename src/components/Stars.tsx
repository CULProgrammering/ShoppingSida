interface StarsProps {
  rating: number;
}

function Stars({ rating }: StarsProps) {
  return <div>
    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}  
  </div>;
}

export default Stars;