import React, { useEffect, useState } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Activities</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
