import { getCurrentUser, updateProfile } from "../../api/users";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

function Profile() {
  const { data, isLoading } = useQuery("/users/current", getCurrentUser);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries("/users/current");
    },
  });

  const handleProfile = (e) => {
    mutation.mutate(e.target.files[0]);
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
