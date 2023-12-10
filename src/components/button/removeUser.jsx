"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeUser = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`https://amuts-3n8aq1hus-muhammad-ariq-hawari-adiputras-projects.vercel.app/api/user?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeUser} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}