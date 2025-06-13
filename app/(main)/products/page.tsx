"use client"

import PrefetchProvider from "@/app/_providers/prefetch-provider"
import MainLayout from "@/components/main-layout"
import { PRODUCTS } from "@/constants/api-endpoints"
import Products from "./_components"

const Page = () => {
    return (
        <PrefetchProvider endpoint={PRODUCTS}>
            <MainLayout className="mt-10 py-0">
                <Products />
            </MainLayout>
        </PrefetchProvider>
    )
}

export default Page
