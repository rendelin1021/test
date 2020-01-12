import styled from "styled-components";
export const RecruitCss=styled.div`
    width: 42.5rem;
    height:15rem;
    margin:1.5rem 0 0 10rem;
    box-shadow: 0 0 0.25rem #ccc;
    overflow:hidden;
    position: relative;
    .recHeader{
        height:2.5rem;
        border-bottom:0.05rem solid rgba(31,56,88,0.06);
        line-height:2.5rem;
        padding:0 0.7rem;
        font-size:0.7rem;
        background:white;
        color:#000;
        h5{
            float:left;
        }
        div{
            float:right;
        }
    }
       ul{
       position:absolute;
       z-index:-1;
       left:0;
       padding-left:2.5rem;
      
      
        li{
                display:block;
                height:2.5rem;
                font-size:0.7rem;
                .username{
                  float:left;
                  color:#3C99D8;
                  width:15rem;
                }
                .city{
                    float:left;
                    width:10rem;
                }
            }
        }
`