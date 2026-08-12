import MovieCard from "@/components/MovieCard";
import styled from "styled-components";
import { movieApi } from "@/api/movie.api";
import { useFetch } from "@/hooks/useFetch";
import Pagination from "@/components/Pagination";

const Section = styled.section`
  margin-top: 80px;
`;
const Title = styled.h2`
  margin-bottom: 80px;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;

  @media (max-width: 480px) {
    margin-bottom: 60px;
    font-size: 28px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  row-gap: 100px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
    row-gap: 60px;
  }
`;

const PopularPage = ({
  searchInput,
  setSelectedMovieId,
  currentPage,
  setCurrentPage,
}) => {
  const {
    data: searchMovies,
    isError,
  } = useFetch(
    () => movieApi.search(searchInput, currentPage),
    [searchInput, currentPage],
  );

  const { data: popularMovies, isLoading: isLoadingPopular } = useFetch(
    () => movieApi.getPopular(currentPage),
    [currentPage],
  );
  // console.log(popularMovies);

  const totalPages = popularMovies?.totalPages || searchMovies?.totalPages ||1;

  //sau này thay bằng component <Spinner /> => vòng xoay loading
  //và isError.message
  if (isLoadingPopular) return <div>Loading....</div>;
  if (isError) return <div>Có lỗi khi fetch</div>;

  return (
    <Section>
      <Title>Popular</Title>
      <Container>
        {(popularMovies?.data || []).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setSelectedMovieId={setSelectedMovieId}
          />
        ))}
      </Container>

      {/* pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />
    </Section>
  );
};

export default PopularPage;
