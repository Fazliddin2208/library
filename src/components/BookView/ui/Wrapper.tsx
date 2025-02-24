import MediaSection from "../sections/MediaSection"

export default function Wrapper() {
  return (
    <div className="grid grid-cols-5 gap-16 ">
        <MediaSection />
        <div className="col-span-4 border">salom2</div>
    </div>
  )
}