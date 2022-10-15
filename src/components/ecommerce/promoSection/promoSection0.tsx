export const PromoSection0 = () => {
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-5 ">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>

            
            <p className="text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesnt care if you live or die.</p>
            <button className="text-lg btn-primary bg-red-600 hover:bg-red-700">
              Shop Collection
            </button>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">

              <div className="grid flex-shrink-0 grid-cols-1 gap-y-3  content-center">
                <div className="  overflow-hidden rounded-lg ">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                    alt=""
                    className="h-full w-auto object-cover object-center"
                  />
                </div>
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                    alt=""
                    className="h-full w-auto object-cover object-center"
                  />
                </div>
              </div>



              <div className="grid flex-shrink-0 grid-cols-1 gap-y-3">
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 content-center">
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
