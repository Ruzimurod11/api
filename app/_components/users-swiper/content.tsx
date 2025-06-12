"use client"

import { getArray } from "@/lib/get-array"
import { cn } from "@/lib/utils"
import { IUserResponse } from "@/types/products"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { use, useCallback, useEffect, useState } from "react"
import { FaAngleRight } from "react-icons/fa"
import UserCard from "./user-card"

interface Props {
    promise: Promise<IUserResponse>
    currentParkID?: string
}

const Content = ({ promise, currentParkID }: Props) => {
    const data = use(promise)
    const list = getArray(data.users)
    const finalList = list.filter((a) => String(a.id) !== currentParkID)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })],
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
        onSelect()
        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <>
            <div className="relative flex justify-center items-center mb-8">
                <div className="absolute left-0 text-transparent text-lg font-bold max-lg:text-[#212121]">
                    Parklar
                </div>
                <div className="absolute -right-1 flex gap-4 justify-center">
                    <Link
                        href={"/users"}
                        className="flex items-center gap-2.5 text-[#212121] text-lg font-semibold max-sm:text-sm"
                    >
                        Barchasi
                        <FaAngleRight
                            size={24}
                            className="max-sm:size-4"
                            color="#212121"
                        />
                    </Link>
                </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {finalList.map((item) => (
                        <div
                            key={item.id}
                            className="flex-[0_0_25%] pr-4 max-lg:flex-[0_0_33%] max-md:flex-[0_0_50%] max-sm:flex-[0_0_75%]"
                        >
                            <UserCard key={item.id} item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-10 max-md:hidden">
                {finalList.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-[26px] h-[26px] flex items-center justify-center border border-transparent rounded-full",
                            index === selectedIndex && "border-[#810e9d]",
                        )}
                    >
                        <button
                            className={cn(
                                "w-[9px] h-[9px] rounded-full",
                                index === selectedIndex ? "bg-[#810e9d]" : (
                                    "bg-[#e0cae4]"
                                ),
                            )}
                            onClick={() => emblaApi?.scrollTo(index)}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(Content), { ssr: false })
