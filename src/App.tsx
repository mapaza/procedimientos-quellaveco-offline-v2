import React, { useEffect, useState }from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AislamientoYBloqueo from './pages/AislamientoYBloqueo';
import TrabajosEnAltura from './pages/TrabajosEnAltura';
import TrabajosEnCaliente from './pages/TrabajosEnCaliente';
import TrabajosEnEspaciosConfinados from './pages/TrabajosEspaciosConfinados';

const App: React.FC = () => {
  const [isInIframe, setIsInIframe] = useState(false);
  useEffect(() => {
    // Comprueba si la aplicación está siendo cargada en un iframe
    const inIframe = (): boolean => {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    };

    setIsInIframe(inIframe());
  }, []); 

 /* const  rutaServidor="/paseoquellaveco";  // Produccion  */
    const  rutaServidor="/"; // Develop  
  return (
    <> 
    <>
    <Router>
     <Routes>
     {/*  */}
     <Route path={rutaServidor} element={<Home />}/>
       <Route path="/aislamiento-y-bloqueo" element={<AislamientoYBloqueo/>}/>
       <Route path="/trabajos-en-altura" element={<TrabajosEnAltura/>}/>
       <Route path="/trabajos-en-caliente" element={<TrabajosEnCaliente/>}/>
       <Route path="/trabajos-en-espacios-confinados" element={<TrabajosEnEspaciosConfinados/>}/>
           
      
       </Routes>
       <GlobalStyles />
      </Router>
  </>
    {/* {isInIframe ? (
     <Router>
     <Switch>
     
       <Route exact path={rutaServidor} component={Home} />
      
       </Switch>
       <GlobalStyles />
      </Router>
    ) : (
      <>
      <div className="text">
        <img src="assets/imagenes/logo-eduverso.png" style={{height:"20vh"}}/>
      <div>ERROR</div>
      <h1>404</h1>
     
      <div>ACCESO DENEGADO</div>
    </div>
    
    <div className="astronaut">
      <img src="https://static.vecteezy.com/system/resources/previews/008/507/069/original/3d-astronaut-flies-in-open-space-rigged-character-you-can-make-any-pose-cartoon-spaceman-png.png" alt="" className="src"/>
    </div>
    <GlobalStyles />
    </>
    
    )}  */}
  </>
  
   
  );
}

export default App;
