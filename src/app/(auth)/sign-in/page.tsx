'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import Google from "@/assets/google.svg";
import Apple from "@/assets/apple.svg";
import Discord from "@/assets/discord.svg";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  password: z.string({
    required_error: "Senha é obrigatória",
  }).min(8, "Senha deve ter pelo menos 8 caracteres"),

  username: z.string({
    required_error: "Nome de usuário é obrigatório",
  }).min(3, "Nome de usuário deve ter pelo menos 3 caracteres"),
})


export default function SignIn() {

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        password: "",
        username: "",
      },
    });
  
    async function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }
  

  return(
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 mb-4">
        <h1 className="text-2xl font-bold text-zinc-100">Crie sua conta</h1>
          <FormField 
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-96 max-sm:w-80">
                <Label htmlFor="text" className="text-zinc-100 text-base">Usuário</Label>
                <FormControl>
                  <Input type="text" {...field} placeholder="Digite seu nome de usuário" className="text-zinc-200 max-sm:h-10"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-96 max-sm:w-80">
                <Label htmlFor="text" className="text-zinc-100 text-base">Senha</Label>
                <FormControl>
                  <Input type="password" {...field} placeholder="Digite sua senha" className="text-zinc-200 max-sm:h-10"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="secondary" className="w-96 cursor-pointer max-sm:w-80 ">Criar conta</Button>
        </form>
      </Form>

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