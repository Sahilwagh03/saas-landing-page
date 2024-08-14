import Button from "@/components-react-nex/Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
	return (
		<div className="py-6 px-32 max-md:px-8 bg-primary font-inter sticky top-0 z-10 w-full h-[12vh]">
			<nav className="flex items-center justify-between max-container">
				<div className="flex justify-center items-center text-4xl leading-7 font-inter font-semibold text-custom-green py-2">
					Biccas
				</div>

				<ul className="flex justify-between gap-10 text-base text-[#A6A6A6] leading-7 font-medium max-lg:hidden">
					<li className="text-black">
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#product">Product</a>
					</li>
					<li>
						<a href="#faq">FAQ</a>
					</li>
					<li>
						<a href="#blog">Blog</a>
					</li>
					<li>
						<a href="#about-us">About Us</a>
					</li>
				</ul>
				<div className="flex items-center gap-4 font-medium max-lg:hidden leading-7">
					<Button className="rounded-lg text-[#A6A6A6]">
						Login
					</Button>
					<Button className="rounded-lg text-[#F8F8FA] bg-custom-green">
						Sign Up
					</Button>
				</div>
				<div className="hidden max-lg:block justify-center items-center">
					<GiHamburgerMenu className=" w-6 h-6 text-[#A6A6A6]" />
				</div>
			</nav>
		</div>
	);
};

export default Nav;
