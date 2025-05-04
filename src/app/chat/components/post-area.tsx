import Profile from '@/assets/profile.jpg'
import { ChevronRightIcon } from '@/components/ui/chevron-right'
import { DownvoteIcon } from '@/components/ui/downvote'
import { MessageSquareMoreIcon } from '@/components/ui/message-square-more'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { UploadIcon } from '@/components/ui/upload'
import { UpvoteIcon } from '@/components/ui/upvote'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'

export function PostArea() {
  return (
    <div className='flex flex-col ml-36 mt-5 mb-10 w-[600px] max-[1200px]:mx-auto max-[1170px]:py-5 max-[600px]:w-[480px] max-[490px]:w-[380px] max-[490px]:mb-1 max-[380px]:w-[320px] max-[380px]:px-2'>
      <header className='flex items-center gap-2 mb-4'>
        <Image 
          src={Profile}
          alt="Profile"
          className="rounded-full w-8 h-8"
          quality={50}
        />
        <div className='flex flex-col'>
          <Label className="text-sm font-medium text-zinc-200">@iPaulinh0</Label>
          <Label className="text-[10px] font-medium text-zinc-400">postado: 04/05/2025 • 18:07h</Label>
        </div>
      </header>

      <main className='w-[600px] text-sm tracking-tighter leading-relaxed max-[600px]:text-sm max-[600px]:w-[480px] max-[490px]:w-[380px] max-[380px]:w-[320px]'>
        <p>Lorem ipsum dolor sit amet. Et ullam excepturi qui animi ipsam et aperiam laborum vel quae excepturi vel nisi fugit non rerum impedit aut nihil dolor! At Quis explicabo et fuga rerum sed placeat ipsa non quia asperiores qui rerum reiciendis. Nam enim maiores eos dolores numquam qui dolorem incidunt non reiciendis amet ea voluptates error?</p>
      </main>

      <footer className='items-center mt-3 gap-3 w-[600px] max-[600px]:w-[480px] max-[490px]:w-[380px] max-[380px]:w-[320px]'>
        <div className='flex items-center gap-3'>
          <UpvoteIcon size={18} className='cursor-pointer'/>
          <Label className="text-sm font-medium text-zinc-400">16</Label>
          <MessageSquareMoreIcon size={18} className='cursor-pointer'/>
          <Label className="text-sm font-medium text-zinc-400">5</Label>
          <UploadIcon size={18} className='cursor-pointer'/>
        </div>
        <div className='flex items-center gap-3 mt-3'>
          <Textarea className='bg-zinc-800 border-0 ring-0 outline-0 rounded-md w-full h-11 text-zinc-200' placeholder='Comente nessa publicação...' />
          <ChevronRightIcon className='flex items-center h-fit bg-emerald-700 rounded-full p-1 cursor-pointer'/>
        </div>
      </footer>

      <Separator className='my-5 bg-zinc-700'/>
    </div>
  )
}