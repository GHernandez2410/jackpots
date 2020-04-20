import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './Header';

import TopGamesPage from '../pages/TopGamesPage';
import NewGamesPage from '../pages/NewGamesPage';
import SlotsPage from '../pages/SlotsPage';
import JackpotsPage from '../pages/JackpotsPage';
import LivePage from '../pages/LivePage';
import BlackJackPage from '../pages/BlackJackPage';
import RoulettePage from '../pages/RoulettePage';
import TablePage from '../pages/TablePage';
import PokerPage from '../pages/PokerPage';
import OtherPage from '../pages/OtherPage';


class App extends React.Component {
  state = {
    history: createBrowserHistory()
  }
  

  render() {
    return (
        <Router history={this.state.history}>
          <Header />
          <Switch>
            <Route path={'/'} exact strict component={TopGamesPage} />
            <Route path={'/newGames'} exact strict component={NewGamesPage} />
            <Route path={'/slots'} exact strict component={SlotsPage} />
            <Route path={'/jackpots'} exact strict component={JackpotsPage} />
            <Route path={'/live'} exact strict component={LivePage} />
            <Route path={'/blackJack'} exact strict component={BlackJackPage} />
            <Route path={'/roulette'} exact strict component={RoulettePage} />
            <Route path={'/table'} exact strict component={TablePage} />
            <Route path={'/poker'} exact strict component={PokerPage} />
            <Route path={'/other'} exact strict component={OtherPage} />
          </Switch>
        </Router>
    );
  }
};

export default App;
