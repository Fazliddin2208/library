import ArrivalCards from "../ui/Arrivals/ArrivalCards";

export default function ArrivalsSection() {
  return (
    <div className="col-span-5 border gradient-bg rounded-[10px] flex p-[1px]">
        <div className="w-[60px] flex items-center justify-center">
            <h2 className="text-lg text-light" style={{
                writingMode: "sideways-lr"
            }}>New Arrivals</h2>
        </div>

        <ArrivalCards />
    </div>
  )
}