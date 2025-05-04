import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "@/components/ui/menu";
import Profile from "@/assets/profile.jpg";
import R6 from "@/assets/r6.jpg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { SquarePenIcon } from "@/components/ui/square-pen";
import { Separator } from "@/components/ui/separator";

export function DrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger className="hidden bg-zinc-700 rounded-md p-1 max-[980px]:flex">
        <MenuIcon size={24}/>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-900 border-zinc-700 px-4">
        <DrawerTitle className="text-zinc-200 text-lg font-bold text-center mt-5">Menu</DrawerTitle>
        <DrawerHeader className="flex flex-row gap-2 p-5 text-zinc-200 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Image 
              src={Profile}
              alt="Profile picture"
              className="rounded-md  w-16 h-16"
            />
            <div className="flex flex-col justify-center">
              <Label className="text-base font-bold">Paulo Victor</Label>
              <Label className="text-sm text-zinc-400 font-normal">@iPaulinh0</Label>
            </div>
          </div>
          <SquarePenIcon size={24}/>
        </DrawerHeader>
        <Separator className="bg-zinc-700"/>

        <div>
          <h1 className="text-2xl text-zinc-200 my-5">Comunidades</h1>
          <div className="flex flex-row gap-2 items-center mb-5">
            <Image 
              src={R6}
              alt="Rainbow Six Siege logo"
              className="rounded-full w-12 h-12"
            />
            <Label className="text-lg font-normal text-zinc-200">Comunidade Rainbow Six</Label>
          </div>
        </div>

      </DrawerContent>
    </Drawer>
  )
}