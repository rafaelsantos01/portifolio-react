import Container from "@/components/container/container"
import Title from "@/components/title/title"

interface IRequest{
  organization:string,
  position:string,
  date:string,
  img:string
}


export default function Experience(){

  return(
    <Container>
      <Title title="Experiência" />
      <h1>Com pouco mais de 1 Ano de experiência</h1>
      <div>

      </div>
    </Container>
  )
}