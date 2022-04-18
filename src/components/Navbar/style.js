import { BsNewspaper } from 'react-icons/bs';
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: ${props => props.navbar ? 'var(--dark-green)' : 'var(--dark-green)'};
    opacity: ${props => props.navbar ? 0.8 : 1};
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    text-transform: uppercase;
    position: sticky;
    top: 0;
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;
    -webkit-transition: opacity 300ms linear;
    -ms-transition: opacity 300ms linear;
    transition: opacity 300ms linear;
`;

export const NavLink = styled(Link)`
    color: #fffafa;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: var(--green-color);
    }
    &.active {
        color: var(--green-color);
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
    @media screen and (max-width: 768px) {
        /* display: none; */
    }
`;

export const Icon = styled(BsNewspaper)`
    display: flex;
    align-items: center;
    margin-right: 24px;
    font-size: 30px;
    color: white;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* @media screen and (max-width: 768px) {
        display: none;
    } */

    a{
        text-decoration: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;
