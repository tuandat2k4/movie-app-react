import styled from "styled-components";
import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 66px;
  width: 640px;
  margin: 0 auto;
  gap: 10px;
  background-color: ${theme.colors.card};
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    width: 95%;
    height: 50px;
  }
`
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`
const Input = styled.input`
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
`

const SearchInput = ({ searchInput, setSearchInput, setCurrentPage }) => {

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  }

  return (
    <Container>
      <SearchIcon src="/search.svg" alt="Search" />
      <Input
        type="text"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search..."
      />
    </Container>
  );
};

export default SearchInput;
