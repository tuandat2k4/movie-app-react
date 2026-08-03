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
`;
const MovieModal = ({ movie, setSelectedMovie }) => {
  return (
    <Modal onClick={() => setSelectedMovie(null)}>
      <Content>
        <MovieDetail movie={movie} setSelectedMovie={setSelectedMovie} />
      </Content>
    </Modal>
  );
};

export default MovieModal;
