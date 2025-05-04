import { Label } from "@/components/ui/label";
import Image from "next/image";
import Profile from "@/assets/profile.jpg";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { LogoutIcon } from "@/components/ui/logout";
import { UserRoundPlusIcon } from "@/components/ui/user-round-plus";
import { SettingsIcon } from "@/components/ui/settings";
import { SquarePenIcon } from "@/components/ui/square-pen";
import { ChevronsUpDownIcon } from "@/components/ui/chevrons-up-down";

interface ProfileSettingsProps {
  name: string;
  username: string;
}

export function ProfileSettings({name, username}: ProfileSettingsProps) {

  return (  
      <Popover >
        <PopoverTrigger>
          <div className="flex items-center justify-between gap-2 hover:bg-zinc-800 p-2 rounded-md cursor-pointer">
            <div className="flex items-center gap-2">
              <Image 
                src={Profile}
                alt="Profile Picture"
                className="rounded-md w-10 h-10 cursor-pointer"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <Label className="text-sm text-zinc-200 cursor-pointer">{name}</Label>
                <Label className="text-xs text-zinc-400 cursor-pointer">{username}</Label>
              </div>
            </div>
            <ChevronsUpDownIcon size={20} className="text-zinc-400 cursor-pointer hover:text-zinc-200" />
          </div>
        </PopoverTrigger>
        <PopoverContent align="end" side="right" className="bg-zinc-900 border-zinc-800 shadow-md rounded-md w-fit">
          <div className="flex flex-col gap-2">

            <div className="flex items-center gap-2">
              <Image 
                src={Profile}
                alt="Profile Picture"
                className="rounded-md w-10 h-10 cursor-pointer"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <Label className="text-sm text-zinc-200 cursor-pointer">{name}</Label>
                <Label className="text-xs text-zinc-400 cursor-pointer">{username}</Label>
              </div>
              <SquarePenIcon size={20} className="text-zinc-400 cursor-pointer hover:text-zinc-200" />
            </div>

            <Separator className="bg-zinc-700" />

            <Label className="text-sm text-zinc-200 cursor-pointer hover:bg-zinc-600/25 p-2 rounded-sm"><SettingsIcon size={16}/>Configurações</Label>
            <Label className="text-sm text-zinc-200 cursor-pointer hover:bg-zinc-600/25 p-2 rounded-sm"><UserRoundPlusIcon size={16} />Adicionar amigo</Label>
        
            <Separator className="bg-zinc-700" />

            <Label className="text-sm text-red-500 cursor-pointer hover:bg-zinc-600/25 p-2 rounded-sm"><LogoutIcon size={16}/>Logout</Label>
          </div>
        </PopoverContent>
      </Popover>
  )
}