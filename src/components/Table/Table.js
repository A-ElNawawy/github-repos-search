import "./Table.css";

const Table = ({ Repos }) => {
  let tableList = Repos?.map((repo) => (
    <tr key={repo.id}>
      <td>{repo.full_name}</td>
      <td>{repo.owner.login}</td>
      <td>{repo.stargazers_count}</td>
      <td>
        <a href={repo.forks_url}>Forks</a>
      </td>
    </tr>
  ));
  return (
    <>
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
    </>
  );
};

export default Table;
