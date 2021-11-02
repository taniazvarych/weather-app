export interface Weather {
    dt: number
    temp: { day: number }
    weather: {icon: string}[]
}