import { ChevronRightIcon } from "@/components/ui/chevron-right";
import { Input } from "@/components/ui/input";

export function ChatTextArea() {
  return (
    <div className="flex flex-row gap-2 items-center justify-start px-8 py-8 max-[480px]:px-2 max-[480px]:py-4">
      <Input className="bg-zinc-800 border-0 ring-0 outline-0 rounded-full w-full h-11 text-zinc-200" placeholder="No que você está pensando..."/>
      <ChevronRightIcon className="bg-emerald-700 rounded-full p-1 cursor-pointer"/>
    </div>
  )
}