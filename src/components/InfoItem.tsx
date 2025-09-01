import React from "react";
import styled from "styled-components";

interface InfoProps {
  info: string[];
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div<{ top?: number }>`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333;
  margin-top: ${({ top }) => (top ? "5px" : "0px")};
`;

const InfoItemComponent: React.FC<InfoProps> = ({ info }) => {
  return (
    <InfoContainer>
      {info.map((item, index) => (
        <InfoItem key={index} top={index}>
          {item}
        </InfoItem>
      ))}
    </InfoContainer>
  );
};

export default InfoItemComponent;
