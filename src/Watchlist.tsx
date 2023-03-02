import styled from "styled-components";
import SearchResultCard from "./SearchedMovieCard";

export default function WatchList() {
  return (
    <Wrapper>
      <h1>Watchlist goes here</h1>
      <MoviesWrapper>hej</MoviesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #14213d;
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 3rem;
`;
