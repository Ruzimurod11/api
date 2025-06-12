"use client"

import { setupAxiosInterceptors } from "@/services/axios-instance"
import { getQueryClient } from "@/services/get-query-client"
import { QueryClientProvider } from "@tanstack/react-query"

export default function ReactQueryProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const queryClient = getQueryClient()
    setupAxiosInterceptors({ queryClient })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
