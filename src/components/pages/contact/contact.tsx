import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import Container from "@/components/container/container";
import Title from "@/components/title/title";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spin, setSpin] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSpin(true);

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    const serviceEmail = process.env.NEXT_PUBLIC_SERVICE_EMAIL || "";
    const templateEmail = process.env.NEXT_PUBLIC_TEMPLATE_EMAIL || "";

    await emailjs
      .send(
        serviceEmail,
        templateEmail,
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
        setSpin(false);
      })
      .catch((err: any) => {
        toast({
          variant: "destructive",
          description: "Algo deu errado!",
        });
        setSpin(false);
      });
  };

  return (
    <Container>
      <div>
        <div
          className="flex flex-col items-center justify-center "
          id="contact"
        >
          <Title title="Contact" />
          <div className="flex space-x-7 mt-11 mb-6 ">
            <SocialIcon
              className=""
              network="github"
              url="http://github.com/rafaelsantos01"
              target="_blank"
            />

            <SocialIcon
              className=""
              network="linkedin"
              url="https://www.linkedin.com/in/rafael-santos-7a938b237/"
              target="_blank"
            />
            <SocialIcon
              className=""
              network="whatsapp"
              url="https://wa.me/55047996581330"
              target="_blank"
            />
          </div>
          <div className="w-full md:w-2/6 mt-4 bg-zinc-900 shadow-xl shadow-red-600 rounded-3xl">
            <Card className="rounded-3xl border-zinc-900">
              <CardHeader></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    className="bg-black border-red-600 rounded-xl placeholder:text-white placeholder:opacity-70"
                    placeholder="Seu nome"
                    required
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <Input
                    className="bg-black border-red-600 rounded-xl placeholder:text-white placeholder:opacity-70"
                    placeholder="Seu email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <Textarea
                    className="bg-black border-red-600 rounded-xl placeholder:text-white placeholder:opacity-70"
                    placeholder="Deixe sua mensagem."
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />

                  {spin == false && (
                    <Button className="rounded w-full text-lg p-6 bg-red-600 hover:bg-red-500 hover:text-white">
                      Enviar
                    </Button>
                  )}
                  {spin == true && (
                    <Button className="rounded w-full text-lg p-6 bg-red-600 hover:bg-red-500 hover:text-white">
                      <div className="animate-spin">
                        <ImSpinner />
                      </div>
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="text-red-600 text-center mt-8">
          Copyright © 2024 de Rafael Pereira Dos Santos. Todos os direitos
          reservados.
        </p>
      </div>
    </Container>
  );
}
