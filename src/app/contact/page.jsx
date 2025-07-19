export const metadata = {
  title: "Contact Us | Car-Care",
  description: "Get in touch with CarCare Services for inquiries, bookings, or support.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 md:px-20 lg:px-32 text-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
          <p className="text-gray-600">
            Have questions, need help, or want to book a service? Reach out to us — we’d love to hear from you!
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <span className="block text-gray-500 font-medium">Email</span>
              <p className="text-lg text-gray-700">support@carcare.com</p>
            </div>

            <div>
              <span className="block text-gray-500 font-medium">Phone</span>
              <p className="text-lg text-gray-700">+1 (800) 555-0123</p>
            </div>

            <div>
              <span className="block text-gray-500 font-medium">Workshop Address</span>
              <p className="text-lg text-gray-700">
                123 Auto Lane, <br />
                Springfield, IL 62704, USA
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-6 rounded-md shadow">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="How can we help you?"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-150"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
