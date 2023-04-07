import styled from "styled-components";

function Poster({ data }) {
  console.log(data);
  const { title, release_date, poster_path, name, first_air_date } = data;

  const src = "https://image.tmdb.org/t/p/w154/" + poster_path;

  return (
    <Container>
      <ImgBox>
        <img src={src} alt="" />
      </ImgBox>
      <TitleBox>
        <span>{release_date || first_air_date}</span>
        <h4>{title || name}</h4>
      </TitleBox>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;

  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);
`;

const ImgBox = styled.div``;

const TitleBox = styled.div`
  height: 70px;
  padding: 0 10px;
  span {
    font-size: 14px;
  }
`;

export default Poster;
