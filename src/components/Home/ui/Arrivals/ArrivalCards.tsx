import ArrivalCard from "./ArrivalCard"


type Props = {}

export default function ArrivalCards({}: Props) {
  return (
    <div className="bg-light flex-1 rounded-r-[10px] grid grid-cols-4 py-3 px-4 gap-5">
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
    </div>
  )
}