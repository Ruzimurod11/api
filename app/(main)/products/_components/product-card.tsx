import { IProduct } from "@/types/products"
import Image from "next/image"

export default function ProductCard({ product }: { product: IProduct }) {
    return (
        <div className="p-4 bg-white rounded-2xl shadow-md w-full max-w-sm">
            <div className="w-full h-60 mb-4 flex justify-center items-center border rounded-lg overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    className="object-cover w-full h-full"
                    width={500}
                    height={500}
                />
            </div>

            <h2 className="text-xl font-bold mb-2">{product.title}</h2>

            <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-sm">88</span>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">
                {product.description}
            </p>

            <div className="text-lg font-semibold">${product.price}</div>
        </div>
    )
}
