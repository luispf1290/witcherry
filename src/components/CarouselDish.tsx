
import Slider from 'react-slick';
import { ItemCarousel, PropsItems } from './ItemCarousel';



interface PropsCarousel {
  arrayItems: PropsItems[]
}

export const CarouselDish = ({ arrayItems }: PropsCarousel) => {

  const settings = {
    dots: false,
    infinite: true,
    nextArrow: null,
    prevArrow: null,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slider-container'>

      <Slider
        {...settings}
      >

        {
          arrayItems.map((item, index) => (
            <ItemCarousel
            key={index}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              img={item.img}
              precio={item.precio}
            />
          ))
        }

      </Slider>
    </div>

  )
}
