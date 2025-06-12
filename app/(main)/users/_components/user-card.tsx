import { IUser } from "@/types/products"

export default function UserCard({ user }: { user: IUser }) {
    return (
        <div className="p-4 bg-white rounded-2xl shadow-md w-full max-w-sm">
            <div className="w-full h-60 mb-4 flex justify-center items-center border rounded-lg overflow-hidden">
                <img
                    src={user.image}
                    alt={user.firstName}
                    className="object-cover w-full h-full"
                />
            </div>

            <h2 className="text-xl font-bold mb-2">{user.firstName}</h2>

            <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-sm">{user.phone}</span>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">{user.email}</p>

            <div className="text-lg font-semibold">${user.email}</div>
        </div>
    )
}
