import PrefetchProvider from "@/app/_providers/prefetch-provider"
import { PRODUCTS } from "@/constants/api-endpoints"
import MainLayout from "@/components/main-layout"
import Products from "./_components"

const Page = () => {
    return (
        <PrefetchProvider endpoint={PRODUCTS}>
            <MainLayout className="mt-26 py-0">
                <Products />
            </MainLayout>
        </PrefetchProvider>
    )
}

export default Page
