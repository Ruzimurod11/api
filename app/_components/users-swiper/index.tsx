import MainLayout from "@/components/main-layout"
import { USERS } from "@/constants/api-endpoints"
import { getReq } from "@/services/fetch-requests"
import { IUserResponse } from "@/types/products"
import { Suspense } from "react"
import Content from "./content"

export default function UsersPage() {
    const promise = getReq<IUserResponse>(USERS)

    return (
        <Suspense>
            <MainLayout className="mt-9 px-4">
                <Content promise={promise} />
            </MainLayout>
        </Suspense>
    )
}
