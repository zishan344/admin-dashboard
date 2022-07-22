import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const currentUser = user?.user?.email;
    if (user) {
      fetch(`http://localhost:5000/user/${currentUser}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUser,
          name: user?.user?.displayName,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    console.log(token);
  }, [user, token]);
  return [token];
};
export default useToken;
