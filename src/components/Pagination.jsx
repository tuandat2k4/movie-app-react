import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background-color: ${theme.colors.card};
`
const Page = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${theme.colors.white};
`
const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const Pagination = () => {
  return (
    <Container>
      <Button>
        <Icon src="./PrevButton.png" alt="previous"/>
      </Button>

      <Page>
        2 <span>/ 50</span>
      </Page>

      <Button >
        <Icon src="./NextButton.png" alt="next"  />
      </Button>
    </Container>
  );
};

export default Pagination;
