import ProductsSwiper from "./products-swiper"
import UsersSwiper from "./users-swiper"

export default async function Index() {
    return (
        <>
            <ProductsSwiper />
            <hr className="my-8" />
            <UsersSwiper />
        </>
    )
}
