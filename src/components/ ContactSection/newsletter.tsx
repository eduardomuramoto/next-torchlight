export default function NewsletterComponent() {
 return <div
        className="flex flex-col justify-center dark:border-white/10 lg:justify-between">
        <h6
              className="text-2xl mb-4 flex justify-start font-teko font-semibold uppercase">
              Join Our Newsletter
        </h6>
        <div className="flex flex-col justify-center">
         <p>Subscribe to be the first to know when Justice Radio launches and get more support guides. </p>
         <div className="">
        <div className="flex items-center mt-1">
            <input type="email" id="input-9" className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none focus:outline-none rounded shadow-sm" placeholder="user@mail.com"/>
            <button className="h-10 px-4 text-sm bg-orange-500 border border-l-0 border-orange-500 rounded-r shadow-sm text-orange-50 hover:text-white hover:bg-orange-400 hover:border-orange-400 focus:outline-none">Subscribe</button>
        </div>
        </div>
        </div>
        </div>
 
}