import React from "react";
import Link from "next/link";
import RemoveUser from "../button/removeUser";

const getUser = async () => {
  try {
    const res = await fetch("https://amuts.vercel.app/api/user", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch User");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading User: ", error);
  }
};

const Userlist = async () => {
  try {
    const { user } = await getUser();
    return (
      <div className="grid md:grid-cols-2 grid-cols-1">
        {user.map((u) => (
          <div
            key={u._id}
            className="md:p-2 p-0 border border-slate-300 md:my-3 my-2 justify-between flex md:gap-5 gap-2 items-center md:mx-4 mx-1 rounded-xl bg-hijau3">
            <div className="md:p-3 p-2 font-semibold md:text-base text-sm">
              <h2>{u.email}</h2>
              <div>{u.password}</div>
            </div>
            <div className="ml-2 p-2">
                <RemoveUser id={u._id} />
              </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching User:", error);
    return <div>Error fetching User</div>;
  }
};

export default Userlist;
