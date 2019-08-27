import React from 'react'
import './ui.less'
import {Card, message, Carousel } from 'antd'
export default class carousel extends React.Component{
  onChange = (a, b, c) => {
    message.info( a + ' Hello World ' + b + ' ' + c)
  }
  render () {
    return (
      <div>
         <Card title="轮播" className="card-wrapper">
          <Carousel afterChange={this.onChange} autoplay>
              <div>
                <h3>welcome to Anhui</h3>
              </div>
              <div>
                <h3>welcome to Lu'an</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
        </Card>
         <Card title="图片轮播" className="slider-wrapper">
            <Carousel autoplay effect="fade" >
              <div>
                <img src="/assets/carousel-img/carousel-1.jpg" alt=""/>
              </div>
              <div>
                <img src="/assets/carousel-img/carousel-2.jpg" alt=""/>
              </div>
              <div>
                <img src="/assets/carousel-img/carousel-3.jpg" alt=""/>
              </div>
              <div>
                <img src="/assets/carousel-img/carousel-1.jpg" alt=""/>
              </div>
            </Carousel>
        </Card>
     </div>
    )
  }
}