import MainLayout from "@/components/main-layout"
import { PRODUCTS } from "@/constants/api-endpoints"
import { getReq } from "@/services/fetch-requests"
import { IProductResponse } from "@/types/products"
import { Suspense } from "react"
import Content from "./content"

export default function ProductsPage() {
    const promise = getReq<IProductResponse>(PRODUCTS)

    return (
        <Suspense>
            <MainLayout className="mt-9 px-4">
                <Content promise={promise} />
            </MainLayout>
        </Suspense>
    )
}
