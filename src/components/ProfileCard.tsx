import AvatarUpload from "./AvatarUpload";

export default function ProfileCard() {
  return (
    <>
      <AvatarUpload />
      <h1 className="name">김크리</h1>
      <p className="intro">
        그림 그리고 브랜딩하는 프리랜서 디자이너입니다. 작업 문의는 이메일로 주세요.
      </p>
    </>
  );
}
