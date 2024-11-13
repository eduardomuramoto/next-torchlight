

type FacilitatorCardProps = {
  facilitator: string,
  description: string,
}

export default function FacilitatorCard({ facilitator, description }: FacilitatorCardProps) {
  return (
    <div className="flex flex-col items-center max-h-80 max-w-72 py-4 px-6 bg-lightForeground border-[3px] border-background text-background font-semibold rounded-md">
      <p>{facilitator}</p>

      <p className="text-center text-gray-800 font-normal pb-2 pt-2">{description}</p>
    </div>
  )
}