import Button from "@/components-react-nex/Button/Button";
import Image from "next/image";
import FlottingHeroIcons from "../components/FlottingHeroIcons";

const Hero = () => {
	return (
		<div className="flex max-xl:flex-col-reverse max-xl:justify-center max-xl:items-center justify-between  max-xl:gap-20 w-full font-inter max-md:h-auto max-container max-xl:m-auto">
			<div className="flex flex-[1] flex-col ">
				<h1 className="font-bold text-7xl max-sm:text-5xl max-sm:leading-[53px] leading-[80px] max-xl:items-center">
					We&rsquo;re here to Increase your Productivity
				</h1>
				<Image
					src="/assets/images/vector.png"
					alt="vector"
					width={479}
					height={26}
					className="pt-5"
				/>
				<div className="max-sm:flex max-sm:flex-col-reverse">
					<p className="font-medium leading-7 text-lg max-md:text-base pt-11 w-[450px] max-xl:w-auto">
						Let&apos;s make your work more organize and easily using the Taskio
						Dashboard with many of the latest featuresin managing work every
						day.
					</p>
					<div className="flex gap-5 font-medium text-lg max-md:text-base max-sm:text-sm pt-8">
						<Button className="flex-1 md:flex-none py-5 px-7 max-sm:py-1 max-sm:px-3 rounded-full bg-custom-green text-[#FFFFFF] ">
							Try free trial
						</Button>
						<Button className="flex-1 md:flex-none text-nowrap flex justify-center items-center gap-3 max-sm:gap-2">
							<Image
								src="/assets/icons/play.png"
								alt="play"
								width={40}
								height={40}
							/>
							View Demo
						</Button>
					</div>
				</div>
			</div>

			<div className="flex relative flex-1 items-center justify-end max-xl:justify-center w-[700px] max-md:w-full">
				<Image
					src="/assets/images/hero.png"
					alt="vector"
					width={410}
					height={526}
					className=""
				/>
				<div className="flex md:hidden lg:flex">
					<FlottingHeroIcons />
				</div>
			</div>
		</div>
	);
};

export default Hero;
