import styled from "styled-components";
import React from "react";

interface CircleProps {
    colors: string[];
}

interface CircleStyleProps {
    color: string;
}

const Circle = styled.div<CircleStyleProps>`
    width: 20px;
    height: 20px;
    border-radius: 50%; 
    background-color: ${({color}) => color};
    display: inline-block;
    margin-right: 5px;
`;

const Circles: React.FC<CircleProps> = ({ colors }) => {
    return (
        <div>
            {colors.map((col, index) => (
                <Circle key={index} color={col} />
            ))}
        </div>
    );
}

export default Circles;