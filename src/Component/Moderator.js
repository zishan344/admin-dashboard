import React from "react";
import { useQuery } from "react-query";

const Moderator = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/user")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery(["repoData"], () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  const moderator = users.filter((user) => user?.role == "Moderator");
  const removeRole = (email) => {
    const confirm = window.confirm("Are you sure you want to remove moderator");
    if (!confirm) {
      return;
    }
    fetch(`http://localhost:5000/users/removeRole/${email}`, {
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
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {moderator.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>
                {" "}
                <button
                  className="btn btn-xs"
                  onClick={() => removeRole(user?.email)}
                >
                  Remove Moderator
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Moderator;
