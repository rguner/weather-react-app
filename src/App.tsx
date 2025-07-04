import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WeatherPage} />
      </Switch>
    </Router>
  );
};

export default App;