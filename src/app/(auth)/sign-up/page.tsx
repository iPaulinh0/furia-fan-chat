'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import Google from "@/assets/google.svg";
import Apple from "@/assets/apple.svg";
import Discord from "@/assets/discord.svg";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function SignIn() {

  function handleSubmit() {
    toast.success("Conta criada com sucesso!", {
      description: "Agora você pode fazer login e começar a usar o aplicativo.",
      duration: 3000,
      action: {
        label: "Fazer login",
        onClick: () => {
          window.location.href = "/sign-in";
        },
      },
    });
  }

  return(
    <div>

      <form className="flex flex-col items-center justify-center gap-4 mb-4">
        <h1 className="text-2xl font-bold text-zinc-100">Crie sua conta</h1>
        <div>
          <Label htmlFor="text" className="text-zinc-100 mb-2 text-base">Usuário</Label>
          <Input type="text" placeholder="Crie seu nome de usuário" className="w-96 text-zinc-200 max-sm:h-10 max-sm:w-80"/>
        </div>

        <div>
          <Label htmlFor="email" className="text-zinc-100 mb-2 text-base">E-mail</Label>
          <Input type="email" placeholder="Digite seu e-mail" className="w-96 text-zinc-200 max-sm:h-10 max-sm:w-80"/>
        </div>

        <div>
          <Label htmlFor="password" className="text-zinc-100 mb-2 text-base">Senha</Label>
          <Input type="password" placeholder="Crie uma senha" className="w-96 text-zinc-200 max-sm:h-10 max-sm:w-80"/>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Checkbox className="mb-1"/>
          <Label className="text-zinc-100 mb-2 text-base">Aceito todos os <span className="underline cursor-pointer hover:text-zinc-400">termos e condições</span></Label>
        </div>
      </form>
        
      <Button variant="secondary" onClick={handleSubmit} className="w-96 cursor-pointer max-sm:w-80">Criar conta</Button>

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
          <Link href="/sign-in">
            Já tem uma conta? Clique aqui e faça login.
          </Link>
        </Button>
      </div>

    </div>
  )
}