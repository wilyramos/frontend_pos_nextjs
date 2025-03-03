"use client"

import { useStore } from "@/src/store"
import ShoppingCartItem from "./ShoppingCartItem"
import Amount from "./Amount"
import CouponForm from "./CouponForm"
import SubmitOrderForm from "./SubmitOrderForm"

export default function ShoppingCart() {

    const contents = useStore(state => state.contents)
    const total = useStore(state => state.total)
    const discount = useStore(state => state.discount)

    return (
        <>
            {
                contents.length ? (
                    <>
                        <h2 className="text-4xl font-bold">Resumen de venta</h2>

                        <ul role="list" className="mt-6 divide-y divide-gray-200 border-t">
                            {contents.map(item => (
                                <ShoppingCartItem
                                    key={item.productId}
                                    item={item}

                                />
                            ))}
                        </ul>

                        <dl className="space-y-6 border-t border-gray-300 py-6 text-sm font-semibold text-gray-500">
                            { discount ? (
                                <Amount
                                    label="Descuento"
                                    amount={discount}
                                    discount={true}
                                />
                            ) : null }
                            
                                
                            <Amount
                                label="Total a pagar"
                                amount={total}
                            />
                        </dl>

                        <CouponForm />
                        <SubmitOrderForm />
                    </>
                ) : (
                    <p>Carrito vacío</p>
                )
            }
        </>
    )
}
