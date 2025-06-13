import MainLayout from "@/components/main-layout"
import { USERS } from "@/constants/api-endpoints"
import { getReq } from "@/services/fetch-requests"
import { IPaginatedUserResponse } from "@/types/common"
import { IUser } from "@/types/products"
import { Suspense } from "react"
import Content from "./content"

export default function UsersSwiper() {
    const promise = getReq<IPaginatedUserResponse<IUser>>(USERS)

    return (
        <Suspense>
            <MainLayout className="mt-9 px-4">
                <Content promise={promise} />
            </MainLayout>
        </Suspense>
    )
}
