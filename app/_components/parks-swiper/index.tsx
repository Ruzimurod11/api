import { getReq } from "@/services/fetch-requests"
import { Suspense } from "react"
import Content from "./content"
import MainLayout from "@/components/main-layout"
import { PRODUCTS } from "@/constants/api-endpoints"
import { IProductResponse } from "@/types/products"

export default function ProductsPage() {
  const promise = getReq<IProductResponse>(PRODUCTS)

  return (
    <Suspense>
      <MainLayout className="mt-10 py-0 lg:py-0 lg:mt-16">
        <Content promise={promise} />
      </MainLayout>
    </Suspense>
  )
}