import React from "react";
import styled from "styled-components";

interface InfoProps {
    info: string[];
}

interface InfoStyleProps {
    info1: string;
    info2: string;
    info3: string;
}

const InfoContainer = styled.div<InfoStyleProps>`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

const InfoItem = styled.div`
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    font-size: 14px;
    color: #333;`


const InfoItemComponent: React.FC<InfoProps> = ({ info }) => {
    const [info1, info2, info3] = info;
    return (
        <InfoContainer info1={info1} info2={info2} info3={info3}>
            <InfoItem>{info1}</InfoItem>
            <InfoItem>{info2}</InfoItem>
            <InfoItem>{info3}</InfoItem>
        </InfoContainer>
    );
}

export default InfoItemComponent;