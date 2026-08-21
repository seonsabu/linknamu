import ThemeToggle from "@/components/ThemeToggle";
import ProfileCard from "@/components/ProfileCard";
import LinkList from "@/components/LinkList";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div className="card">
        <ProfileCard />
        <LinkList />
        <p className="footer-note">링크나무로 만든 페이지입니다</p>
      </div>
    </>
  );
}
