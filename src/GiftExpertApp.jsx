import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    
    const onAddCategory = (newCategory)=>
    {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories]) 
    }
  
  
    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
    />
    
    {
        categories.map(( category ) =>(
            <GifGrid
                key={category}
                category={category} />
        ))
    }
    
    </>
  )
}

/*
1ra parte: creando lista de categorías

Más acerca de Hooks.
Los hooks son parte del alma de React.
Son funciones que logran modificar algo en el código HTML muy específico,
tan delicado como por ejemplo el contador que se mueve con un botón.
Escribes setState y undes TAB. En la lista que aparece, el primer valor trata
sobre "aquello que se va a desplegar" y el segundo valor trata sobre
"de cuanto en cuanto aumenta" (cuando se va a trabajar con valores 
numéricos, no se usa en strings). Esto se le asigna el valor useState la cual
es una lista que trata de "el valor inicial que se desplegará o la
cantidad de cosas que se mostrarán". Eso es todo. Eso es un hook.
Se le llama hook porque hace gancho desde el primer valor de la lista hacia
el valor asignado del useState y luego hace "linking" en el código HTML.

Para éste caso en específico se usa un método el cual es .map y hace que
se despliege en la lista (<ul></ul>) todo lo que contiene el useState.
Tambien requiere una KEY el cual es el nombre de la función dentro del
<li>

2da parte: agregar una categoría (7, 19)

Para ésta parte fijarse en la línea 6. Ésta nueva función trata de adicionar
categorías. Recuerdan que el segundo elemento de la lista de un hook nos dice
sobre "de cuanto en cuanto se suma" para números, pues en letras, para ésta
ocasión nos dice el nuevo valor a adicionar.
La función cita setcategories y dentro de los parétensis se hace una lista
cuyo primer valor es la sumatoria del primer elemento (categories) la cual
se agrega colocando los tres puntos (...) y el segundo valor es el 
"nuevo valor" pada añadir. En la línea 16 se crea el evento onClick la cual
cita por medio de desestructuración javascript ({}) el nombre de la nueva
función onAddCategory. Cada vez que se unda este nuevo botón en la página
web se adicionará el nuevo valor "NuValue".

3ra parte: Componente AddCategory (2, 17)

4ta parte:
Se borra la línea 20: <button onClick={onAddCategory}>Agregar</button>

5ta parte: emitir un evento al padre

Se hace un nuevo cambio a la linea 19 y se hace cambio a la función de la
línea 7 (l0) de tal suerte que la función se invoca en el AddCategory.
Estamos trabajando en optimizar la adición de un elemento a la lista.

Se coloca un nuevo prop de onAddCategory el cual es newCategory el cual
se cita internamente en su función (clásico del prop que se cita 
inmediatamente)

En la línea 10 se actualiza la función.

6ta parte: Validar que sean únicos los nombres

Se añade en la línea 9 un IF el cual valida en caso de que exista una
categoría

7ma parte: Nuevo componente

Se hacen cambios en el cuerpo de <ol> (líneas 25 a 34).
Lo que se hace aquí es conectar con otro archivo jsx para optimizar la
creación de categorías. El GifGrid es la función que estamos evocando.
Recordar tanto exportar (en su propia hoja jsx) como importar en la hoja
de trabajo.
Nótese la existencia del key para su correcto funcionamiento.
La filosofía es "componentes fáciles y sencillos de escribir"
Con esto el <ol></ol> ya se puede borrar.
*/