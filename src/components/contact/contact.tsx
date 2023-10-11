import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import Container from "../container/container";
import Title from "../title/title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center" id="contact">
        <Title title="Contact" />
        <div className="flex space-x-7 mt-11">
          <SocialIcon
            className="hover:animate-pulse"
            network="github"
            url="https://github.com/rafaelsantos01"
          />
          <SocialIcon
            className="hover:animate-pulse"
            network="linkedin"
            url="https://www.linkedin.com/in/rafael-santos-7a938b237/"
          />
          <SocialIcon
            className="hover:animate-pulse"
            network="whatsapp"
            url="https://wa.me/55047996581330"
          />
        </div>
        <div className="w-full md:w-2/6 mt-4">
          <Card className="rounded border-red-600">
            <CardHeader></CardHeader>
            <CardContent>
              <form className="space-y-6">
                <Input
                  className="bg-black border-red-600"
                  placeholder="Seu nome"
                ></Input>
                <Input
                  className="bg-black border-red-600"
                  placeholder="seuEmail@email.com"
                ></Input>
                <Textarea
                  className="bg-black border-red-600"
                  placeholder="Deixe sua mensagem."
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
