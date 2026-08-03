import theme from "@/styles/theme";
import styled from "styled-components";

const DetailGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;
const DetailGenre = styled.span`
  border-radius: 5px;
  outline: none;
  background: #221F3D;
  padding: 8px 18px;
  font-size: 14px;
  line-height: 1.5;
`;
const DetailGenreLink = styled.a`
  margin-left: auto;
  border-radius: 8px;
  background: ${theme.colors.primary};
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background: ${theme.colors.purple};
  }
`;
const DetailMovie = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  margin-top: 10px;
  row-gap: 32px;
`;
const DetailLabel = styled.span`
  color: ${theme.colors.textInfoMovie};
`;
const DetailArray = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Group = styled.span`
  border-radius: 4px;
`;
const DetailText = styled.span`
  color: ${theme.colors.purple};
`;

const InfoSection = ({ movie }) => {
  return (
    <DetailMovie>
      <DetailLabel>Genres</DetailLabel>
      <DetailGenres>
        {movie.genres.map((genre) => (
          <DetailGenre key={genre}>{genre}</DetailGenre>
        ))}
        <DetailGenreLink href="#">Visit Homepage →</DetailGenreLink>
      </DetailGenres>

      <DetailLabel>Overview</DetailLabel>
      <DetailText>{movie.overview}</DetailText>
      <DetailLabel>Release Date</DetailLabel>
      <DetailText>{movie.releaseDate}</DetailText>
      <DetailLabel>Countries</DetailLabel>

      <DetailArray>
        {movie.countries.map((country) => (
          <Group key={country}>
            <DetailText>{country}</DetailText>
          </Group>
        ))}
      </DetailArray>

      <DetailLabel>Status</DetailLabel>
      <DetailText>{movie.status}</DetailText>

      <DetailLabel>Language</DetailLabel>
      <DetailArray>
        {movie.languages.map((lang, index) => (
          <Group key={`${lang}-${index}`}>
            <DetailText>{lang}</DetailText>
          </Group>
        ))}
      </DetailArray>

      <DetailLabel>Budget</DetailLabel>
      <DetailText>{movie.budget}</DetailText>

      <DetailLabel>Revenue</DetailLabel>
      <DetailText>{movie.revenue}</DetailText>

      <DetailLabel>Tagline</DetailLabel>
      <DetailText>{movie.tagline}</DetailText>

      <DetailLabel>Production Companies</DetailLabel>
      <DetailArray>
        {movie.production.map((company) => (
          <Group key={company}>
            <DetailText>{company}</DetailText>
          </Group>
        ))}
      </DetailArray>
    </DetailMovie>
  );
};

export default InfoSection;
