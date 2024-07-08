import React from "react";
import styled from "styled-components";
import TeamMember from "./TeamMember";

const TeamWrapper = styled.div`padding: 40px 0;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 0px 100px 0px;   
 background-image: linear-gradient(90deg, rgba(0,70,209,0.03) 0%, rgba(57,14,61,0.1) 100%);
 clip-path: polygon(0 0, 100% 0, 100% 100%,50% 95%, 0 100%);
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 36px;
  }
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
font-size: 20px;
line-height: 1.5;
font-weight:600px;
width: 100%;
max-width: 700px;
text-align: center;
color: hsl(246,  6%, 65%);
margin-bottom: 80px;
@media (max-width: 768px) {
  width: 90%;
    font-size: 16px;
    margin-bottom: 60px;
}
`;


const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Team = () => {
  const member = [{
    photo: "https://avatars.githubusercontent.com/u/114760527?s=400&u=9e0a44d2ad03a86ca84f0079a57b7bcec9ca95a0&v=4",
    name: "Arpit Kasaudhan",
    title: "Full-Stack Developer",
    bio: "Innovative Full-Stack Developer adept at creating dynamic web applications using the MERN stack. Passionate about delivering seamless digital experiences and continuously improving through creativity and critical thinking."
  }]
  return (
    <TeamWrapper id="team">
      <Title>About Me</Title>
      <Description>My Name is Arpit Kasaudhan I am Full Stack Developer</Description>
      <TeamContainer>
        {member.map((member, index) => (
          <TeamMember key={index} photo={member.photo} name={member.name} title={member.title} bio={member.bio} />
        ))}
      </TeamContainer>

    </TeamWrapper>
  );
};

export default Team;
