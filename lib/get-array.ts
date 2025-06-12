export function getArray<T>(val: T[] | undefined | null): T[] {
    return Array.isArray(val) ? val : []
}
