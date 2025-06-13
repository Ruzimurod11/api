// import useFormattedNumber from "@/hooks/use-formatted-number"
import { IUser } from "@/types/products"
import Image from "next/image"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

interface Props {
    item: IUser
}

export default function UserCard({ item }: Props) {
    return (
        <Link
            key={item.id}
            href={`/users/${item.id}`}
            className="flex flex-col items-center w-[clamp(164px,20vw,auto)] rounded-[10px] shadow-[0px_3px_10px_0px_#D5D5D540]"
        >
            <div className="w-full h-[clamp(153px,20vw,277px)] bg-white flex items-center justify-center rounded-t-[10px]">
                <Image
                    width={277}
                    height={277}
                    src={item.image}
                    alt={item.firstName}
                    className="rounded-t-[10px]"
                />
            </div>

            <div className="w-full px-[clamp(8px,2vw,16px)] py-[clamp(12px,2vw,24px)] bg-[#ffffff] rounded-b-[10px] border-t border-[#f1f2f4]">
                <p className="self-stretch justify-start text-[#212121] text-[clamp(15px,2vw,24px)] font-semibold  leading-9 max-sm:font-medium lg:hidden">
                    {item.firstName}
                </p>
                <div className="flex gap-2.5 items-center">
                    <p className="text-[#33373e] text-base font-semibold  leading-normal">
                        {item.phone})
                    </p>
                </div>
                <div>{item.email}</div>
                <p className="mt-4 self-stretch justify-start line-clamp-1 text-[#212121] text-2xl font-semibold  leading-9 max-sm:font-medium max-sm:text-[15px] max-lg:hidden">
                    {item.firstName}
                </p>
                <div className="mt-6 flex items-center justify-end max-sm:mt-4">
                    <button className="p-[9px] bg-[#83109f] rounded-full">
                        <FiArrowUpRight size={24} color="#ffffff" />
                    </button>
                </div>
            </div>
        </Link>
    )
}
