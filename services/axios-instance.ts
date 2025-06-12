import { baseURL } from "@/constants/base-url"
import { QueryClient } from "@tanstack/react-query"
import axios from "axios"
import qs from "qs"

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    formSerializer: {
        indexes: null,
    },
    paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "comma" })
    },
    withCredentials: false,
})

/*
the extension 'GitHub Copilot' wants to sign in using Github
To get more relevant Copilot Chat results, we need permission to read the contents of your repository on GitHub.
*/

export function setupAxiosInterceptors(_args: { queryClient: QueryClient }) {
    // Add a request interceptor
    axiosInstance.interceptors.request.use(
        function (config) {
            // const access = TokenService.getLocalAccessToken()
            // if (access) {
            //     config.headers.Authorization = `Bearer ${access}`
            // }
            return config
        },
        function (error) {
            return Promise.reject(error)
        },
    )

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
        function (response) {
            return response
        },
        async function (error) {
            // const originalRequest = error.config
            // const status = error.response?.status

            // if (status === 401 && !originalRequest._retry) {
            //     originalRequest._retry = true
            //     try {
            //         const refresh = TokenService.getLocalRefreshToken()
            //         if (refresh) {
            //             const refreshResponse = await axios.post(
            //                 `${baseURL}${REFRESH_TOKEN}/`,
            //                 {
            //                     refresh,
            //                 },
            //             )
            //             const access: string = refreshResponse?.data?.access
            //             if (access) {
            //                 TokenService.setTokens({ accessToken: access })
            //                 // Retry the original request
            //                 originalRequest.headers.Authorization = `Bearer ${access}`
            //                 return axiosInstance(originalRequest)
            //             }
            //         } else {
            //             TokenService.removeTokens()
            //             const profileData = queryClient.getQueryData([PROFILE])
            //             if (profileData) {
            //                 queryClient.resetQueries()
            //             }
            //         }
            //     } catch (refreshError) {
            //         // location.href = "/sign-in"
            //         TokenService.removeTokens()
            //         location.reload()

            //         return Promise.reject(refreshError)
            //     }
            // }

            // if (status === 403) {
            //     // if (!originalRequest._403retry) {
            //     //     originalRequest._403retry = true
            //     //     // Invalidate and wait for refetch to complete
            //     //     await queryClient.invalidateQueries({
            //     //         queryKey: [GET_ME],
            //     //     })
            //     //     // Wait a small delay to ensure the query is refetched
            //     //     await new Promise((resolve) => setTimeout(resolve, 100))
            //     //     return axiosInstance(originalRequest)
            //     // }
            // }
            return Promise.reject(error)
        },
    )
}

export default axiosInstance
