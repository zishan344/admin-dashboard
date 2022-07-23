import React from "react";

const TotalSingleUse = ({ user, index, refetch }) => {
  const { email, role, name } = user;
  const makeAdmin = (email) => {
    const confirm = window.confirm("Are you sure you want to make admin");
    if (!confirm) {
      return;
    }
    fetch(`http://localhost:5000/users/makeAdmin/${email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  const makeModerator = (email) => {
    const confirm = window.confirm("Are you sure you want to make admin");
    if (!confirm) {
      return;
    }
    fetch(`http://localhost:5000/users/makeModerator/${email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <span className="mr-2">{role ? role : "user"}</span>
        <button
          className="btn btn-xs mr-2"
          disabled={role == "Admin"}
          onClick={() => makeAdmin(email)}
        >
          Make Admin
        </button>
        <button
          className="btn btn-xs"
          onClick={() => makeModerator(email)}
          disabled={role == "Moderator"}
        >
          Make Moderator
        </button>
      </td>
    </tr>
  );
};

export default TotalSingleUse;
