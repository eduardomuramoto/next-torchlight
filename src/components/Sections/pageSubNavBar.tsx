interface Link {
  url: string,
  label: string
}

export default function SubNavBar({ Links }: { Links: Link[] }) {
  return (
    <div className="w-full bg-background flex flex-wrap gap-20 p-6 px-20">
      {Links.map(Link => { return <a key={Link.url} href={Link.url} className="text-white hover:text-foreground transition-all">{Link.label}</a> })}
    </div>
  )
}