import AddProductForm from '@/components/products/AddProductForm'
import EditProductForm from '@/components/products/EditProductForm'
import ProductForm from '@/components/products/ProductForm'
import Heading from '@/components/ui/Heading'
import { ProductSchema } from '@/src/schemas'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'


async function getProduct(id: string) {
    const url = `${process.env.API_URL}/products/${id}`
    const req = await fetch(url)
    const json = await req.json()

    if(!req.ok) {
        notFound()
    }   

    const product = ProductSchema.parse(json)
    return product
}

type Params = Promise<{ id: string }>

export default async function EditProductPage({ params } : { params: Params }) {
    const { id } = await params

    const product = await getProduct(id)

    console.log(product)
    return (

        <>
            <Link
                href={'/admin/products?page=1'}
                className='rounded-lg bg-indigo-500 text-white px-4 py-2 font bold'

            >
                Volver
            </Link>

            <Heading> Editar Producto: </Heading>

            <EditProductForm >
                <ProductForm 
                    product={product}
                />
            </EditProductForm>
        </>
    )
}
