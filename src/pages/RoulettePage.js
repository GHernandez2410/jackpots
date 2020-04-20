import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListOfGames from '../components/GameList';

import '../style/colourPalette.css'

const RoulettePage = () => {
    const [games, setGames] = useState([]);

    const updateInfo = () => {
        const jackpotsData = require('../data/jackpots.json');
        // Build an array of items with all the info
        let array = [];
        for (let i = 0; i < games.length; i++) {
            let found = false;
            for (let j = 0; j < jackpotsData.length && !found; j++) {
                if (games[i].id === jackpotsData[j].game) {
                    found = true;
                    array[i] = {
                        "categories": games[i].categories,
                        "name": games[i].name,
                        "image": games[i].image,
                        "id": games[i].id,
                        "amount": jackpotsData[j].amount,
                        "isNew": games[i].isNew,
                        "isTop": games[i].isTop
                    }
                } else {
                    array[i] = {
                        "categories": games[i].categories,
                        "name": games[i].name,
                        "image": games[i].image,
                        "id": games[i].id,
                        "amount": 0,
                        "isNew": games[i].isNew,
                        "isTop": games[i].isTop
                    }
                }
            }
        }
        setGames(array);
    }

    const getInfo = () => axios.get('/23a09e35581fa0e82ab3cbfb853784da/v1/games.json')
        .then(response => {
            const jackpotsData = require('../data/jackpots.json');
            let array = [];
            for (let i = 0; i < response.data.length; i++) {
                let found = false;
                // filter by category
                if (response.data[i].categories.includes('roulette')) {
                    // Build an array of items with all the jackpots info 
                    let isNew = response.data[i].categories.includes('new')
                    let isTop = response.data[i].categories.includes('top');
                    for (let j = 0; j < jackpotsData.length && !found; j++) {
                        if (response.data[i].id === jackpotsData[j].game) {
                            found = true;
                            array[i] = {
                                "categories": response.data[i].categories,
                                "name": response.data[i].name,
                                "image": response.data[i].image,
                                "id": response.data[i].id,
                                "amount": jackpotsData[j].amount,
                                "isNew": isNew,
                                "isTop": isTop
                            }
                        } else {
                            array[i] = {
                                "categories": response.data[i].categories,
                                "name": response.data[i].name,
                                "image": response.data[i].image,
                                "id": response.data[i].id,
                                "amount": 0,
                                "isNew": isNew,
                                "isTop": isTop
                            }
                        }
                    }
                }
            }
            setGames(array)
        });

    useEffect(() => {
        getInfo();
        let id = setInterval(() => {
            updateInfo();
        }, 5000);
        return () => clearInterval(id);
    }, [games]);

    return (
        <div className="container web-color">
            <div className="row">
                <ListOfGames games={games} />
            </div>
        </div>
    )
}

export default RoulettePage;