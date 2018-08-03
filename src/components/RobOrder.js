import {Button} from 'antd-mobile';
import React from 'react';

export default class RobOrder extends React.Component {

  componentDidMount() {
        this.props.getOrderHandler();
      }

  render(){
    const data = this.props.lotsList
    console.log(this.props.lotsList)
    return(
      <div>
        <div
          style={{
          backgroundColor: "#1a81d2",
          height: 50,
          fontSize: 20,
          verticalAlign: "middle"
        }}>停车</div>

        {data.map(data=>(
          <div style={{border:'4px solid red'}}>
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img
                style={{
                height: '64px',
                marginRight: '15px'
              }}
                src='http://www.iconpng.com/png/delivering-icons/car171.png'
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', fontWeight: 'bold'}}>{data.plateNumber}</div>
                <div>停车时间:{data.parkDate}<span
                  style={{
            fontSize: '30px',
            color: '#FF6E27'
          }}></span>
          
                </div>
                
                </div>
                
              </div>
              <Button onClick={()=>this.props.robOrderHandle(data.id)}>抢单</Button>
          </div>
        ))
      }
      </div>
    );
  }
}
