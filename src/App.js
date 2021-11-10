import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import GameDetail from './components/GameDetail';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path={'/game/:id'} element={<GameDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
