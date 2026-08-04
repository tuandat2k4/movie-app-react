import MovieCard from "@/components/MovieCard";
import styled from "styled-components";
import { movieApi } from "@/api/movie.api";
import { useFetch } from "@/hooks/useFetch";
import Pagination from "@/components/Pagination";
import { useState } from "react";

const Section = styled.section`
  margin-top: 80px;
`;
const Title = styled.h2`
  margin-bottom: 80px;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  row-gap: 100px;
`;

const PopularPage = ({ searchInput, setSelectedMovie }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movies,
    isLoading,
    isError,
  } = useFetch(
    () => movieApi.search(searchInput, currentPage),
    [searchInput, currentPage],
  );
  //console.log(movies?.data);

  const moviesData = movies?.data || [];
  const totalPages = movies?.totalPages || 1;

  //sau này thay bằng component <Spinner /> => vòng xoay loading
  //và isError.message
  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Có lỗi khi fetch</div>;

  return (
    <Section>
      <Title>Popular</Title>
      <Container>
        {moviesData.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </Container>

      {/* pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage}/>
    </Section>
  );
};

export default PopularPage;
