import { useRouter } from "next/router"

export const Hero = () => {
  const { push } = useRouter()
  return (
    <section className=" text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        {/* <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
          <span className="text-indigo-600">laborum doloribus</span>delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p> */}
        <h1 className="mb-6 text-6xl font-extrabold leading-none tracking-normal text-gray-900 md:text-8xl md:tracking-tight">
          Creamos tu <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-900 lg:inline">sitio web</span> profesional.
        </h1>
        <p className="px-8 mb-6 text-lg text-gray-600 md:text-xl ">
          Descubre la plataforma que te brinda la libertad de crear, diseñar y desarrollar tu presencia online exactamente como lo imaginaste.
        </p>
        {/* <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-900 lg:inline">customer feedback</span> in one single place.
        </h1>
        <p className="px-8 mb-6 text-lg text-gray-600 md:text-xl ">
          Hellonext is a feature voting software where you can allow your users to vote on features, publish roadmap, and complete your customer feedback loop.
        </p> */}
        <div className="flex flex-wrap justify-center">
          {/* <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-indigo-600 text-gray-50"></button> */}
          
          <button className="btn-primary text-lg" onClick={() => push('/dashboard/sites')}>
          Get started
          </button>
          {/* <MenuHeadless /> */}
          {/* <Dropdown /> */}
        </div>
        <p className="py-3">Prueba crisCRM. No se requerirá tarjeta de crédito.</p>
      </div>
    </section>
  )
}