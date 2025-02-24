import InfoSection from "../sections/InfoSection"
import MediaSection from "../sections/MediaSection"

export default function Wrapper() {
  return (
    <div className="grid grid-cols-7 gap-16 ">
        <MediaSection />
        <InfoSection />
    </div>
  )
}