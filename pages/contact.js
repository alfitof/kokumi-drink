import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="px-20 pt-28">
        <h1 className="mt-10 text-3xl font-bold text-base-sub-title text-center sm:text-center mb-8 sm:text-4xl">
          Get in touch with us
        </h1>
        <form className="my-10 flex flex-col justify-start items-center max-w-xl m-auto">
          <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
            <div className="text-left flex flex-col gap-2 w-full">
              <label className="font-semibold text-base-sub-title">
                Full Name
              </label>
              <input
                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                type="text"
                placeholder="John Doe"
                required
                name="user_name"
                autoFocus
              />
            </div>
            <div className="text-left flex flex-col gap-2 w-full">
              <label className="font-semibold text-base-sub-title">Email</label>
              <input
                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                type="email"
                placeholder="john.doe@gmail.com"
                name="user_email"
                required
              />
            </div>
          </div>

          <div className="text-left mb-6 flex flex-col gap-2 w-full">
            <label className="font-semibold text-base-sub-title">Message</label>
            <textarea
              className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500"
              placeholder="Type a message..."
              required
              name="user_message"
            ></textarea>
          </div>
          <div className="w-full text-left">
            <button
              className="flex justify-center items-center gap-2 mb-10 w-full py-3 px-4 text-white text-sm font-bold rounded-full ease-in-out duration-150 shadow-slate-600  lg:m-0 md:w-max md:px-6"
              title="Send"
              style={{ backgroundColor: "#ff7774" }}
            >
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
