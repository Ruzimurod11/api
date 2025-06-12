"use client"

import { getArray } from "@/lib/get-array"
import ProductCard from "./product-card"
import { useGet } from "@/hooks/react-query/use-get"
import { IProductResponse } from "@/types/products"

const Products = () => {
    const { data } = useGet<IProductResponse>("products")
    const list = getArray(data?.products)

    return (
        <>
            <h2>Products</h2>
            <div className="flex flex-col gap-5 mt-4 md:mt-6 mb-10 rounded-2xl">
                {list.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Products
