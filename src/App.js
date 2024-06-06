import Home from './paginas/Home'
import InicioSesion from './paginas/InicioSesion'
import Registro from './paginas/Registro'
import Perfil from './paginas/Perfil'
import Reporte from './paginas/CrearReportes'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

 
          <Route path='/' element={<InicioSesion></InicioSesion>}></Route>
          <Route path='/registro' element={<Registro></Registro>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/perfil' element={<Perfil></Perfil>}></Route>
          <Route path='/reporte' element={<Reporte></Reporte>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
