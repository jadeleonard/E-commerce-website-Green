
import {Routes,Route} from "react-router-dom"
import About from './publicPages/About'
import SignUp from './publicPages/SignUp'
import SignIn from "./publicPages/SignIn"








const App = () => {
  return (
      <Routes>
        
        <Route path='/' element={<About />} />

        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      
      </Routes>
  )
}

export default App
