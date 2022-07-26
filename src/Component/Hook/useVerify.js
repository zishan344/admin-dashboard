import { useEffect, useState } from "react";

const useVerify = (user) => {
  const [verify, setVerify] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (user) {
      const email = user?.email;
      fetch(`https://immense-oasis-81446.herokuapp.com/verifyAdmin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setVerify(data?.role);
          setAdminLoading(false);
        });
    }
  }, [user, verify]);

  return [verify, adminLoading];
};

export default useVerify;
