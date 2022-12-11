//import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route} from 'react-router-dom';


const App = () => {
  return (
<main>
      <NavBar />     
<Routes>
   <Route path="/" component={Home} />
   <Route path="/about" component={About} />
   <Route path="/favorite" component={Favorite} />
   <Route path="*" component={NotFound} />
</Routes>
 </main>
  );
};

export default App;