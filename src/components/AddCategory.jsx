/* rafc + TAB */
/* useState y elegir el Snippet (línea 7) */
import {useState} from "react"

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState()

    const onInputChange = ({target})=>
    {
        setInputValue(target.value)
    }

    const onSubmit = (event)=>
    {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return
        //setCategories(categories=>[inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
  
    return (
        <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifts"
            value={inputValue}
            onChange={onInputChange}
        />
        </form>
  )
}

/*
Componente AddCategory (formulario)

Las buenas prácticas de React indican que cada component se hacen en su 
propio archivo jsx. Veamos sus líneas:
3. Se importa el jutsu para hacer hook
5. Se hace la función (para exportación) que lleva el nombre del nuevo
componente. Adentro lleva un hook 
9-12. Esta es la manera correcta en la que debe ir una función que vaya
a ser desplegada en el atributo "onChange" del formulario para que el
usuario pueda interactuar en tiempo real haciendo cambios en el "renglón"
a su gusto.
14-17. Esta es la función que recibirá el atributo FORM (línea 21) y
permitirá o mas bien evitará que se recargue todo el formulario cada vez
que "se cita" sinó que solo cambie el "renglón"
22. Código HTML que incluye el formulario. En éste ejemplo se usan los
valores canónicos "type, placeholder, value y onChange". Estos dos
últimos reciben las funciones antes citadas.
23. Etiqueta <form> para desplegar en HTML. Éste recibe la función hecha
en la línea 14 para que se actualize "solo el pedacito o renglón" y no
"recargar" todo el formulario.
27. Aquí VALUE tiene el valor de inputValue el cual toma el valor inicial
del hook.
28. onChange es un atributo de los formularios el cual es obligatorio para
que existan cambios "en tiempo real" cuando el usuario escribe en el
"renglón", de lo contrario se desplegará como "only read".
Para eso recibe la función OnInputChange

Comunicación entre componentes:
En la línea 5 en el paréntesis se coloca el nombre de la función que se 
usará para definir la categoría en el formulario. Se hace 
desestructuradamente
18. Se coloca la función setCategories y en su función una lista con
el nombre de inputValue (primer elemento del hook al inicio de la hoja)
17. Se borra un console.log
Aquí se coloca un IF que impedirá que se grabe o pase a la lista elementos
de menos de 2 caracteres
19. En ésta línea territorio de la función "onSubmit" se coloca una 
función que colocará una cadena vacía una vez se haya dado enter.
Esto permitirá borrar el renglón una vez se añada un elemento a la lista.
23. Actualización: se estaba enviando un atributo a una función en la misma
línea. Javascript moderno permite cancelar la función y el atributo de la
función y dejar solo el nombre desestructurado de la función.

Emitiendo evento al padre

Se actualiza la línea 5 y se coloca en el paréntesis desestructurado
el onNewCategory que viene de la otra página.
Luego se actualiza la línea 19 con dicha función y en su parétensis
el inputValue.trim() para que conecte con el IF.
*/
