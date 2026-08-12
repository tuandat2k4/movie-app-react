import theme from "@/styles/theme";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;
const Poster = styled.div`
  overflow: hidden;
  border-radius: 24px;
`;
const PosterImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 250px;
  }
`;
const Backdrop = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
`;

const BackdropImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

// tạo màu background trong suốt thử
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 60%);
`;

const Button = styled.button`
  position: absolute;
  bottom: 6px;
  left: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  background: rgba(255,255,255,0.2);
  padding: 8px 15px;
  border: 1px solid rgba(255,255,255,0.3)
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255,255,255,0.3);
    cursor: pointer;
  }
`;
const ButtonLeft = styled.div`
  text-align: left;
`;
const PlayText = styled.div`
  width: 100px;
  font-weight: 600;
  text-align: left;
  color: ${theme.colors.white};
`;


const HeroSection = ({ movie, trailer }) => {
  console.log(trailer)

  const handlePlayTrailer = () => {
    if (trailer) {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
    }
  };
  return (
    <Hero>
      <Poster>
        <PosterImage
          src={movie.poster || "/poster-not-available.png"}
          alt={movie.title}
        />
      </Poster>
      <Backdrop>
        <BackdropImage
          src={movie.backdrop || "/poster-not-available.png"}
          alt={movie.title}
        />
        <Overlay />
        <Button onClick={handlePlayTrailer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width={20}
            height={20}
            style={{ marginRight: "10px" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <ButtonLeft>
            <PlayText>Trailer</PlayText>
          </ButtonLeft>
        </Button>
      </Backdrop>
    </Hero>
  );
};

export default HeroSection;
