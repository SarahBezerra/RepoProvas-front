import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    padding: 280px 0 50px 0;
    display: flex;
    justify-content: center;

    .input{
        width: 100%;
        height: 90px;
        border-bottom: solid 1px gray;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 130px;
        z-index: 2;

        input{
            border: solid 1px gray;
            width: 430px;
            height: 30px;
        }
    }

    .body{
        width: 700px;
    }
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;

    bottom{
        width: 119px;
        height: 16px;
    }
`

export const Tests = styled.div`

`

export const StyledLink = styled(Link)`
    color: #4673CACC;
`