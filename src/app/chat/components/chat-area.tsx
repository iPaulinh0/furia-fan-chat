import Image from "next/image";
import R6 from "@/assets/r6.jpg";
import { Label } from "@/components/ui/label";
import { ChatTextArea } from "./chat-text-area";
import { PostArea } from "./post-area";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DrawerMenu } from "./drawer-menu";

export function ChatArea() {
  return (
    <div className="bg-zinc-900 w-[1200] h-[800] rounded-xl overflow-hidden flex flex-col justify-between max-[1500px]:w-[980px] max-[1200px]:w-[720px] max-[980px]:w-full max-[980px]:rounded-none max-[980px]:h-dvh">
      <header className="bg-zinc-800 w-[1200] px-10 py-5 flex justify-between items-center max-[980px]:w-full">
        
        <div className="flex items-center gap-2">
          <Image 
            src={R6}
            alt="Rainbow Six Siege logo"
            className="rounded-full w-12 h-12"
          />
          <div>
            <Label className="text-base font-bold text-zinc-200">Comunidade Rainbow Six</Label>
            <Label className="text-sm font-normal text-zinc-200"> <div className="rounded-full bg-emerald-500 w-2 h-2"></div>3 membros online</Label>
          </div>
        </div>
        <Label className="text-sm font-normal text-zinc-400 max-[980px]:hidden">
          123 membros
        </Label>

        <DrawerMenu />
      </header>

      <ScrollArea className="flex-1 h-96">
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <PostArea />
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      <footer>
        <ChatTextArea />
      </footer>
    </div>
  )
}