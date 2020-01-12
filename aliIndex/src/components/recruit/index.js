import React from "react";
import httpGet from "../../utils/http"
import {RecruitCss} from "./style";
export default class Recruit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lists:[],
            positionList:0,
            bool:true
        }
    }
    componentDidMount(){
       this.messageRoll();
       this.reqList();
    }
    render(){
        const {lists} = this.state;
        return(
            <RecruitCss onMouseOver={()=>this.setState({bool:false})} onMouseOut={()=>this.setState({bool:true})}>
                <div className="recHeader"> 
                    <h5>最新消息</h5>
                    <div>更多</div>
                </div>
                    <ul style={{"position":"absolute","top":`${this.state.positionList}`+"px"}}>
                          {
                              lists.map((item,index)=>{
                                  return(
                                    <li key={item.id}>
                                        <div className="username">{item.userName}</div>
                                        <div className="city">{item.city}</div>    
                                    </li>
                                  )
                              })
                        }
                        {/* <li>任德林1</li>
                        <li>任德林2</li>
                        <li>任德林3</li>
                        <li>任德林4</li>
                        <li>任德林5</li>
                        <li>任德林6</li>
                        <li>任德林7</li>
                        <li>任德林8</li>
                        <li>任德林9</li>
                        <li>任德林10</li>
                        <li>任德林11</li>
                        <li>任德林12</li>
                        <li>任德林13</li>
                        <li>任德林14</li>
                        <li>任德林15</li>
                        <li>任德林16</li>
                        <li>任德林17</li>
                        <li>任德林18</li>
                        <li>任德林19</li>
                        <li>任德林20</li> */}
                    </ul>
            </RecruitCss>
        )
    }
    reqList=()=>{
        httpGet("https://www.easy-mock.com/mock/5ddf19b786f1b9143b86d220/mockapi/alibaba/list")
        .then(data=>
                this.setState({
                    lists:data.result.list
                })
            );
    }
    messageRoll=()=>{
                const aaa = setInterval(()=>{
                    if(!this.state.bool) return;
                    if(this.state.positionList<-700){
                        
                        clearInterval(aaa)
                        setTimeout(()=>{
                        this.setState({
                                positionList:49
                            })
                            this.messageRoll()
                        },3000)
        
                    }else{
                    this.setState({
                        positionList:this.state.positionList-2
                        })
                    }
                },50)}


} 