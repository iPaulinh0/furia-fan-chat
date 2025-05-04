import { Label } from "@/components/ui/label";
import Image from "next/image";
import R6 from "@/assets/r6.jpg";

export function CommunitiesArea() {
  return (
    <div className="flex items-center gap-2 mb-3 hover:bg-zinc-800 p-2 rounded-md cursor-pointer">
    <Image 
      src={R6}
      alt="Profile Picture"
      className="rounded-full w-10 h-10"
    />
    <Label className="text-sm text-zinc-200">Comunidade Rainbow Six</Label>
  </div>  
  )
}