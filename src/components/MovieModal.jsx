import styled from "styled-components";
import MovieDetail from "./MovieDetail/MovieDetail";

const Modal = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  overflow-y: auto;
  z-index: 99999;

`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.2);)
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
  }
`;

const CloseIcon = styled.span`
  color: white;
  font-size: 24px;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`
const MovieModal = ({ movie, setSelectedMovieId }) => {
  return (
    <Modal onClick={() => setSelectedMovieId(null)}>
      <CloseButton onClick={() => setSelectedMovieId(null)}>
        <CloseIcon>x</CloseIcon>
      </CloseButton>
      <Content>
        <MovieDetail movie={movie} />
      </Content>
    </Modal>
  );
};

export default MovieModal;
