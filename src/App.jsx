import Navbar from './components/Navbar';
import Home from './components/Home'
import Projects from './components/Projects';
import About from './components/About';
import Experiance from './components/Experience';
import Footer from './components/Footer'
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
     <div>
        <Navbar />
       <Home />
       <About />
       <Projects />
       <Experiance/>
       <Contact />
       <Footer/>
     </div>
     <Toaster />
    </>
  );
};

export default App;