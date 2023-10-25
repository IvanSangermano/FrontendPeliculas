export const GuardarEnStorage = (key, elemento) => {
    
    let elementos = JSON.parse(localStorage.getItem(key))

    //compronbar si esta vacio el array
    if(Array.isArray(elementos)){
        elementos.push(elemento)
    } else{
        elementos = [elemento]
    }

    localStorage.setItem('pelis', JSON.stringify(elementos))

    console.log(elementos)
  }