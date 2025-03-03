import AddProductButton from "@/components/products/AddProductButton";
import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function page() {
  return (
    <>
        <Link
            href={`/admin/products?page=1`}
            className='rounded-md bg-blue-500 hover:bg-blue-900 text-white px-4 py-2'
        >Volver</Link>
        <Heading>New Product</Heading>

        <AddProductForm >
            <ProductForm />
        </AddProductForm >
    </>
  )
}
