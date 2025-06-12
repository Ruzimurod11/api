
import { getReq } from "@/services/fetch-requests"
import { PRODUCTS } from "@/constants/api-endpoints"


interface Props {
    productID: string
}

const Main = async ({ productID }: Props) => {
    const product = await getReq<IProductDetail>(`${PRODUCTS}/${productID}`)

    // const router = useRouter()  const router

    return (
        <>
            <h2>{product.title}</h2>
            <h2 className="text-[clamp(1.125rem,3.2vw,1.5rem)] font-semibold lg:hidden">
                {product.price}
            </h2>
            <p> {product.id} </p>
            <div>
                <img src={product.images[0]} alt={product.title} />
            </div>

        </>
    )
}

export default Main
