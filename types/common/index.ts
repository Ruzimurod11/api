export interface IPaginatedResponse<T> {
    limit: number
    skip: number
    total: number | null
    products: T[]
}
