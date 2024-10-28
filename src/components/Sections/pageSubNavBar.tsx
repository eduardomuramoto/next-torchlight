

export default function SubNavBar({Links}:{Links:any[]}) {
  return (
    <div className="w-full bg-background flex flex-wrap gap-20 p-6 px-20">
      {Links.map(Link=> { return <a href={Link.url} className="text-white hover:text-foreground transition-all">{Link.label}</a> } )}
    </div>
  )}