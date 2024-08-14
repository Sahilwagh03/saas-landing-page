import Nav from "./components/Nav";
import Comapany from "./sections/Comapany";
import Hero from "./sections/Hero";
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
			</main>
		</>
	);
}
