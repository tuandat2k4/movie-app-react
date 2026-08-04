import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background-color: ${theme.colors.card};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.text};
  }
`;
const Page = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${theme.colors.white};
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const Pagination = ({ currentPage, totalPages, onChange }) => {
  return (
    <Container>
      <Button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon src="./PrevButton.png" alt="previous" />
      </Button>

      <Page>
        {currentPage} <span>/ {totalPages}</span>
      </Page>

      <Button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Icon src="./NextButton.png" alt="next" />
      </Button>
    </Container>
  );
};

export default Pagination;
