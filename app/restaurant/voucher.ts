export interface IRestaurantVoucher {
    restId: number,
    vouchers: IVoucher[]
}

export interface IVoucher {
    code: string,
    startDate: Date,
    endDate: Date,
    discount: number
}