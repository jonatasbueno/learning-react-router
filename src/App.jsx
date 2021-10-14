import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Cabecalho from './components/Cabecalho';
import Pagina404 from './paginas/Pagina404';
import Post from './paginas/Post';
import './assets/css/base/base.css'

function App() {
  return (
    // Roteador, possui varias rotas filhas
    <Router>
      <Cabecalho />
      {/* Switch garante que será executado apenas uma rota por vez */}
      <Switch>
        {/* exact diz que a rota deve ser exatamente path desconsiderando rotas filhas   */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
