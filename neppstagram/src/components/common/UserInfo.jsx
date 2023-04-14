import styled from "styled-components";

function UserInfo({ user }) {
  return (
    <Container>
      <ImageCircle profile_url={user.profile_url} />
      <p>{user.name}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
`;

const ImageCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: center / cover no-repeat;
  background-image: url(${({ profile_url }) => profile_url});
`;

export default UserInfo;
