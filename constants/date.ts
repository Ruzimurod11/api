export const SERVER_DATE_FORMAT = "yyyy-MM-dd"
export const FROM_KEY = "created_at__gte"
export const TO_KEY = "created_at__lte"

export enum WeekdayId {
    Monday = "1",
    Tuesday = "2",
    Wednesday = "3",
    Thursday = "4",
    Friday = "5",
    Saturday = "6",
    Sunday = "7",
}

export enum WeekdayName {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export const WEEKDAY_NAMES: Record<WeekdayId, WeekdayName> = {
    [WeekdayId.Monday]: WeekdayName.Monday,
    [WeekdayId.Tuesday]: WeekdayName.Tuesday,
    [WeekdayId.Wednesday]: WeekdayName.Wednesday,
    [WeekdayId.Thursday]: WeekdayName.Thursday,
    [WeekdayId.Friday]: WeekdayName.Friday,
    [WeekdayId.Saturday]: WeekdayName.Saturday,
    [WeekdayId.Sunday]: WeekdayName.Sunday,
}

export interface Weekday {
    id: WeekdayId
    name: WeekdayName
}

export const WEEKDAYS: Weekday[] = Object.entries(WEEKDAY_NAMES).map(
    ([id, name]) => ({
        id: id as WeekdayId,
        name,
    }),
)
