import Furia from '@/assets/logo.png'
import Image from 'next/image'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-dvh min-w-dvw flex flex-row max-[980px]:flex-col">

      <div className='flex flex-1/3 items-center justify-center max-[980px]:hidden'>
        <Image 
          src={Furia}
          alt="Furia Logo"
          className="w-[360px] max-[980px]:w-[100px]"
        />
      </div>

      <div className='flex flex-1/3 items-center justify-center bg-zinc-900 max-[980px]:bg-zinc-950 max-[980px]:flex-col max-[980px]:gap-4'>
        <Image 
          src={Furia}
          alt="Furia Logo"
          className="w-[100px] min-[980px]:hidden" 
        />
        {children}
      </div>

    </div>
  )
}