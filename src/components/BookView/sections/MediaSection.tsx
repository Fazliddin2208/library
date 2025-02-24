import { useBookViewContext } from "@/context/useBookViewContext"
import DefaultImage from '@/assets/images/book.avif'

type Props = {}

export default function MediaSection({}: Props) {
    const { book } = useBookViewContext()

    console.log(book, 'context');
    
  return (
    <div className="bg-light rounded-md px-8 py-6">
        <img src={book?.images[0]?.Location ?? DefaultImage} alt="book image" className="w-full" />
    </div>
  )
}