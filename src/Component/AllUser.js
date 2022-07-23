import React from "react";
import { useQuery } from "react-query";

const AllUser = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://immense-oasis-81446.herokuapp.com/user")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  const {
    isLoading,
    error,
    data: users,
  } = useQuery(["repoData"], () =>
    fetch("https://immense-oasis-81446.herokuapp.com/user").then((res) =>
      res.json()
    )
  );
  console.log(users);
  if (isLoading) return "Loading...";
  const normal = users.filter(
    (user) => user?.role != "Admin" && user?.role != "Moderator"
  );
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
          {normal.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role ? user?.role : "User"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
