import MainLayout from "@/components/main-layout"
import Main from "./_components/main"


interface Props {
    params: Promise<{ detail: string }>
}

const ProductDetail = async ({ params }: Props) => {
    const { detail } = await params

    return (
        <MainLayout className="mt-26 py-0 lg:pb-20">
            <Main productID={detail} />
        </MainLayout>
    )
}

export default ProductDetail
