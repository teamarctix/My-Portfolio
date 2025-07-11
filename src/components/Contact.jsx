const Contact = () => (
  <section
    id="contact"
    className="py-20 px-[7vw] max-w-6xl mx-auto bg-white dark:bg-[#0F0E47] text-[#272727] dark:text-white transition-colors duration-300"
  >
    <h2 className="text-4xl font-bold text-center text-[#0F0E47] dark:text-white mb-4">
      Get in Touch
    </h2>
    <p className="text-center text-[#505081] dark:text-gray-300 mb-12">
      Have a project in mind or just want to say hello? Drop me a message!
    </p>

    <form className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#272757] dark:text-gray-200">Name</label>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-[#505081] focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white dark:bg-[#272757] text-sm dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-[#272757] dark:text-gray-200">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 dark:border-[#505081] focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white dark:bg-[#272757] text-sm dark:text-white"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#272757] dark:text-gray-200">Subject</label>
        <input
          type="text"
          placeholder="Subject of your message"
          className="w-full px-4 py-3 border border-gray-300 dark:border-[#505081] focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white dark:bg-[#272757] text-sm dark:text-white"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#272757] dark:text-gray-200">Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-[#505081] focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white dark:bg-[#272757] text-sm dark:text-white"
        ></textarea>
      </div>

      {/* Button */}
      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-[#0F0E47] dark:bg-white text-white dark:text-[#0F0E47] px-8 py-3 text-sm font-medium hover:bg-[#272757] dark:hover:bg-gray-200 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </section>
);

export default Contact;
