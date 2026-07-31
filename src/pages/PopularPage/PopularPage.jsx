import moviesData from "@/data/moviesData";
import PopularCard from "@/components/PopularCard";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 80px;
`
const Title = styled.h2`
  margin-bottom: 80px;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  row-gap: 100px;
  
`

const PopularPage = ({ setSelectedMovie }) => {
  return (
    <Section>
      <Title>Popular</Title>
      <Container>
        {moviesData.map((movie) => (
          <PopularCard
            key={movie.id}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </Container>
    </Section>
  );
};

export default PopularPage;
