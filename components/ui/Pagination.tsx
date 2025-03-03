import Link from "next/link"

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav className="flex justify-center py-10">

            {currentPage > 1 && (
                <Link
                    href={`/admin/products?page=${currentPage - 1}`}
                    className={` px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-300 ${currentPage === 1 ? 'bg-gray-200' : ''}`}
                >&laquo;</Link>
            )}

            {pages.map((page) => (
                <Link
                    key={page}
                    href={`/admin/products?page=${page}`}
                    className={` px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-300 ${currentPage === page ? 'bg-gray-200' : ''}`}
                >
                    {page}
                </Link>
            ))}
            {currentPage < totalPages && (
                <Link
                    href={`/admin/products?page=${currentPage + 1}`}
                    className={` px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-300 ${currentPage === totalPages ? 'bg-gray-200' : ''}`}
                >&raquo;</Link>
            )}
        </nav>
    )
}
