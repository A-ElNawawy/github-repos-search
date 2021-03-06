/*
 ** getData Function to Fetch Data From github [ Accepts Parameters]
 ** Parameters:
 ** repoName = The repo name that will be searched
 */
async function getData(repoName) {
  let api =
    "https://api.github.com/search/repositories?q=" +
    repoName +
    "&sort=stars&order=desc";

  return await fetch(api);
}

export { getData };
