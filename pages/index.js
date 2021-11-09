import Head from 'next/head'
import { Fragment } from 'react'
import estilos from "../styles/main.module.css";
import Image from "next/image";
import imagen_1 from "../public/Img/imagen-1.png";
import imagen_2 from "../public/Img/imagen-2.jpg";
import imagen_3 from "../public/Img/imagen_3.jpg";
import imagen_4 from "../public/Img/imagen_4.jpg";
import imagen_5 from "../public/Img/imagen_5.jpg";
import { useRouter } from 'next/router';





export default function Home() {


  const router = useRouter();

  return (
    <Fragment>
    <Head>
        <title>Natura</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={estilos.container}>
  

  
    <div className={estilos.contenedor_titulo}>
      <div className={estilos.titulo}>
      <h1>Visual <br></br>References<br></br> moodBoard</h1>
      </div>
     </div>

      <section className={estilos.contenedor_imagene_1}>

       
    
        <div className={estilos.imagen_1} onClick={()=>{router.push("/secion1")}}>
        <p className={estilos.texto_rotado_1}>Cuida tu Piel</p>
        <Image
        src={imagen_1}
        width={500}
        height={500}
        alt="Imagen 1"/>
        <p className={estilos.numero}>01</p>
        </div>
        <p className={estilos.parrafo_1_oculto}>Checkout Pro es la integración que te permite cobrar a través de nuestro formulario web desde cualquier dispositivo de manera simple, rápida y segura.</p>
      
      </section>

      <section className={estilos.contenedor_imagene_2}>
      <p className={estilos.parrafo_2_oculto}>Reduce el tiempo de integración usando nuestras librerías oficiales. Con ellas facilitamos tu proceso de desarrollo en los lenguajes más usados del mercado.</p>
      <div className={estilos.imagen_2} onClick={()=>{router.push("/secion2")}}>
      <p className={estilos.texto_rotado_2}>Hidrata y cuida tu piel con Natura</p>
      <Image
        src={imagen_2}
        width={450}
        height={550}
        alt="Imagen 2"/>
        <p className={estilos.numero}>02</p>
        </div>
       
      </section>


    <section className={estilos.contenedor_parrafos}>
      <p className={estilos.parrafo_1}>Checkout Pro es la integración que te permite cobrar a través de nuestro formulario web desde cualquier dispositivo de manera simple, rápida y segura.</p>
      <p className={estilos.parrafo_2}>Reduce el tiempo de integración usando nuestras librerías oficiales. Con ellas facilitamos tu proceso de desarrollo en los lenguajes más usados del mercado.</p>
    </section>

    <div className={estilos.contenedor_imagene_3}>

      <div className={estilos.imagen_3} onClick={()=>{router.push("/secion3")}}>
      <p className={estilos.texto_rotado_3}>Hidrata y cuida tu cabello</p>
      <Image
        src={imagen_4}
        width={300}
        height={350}
        alt="Imagen 3"/>
     <p className={estilos.numero}>03</p>
      </div>
      
    </div>

    <div className={estilos.contenedor_imagene_4}>

      <div className={estilos.imagen_4} onClick={()=>{router.push("/secion4")}}>
      <p className={estilos.texto_rotado_4}>Hidrata y cuida tu cabello</p>
      <Image
        src={imagen_5}
        width={350}
        height={350}
        alt="Imagen 3"/>
      <p className={estilos.numero}>04</p>
      </div>

      </div>

      <div className={estilos.contenedor_imagene_5}>

    <div className={estilos.imagen_5} onClick={()=>{router.push("/secion5")}}>

      <div>
      <p className={estilos.texto_rotado_5}>Hidrata y cuida tu cabello</p>
      <Image
      src={imagen_3}
      width={500}
      height={500}
      alt="Imagen 3"/>
      <p className={estilos.numero}>05</p>
      </div>
      </div>

      <div className={estilos.contenedor_texto_portada}>
        <div className={estilos.texto_portada}> <h1>Natura usa productos 100% naturales sin quimicos dañinos para tu salud.</h1></div>
      </div>
      </div>

     </div>

    
    
    </Fragment>
  )
}
