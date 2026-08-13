import theme from "@/styles/theme";
import { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 24px;
  margin-top: -50px;
  background-color: ${theme.colors.card};
  cursor: pointer;
`;
const Poster = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 30px;
  object-fit: cover;
  padding: 20px;

  @media (max-width: 480px) {
    height: 220px;
    padding: 12px;
  }
`;
const SmallPoster = styled.img`
  position: relative;
  z-index: 10;
  margin-left: 20px;
  height: 200px;
  width: 150px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 170px;
    height: 80px;
    aspect-ratio: 16/9;
    margin-left: 7px;
  }
`;
const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-left: 20px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 12px;
  }
`;
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${theme.colors.white};
  margin-top: auto;
  padding-top: 16px;
  padding-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 10px;
    gap: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const StarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 20px;
`;
const Number = styled.span`
  font-size: 160px;
  font-weight: 900;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px #4b456d;
  position: absolute;
  left: -30px;
  bottom: 30px;
  z-index: 0;

  @media (max-width: 480px) {
    font-size: 50px;
    left: -10px;
    bottom: 10px;
    -webkit-text-stroke: 1px #4b456d;
  }
`;

const MovieCard = ({ movie, style, index, setSelectedMovieId }) => {
  const [posterError, setPosterError] = useState(false);
  // Nếu là card ở mục trending thì sẽ return cái này
  if (style === "trending") {
    return (
      <div
        style={{ position: "relative", cursor: "pointer" }}
        onClick={() => setSelectedMovieId(movie.id)}
      >
        <Number>{index + 1}</Number>
        {!posterError ? (
          <SmallPoster
            src={movie.poster}
            alt={movie.title}
            onError={() => setPosterError(true)}
          />
        ) : (
          <SmallPoster
            src="/poster-not-available.png"
            alt="Poster Not Available"
          />
        )}
      </div>
    );
  }
  return (
    <CardContainer onClick={() => setSelectedMovieId(movie.id)}>
      {movie.poster && !posterError ? (
        <Poster
          src={movie.poster}
          alt={movie.title}
          onError={() => setPosterError(true)}
        />
      ) : (
        <Poster src="/poster-not-available.png" alt="Poster Not Available" />
      )}
      <Title>{movie.title}</Title>
      <InfoRow>
        <StarIcon src="/star.svg" alt="star" />
        <span>{movie.rating}</span>
        <span>•</span>
        <span>{movie.category}</span>
        <span>•</span>
        <span>{movie.type}</span>
      </InfoRow>
    </CardContainer>
  );
};
export default MovieCard;
