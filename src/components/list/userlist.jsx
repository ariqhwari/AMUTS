import React from 'react'
import Link from 'next/link';
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

            <div className='grid grid-cols-2 md:grid-cols-1' >
                {user.map((u) => (
                    <div
                        key={u._id}
                        className="p-4 border border-slate-300 my-3 justify-between flex gap-5 items-center mx-4"
                    >
                        <div>
                            <h2 className="font-bold text-xl">{u.email}</h2>
                            <div>{u.password}</div>
                        </div>

                        <div className="">
                            <RemoveUser id={u._id} />
                        </div>
                    </div>
                ))}
            </div>
        )

    } catch (error) {
        console.error("Error fetching User:", error);
        return <div>Error fetching User</div>;
    }

}

export default Userlist