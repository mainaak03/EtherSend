import './App.css'
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import MainEx from './components/main/mainEx';
import Infographic from './components/infographic/infographic';

function App() {
  return (
    <div className="bg-gray-950 overflow-auto h-screen scroll-smooth">
      <Landing/>
      <MainEx/>
      <Infographic/>
      <Footer/>
    </div>
  )
}

export default App;