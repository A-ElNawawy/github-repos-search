import "./WelcomePage.css";
import SearchBar from "./../SearchBar/SearchBar";

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
      {/*<div>*/}
      <h2>Welcome to GitHub Search App</h2>
      <SearchBar />
      {/*</div>*/}
    </div>
  );
};

export default WelcomePage;
