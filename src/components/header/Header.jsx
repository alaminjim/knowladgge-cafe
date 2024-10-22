import profile from "../../images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 mx-5 border-b-2">
      <h1 className="text-2xl font-extrabold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
