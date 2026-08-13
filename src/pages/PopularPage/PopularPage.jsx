import MovieCard from "@/components/MovieCard";
import styled from "styled-components";
import { movieApi } from "@/api/movie.api";
import { useFetch } from "@/hooks/useFetch";
import Pagination from "@/components/Pagination";
import { useDebounce } from "@/hooks/useDebounce";
import SkeletonCard from "@/components/SkeletonCard";

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
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    row-gap: 60px;
  }
`;

const PopularPage = ({
  searchInput,
  setSelectedMovieId,
  currentPage,
  setCurrentPage,
}) => {
  const debouncedSearchInput = useDebounce(searchInput, 500);
  const fetchMovies = () => {
    const keyword = debouncedSearchInput.trim();

    if (keyword) {
      return movieApi.search(keyword, currentPage);
    }
    return movieApi.getPopular(currentPage);
  };
  const {
    data: movies,
    isError,
    isLoading,
  } = useFetch(fetchMovies, [debouncedSearchInput, currentPage]);

  const totalPages = movies?.totalPages || 1;

  if (isLoading) {
    return (
      <Section>
        <Title>Popular</Title>
        <Container>
          {[...Array(20)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </Container>
      </Section>
    );
  }
  if (isError) return <div>Có lỗi khi fetch</div>;

  return (
    <Section>
      <Title>Popular</Title>
      <Container>
        {(movies?.data || []).map((movie) => (
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
