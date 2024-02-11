function Area() {
    let Base = parseInt(document.getElementById('Base').value)
    let Lado = parseInt(document.getElementById('Lado').value)

    if (isNaN(Base)) {
        alertify.error('Número 1 en blanco')
    } else if(isNaN(Lado)) {
        alertify.error('Número 2 en blanco')
    } else {
        let Area = Base * Lado;
        document.getElementById('txtResultado').value = Area
    }

}

function limpiar() {
    document.getElementById('Base').value = ''
    document.getElementById('Lado').value = ''
    document.getElementById('txtResultado').value = ''
}