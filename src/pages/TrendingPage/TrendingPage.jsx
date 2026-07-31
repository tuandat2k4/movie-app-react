import moviesData from "@/data/moviesData";
import TrendingCard from "@/components/TrendingCard";
import styled from "styled-components";
import theme from "@/styles/theme";

const Section = styled.section`
  margin-top: 16px;
`
const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: bold;
  color: ${theme.colors.white};
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

const TrendingPage = ({ setSelectedMovie }) => {
  return (
    <Section>
      <Title>Trending</Title>
      <Container>
        {moviesData.slice(0, 6).map((movie, index) => (
          <TrendingCard
            key={movie.id}
            movie={movie}
            index={index}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </Container>
    </Section>
  );
};

export default TrendingPage;
