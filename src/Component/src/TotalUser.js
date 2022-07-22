import React, { useEffect, useState } from "react";
import TotalSingleUse from "./TotalSingleUse";

const TotalUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
              <TotalSingleUse key={user._id} user={user} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalUser;
