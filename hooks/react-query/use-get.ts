/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequest } from "@/services/default-requests"
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"

type ICustomUseQueryOptions<TQueryFnData, TError, TData> = Partial<
    UseQueryOptions<TQueryFnData, TError, TData>
>

export type UseGetArgs<TData, TQueryFnData = unknown, TError = any> = {
    deps?: QueryKey
    options?: ICustomUseQueryOptions<TQueryFnData, TError, TData>
    config?: Omit<AxiosRequestConfig, "params">
    params?: Record<string, unknown>
}

export const useGet = <TData, TQueryFnData = unknown, TError = any>(
    url: string,
    args?: UseGetArgs<TData, TQueryFnData, TError>,
) => {
    const { deps, config, options, params } = args || {}

    return useQuery<TQueryFnData, TError, TData>({
        queryKey: (() => {
            const paramValues = Object.values(params || {})
            const hasParams = paramValues.length > 0

            if (deps) {
                return hasParams
                    ? [url, ...deps, ...paramValues]
                    : [url, ...deps]
            }

            return hasParams ? [url, ...paramValues] : [url]
        })(),
        queryFn: async () => {
            return getRequest(url, {
                ...config,
                params: { ...params },
            })
        },
        ...(options || {}),
    })
}
