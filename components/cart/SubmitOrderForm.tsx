import { submitOrder } from '@/actions/submit-order-action'
import React, { useActionState, useEffect } from 'react'
import { useStore } from "@/src/store"
import { toast } from 'react-toastify'
import { error } from 'console'

export default function SubmitOrderForm() {

    const total = useStore(state => state.total)
    const coupon = useStore(state => state.coupon.name)
    const contents = useStore(state => state.contents)
    const clearOrder = useStore(state => state.clearOrder)

    const order = {
        total,
        coupon,
        contents
    }

    const submitOrderWithData = submitOrder.bind(null, order)

    const [state, dispatch] = useActionState(submitOrderWithData, {
        errors: [],
        success: ""
    })


    useEffect(() => {
        if(state.errors) {
            state.errors.forEach(error => toast.error(error))
        }
        if(state.success) {
            toast.success(state.success)
            clearOrder()
        }
    }, [state])

    useActionState(submitOrder,{
        errors: [],
        success: "",
    })
  return (
    <form
        action={dispatch}
        
    >

        <input
            type='submit'
            className="mt-5 2-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Confirmar Compra"
        >
        
        </input>
    </form>
  )
}
