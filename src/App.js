import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './views/Login'
import Chat from './views/Chat'
import { Col, Container, Row } from 'react-bootstrap'
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/chat" component={Chat} />
        {/* <Route component={Error} /> */}
      </Switch>
    </main>
  );
}

export default App;
