import React from "react";
import styled from "@emotion/styled";
import Button from "../Buttons/button";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 13px;
  width:600px;
  font-weight: 600;
`;

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
`;


const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10%;
`;

const QuoteText = styled.p`
  font-size: 15px;
  color: #fff;
  font-style: italic;
`;

const QuoteAuthor = styled.p`
  font-size: 13px;
  color: #ffa500;
  text-align: right;
  margin-top: 0.5px;
`;

export default function Header() {
  return (
    <div id="home" className="container">
      <HeaderContainer>
        <ContentContainer>
          <TextContainer>
            
            <Title>
              We Care, we nurture
            </Title>
            <Description>
              Her Health Hub is the sanctuary where women's wellness takes center stage. It's a sacred space where self-care, education, and empowerment intertwine, nurturing every aspect of a woman's health journey. Within its vibrant community, women find solace, support, and the strength to thrive. Her Health Hub is a beacon of holistic healing, illuminating the path towards physical, mental, and emotional well-being. It's a place where women's health blossoms, radiating vitality and resilience, inspiring us all to prioritize ourselves and embrace the beauty of our unique journeys.
            </Description>
            <QuoteContainer>
            <div>
              <QuoteText>
                <em>“Communities and countries and ultimately the world are only as strong as the health of their women.”</em>
              </QuoteText>
              <QuoteAuthor>Michelle Obama</QuoteAuthor>
            </div>
          </QuoteContainer>
            <Button>
              <Link to="/signup">Get Started</Link>
            </Button>
          </TextContainer>
        </ContentContainer>
      
        <LeftColumn>
          <img
            className="radius8"
            src={process.env.PUBLIC_URL + "/media/Women day-bro.png"} // Replace with the path to your video file
            
          />
         
        </LeftColumn>
     
      </HeaderContainer>
    </div>
  );
}
