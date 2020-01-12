import styled from "styled-components";

export const HeaderCss = styled.div`
    background-color: #2C2F33;
    height: 2.6rem;    
    .head-main{
        width: 50rem;
        margin: 0 auto;
        height:2.6rem;
        padding-top:0.8rem;
        overflow: hidden;
        font-family: PingFangSC-Regular;        
       .logo{
           display: block;
           width:6.25rem;
           height: 1rem;
           float: left;
           img{
               width:100%;
               height:1rem;
           }
       }
       .cutOff{
        float: left;
        font-style: normal;
        color: white;
        font-size: 1rem;
        margin: 0 0.5rem;
       }
       ul{
           float:left;
           li{
               font-size:0.7rem;
               float:left;
               color: white;
               display: inline;
               padding: 0rem 0.75rem;
           }
           .signLi{
               color:#F37327;
           }
       }


    }
`