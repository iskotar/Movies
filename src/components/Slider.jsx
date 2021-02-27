import { Carousel, Image } from 'antd'
import aquaman from '../assets/aquaman.jpg'
import transformers_final from '../assets/transformers_final.jpg'
import tenet from '../assets/tenet.jpg'
import sw from '../assets/sw.jpg'
import valerian from '../assets/valerian.jpg'
import arrival from '../assets/arrival.jpg'
import godzila from '../assets/godzila.jpg'
import mandalorian from '../assets/mandalorian.jpg'

const contentStyle = {
  textAlign: 'center',
  background: '#364d79',
};

const images = [aquaman, transformers_final, tenet, sw, valerian, arrival, godzila, mandalorian]

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
