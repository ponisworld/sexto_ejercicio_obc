const listaCompra = 
    [
        'Huevos',
        'Leche',
        'Harina',
        'Pasta',
        'Comida de gatos'
    ];

listaCompra.push('Aceite de Girasol');

listaCompra.pop();


const pelisFavoritas = 
    [
        {titulo: 'Olvídate de mí', director: 'Michel Gondry', fecha: 2004},
        {titulo: 'El número 23', director: 'Joel Schumacher', fecha: 2007},
        {titulo: 'Shutter Island', director: 'Martin Scorsese', fecha: 2010}
    ];

const pelisNuevasFavoritas = pelisFavoritas.filter(
        valor => valor.fecha >= 2010
    )

const directores = pelisFavoritas.map(
    valor => valor.director
)

const titulos = pelisFavoritas.map(
    valor => valor.titulo
)

const concatenar = directores.concat(titulos);

const propagar = [...directores, ...titulos];