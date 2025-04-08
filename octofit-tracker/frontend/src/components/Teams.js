import React, { useEffect, useState } from "react";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Teams</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.members.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
