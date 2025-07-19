export const metadata = {
  title: "About Us | Car-Care",
  description: "Learn about CarCare Services, our mission, and why drivers trust us for reliable auto care.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen px-4 py-12 md:px-20 lg:px-32 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">About Car-Care</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your trusted partner for reliable and affordable car maintenance and repair.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Who We Are</h2>
          <div className="bg-gray-100 py-8 px-8 border-0 shadow rounded-md space-y-4 text-justify">
            <p>
                CarCare Services is a full-service car maintenance platform built for convenience, quality, and trust.
                Whether it's a routine oil change, tire replacement, brake check, or full-service repair, we connect you with
                certified mechanics and workshops in your area.
            </p>
            <p>
                With years of industry experience and a passion for automotive care, we make car servicing stress-free and
                transparent for every driver.
            </p>
          </div>
          
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
          <div className="bg-gray-100 py-8 px-8 border-0 shadow rounded-md space-y-4 text-justify">
            <p >
                Our mission is to revolutionize the car servicing experience by providing easy online booking, fair pricing,
                and high-quality service — all in one place.
            </p>
            <p>
                We believe in empowering car owners with the information and tools they need to maintain their vehicles with
                confidence.
            </p>
          </div>
          
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Why Choose Car-Care?</h2>
          <ul className="list-disc list-inside space-y-2 bg-gray-100 py-8 px-8 border-0 shadow rounded-md">
            <li>Certified and experienced mechanics</li>
            <li>Easy online booking and transparent pricing</li>
            <li>Wide range of services, from basic maintenance to major repairs</li>
            <li>Genuine parts and warranties on all repairs</li>
            <li>Excellent customer support and service tracking</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Get in Touch</h2>
          <p className="bg-gray-100 p-8 border-0 shadow rounded-md">
            Have questions or need help with a booking? Visit our{" "}
            <a href="/contact" className="text-red-600 underline hover:text-red-800">
              Contact Page
            </a>{" "}
            — our team is always here to help.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
