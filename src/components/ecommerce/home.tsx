import { SwiperAutoplay, SwiperNavigationHome } from "../swiper";

export const Home = () => {
	return (
		<section className="relative bg-white">
			<SwiperAutoplay />
		</section>
	);
};

const image = [
	{
		uid:"1",
	src:"http://www.polloscopacabana.com/images/banners/pcburger-crocante-rotativo-1920x587.jpg",
	alt: "1",
},
	{
		uid:"1",
	src:"http://www.polloscopacabana.com/images/banners/pccopacabana-xl-rotativook-1920x587.jpg",
	alt: "1",
},
]

export const HomeFood = () => {
	return (
		<section className="relative bg-white">
			<SwiperNavigationHome image={image} />
		</section>
	);
};