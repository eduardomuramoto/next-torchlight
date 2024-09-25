import BlueButton from "../Buttons/blueButton";


export default function EnquirySection() {
  return (
    <section className="w-full bg-lightBackground flex gap-20 p-16 px-20">
      <div className="w-full">
      <h3 className="font-teko text-6xl uppercase font-semibold pb-6 text-background">Have a Question?</h3>
      <p className="font-teko text-6xl uppercase font-semibold pb-6 text-background">We are here to help.</p>
      <form action="" className="flex gap-20 w-full">
        <div className="w-1/3">
            <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="name">Your Name *</label>
                <input id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"/>
            </div>
            <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="email">Email *</label>
                <input id="email" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"/>
            </div>
            <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="phone">Phone *</label>
                <input id="phone" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"/>
            </div>
            <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="organization">Organization</label>
                <input id="organization" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"/>
            </div>
        </div>
        <div className="w-2/3 h-full ">
          <div className="pb-6">
                <label className="text-background font-semibold" htmlFor="message">Message</label>
                <textarea id="message" rows="8" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"/>
            </div>
            <BlueButton  className="ml-auto" label="Send Message" afterIcon="yes"/>
        </div>
      </form>
      </div>
    </section>
  )}