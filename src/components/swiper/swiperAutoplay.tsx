
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export const SwiperAutoplay = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper bg-white"
      >
        <SwiperSlide>
        <img
				className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full  h-full opacity-25 sm:opacity-100"
				src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654827103/piccoletti/neckties-210347_960_720_kqt0qc.jpg"
				alt="Couple on a bed with a dog"
			/>
        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-bold tracking-tight sm:text-7xl">
						La calidad esta{' '}
						<strong className="font-bold tracking-tight text-red-600 sm:block">
							Disponible
						</strong>
					</h1>
					<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
						Tienda de ropa online
					</p>

					<div className="flex flex-wrap gap-4 mt-8 text-center">
					<button className="btn-primary bg-red-600 hover:bg-red-700 px-6 text-lg">
              Ver Productos
            </button>
						<button className="btn-default px-6 text-lg" >
              Descuentos
            </button>

						
					</div>
				</div>
				</div>
        </SwiperSlide>
        <SwiperSlide>
        <img
				className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full  h-full opacity-25 sm:opacity-100"
				src="https://img.freepik.com/foto-gratis/ropa_144627-25214.jpg?w=1380&t=st=1665420351~exp=1665420951~hmac=6b5abbae2189451f731d65499b1b5f360316129b66550c5bcdbca65a5630618b"
				alt="Couple on a bed with a dog"
			/>
        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-bold tracking-tight sm:text-7xl">
						La calidad esta{' '}
						<strong className="font-bold tracking-tight text-red-600 sm:block">
							Disponible
						</strong>
					</h1>
					<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
						Tienda de ropa online
					</p>

					<div className="flex flex-wrap gap-4 mt-8 text-center">
					<button className="btn-primary bg-red-600 hover:bg-red-700 px-6 text-lg">
              Ver Productos
            </button>
						<button className="btn-default px-6 text-lg" >
              Descuentos
            </button>
					</div>
				</div>
				</div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
