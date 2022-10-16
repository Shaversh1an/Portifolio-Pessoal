import { FaArrowRight } from "react-icons/fa";
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img} from '../../styles/indexStyle'
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Luiz Silva</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Cursando Analise e Desenvolvimento de Sistemas na Universidade Positivo,
            sem experiência profissional, porém com conceitos básicos em JS, HTML5, CSS3, React e outros.
            No momento sigo na carreira de Suporte Técnico e buscando essa migração de carreira.
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="images/Perfil.jpeg" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}