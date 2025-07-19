
const ServiceDetailsHero = ({title}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4'>
        <div style={{backgroundImage : `url("/assets/images/checkout/checkout.png")`}} className="relative bg-cover bg-center w-full h-80 rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center ml-4 md:ml-48">
                <h1 className="text-xl md:text-4xl font-bold text-white"> {title} </h1>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetailsHero;