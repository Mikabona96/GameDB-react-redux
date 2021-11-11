import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import GameDetail from './components/GameDetail';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path={'/game/:id'} element={<GameDetail style={{position: 'absolute', left: '0%'}} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
