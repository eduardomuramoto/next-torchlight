import Link from "next/link";
import NewsletterComponent from "./Forms/newsletter";

export default function Footer() {
  return (
    <footer className="bg-background mx-2 lg:mx-20 text-center text-surface/75 text-white/75 lg:text-left">
      <div
        className="flex flex-wrap md:flex-nowrap border-b gap-8 border-neutral-200 p-6 lg:px-6 dark:border-white/10 lg:justify-between">
        <div
          className="flex flex-col dark:border-white/10">
          <h6
            className="text-2xl mb-4 flex justify-start font-teko font-semibold uppercase">
            Follow Us
          </h6>
          <div className="flex justify-center">
            <a href="https://www.facebook.com/profile.php?id=61551732609381&sk=about" target="_blank" className="me-6 [&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/torchlightfoundation/" target="_blank" className="me-6 [&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/torchlight-foundation-8584b6314/" target="_blank" className="me-6 [&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@torchlightfoundation" target="_blank" className="[&>svg]:h-6 [&>svg]:w-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.6669 9.7C26.5279 8.39921 25.9001 6.729 25.9003 5H20.7503V25.6667C20.7114 26.7853 20.2395 27.8451 19.4341 28.6225C18.6288 29.3999 17.5529 29.834 16.4336 29.8333C14.0669 29.8333 12.1003 27.9 12.1003 25.5C12.1003 22.6333 14.8669 20.4833 17.7169 21.3667V16.1C11.9669 15.3333 6.93359 19.8 6.93359 25.5C6.93359 31.05 11.5336 35 16.4169 35C21.6503 35 25.9003 30.75 25.9003 25.5V15.0167C27.9886 16.5164 30.4959 17.3211 33.0669 17.3167V12.1667C33.0669 12.1667 29.9336 12.3167 27.6669 9.7Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <NewsletterComponent />
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 grid-cols-2 lg:grid-cols-4">

          <div>
            <Link href="/about-us">
              <h6
                className="mb-4 flex text-xl font-teko font-semibold uppercase justify-start">
                About Us
              </h6>
            </Link>
            <Link href="/our-projects">
              <h6
                className="mb-4 flex text-xl font-teko font-semibold uppercase justify-start">
                Our Projects
              </h6>
            </Link>
            <Link href="/get-involved">
              <h6
                className="mb-4 flex text-xl font-teko font-semibold uppercase justify-start">
                Get Involved
              </h6>
            </Link>
            <a href="https://www.torchlight.org.au/donation" target="_blank">
              <h6
                className="mb-4 flex text-xl font-teko font-semibold uppercase justify-start">
                Donate
              </h6>
            </a>
          </div>
          <div>

            <Link href="/get-support">
              <h6
                className="mb-4 flex text-xl font-teko font-semibold uppercase justify-start">
                Get Support
              </h6>
            </Link>
            <p className="mb-4 flex justify-start">
              <a href="/get-support#courses">Courses</a>
            </p>
            <p className="mb-4 flex justify-start">
              <a href="/get-support#services">Services</a>
            </p>
            <p className="mb-4 flex justify-start">
              <a href="/get-support#enquiry">Enquiry</a>
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex text-xl font-teko font-semibold uppercase justify-start">
              Contact Us
            </h6>
            <a href="mailto:hq@torchlight.org.au">
              <p className="mb-4 flex items-center justify-start text-nowrap">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                hq@torchlight.org.au
              </p>
            </a>
            <a href="tel:+1800363228">
              <p className="mb-4 flex items-center justify-start text-nowrap">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
                1800 END ABUSE
              </p>
            </a>
            <a href="tel:+1800363228">
              <p className="flex items-center justify-start text-nowrap">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
                1800 363 228
              </p>
            </a>
          </div>
          <div className="col-span-2 md:col-auto" >
            <p className="text-start">
              In the spirit of reconciliation,  Torchlight Foundation acknowledges the Traditional Custodians of country  throughout Australia and their connections to land, sea and community.  We pay our respects to their Elders past and present and extend that  respect to all Aboriginal and Torres Strait Islander people.
            </p>
          </div>
        </div>
      </div>

      <div className="flex p-6 justify-end gap-6">
        <span>© 2024
          <a href="https://torchlight.foundation/"> Torchlight Foundation </a>
          - All Rights Reserved</span>
        <Link href="/privacy">
          Privacy
        </Link>
        <Link href="/terms-and-conditions">Terms & Conditions</Link>

      </div>
    </footer>
  );
}
