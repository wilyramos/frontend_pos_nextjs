import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
    return (
        <div className='text-center '>
            <Heading>Producto no encontrado</Heading>

            <p className='text-gray-500 text-2xl'>
                Tal vez quieres vovler a
                <Link className='text-blue-500 font-bold ' href='/admin/products?page=1'> productos
                </Link>
            </p>
        </div>

    )
}
