import Furia from '@/assets/logo.png'
import FuriaLogo from '@/assets/logo-furia.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[980px] m-auto max-sm:p-4 max-sm:min-h-dvh">
      
      <div className='flex items-center justify-center'>
        <Image 
          src={Furia}
          alt="Logo leão fúria"
          width={360}
          className=""
        />
        <Image 
          src={FuriaLogo}
          alt="Logo leão fúria"
          width={360}
          className="-ml-16 max-sm:hidden"
        />
      </div>

      <div>
        <p className="text-center text-zinc-100 text-lg leading-tight tracking-wider">Seja bem vindo ao melhor lugar para se br conectar com a comunidade da <strong>Fúria</strong></p>
        <Link href="/sign-in">
          <Button className="mt-4 w-full text-base cursor-pointer" variant="secondary">Comece a conversar</Button>
        </Link>
      </div>

    </div>
  )  
}