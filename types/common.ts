import { WeekdayId } from "@/constants/date"

export interface IPaginatedResponse<T> {
    count: number
    previous: string | null
    next: string | null
    results: T[]
}

export interface Rating {
    avr: number
    count: number
}

export interface RatingDistribution {
    1: number
    2: number
    3: number
    4: number
    5: number
}

export type DetailedRating = Rating & { distribution: RatingDistribution }
export interface WorkingHour {
    open: string | null
    close: string | null
    is_closed: boolean
}

export type WorkingHours = Record<WeekdayId, WorkingHour>

export type OptionIdNumber = {
    name: string
    id: number
}
export type OptionIdString = {
    name: string
    id: string
}
