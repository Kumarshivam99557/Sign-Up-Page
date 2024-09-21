
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Registration from './assets/Registration'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Registration/>}/>
    </Routes>
  
    </>
  )
}

export default App
