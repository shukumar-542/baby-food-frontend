import { product } from '@/type/product'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Product {
    _id: string,
    productName: string,
    price: number,
    category: string,
    description: string,
    creationTime: string,
    image: string,
    rating: number,
    flashSale: boolean,
    discount: number,
    quantity: number
}
interface CartState {
    products: Product[];
    selectedItem: number,
    totalPrice: number,
    tax: number,
    taxRate: number
    grandTotal: number

}



const initialState: CartState = {
    products: [],
    selectedItem: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.1,
    grandTotal: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const isExist = state.products.find(product => product._id === action.payload._id)
            if (!isExist) {

                state.products.push({ ...action.payload, quantity: 1 })
            }

            // state.selectedItems = selectSelectedItems(state)
            state.totalPrice = selectTotalPrice(state)
            state.tax = selectTax(state)
            state.grandTotal = selectGrandTotal(state)


        },
        updateProductQuantity: (state, action) => {
            const products = state.products.map(product => {
                if (product?._id === action?.payload.id) {
                    if (action?.payload?.type === 'increment') {
                        product.quantity += 1
                    } else if (action?.payload?.type === 'decrement') {
                        if (product?.quantity > 1) {

                            product.quantity -= 1
                        }
                    }
                }
                return product
            })
            state.totalPrice = selectTotalPrice(state)
            state.tax = selectTax(state)
            state.grandTotal = selectGrandTotal(state)
        },
        removedFormCart: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload.id)
            state.totalPrice = selectTotalPrice(state)
            state.tax = selectTax(state)
            state.grandTotal = selectGrandTotal(state)
        }
    }
})









export const selectSelectedItems = (state: any) =>
    state.products.reduce((total: number, product: any) => {
        return Number(total + product.quantity);
    }, 0);




export const selectTotalPrice = (state: any) =>
    state.products.reduce((total: number, product: any) => {
        return Number(total + product.quantity * product.price);
    }, 0);



export const selectTax = (state: any) => selectTotalPrice(state) * state.taxRate


export const selectGrandTotal = (state: any) => {
    return selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate
}



export const { addToCart, updateProductQuantity, removedFormCart } = cartSlice.actions
export default cartSlice.reducer