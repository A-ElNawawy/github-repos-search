import "./WelcomePage.css";
import SearchBar from "./../SearchBar/SearchBar";

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
      <h2>Welcome to GitHub Search App</h2>
      <SearchBar />
    </div>
  );
};

export default WelcomePage;
