import { Link } from "react-router-dom";
import styled from "styled-components";

function Poster({ data }) {
  const {
    id,
    title,
    release_date,
    poster_path,
    name,
    first_air_date,
    media_type,
    profile_path,
  } = data;

  console.log(data);

  const src =
    "https://image.tmdb.org/t/p/w154/" + (poster_path ?? profile_path);

  // release_date가 있으면 movie, first_air_date 가 있으면 tv,  둘다 없으면 person => 삼항연산자 중첩
  const to = release_date ? "movie" : first_air_date ? "tv" : "person";

  return (
    <Container>
      <Link to={`/${to}/${id}`}>
        <ImgBox>
          <img src={src} alt="" />
        </ImgBox>
        <TitleBox>
          <span>{release_date || first_air_date}</span>
          <h4>{title || name}</h4>
        </TitleBox>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;

  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  overflow: hidden;
`;

const TitleBox = styled.div`
  height: 70px;
  padding: 0 10px;
  span {
    font-size: 14px;
  }
`;

export default Poster;
