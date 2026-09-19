
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import { ToastContainer} from 'react-toastify';

function App() {
  // const url = import.meta.env.VITE_API_URL
  const url = 'http://localhost:4000'
  console.log(url)
  return (
    <div>
      <ToastContainer/>
       <Navbar/>
       <hr />
       <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Order url={url}/>}/>
        </Routes>
       </div>
    </div>
  )
}

export default App
