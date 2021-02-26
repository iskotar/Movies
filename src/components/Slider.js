import { Carousel, Image } from 'antd'
import aquaman from '../assets/aquaman.jpg'
import avengers from '../assets/avengers.jpg'
import transformers_final from '../assets/transformers_final.jpg'
import tenet from '../assets/tenet.jpg'

const contentStyle = {
  textAlign: 'center',
  background: '#364d79',
};

const images = [aquaman, avengers, transformers_final, tenet]

export function Slider(){

  return (
    <Carousel autoplay effect='fade'>
      {
        images.map((el, idx) => (
          <div key={idx} style={contentStyle}>
            <Image src={el} preview={false} width='100%'/>
          </div>
        ))
      }
    </Carousel>
  )
}
