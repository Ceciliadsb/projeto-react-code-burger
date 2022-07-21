import styled from 'styled-components'
import burger from '../../image/burger 1.svg'

export const Container = styled.div`

background-color: black;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;

`;

export const Image = styled.img`
margin-top: 30px;


`;
export const H1 = styled.h1`
color: white;


`;
export const InputLabel = styled.p`


font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-right: 185px;


`;
export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
flex: none;
order: 0;
flex-grow: 0;
margin-left: 25px;
width: 342px;
height: 58px;
margin-bottom: 34px;

`;
export const ContainerItens = styled.div`
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 120vh;


`;
export const Button = styled.button`

background: #D93856;
margin-left: 35px;
width: 342px;
height: 68px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

text-decoration: none;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`;