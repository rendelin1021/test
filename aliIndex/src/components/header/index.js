import React from 'react';
import {HeaderCss} from "./style"

export default class Header extends React.Component{
  render(){
    return(
      <HeaderCss>
          <div className="head-main">
              <a href="#" className="logo">
                  <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" />
              </a>
              <div className="cutOff">|</div>
              <ul>
                <li>社招官网</li>
                <li className="signLi">首&nbsp;&nbsp;页</li>
                <li>社会招聘</li>
                <li>校园招聘</li>
                <li>了解阿里</li>                
                <li>个人中心</li>
              </ul>
          </div>
      </HeaderCss> 
    )
  }
}



