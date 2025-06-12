
import { PRODUCTS } from "@/constants/api-endpoints"
import PrefetchProvider from "./prefetch-provider"
import ReactQueryProvider from "./react-query"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <PrefetchProvider endpoint={PRODUCTS}>
                {children}
            </PrefetchProvider>
        </ReactQueryProvider>
    )
}
