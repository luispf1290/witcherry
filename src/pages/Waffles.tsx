import { Container } from "@mui/material"
import { CarouselDish, Paragraph, StepLine, Subtitle, Title } from "../components"
import { PropsItems } from "../components/ItemCarousel"
import waffles from '../assets/waffles-witcherry.svg'

const itemCarousel1: PropsItems[] = [
  {
    titulo: 'Caramelonions',
    subtitulo: 'Especias',
    precio: '0.00',
    img: waffles

  },
  {
    titulo: 'Sangre de Bufalo',
    subtitulo: 'Tiras de pollo',
    precio: '0.00',
    img: waffles

  },
  {
    titulo: 'Wafsandwich',
    subtitulo: 'Jamon y queso',
    precio: '0.00',
    img: waffles

  },
  {
    titulo: 'Waffle Pizza',
    subtitulo: 'Peperoni',
    precio: '0.00',
    img: waffles

  }
]

const itemCarousel2: PropsItems[] = [
  {
    titulo: 'Chocobanana',
    subtitulo: 'Nutella y Platano',
    precio: '0.00',
    img: waffles

  },
  {
    titulo: 'Bosque Rojo',
    subtitulo: 'Frutos Rojos',
    precio: '0.00',
    img: waffles

  },
  {
    titulo: 'Tentacion de Eva',
    subtitulo: 'Manzana',
    precio: '0.00',
    img: waffles

  },
  {
    titulo: 'Sombre Lunar',
    subtitulo: 'Cocolate',
    precio: '0.00',
    img: waffles

  }
]

export const Waffles = () => {
  return (
    <>
      <div>
        <Title title={'Especialidades'} />
        <Paragraph paragraph={'Nuestras Recomendaciones'} color="grayp-p-400" />
        <Subtitle subtitle={"Cristales de mar"} />
      </div>

      <Container sx={{
        padding: 0,
        margin: 0,
        width: '80%'
      }}>
        <CarouselDish arrayItems={itemCarousel1} />
      </Container>

      <div>
        <Subtitle subtitle={"Dulces Encantados"} />
      </div>

      <Container sx={{
        padding: 0,
        margin: 0,
        width: '80%'
      }}>
        <CarouselDish arrayItems={itemCarousel2} />
      </Container>

      <div
        style={{
          marginTop: '30px',
          width: '80%',

        }}
      >
        <Title title={'Crea tu magica combinación'} />
        <Paragraph paragraph={'Elige un ingrediente en cada paso, para armar una deliciosa combinación'} color="grayp-p-400" />
      </div>

      <div style={{
        marginTop: '30px',
        width: '80%',
        display: 'flex',
        justifyContent:'left'
      }}>
        <StepLine />
      </div>
    </>
  )
}
