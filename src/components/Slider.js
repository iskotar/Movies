import { Carousel, Image } from 'antd'
import aquaman from '../assets/aquaman.jpg'
import avengers from '../assets/avengers.jpg'
import dark_knight from '../assets/dark_knight.jpg'
import transformers_final from '../assets/transformers_final.jpg'

const contentStyle = {
  textAlign: 'center',
  background: '#364d79',
  height: '25vh'
};

const images = [aquaman, avengers, dark_knight, transformers_final]

export function Slider(){

  return (
    <Carousel autoplay effect='fade'>
      {
        images.map((el, idx) => (
          <div key={idx} style={contentStyle}>
            <Image src={el} preview={false} height='80vh' width='100%'/>
          </div>
        ))
      }
    </Carousel>
  )
}
