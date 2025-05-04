import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import Google from "@/assets/google.svg";
import Apple from "@/assets/apple.svg";
import Discord from "@/assets/discord.svg";
import { Label } from "@/components/ui/label";

export default function SignIn() {

  return(
    <div>

      <form className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-zinc-100">Entre com sua conta</h1>
        <div>
          <Label htmlFor="text" className="text-zinc-100 mb-2 text-base">E-mail ou Usuário</Label>
          <Input type="text" placeholder="Digite seu e-mail ou usuário" className="w-96 text-zinc-200 max-sm:h-10 max-sm:w-80"/>
        </div>

        <div className="mb-2">
          <Label htmlFor="password" className="text-zinc-100 mb-2 text-base">Senha</Label>
          <Input type="password" placeholder="Digite sua senha" className="w-96 text-zinc-200 max-sm:h-10 max-sm:w-80"/>
          <Link href="/" className="text-zinc-400 text-sm text-end underline hover:text-zinc-300 cursor-pointer">Esqueci minha senha</Link>
        </div>

        <Button variant="secondary" className="w-96 cursor-pointer max-sm:w-80">Entrar</Button>
      </form>

      <Separator className="my-4" />

      <div className="flex flex-row items-center justify-center gap-4">
        <Link href="/" className="bg-zinc-800 rounded-full p-2 hover:bg-zinc-700 transition-colors duration-200">
          <Image src={Google} alt="Google" className="w-8 max-sm:w-10" />
        </Link>
        <Link href="/" className="bg-zinc-800 rounded-full p-2 hover:bg-zinc-700 transition-colors duration-200">
          <Image src={Apple} alt="Google" className="w-8 max-sm:w-10" />
        </Link>
        <Link href="/" className="bg-zinc-800 rounded-full p-2 hover:bg-zinc-700 transition-colors duration-200">
          <Image src={Discord} alt="Google" className="w-8 max-sm:w-10" />
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Button variant="link" className="mt-4 text-zinc-100 cursor-pointer text-center">
          <Link href="/sign-up">
            Não tem uma conta? Clique aqui.
          </Link>
        </Button>
      </div>

    </div>
  )
}