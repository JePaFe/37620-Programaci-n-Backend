function mostraLista(lista) {
    // if (lista.length == 0) {
    //     console.log('Lista vacia');
    // } else {
    //     console.log(lista);
    // }
    let resultado = lista.length == 0 ? 'Lista vacia' : lista;
    console.log(resultado);
}

mostraLista([]);
mostraLista([1, 2, 3]);