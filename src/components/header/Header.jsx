import profile from "../../images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b-2">
      <h1 className="text-2xl font-extrabold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
