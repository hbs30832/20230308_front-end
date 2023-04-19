import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { auth, storage } from "../firebase";

function Profile() {
  // 쿼리 파라미터로 전달된 ref값 가져오기
  const [searchParams] = useSearchParams();
  const [profileUrl, setProfileUrl] = useState("");

  const name = searchParams.get("name");

  useEffect(() => {
    const fetchProfile = async () => {
      // 파일 참조값을 생성한다.
      const imageRef = ref(storage, `profile/${name}`);
      const url = await getDownloadURL(imageRef);
      setProfileUrl(url);
    };

    fetchProfile();
  }, [name]);
  return (
    <div>
      <h1>프로필</h1>
      <img src={profileUrl} alt="" style={{ width: 500 }} />
    </div>
  );
}

export default Profile;
