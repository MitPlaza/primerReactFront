import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import MyCard from './componentes/MyCard';
import Footer from './componentes/Footer';


const App = () => {  
  return (
    <>
    <Header titulo='Adopta un Perrito' />
    <div className="container">
    <div className="row encajonar">
    <div className='col-md-3'>
   <MyCard img='https://img.freepik.com/foto-gratis/perro-pug-aislado-fondo-blanco_2829-11409.jpg' titulo='Rocco' descripcion='Un perro de tamaño pequeño con un corazón gigante. Hazte amigo de Rocco y experimenta un amor incondicional y muchos pelos!' bg='danger' etiqueta='Pug' />
   </div>
   <div className='col-md-3'>
   <MyCard img='https://img.freepik.com/foto-gratis/disparo-vertical-lindo-perro-feliz-sentado-suelo-cerca-flores-amarillas_181624-12664.jpg' titulo='Kuru' descripcion='Lleno de energía y listo para jugar. !Dale a Kuru el hogar amoroso que se merece!' bg='success' etiqueta='Labrador' />
   </div><div className='col-md-3'>
   <MyCard img='https://img.freepik.com/foto-gratis/vista-frontal-lindo-perro-sentado_23-2148423669.jpg' titulo='Messi' descripcion='Es juguetón, amigable y se lleva, !Haz de Messi parte de tu familia hoy mismo!' bg='primary' etiqueta='Collie' />
   </div>
   <div className='col-md-3'>
   <MyCard img='https://img.freepik.com/fotos-premium/perro-sentado-hierba-campo_1048944-9293995.jpg' titulo='Princesa' descripcion='Es una compañera leal y cariñosa que adora los mimos y los abrazos. !Ayuda a Princesa a encontrar a su final feliz!' bg='warning' etiqueta='Dachshund' />
   </div>
   </div>
   </div>
   <Footer />
    </>
  );
}

export default App;
