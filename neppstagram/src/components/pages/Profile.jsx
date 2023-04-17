import { getCurrentUser, updateProfile } from "../../api/users";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../../state/auth";

function Profile() {
  const { data, isLoading } = useQuery("/users/current", getCurrentUser);
  const queryClient = useQueryClient();
  const setToken = useSetRecoilState(tokenState);

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      // 해당 키값을 사용하는 모든 컴포넌트에서 상태가 stale하다고 판단되면 refetch
      queryClient.invalidateQueries("/users/current");
    },
  });

  const handleProfile = (e) => {
    mutation.mutate(e.target.files[0]);
  };

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    setToken(null);
  };

  if (isLoading) return;
  return (
    <Container>
      <label>
        <ImageBox profile_url={data.profile_url} />
        <input
          type="file"
          onChange={handleProfile}
          accept="image/*"
          style={{ display: "none" }}
        />
      </label>

      <h3>{data.name}</h3>

      <button onClick={handleLogout}>로그아웃</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background: center/cover no-repeat;
  background-image: url(${({ profile_url }) => profile_url});
`;

export default Profile;
