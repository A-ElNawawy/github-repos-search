import { useState, useEffect } from "react";

import SearchContext from "./../context/SearchContext";

import WelcomePage from "./../components/WelcomePage/WelcomePage";
import Table from "./../components/Table/Table";
import Overlay from "./../UI/Overlay/Overlay";
import Container from "./../UI/Container/Container";

import { getData } from "./../functions/functions";

const App = () => {
  const [SearchField, setSearchField] = useState("");
  const [Repos, setRepos] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleSearchButton = (repoName) => {
    setLoading(true);
    getData(repoName)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.items);
        setLoading(false);
      });
  };
  console.log(Repos);
  return (
    <div className="App">
      {Loading && <Overlay>Loading ...</Overlay>}
      <SearchContext.Provider
        value={{ SearchField, setSearchField, handleSearchButton }}
      >
      <Container>

        <WelcomePage />
        {
          Repos &&
        <Table Repos={Repos}/>
        }
      </Container>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
