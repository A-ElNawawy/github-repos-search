import "./Table.css";

const Table = ({ Repos }) => {
  let tableList = Repos?.map((repo) => (
    <tr key={repo.id}>
      <td>{repo.full_name}</td>
      <td>{repo.owner.login}</td>
      <td>{repo.stargazers_count}</td>
      <td>{repo.forks_url}</td>
    </tr>
  ));
  return (
    <table className="Table">
      <thead>
        <tr>
          <th colspan="4" class="TableTitle">
            Results
          </th>
        </tr>
        <tr>
          <th>Repo Name</th>
          <th>Owner</th>
          <th>Stars</th>
          <th>Fork</th>
        </tr>
      </thead>
      <tbody>{tableList}</tbody>
    </table>
  );
};
/*<div>
        <h1>Results</h1>
        table of results:
        <br />
        full name of the repository || owner||, number of stars||, link to the
        fork repository
        <p>Pagination</p>
      </div>*/

export default Table;
