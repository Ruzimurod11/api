import { USERS } from "@/constants/api-endpoints"
import { getReq } from "@/services/fetch-requests"
import { IUser } from "@/types/products"

interface Props {
    userID: string
}

const Main = async ({ userID }: Props) => {
    const user = await getReq<IUser>(`${USERS}/${userID}`)

    // const router = useRouter()  const router

    return (
        <>
            <h2>{user.firstName}</h2>
            <p> {user.id} </p>

            <div>
                <img
                    width={280}
                    height={280}
                    src={user.image}
                    alt={user.firstName}
                />
                <h2 className="text-[clamp(1.125rem,3.2vw,1.5rem)] font-semibold">
                    {user.email}
                </h2>
            </div>
        </>
    )
}

export default Main
