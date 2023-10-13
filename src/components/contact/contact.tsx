import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import Container from "../container/container";
import Title from "../title/title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import axios from "axios";
import { toast } from "../ui/use-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    await emailjs
      .send(
        "service_l514cfb",
        "template_9chousa",
        templateParams,
        process.env.NEXT_PUBLIC_SECRECT_KEY
      )
      .then(() => {
        toast({
          variant: "success",
          description: "E-Mail enviado com sucesso",
        });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err: any) => {
        toast({
          variant: "destructive",
          description: "Algo deu errado!",
        });
      });
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center" id="contact">
        <Title title="Contact" />
        <div className="flex space-x-7 mt-11">
          <SocialIcon
            className="hover:animate-pulse"
            network="github"
            url="http://github.com/rafaelsantos01"
            target="_blank"
          />

          <SocialIcon
            className="hover:animate-pulse"
            network="linkedin"
            url="https://www.linkedin.com/in/rafael-santos-7a938b237/"
            target="_blank"
          />
          <SocialIcon
            className="hover:animate-pulse"
            network="whatsapp"
            url="https://wa.me/55047996581330"
            target="_blank"
          />
        </div>
        <div className="w-full md:w-2/6 mt-4">
          <Card className="rounded border-red-600">
            <CardHeader></CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  className="bg-black border-red-600 placeholder:text-zinc-500 placeholder:opacity-70"
                  placeholder="Seu nome"
                  required
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Input
                  className="bg-black border-red-600 placeholder:text-zinc-500 placeholder:opacity-70"
                  placeholder="Seu email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Textarea
                  className="bg-black border-red-600 placeholder:text-zinc-500 placeholder:opacity-70"
                  placeholder="Deixe sua mensagem."
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <Button className="rounded text-lg p-6 bg-red-600 hover:bg-red-500 hover:text-white">
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <p className="text-red-600 text-center mt-8">
        @ 2023 - Rafael Pereira Dos Santos
      </p>
    </Container>
  );
}
