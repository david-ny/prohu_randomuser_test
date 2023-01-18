import React from "react";
import User from "./User";


function UserList(props) {
  const { users } = props;

  return (
    <div className="grid gap-4 grid-cols-5">
      {users?.map((user) => (
        <User key={user?.login?.uuid} user={user} />
      ))}
    </div>
  );
}

export default UserList;
