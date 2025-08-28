export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready to transform your business?
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
        Get in touch with us today and let’s build the future together.
      </p>
      <a
        href="/contact"
        className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
      >
        Contact Us
      </a>
    </section>
  );
}
