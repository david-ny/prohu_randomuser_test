import React from "react";
import clsx from 'clsx';
function User(props) {

  const { user } = props;
  const { picture, gender, name, location } = user;
  const { postcode } = location;

  return (
    <div className="flex h-64 flex-col bg-white px-8 py-6 align-middle text-zinc-600 drop-shadow-2xl">
      <img
        src={picture?.large}
        title={`${name.first} ${name.last}`}
        className="m-4 h-24 w-24 self-center rounded-full"
      />
      <div
        className={clsx(
          gender === "male" ? "text-blue-400" : "text-pink-400",
          "font-semibold pt-2"
        )}
      >
        {name.first} {name.last}
      </div>
      <div className="text-gray-500">{postcode}</div>
    </div>
  );
}

export default User;
