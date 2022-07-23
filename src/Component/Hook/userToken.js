import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState(false);
  console.log(user?.user?.displayName);
  useEffect(() => {
    const currentUser = user?.user?.email;
    if (user) {
      fetch(`http://localhost:5000/user/${currentUser}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Berar ${currentUser}`,
        },
        body: JSON.stringify({
          email: currentUser,
          name: user?.user?.displayName,
          role: "User",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, token]);
  return [token];
};
export default useToken;
