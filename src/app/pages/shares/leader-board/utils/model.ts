export type WeekType = "I" | "II" | "III" | "IV";

export interface LeaderboardItem {
    customerId: number;
    loginName: string;
    place: number;
    week: WeekType;
}

export type FilterType = WeekType | "All";
