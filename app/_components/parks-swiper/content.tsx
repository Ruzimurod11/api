"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { use } from "react"
import { FaAngleRight } from "react-icons/fa"
import ProductCard from "./product-card"
import { IProductResponse } from "@/types/products"

interface Props {
    promise: Promise<IProductResponse>
    currentParkID?: string
}

const Content = ({ promise, currentParkID }: Props) => {
    const data = use(promise)

    return (
        <>
            <div className="relative flex justify-center items-center mb-8">
                <div className="absolute left-0 text-transparent text-lg font-bold max-lg:text-[#212121]">
                    Parklar
                </div>
                <div className="absolute -right-1 flex gap-4 justify-center">
                    <Link
                        href={"/products"}
                        className="flex items-center gap-2.5 text-[#212121] text-lg font-semibold max-sm:text-sm"
                    >
                        Barchasi
                        <FaAngleRight size={24} className="max-sm:size-4" color="#212121" />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                {data.products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(Content), { ssr: false })
