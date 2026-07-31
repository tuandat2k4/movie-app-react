import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  cursor: pointer;
`
const Number = styled.span`
  font-size: 160px;
  font-weight: 900;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px #4b456d;
  position: absolute;
  left: -30px;
  bottom: 50px;
  z-index: 0;
`
//Poster sài chung với PopularCard
const Poster = styled.img`
  position: relative;
  z-index: 10;
  margin-left: 10px;
  height: 220px;
  width: 150px; 
  border-radius: 20px;
  object-fit: cover;
`

const TrendingCard = ({ movie, index, setSelectedMovie }) => {
  const [posterError, setPosterError] = useState(false);
  
  return (
    <Container
      onClick={() => setSelectedMovie(movie)}
    >
      <Number>
        {index + 1}
      </Number>
      {movie.poster && !posterError ? (
        <Poster
          src={movie.poster}
          alt={movie.title}
          onError={() => setPosterError(true)}
        />
      ) : (
        <Poster>
          <div>
            <p>Poster</p>
            <p>Not Available</p>
          </div>
        </Poster>
      )}
    </Container>
  );
};

export default TrendingCard;
