import styled from "styled-components"
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <Container>
            <img src={logo} alt="logo RepoProvas"/>
        </Container>
    )
}

export const Container = styled.div`
    background-color: #fff;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;

    img{
        height: 50px;
    }
`