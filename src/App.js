import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import "./App.css"
import { useStateContext } from './context/ContextProvider'
import Navbar from './components/Navbar';

function App() {
  const { activeMenu, mode } = useStateContext()
  return (
    <div className={mode ? 'dark bg-[#0f172a] overflow-auto' : ''}>
    <div 
        className={mode ? 'dark bg-[#0f172a] min-h-[100vh]' : ''}
    >
      <BrowserRouter>
        <div className='flex relative '>
          <div className={`${activeMenu ? "w-52" : "w-12"} fixed sidebar duration-200`}>
            <Sidebar />

          </div>
        </div>




        <div className={`min-h-screen ${activeMenu ? "md:ml-52" : "md:ml-12"} `}>

          <div className='fixed md:static bg-main-bg dark:bg-[#0f172a] navbar w-full   '>
            <Navbar />
          </div>

          <div className='dark:bg-[#0f172a] '>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App;
