
import MovieCard from "@/components/MovieCard";
import styled from "styled-components";
import theme from "@/styles/theme";
import { useFetch } from "@/hooks/useFetch";
import { movieApi } from "@/api";

const Section = styled.section`
  margin-top: 16px;
`;
const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: bold;
  color: ${theme.colors.white};

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const TrendingPage = ({ setSelectedMovieId }) => {
  const { data: trendingMovies, isLoading } = useFetch(
    () => movieApi.getTrending(),
    [],
  );
  // console.log(trendingMovies)
  if (isLoading) return <div>Loading...</div>;
  const moviesData = trendingMovies?.results || [];
  // console.log(moviesData)
  return (
    <Section>
      <Title>Trending</Title>
      <Container>
        {moviesData.slice(0, 6).map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            index={index}
            setSelectedMovieId={setSelectedMovieId}
            style="trending"
          />
        ))}
      </Container>
    </Section>
  );
};

export default TrendingPage;
