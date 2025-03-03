"use client";

import { addProduct } from "@/actions/add-product-action";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddProductForm({ children }: { children: React.ReactNode }) {

    const router = useRouter()
    const [ state, dispatch ] = useActionState(addProduct, { 
        errors: [], 
        success: '' 
    })

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error =>   toast.error(error))              
        }
        if(state.success){
            toast.success(state.success)
            router.push('/admin/products')
        }
    }, [state, router])

    return (
        <form
            className="space-y-4"
            action={dispatch}
        >

            {children}


            <input
                type="submit"
                className="rounded-md bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 w-full cursor-pointer"
                value="Agregar producto"
            />
        </form>
    )
}
