import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";
import TotalSingleUse from "./TotalSingleUse";

const TotalUser = () => {
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

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TotalSingleUse
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalUser;
