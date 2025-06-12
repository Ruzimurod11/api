import MainLayout from "@/components/main-layout"
import Main from "./_components/main"

interface Props {
    params: Promise<{ detail: string }>
}

const UserDetail = async ({ params }: Props) => {
    const { detail } = await params

    return (
        <MainLayout className="mt-10 py-0 px-2 lg:pb-20">
            <Main userID={detail} />
        </MainLayout>
    )
}

export default UserDetail
