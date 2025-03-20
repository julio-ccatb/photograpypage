import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
    </div>
  )
}

