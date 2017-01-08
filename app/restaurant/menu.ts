export interface IMenu {
    restId: number,
    menuItems: IMenuItem[]
}

export interface IMenuItem {
    id: number,
    title: string,
    description: string,
    price: number,
    isOrdered: boolean,
    amount: number,
    quantity: number
}