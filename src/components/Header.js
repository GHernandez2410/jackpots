import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/colourPalette.css';

const Header = () => {
    const option = useSelector(state => state.option)

    const dispatch = useDispatch();

    const history = useHistory();

    const redirect = (option) => {
        history.push(option);
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="header-color">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ">
                    <Nav.Link className={`leters-color ${option === 'topGames' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'topGames' }); redirect('/') }}>Top Games</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'newGames' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'newGames' }); redirect('/newGames') }}>New Games</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'slots' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'slots' }); redirect('/slots') }}>Slots</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'jackpots' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'jackpots' }); redirect('/jackpots') }}>Jackpots</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'live' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'live' }); redirect('/live') }}>Live</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'blackJack' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'blackJack' }); redirect('/blackJack') }}>BlackJack</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'roulette' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'roulette' }); redirect('/roulette') }}>Roulette</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'table' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'table' }); redirect('/table') }}>Table</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'poker' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'poker' }); redirect('/poker') }}>Poker</Nav.Link>
                    <Nav.Link className={`leters-color ${option === 'other' ? "selected-color" : ""}`} onClick={() => { dispatch({ type: 'SELECT_MENU', option: 'other' }); redirect('/other') }}>Other</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;