import styled from "styled-components";
import theme from "@/styles/theme";

const Main = styled.main`
  min-height: 100vh;
  background: url("/BG.png") no-repeat center center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    min-height: 50vh;
  }
`;
const Logo = styled.img`
  width: 90.41px;
  height: 66px;
  margin: 0 auto;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
const HeroImg = styled.img`
  width: 550px;
  height: auto;
  margin: 0 auto;
  padding: 1px;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  gap: 1px
  color: ${theme.colors.white};
  margin-top: 1px;
  line-height: 1.1;
  span {
    color: ${theme.colors.purple};
  }
`;

const HomePage = () => {
  return (
    <>
      <Main>
        <Logo src="/logo.png" alt="Logo" />
        <HeroImg src="/hero-img.png" alt="Hero" />
        <Title>
          Find <span>Movies</span> You'll Love
          <br />
          Without the Hassle
        </Title>
      </Main>
    </>
  );
};

export default HomePage;
