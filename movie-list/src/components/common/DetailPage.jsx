import { useLocation } from "react-router-dom";
import { tmdbAxios } from "../../api/tmdbAxios";
import { useEffect, useState } from "react";
import styled from "styled-components";

// src/coponents/movie/MovieDetail.jsx

function MovieDetail() {
  const { pathname } = useLocation();

  const [movie, setMovie] = useState({});

  const {
    poster_path,
    title,
    overview,
    release_date,
    backdrop_path,
    name,
    first_air_date,
  } = movie;

  const date = release_date ?? first_air_date;

  const year = date?.slice(0, 4);

  const src = "https://image.tmdb.org/t/p/w300/" + poster_path;

  const backdropUrl = "https://image.tmdb.org/t/p/w500/" + backdrop_path;
  console.log(movie);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await tmdbAxios.get(pathname, {});

      setMovie(data);
    };

    fetchData();
  }, [pathname]);

  return (
    <Container url={backdropUrl}>
      <ImgBox>
        <img src={src} alt={title} />
      </ImgBox>
      <DescBox>
        <h3>
          {title ?? name}
          <span>({year})</span>
        </h3>
        <p>{overview}</p>
      </DescBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px 50px;
  border-radius: 6px;

  background: center / cover no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  background-image: url(${({ url }) => url});
  color: #fff;
`;

const ImgBox = styled.div`
  img {
    width: 250px;
  }
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export default MovieDetail;
