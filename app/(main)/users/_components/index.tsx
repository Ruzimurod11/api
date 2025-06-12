"use client"

import { USERS } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/react-query/use-get"
import { getArray } from "@/lib/get-array"
import { IUserResponse } from "@/types/products"
import { useState } from "react"
import UserCard from "./user-card"

const LIMIT = 4

const Users = () => {
    const [page, setPage] = useState(1)

    const skip = (page - 1) * LIMIT

    const { data, isLoading, isError } = useGet<IUserResponse>(USERS, {
        params: { limit: LIMIT, skip },
    })

    const list = getArray(data?.users)

    const total = data?.total ?? 0
    const totalPages = Math.ceil(total / LIMIT)

    return (
        <>
            <h2>Users</h2>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading users</p>}

            <div className="flex flex-wrap gap-5 mt-4 md:mt-6 mb-10 rounded-2xl">
                {list.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Users
