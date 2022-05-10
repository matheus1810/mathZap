import styled from "styled-components"

export const Container = styled.div`
background-color:lightcoral;

`
export const Section = styled.div`
display:flex;
justify-content:space-between;
height:10vh;
background-color:lightgray;
border-right:1px solid black;
`
export const ImageIconContainer = styled.div`
margin:auto 0px auto 15px ;
height:45px;
min-width:45px;

img{
    border-radius:50%;
    width:100%;
    height:100%;
}
`
export const IconsContainer = styled.div`
display:flex;
margin:auto 20px auto 0px ;
i{
    margin:20px;
    font-size:1.5em;
}
`
export const FormContainer = styled.div` 
    text-align:center;
    border-bottom:1px solid gray;
input{
    width:85%;
    height:40px;  
    margin:10px 0 10px 0;
    border:none;
    border-radius:5px;

}
`