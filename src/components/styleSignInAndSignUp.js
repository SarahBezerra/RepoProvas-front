import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Form = styled.div`
    width: 470px;
    text-align: center;

    input {
        width: 100%;
    }

    footer{
        display: flex;
        justify-content: space-between;
    }

`
export const StyledLink = styled(Link)`
    color: #4673CACC;
`