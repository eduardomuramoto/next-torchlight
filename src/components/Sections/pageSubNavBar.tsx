

export default function SubNavBar() {
  return (
    <div className="w-full bg-background flex gap-20 p-6 px-20">
      <a href="#courses">Courses</a>
      <a href="#services" className="text-white hover:text-lightForeground transition-all">Services</a>
      <a href="#enquiry" className="text-white hover:text-lightForeground transition-all">Enquiry</a>
    </div>
  )}