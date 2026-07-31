import { useState } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 24px;
  margin-top: -50px;
  background-color: ${theme.colors.card};
  cursor: pointer;
`
const Poster = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 30px;
  object-fit: cover;
  padding: 20px;
`
const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-left: 20px;
`
const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${theme.colors.white};
  margin-top: auto;
  padding-top: 16px;
  padding-bottom: 10px
`
const StarImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 20px;
`
const Rating = styled.span`
  font-size: 14px;
  color: ${theme.colors.white};
`

const PopularCard = ({ movie, setSelectedMovie }) => {
  const [posterError, setPosterError] = useState(false);
  return (  
    <Container onClick={() => setSelectedMovie(movie)} >
      {movie.poster && !posterError ? (
        <Poster
          src={movie.poster}
          alt={movie.title}
          onError={() => setPosterError(true)}
        />
      ) : (
        <Poster>
          Poster
          <br />
          Not Available
        </Poster>
      )}
      <Title>{movie.title}</Title>
      <RatingWrapper>
        <StarImg src="/star.svg" alt="star"/>
        <Rating>{movie.rating}</Rating>
        <span>•</span>
        <span>{movie.category}</span>
        <span>•</span>
        <span>{movie.type}</span>
      </RatingWrapper>
    </Container>
  );
};

export default PopularCard;
