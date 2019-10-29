export const Coins : ReadonlyArray<Coin> = [
    {name: "Euro", denomination: 100},
    {name: "Fifty cents", denomination: 50},
    {name: "Twenty cents", denomination: 20},
    {name: "Ten cents", denomination: 10},
    {name: "Five cents", denomination: 5},
    {name: "Two cents", denomination: 2},
    {name: "One cent", denomination: 1}
]

export interface Coin {
    name: string,
    denomination: number
}