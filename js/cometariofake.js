function mostrar(id) {
        
    const elems = document.getElementsByClassName(id);

    // loop all collection elements
    for (let i = 0; i < elems.length; i++) {

      parente = elems[i].parentElement;

      if(parente.style.display == 'none'){
        parente.style.display = 'block';
      } else {
        elems[i].parentElement.style.display = 'none';
      }
      
    }
     
  }