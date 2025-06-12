"use server"
import { baseURL } from "@/constants/base-url"
import { revalidateTag } from "next/cache"

export type QueryParams = Record<string, string | number | boolean | undefined>

export interface FetcherOptions<D, P = unknown> extends RequestInit {
    params?: QueryParams
    headers?: HeadersInit
    toastOnError?: boolean
    onSuccess?: (data: D) => void
    onError?: (message: string) => void
    payload?: P
    revalidateTags?: string[]
}

// Asosiy so‘rov funksiyasi
async function request<D>(
    endpoint: string,
    {
        params,
        headers,
        toastOnError,
        onError,
        onSuccess,
        payload,
        revalidateTags,
        ...options
    }: FetcherOptions<D>,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
): Promise<D> {
    const filteredQuery = Object.fromEntries(
        Object.entries(params || {}).filter(([_, v]) => v !== undefined),
    )

    const queryString = new URLSearchParams(
        filteredQuery as Record<string, string>,
    ).toString()
    const url = `${baseURL}/${endpoint}`
    const finalUrl = queryString ? `${url}?${queryString}` : url

    const res = await fetch(finalUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(headers || {}),
        },
        body: payload ? JSON.stringify(payload) : undefined,
        ...options,
    })

    if (res.status === 401) {
        return {} as D
    }

    let responseData
    try {
        responseData = await res.json()
    } catch {
        try {
            const text = await res.text()
            responseData = { message: text } as D
        } catch {
            responseData = {} as D
        }
    }

    if (!res.ok) {
        const message = responseData?.message || `Error ${res.status}`
        onError?.(message)
        return {} as D
    }

    onSuccess?.(responseData)
    if (revalidateTags) {
        revalidateTags.forEach((tag) => {
            revalidateTag(tag)
        })
    }
    return responseData
}

// GET
export async function getReq<T>(
    url: string,
    options: FetcherOptions<T> = {},
): Promise<T> {
    return request<T>(
        url,
        {
            next: {
                tags: [url],
            },
            ...options,
        },
        "GET",
    )
}

// POST
export async function post<P = unknown, D = unknown>(
    url: string,
    payload: P,
    options: FetcherOptions<D> = {},
): Promise<D> {
    return request<D>(url, { toastOnError: true, ...options, payload }, "POST")
}

// PUT
export async function put<P = unknown, D = unknown>(
    url: string,
    payload: P,
    options: FetcherOptions<D> = {},
): Promise<D> {
    return request<D>(url, { toastOnError: true, ...options, payload }, "PUT")
}

// PATCH
export async function patch<P = unknown, D = unknown>(
    url: string,
    payload: P,
    options: FetcherOptions<D> = {},
): Promise<D> {
    return request<D>(url, { toastOnError: true, ...options, payload }, "PATCH")
}

// DELETE
export async function del<T>(
    url: string,
    options: FetcherOptions<T> = {},
): Promise<T> {
    return request<T>(url, { toastOnError: true, ...options }, "DELETE")
}
