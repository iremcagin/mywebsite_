import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import {Contacts} from "./components/Contacts"
import {Route, HashRouter, Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contacts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
