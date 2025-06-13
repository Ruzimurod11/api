import { PRODUCTS } from "@/constants/api-endpoints"
import { getReq } from "@/services/fetch-requests"
import { IProductDetail } from "@/types/products"
import Image from "next/image"

interface Props {
    productID: string
}

const Main = async ({ productID }: Props) => {
    const product = await getReq<IProductDetail>(`${PRODUCTS}/${productID}`)

    // const router = useRouter()  const router

    return (
        <>
            <h2>{product.title}</h2>
            <p> {product.id} </p>

            <div>
                <Image
                    width={280}
                    height={280}
                    src={product.images[0]}
                    alt={product.title}
                />
                <h2 className="text-[clamp(1.125rem,3.2vw,1.5rem)] font-semibold">
                    {product.price}
                </h2>
            </div>
        </>
    )
}

export default Main
