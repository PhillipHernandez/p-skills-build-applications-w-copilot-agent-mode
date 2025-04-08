import React, { useEffect, useState } from "react";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/workouts")
      .then((response) => response.json())
      .then((data) => setWorkouts(data));
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Workouts</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
              <td>{workout.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
