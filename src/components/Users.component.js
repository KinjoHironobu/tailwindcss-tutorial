import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const url = 'https://momjooxcjwhd5zz-ogsdb.adb.ap-tokyo-1.oraclecloudapps.com/ords/rest_ogs/test/test';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsers(data.items);
        console.log(data.items);
      })
  }, []);

  const userList = users.map((user, index) => {
    return (
      <li key={index} className="leading-10" >{user.emp_name}</li>
    );
  });

  return (
    <div className="flex shrink-0 p-6 max-w-sm mx-auto bg-slate-50">
      <ul className="list-none">
        {userList}
      </ul>
    </div>
  );
}

export default Users;