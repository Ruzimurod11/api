// import { WeekdayId } from "@/constants/date"
// import { DetailedRating, Rating, WorkingHours } from "../common"

// export interface IPark {
//     id: string
//     name: string
//     description: string
//     entrance_fee: string
//     is_free: boolean
//     is_active: boolean
//     address: {
//         address: string
//         latitude: number
//         longitude: number
//     }
//     rating: Rating
//     main_image: string
//     not_active_reason: string
//     working_days: {
//         close_day: WeekdayId
//         open_day: WeekdayId
//     }
// }

// // export interface IParkDetail
// //     extends Omit<IPark, "main_image" | "working_days"> {
// //     area_width: number
// //     capacity: number
// //     images: Array<{
// //         is_main: boolean
// //         url: string
// //         // id: string
// //         // image: string
// //     }>
// //     video_cover: string | null
// //     working_hours: WorkingHours | null
// //     rating: DetailedRating
// // }

// export interface IParkComment {
//     id: string
//     images: { url: string }[]
//     user: {
//         fullname: string | null
//         avatar: string | null
//     }
//     attraction: {
//         id: string
//         name: string
//     }
//     created_at: string
//     updated_at: string
//     content: string
//     rate: number
//     status: "active" | "rejected" | "pending"
//     is_anonim: boolean
// }

// my types
export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export interface IProductResponse {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}

export interface IProductDetail {
    id: number
    title: string
    price: number
    images: string[]
}
