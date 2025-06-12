import PrefetchProvider from "@/app/_providers/prefetch-provider"
import MainLayout from "@/components/main-layout"
import { PRODUCTS } from "@/constants/api-endpoints"
import Users from "./_components"

const Page = () => {
    return (
        <PrefetchProvider endpoint={PRODUCTS}>
            <MainLayout className="mt-10 px-2">
                <Users />
            </MainLayout>
        </PrefetchProvider>
    )
}

export default Page
