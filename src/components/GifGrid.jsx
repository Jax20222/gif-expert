import { GifItem } from "./GifItem"
import {useFetchGifs} from "../hooks/useFetchGifs"

export const GifGrid = ({category}) =>
{
    const {images, isLoading} = useFetchGifs(category)

    console.log({isLoading})

    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image)=>(
                        <GifItem 
                            key={image.id} 
                            {...image}
                        />
                    ))
                }    
            </div>              
        </>
    )
}

// Fetch API
// En esta clase se vió como conectar una api key (giphy) con nuestra app.
// Para limpiar el código se envió toda la función a otra hoja llamada
// getGifs.js

// UseState
// Vamos a ver como corregir ese "error" de que React esté llamando a las 
// funciones 2 veces. Esto hace parte de la naturaleza de React, el 
// "re-dibujar" dos veces cuando se le evoca una función a tratar.
// Empezamos por importar useState y adicionar su jutsu justo debajo de donde
// empieza la función (línea 6). En la línea 13 evoco el COUNTER del
// useState.
// Para evitar esa "duplicación" vamos al main.jsx y desactivamos el
// modo estricto <React.StrictMode> (comentado).
// Posteriormente importamos el useEffect y hacemos su jutsu justo después
// del hook del useState (linea 8). En su cuerpo coloco la función de
// getGifs. Recordar que el arte del useEffect termina (por lo menos
// en éste caso) con una lista vacía. 
// Ahora cuando voy al browser y undo el botón (creado en la línea 18)
// evidenciamos que ya no se "recarga" nada, solo hace cambios en el
// contador. Gualá. 
// Finalmente volvemos al main.jsx y re activamos el modo estricto.
// Terminada ésta lección el profesor borra gran parte de lo hecho pero
// aquí se deja comentado para que quede de referencia.
// Por alguna razón no se deja comentar el contenido del tag que borró
// entonces se cita aquí: (esto iba debajo del <h3>)
// <h5>{counter}</h5>  
// <button onClick={()=> setCounter(counter + 1)} >+1</button>

// Mostrar los títulos en las imágenes
// Empiezo por hacer un hook iniciando la función GifGrid (8).
// Luego hago una función asíncrona para el objetivo de colocar los
// nombres a las imágenes llamada getImages(10).
// Posteriormente se pide la tarea de desplegar esto en el browser.
// Solución:
// En la línea 25 inicio la realización de la lista la cual es una 
// función con el método MAP. A continuación se hacen las desestructuraciones
// correctas y mínimas para desplegar estrictamente lo citado a máxima
// velocidad y efectividad.

// ClassName
// Se hace un cambio en la línea 28 y se evoca una nueva función que vive
// en otra hoja. Lo que era un OL ahora es un DIV.

// Custom hooks
// Para esta ocasión se comentó toda la primera función y en su lugar
// se colocó una super resumida versión customizada de hook (8).
// Lo que se comentó se cortó y se envió a la nueva hoja useFetchGifs