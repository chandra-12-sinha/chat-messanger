// import reat from 'reat'

import UserAvatar from "./UserAvatar";

function User() {
  return (
    <div>
      <h1 className="px-6 py-2 text-white font-semibold bg-slate-800 rounded-md">
        message
      </h1>
      <div className=" flex-1 overflow-y-auto " style={{ maxheight: "calc(92vh)" }}>
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
      </div>
    </div>
  );
}

export default User;
