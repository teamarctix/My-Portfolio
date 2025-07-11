const Contact = () => (
  <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center bg-white text-gray-900">
    <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
    <p className="text-gray-600 mb-10">
      Feel free to drop a message. I’ll try to get back to you as soon as possible!
    </p>

    <form className="space-y-6 text-left">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-800">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-800">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-800">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-800">Message</label>
        <textarea
          rows="4"
          placeholder="Your message..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
