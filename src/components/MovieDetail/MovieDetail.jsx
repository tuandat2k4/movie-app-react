import styled from "styled-components";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import { useFetch } from "@/hooks/useFetch";
import { movieApi } from "@/api";

const Detail = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  margin-top: 10px;
  gap: 32px;

  
  @media (max-width: 480px) {
    padding: 10px;
    gap: 20px;
  }
`;
const DetailHeroSub = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`
const DetailHeroTitle = styled.div`
  font-size: 24px;
  font-weight: 600;

`
const MovieDetail = ({ movie }) => {

  const {data: trailerVideo} = useFetch(
    () => movieApi.getTrailerVideo(movie.id),
    [movie.id]
  ) 
  return (
    <Detail onClick={(e) => e.stopPropagation()}>
      <div>
        <DetailHeroTitle>{movie.title}</DetailHeroTitle>
        <DetailHeroSub>
          <div>{movie.year}</div>
          <span>•</span>
          <div>{movie.runtime}</div>
        </DetailHeroSub>
      </div>
      <HeroSection movie={movie} trailer={trailerVideo}/>
      <InfoSection movie={movie} />
    </Detail>
  );
};

export default MovieDetail;
