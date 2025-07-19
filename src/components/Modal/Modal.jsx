import Image from 'next/image'

const Modal = ({modalState, selectedBooking}) => {
  const [showModal, setShowModal] = modalState
//   console.log("MOdal :::", showModal);

//   console.log("Booking Info :::", selectedBooking);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="bg-white p-6 rounded-md shadow-md w-[90%] max-w-md relative space-y-4">
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-4xl font-bold cursor-pointer"
                onClick={() => setShowModal(!showModal)}
            >
                &times;
            </button>

            <div className="w-full h-48 relative mt-6">
                <Image
                src={selectedBooking?.service_image}
                alt="Service"
                fill
                priority
                className="rounded-md object-cover"
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 text-center">{selectedBooking?.service_name}</h2>
            <p className="text-blue-950">Booking ID: <span className="font-mono text-blue-900">{selectedBooking?._id}</span></p>
            <p className="text-blue-950">Customer Name: <span className="font-mono text-blue-900">{selectedBooking?.customerName}</span></p>
            <p className="text-blue-950">Email: <span className="font-mono text-blue-900">{selectedBooking?.email}</span></p>
            <p className="text-blue-950">Mobile: <span className="font-mono text-blue-900">{selectedBooking?.tel}</span></p>
            <p className="text-blue-950">Date: <span className="font-mono text-blue-900">{selectedBooking?.date}</span></p>
            <p className="text-blue-950">Price: <span className="font-mono text-blue-900">{selectedBooking?.amount}</span></p>
            
        </div>
    </div>
  )
}

export default Modal