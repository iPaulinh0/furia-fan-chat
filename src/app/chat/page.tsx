import { Separator } from "@/components/ui/separator";
import { CommunitiesArea } from "./components/communities-area";
import { ProfileSettings } from "./components/profile-settings";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChatArea } from "./components/chat-area";

export default function Chat() {
  return (
    <div className="flex flex-row text-zinc-100 max-h-dvh">

      <div className="flex flex-col justify-between flex-1/6 bg-zinc-900 min-h-dvh max-[980px]:hidden">
        <ScrollArea type="hover" scrollHideDelay={250}>
          <div className="h-[850px] p-5">
            <CommunitiesArea />
            <CommunitiesArea />
          </div>
          <ScrollBar orientation="vertical" className="w-2 bg-zinc-800 rounded-full" />
        </ScrollArea>

        <div className="p-5 flex flex-col gap-2">
          <Separator className="bg-zinc-600"/>
          <ProfileSettings name="Paulo Victor" username="iPaulinh0"/>
        </div>
      </div>

      <div className="flex flex-5/6 items-center justify-center min-h-dvh max-[980px]:flex-auto">
        <ChatArea />
      </div>
    </div>
  )
}