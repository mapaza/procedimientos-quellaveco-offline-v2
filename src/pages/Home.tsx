import React from 'react';
import ModelViewer from '../components/ModelViewer';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {


  return (
    <>
    <main>
  <ul className="cards">
  <li>
    <div className="header">
        <i className="ph-graduation-cap"></i>
        <h2>Aislamiento y Bloqueo</h2>
    </div>
      <img src ="applications/imagenes/aislamiento-menu.png" style={{width: '38vh',
      padding: '3vh 0 0'}}/>
    <Link to="/aislamiento-y-bloqueo">
      <div>Ir a Módulo </div>
    </Link>
  </li>
  <li>
    <div className="header">
        <i className="ph-graduation-cap"></i>
        <h2>Trabajos en Altura</h2>
    </div>
      <img src ="applications/imagenes/altura-menu.png" style={{width: '38vh',
      padding: '3vh 0 0'}}/>
    <Link to="/trabajos-en-altura">
      <div>Ir a Módulo </div>
    </Link>
  </li>
  <li>
    <div className="header">
        <i className="ph-graduation-cap"></i>
        <h2>Trabajos en Caliente</h2>
    </div>
      <img src ="applications/imagenes/caliente-menu.png" style={{width: '38vh',
      padding: '3vh 0 0'}}/>
    <Link to="/trabajos-en-caliente">
      <div>Ir a Módulo </div>
    </Link>
  </li>
  <li>
    <div className="header">
        <i className="ph-graduation-cap"></i>
        <h2>Trabajos en Espacios Confinados</h2>
    </div>
      <img src ="applications/imagenes/espacios-menu.png" style={{width: '38vh',
      padding: '3vh 0 0'}}/>
    <Link to="/trabajos-en-espacios-confinados">
      <div>Ir a Módulo </div>
    </Link>
  </li>
  </ul>
</main>

             {/*   <Link to="/aislamiento-y-bloqueo">
                <button className="text-sm">Ir a Aislamiento y Bloqueo</button>
               </Link>
               <Link to="/trabajos-en-altura">
                <button className="text-sm">Ir a Trabajos en Altura</button>
               </Link>
               <Link to="/trabajos-en-caliente">
                <button className="text-sm">Ir a Trabajos en Caliente</button>
               </Link>
               <Link to="/trabajos-en-espacios-confinados">
                <button className="text-sm">Ir a Trabajos en Espacios Confinados</button>
               </Link> */}
{/* <div className="p-18 bg-gradient-to-r from-sky-700 via-cyan-600 to-sky-500"
style={{
  padding: '7vh',
  background: '#000000a6'
}}>
<h1 className="text-center text-2xl font-bold text-white"
style={{
  fontSize:'5vh'
}}
>Laboratorios Virtuales</h1>
</div>


<div className="bg-gradient-to-r from-black via-stone-700 to-stone-800" style={{height:'100vh'}}>
<section className="py-10 bg-gradient-to-r from-black via-stone-700 to-stone-800">
  <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
    style={{background: '#000000a6'}}>
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src="/assets/img/grupo-electrogeno.png" alt="Hotel Photo" />
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <button className="text-sm">Add to cart</button>
          </div>
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-white"> Inspección de Grupo Electrógeno</h2>
         

          <div className="mt-3 flex items-end justify-between">
             

            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              
              <Link to="/grupo-electrogeno">
                <button className="text-sm">Ir a Módulo</button>
               </Link>
             
            </div>
          </div>
        </div>
      </a>
    </article>
   
    </div>
</section>
</div> */}
</>
  )

}

export default Home;
