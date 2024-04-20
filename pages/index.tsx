

import Head from 'next/head';
import { NextPage } from "next";
import styles from '../styles/Home.module.css';


const Home: NextPage = () => {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Alta Servicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className={`${styles.title} ${styles.smallTitle}`}>
          Alta servicio 
        </h1>

        {/* Etiqueta Nombre y Campo de Texto */}
        <div className={styles.inputGroup}>
          <label htmlFor="nombre">Nombre</label>
          <div className={styles.inputWrapper}>
            <input 
              id="nombre"
              type="text"
              className={`${styles.textInput} ${styles.redText}`}
            />
          </div>
        </div>

        {/* Etiqueta Nombre y Campo de Texto */}
        <div className={styles.inputGroup}>
          <label htmlFor="precio">Precio</label>
          <div className={styles.inputWrapper}>
            <input 
              id="precio"
              type="text"
              className={`${styles.textInput} ${styles.redText}`}
            />
          </div>
        </div>

        {/* Etiqueta Nombre y Campo de Texto */}
        <div className={styles.inputGroup}>
          <label htmlFor="costo">costo</label>
          <div className={styles.inputWrapper}>
            <input 
              id="costo"
              type="text"
              className={`${styles.textInput} ${styles.redText}`}
            />
          </div>
        </div>

        {/* Etiqueta Nombre y Campo de Texto */}
        <div className={styles.inputGroup}>
          <label htmlFor="duracion">Duracion</label>
          <div className={styles.inputWrapper}>
            <input 
              id="duracion"
              type="text"
              className={`${styles.textInput} ${styles.redText}`}
              
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
        <label htmlFor="descripcion">Descripción</label>
        <div className={styles.inputWrapper}>
        <textarea 
              id="descripcion"
        className={`${styles.textInput} ${styles.blackText} ${styles.richTextArea}`}
        placeholder="Escribe tu descripción aquí..."
        ></textarea>
        </div>
        </div>

        <div className={styles.descriptionContainer}>
        {/* Imagen */}
        <div className={styles.imageWrapper}>
        <img 
        src="/images/Pompadour.jpg" 
        className={styles.image}
        />
        </div>
        {/* Separador */}
      <div className={styles.separator}></div>


        {/* Descripción */}
        <div className={`${styles.description} ${styles.smallText}`}>
      <p>Estilo Pompadour.jpg    </p>
      </div>

      {/* Separador */}
    <div className={styles.separator}></div>

   {/* Botón Borrar */}
    <div className={styles.deleteButton}>
      
    <button className={styles.deleteButton}>BORRAR</button>
    </div>
</div>

<div className={styles.actionButtons}>
  <button className={styles.customButton}>CARGAR FOTOS</button>
  <button className={styles.customButton}>GUARDAR </button>
</div>








        


        

  
  



        



      </main>

      



      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Home;
