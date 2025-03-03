"use server"

import { ErrorResponseSchema, ProductFormSchema, Product } from "@/src/schemas"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function updateProduct(productId: Product['id'], prevState: ActionStateType, formData: FormData)
{

    const product = ProductFormSchema.safeParse({

        name: formData.get('name') as string,
        price: +formData.get('price')!,
        image: formData.get('image'),
        inventory: +formData.get('inventory')!,
        categoryId: +formData.get('categoryId')!
    })

    if(!product.success){
        return {
            errors: product.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // Save product to database

    const url = `${process.env.API_URL}/products/${productId}`
    const req = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product.data)
    })

    const json = await req.json()
    if(!req.ok){
        const errors = ErrorResponseSchema.parse(json)
        return {
            errors: errors.message.map(message => message),
            success: "Producto Agregado Correctamente"
        }
        
    }

    return {
        errors: [],
        success: 'Producto actualizado correctamente'
    }
}