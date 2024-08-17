import Button from "@/components-react-nex/Button/Button"
import Card from "@/components-react-nex/Card/Card"
import CardBody from "@/components-react-nex/Card/CardBody"
import { CardDescription, CardTitle } from "@/components-react-nex/Card/CardComponets"
import Image from "next/image"

export const PriceCard = ({ title, description, price, benefits, buttonLabel }) => {
    return (
        <Card className="max-w-[340px] transition-shadow duration-300 group hover:bg-custom-green">
            <CardBody className="!gap-2 !mb-0 text-center justify-center items-center group-hover:text-white transition-colors duration-300">
                <CardTitle className="!mb-0 group-hover:text-white">
                    {title}
                </CardTitle>
                <CardDescription className="!mb-0 group-hover:text-white">
                    {description}
                </CardDescription>
                <span className="relative text-5xl font-semibold w-fit pt-2 group-hover:text-white">
                    <span className="absolute -left-3 top-0 text-lg font-normal text-[#A6A6A6] group-hover:text-white">
                        $
                    </span>
                    {price}
                </span>
                <div className="flex flex-col gap-8 pt-5">
                    {benefits.map((benefit, idx) => (
                        <div
                            className="flex flex-row gap-4 items-center group-hover:text-white"
                            key={idx}
                        >
                            <Image
                                width={32}
                                height={32}
                                src="/assets/images/Subtract.svg"
                                alt="Benefit icon"
                                className="transition-transform duration-300 group-hover:brightness-0 group-hover:invert"
                            />
                            <p>{benefit}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-2">
                    <Button className="rounded-md border border-white text-custom-green group-hover:bg-white group-hover:text-custom-green transition-colors duration-300">
                        {buttonLabel}
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}
