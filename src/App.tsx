
import { Home } from './pages';
import { MainTemplate } from './templates/MainTemplate'
import { Route, Routes } from 'react-router-dom';


function App() {


  return (

    <Routes>
      <Route 
      path='/*' 
        element={
          <MainTemplate />
        }
      />
      <Route 
        path='/home'
        element={
          <Home/>
        }
      />
    </Routes>
  )
}

export default App
