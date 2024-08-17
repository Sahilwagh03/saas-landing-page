import Nav from "./components/Nav";
import Benifit from "./sections/Benifit";
import Comapany from "./sections/Comapany";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Prices from "./sections/Prices";
import ReviewSection from "./sections/ReviewSection";

export default function Home() {
	return (
		<>
			<main className="relative">
				<Nav />
				<section className="py-8 pt-4 px-32 max-md:px-8">
					<Hero />
				</section>
				<Comapany/>
				<ReviewSection/>
				<Features/>
				<Benifit/>
				<Prices/>
				<Footer/>
			</main>
		</>
	);
}
