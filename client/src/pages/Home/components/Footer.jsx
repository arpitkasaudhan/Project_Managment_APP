import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Email } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo>FG</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#features">Specifications</NavLink>
        <NavLink href="#benefits">Perks</NavLink>
        <NavLink href="#team">Team</NavLink>
      </Nav>
      <SocialMediaIcons>
      <SocialMediaIcon href="mailto:kasaudhanarpit37@gmail.com" target="_blank" rel="noopener noreferrer"><Email /></SocialMediaIcon>
        <SocialMediaIcon target="_blank" href="https://x.com/arpitkasaudhan_"><TwitterIcon /></SocialMediaIcon>
        <SocialMediaIcon target="_blank" href="https://www.linkedin.com/in/arpitkasaudhan/"><LinkedInIcon /></SocialMediaIcon>
        <SocialMediaIcon target="_blank" href="https://github.com/arpitkasaudhan"><GitHub/></SocialMediaIcon>
      </SocialMediaIcons>
      <Copyright>
        
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;