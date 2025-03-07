"use client";


import { updateProduct } from "@/actions/update-product-action";
import { useParams, useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";



export default function EditProductForm({ children }: { children: React.ReactNode }) {


    const router = useRouter()
    const {id} = useParams<{id: string}>()
    
    const updateProductWithId = updateProduct.bind(null, +id)

    const [ state, dispatch ] = useActionState(updateProductWithId, {
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
                value="Guardar cambios"
            />
        </form>
    )
}
