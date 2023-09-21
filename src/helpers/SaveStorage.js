export const SaveStorage = (key, element) => {
    // conseguir elementos que ye tengo en localstorage
    let items = JSON.parse(localStorage.getItem(key))
    console.log(items)
    // comprobar si es un array
    if(Array.isArray(items)){
      // añadir elemento nuevo
      items.push((element))
    }else{
      // crear array con la peli
      items = [element];
    }
    // guardar
    localStorage.setItem(key, JSON.stringify(items))
  }