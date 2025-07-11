const Contact = () => (
  <section
    id="contact"
    className="py-20 px-6 max-w-4xl mx-auto bg-[#F9F9F9] text-[#272727] rounded-2xl shadow-lg"
  >
    <h2 className="text-4xl font-bold text-center text-[#0F0E47] mb-4">Get in Touch</h2>
    <p className="text-center text-[#505081] mb-12">
      Have a project in mind or just want to say hello? Drop me a message!
    </p>

    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#272757]">Name</label>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white text-sm"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-[#272757]">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-[#272757]">Subject</label>
        <input
          type="text"
          placeholder="Subject of your message"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white text-sm"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-[#272757]">Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8686AC] bg-white text-sm"
        ></textarea>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-[#0F0E47] text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-[#272757] transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </section>
);

export default Contact;
