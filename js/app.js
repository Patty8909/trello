window.addEventListener('load',function(){

    var contenedor = document.getElementById('contenedor')
    var añadirLista = document.getElementById('añade-lista')
    var section = document.getElementById('section')
    var section2 = document.getElementById('section2')

    añadirLista.addEventListener('click',function(event) {
        var divInput = document.createElement('div')
        var input =document.createElement('input')
        divInput.appendChild(input)
        input.setAttribute('placeholder','Añadir una lista')
        input.setAttribute('class','style-inp')
        var divButton = document.createElement('div')
        var button =document.createElement('button')
        divButton.appendChild(button)
        button.textContent='Guardar'
        var div =document.createElement('div')
        div.setAttribute('class','style-div')
        var formulario =document.getElementById('formulario')
        formulario.appendChild(div)
        div.appendChild(divInput)
        divInput.setAttribute('class','style-divInput')
        div.appendChild(divButton)
        divButton.setAttribute('class','style-divButton')
        contenedor.removeChild(añadirLista)

        button.addEventListener('click',function(event){
            section.removeChild(formulario)
            var contenedor2 = document.createElement('div')
            contenedor2.setAttribute('class','style-contenedor2')
            var nombreListacont = document.createElement('div')
            nombreListacont.setAttribute('class','listacont-style')
            var nombreLista = document.createElement('p')
            nombreLista.textContent=input.value;
            var tarea = document.getElementById('tarea')
            tarea.appendChild(contenedor2)
            contenedor2.appendChild(nombreListacont)
            nombreListacont.appendChild(nombreLista)
            var divTextarea = document.createElement('div')
            divTextarea.setAttribute('class','divtext-style')
            var textarea = document.createElement('textarea')
            textarea.setAttribute('cols','33')
            textarea.setAttribute('rows','5')
            textarea.setAttribute('placeholder','Añadir una tarea')
            divTextarea.appendChild(textarea)
            var divBoton =  document.createElement('div')
            divBoton.setAttribute('class','divBtn-style')
            var boton = document.createElement('button')
            divBoton.appendChild(boton)
            boton.textContent='Añadir'
            contenedor2.appendChild(divTextarea)
            contenedor2.appendChild(divBoton)

        boton.addEventListener('click',function(event){
            section2.removeChild(tarea)
            var container3 = document.getElementById('getTarea')
            var div3 = document.createElement('div')
            div3.setAttribute('class','div3-container')
            var div3first = document.createElement('div')
            container3.appendChild(div3)
            div3.appendChild(div3first)
            div3first.appendChild(nombreLista)
            div3first.setAttribute('class','div3first-style')
            var div3second = document.createElement('div')
            div3second.setAttribute('class','divtext2-style')
            div3second.textContent=textarea.value;
            div3.appendChild(div3second)
            var div3third = document.createElement('div')
            var textarea2 = document.createElement('textarea')
            textarea2.setAttribute('class','textarea2')
            textarea2.setAttribute('cols','33')
            textarea2.setAttribute('rows','5')
            textarea2.setAttribute('placeholder','Añadir otra tarea')
            div3third.appendChild(textarea2)
            div3.appendChild(div3third)
            var divBoton2 =  document.createElement('div')
            divBoton2.setAttribute('class','divBtn2-style')
            var boton2 = document.createElement('button')
            div3.appendChild(divBoton2)
            divBoton2.appendChild(boton2)
            boton2.textContent='Añadir'
        })
        })
    })


    /*var formulario =document.getElementById('formulario')
    var div =document.createElement('div')
    formulario.appendChild(div)
    var divButton = document.createElement('div')
    var button =document.createElement('button')
    div.appendChild(divButton)
    divButton.appendChild(button)

    button.addEventListener('click',function(event) {
        
        alert('hola')
    })*/




})