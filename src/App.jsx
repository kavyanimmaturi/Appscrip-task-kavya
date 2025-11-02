import './App.css'
import Filters from './components/Filters'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  

  return (
    <div className='app'>
        <Navbar/>
        <Filters/>
        <Products/>
        <Footer/>
      </div>
  )
}

export default App
