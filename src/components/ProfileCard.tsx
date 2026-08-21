import AvatarUpload from "./AvatarUpload";

export default function ProfileCard() {
  return (
    <>
      <AvatarUpload />
      <h1 className="name">김선배</h1>
      <p className="intro">
        부동산법률,중개:프랜차이즈법률,중개:소상공인컨설팅
      </p>
    </>
  );
}
