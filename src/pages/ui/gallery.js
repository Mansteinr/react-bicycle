import React from 'react'
import './ui.less'
import {Card, Row, message, Col } from 'antd'
export default class Gallery extends React.Component{
  openGallery = (item) => {
    message.info('Hello World ' + item,)
  }
  render () {
    const imgs = [
      ['1.png','2.png','3.png','4.png','5.png'],
      ['6.png','7.png','8.png','9.png','10.png'],
      ['11.png','12.png','13.png','14.png','15.png'],
      ['16.png','17.png','18.png','19.png','20.png'],
      ['21.png','22.png','23.png','24.png','25.png']
    ]
    const imgList = imgs.map((list) => list.map((item) => 
      <Card
        style={{ marginBottom: 10 }}
        key={item}
          cover={<img src={'/assets/gallery/'+item} onClick={()=>this.openGallery(item)}/>}
      >
          <Card.Meta
              title="React Admin"
              description="I Love Imooc"
          />
      </Card>
    ))
    return (
      <div>
         <Card title="全局提示框" className="card-wrapper">
          <Row gutter={10}>
            <Col md={5}>
              {
                console.log(imgList)

                // imgList[0]
              }
            </Col>
            
            <Col md={5}>
              {imgList[1]}
            </Col>
            
            <Col md={5}>
              {imgList[2]}
            </Col>
            
            <Col md={5}>
              {imgList[3]}
            </Col>
            
            <Col md={5}>
              {imgList[4]}
            </Col>
          </Row>
        </Card>
     </div>
    )
  }
}