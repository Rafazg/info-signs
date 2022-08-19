/* Criar uma função para mostrar somente o 'h3' do signo digitado pelo usúario */

let button = document.getElementById('btn')
button.addEventListener('click', showSign)
button.addEventListener('keypress')
function showSign() {

    let containerBoard = document.getElementById('container')

    let inputText = document.getElementById('text');
    let r = (inputText.value);

    let h3Gemini = document.getElementById('gemini');
    let h3Fish = document.getElementById('fish');
    let h3Aries = document.getElementById('aries')
    let h3leao = document.getElementById('leao')
    let h3Cancer = document.getElementById('cancer')



    let imageGemini = document.getElementById('geminiImg')
    let imageFish = document.getElementById('fishImg')
    let imageAries = document.getElementById('ariesImg')
    let imageLeao = document.getElementById('leaoImg')
    let imageCancer = document.getElementById('cancerImg')

    let dateSigns = document.getElementById('date')
    let planetSigns = document.getElementById('planet')
    let elementSigns = document.getElementById('element')
    let simbolSigns = document.getElementById('simbol')

    let divDetails = document.getElementById('details')
    let spanBox1 = document.getElementById('spanDate')
    let spanBox2 = document.getElementById('spanPlanet')    
    let spanBox3 = document.getElementById('spanElement')
    let spanBox4 = document.getElementById('spanSimbol')



    if (r == 'peixes') {
        h3Fish.hidden = false
        h3Gemini.hidden = true
        h3Aries.hidden = true
        h3leao.hidden = true
        h3Cancer.hidden = true

        imageFish.hidden = false
        imageGemini.hidden = true

        dateSigns.innerText = "De 19 de fevereiro a 20 de março"
        planetSigns.innerText = "Netuno"
        elementSigns.innerText = "Água"
        simbolSigns.innerText = "Peixes"

        spanBox1.style.backgroundColor = "#00bcf5"
        spanBox2.style.backgroundColor = "#00bcf5"
        spanBox3.style.backgroundColor = "#00bcf5"
        spanBox4.style.backgroundColor = "#00bcf5"
        containerBoard.style.borderColor = "#00bcf5"

    }
    if (r == 'gemeos') {
        h3Gemini.hidden = false
        h3Fish.hidden = true
        h3Aries.hidden = true
        h3leao.hidden = true
        h3Cancer.hidden = true

        imageGemini.hidden = false
        imageFish.hidden = true

        dateSigns.innerText = "De 21 de maio a 21 de junho"
        planetSigns.innerText = "Mercúrio"
        elementSigns.innerText = "Ar"
        simbolSigns.innerText = "Duas Paralelas"
    
        spanBox1.style.backgroundColor = "green"
        spanBox2.style.backgroundColor = "green"
        spanBox3.style.backgroundColor = "green"
        spanBox4.style.backgroundColor = "green"
        containerBoard.style.borderColor = "green"
    }
    if (r == 'aries') {
       h3Aries.hidden = false
       h3Fish.hidden = true
       h3Gemini.hidden = true
       h3Cancer.hidden = true
       h3leao.hidden = true

       imageAries.hidden = false
       imageFish.hidden = true
       imageGemini.hidden = true

       dateSigns.innerText = "De 21 de março a 19 de abril"
       planetSigns.innerText = "Marte"
       elementSigns.innerText = "Fogo"
       simbolSigns.innerText = "Carneiro"

        
       spanBox1.style.backgroundColor = "#fa6d1b"
       spanBox2.style.backgroundColor = "#fa6d1b"
       spanBox3.style.backgroundColor = "#fa6d1b"
       spanBox4.style.backgroundColor = "#fa6d1b"
       containerBoard.style.borderColor = "#fa6d1b"
       
    }
    if (r == 'leão') {
        h3leao.hidden = false
        h3Fish.hidden = true
        h3Gemini.hidden = true
        h3Aries.hidden = true
        h3Cancer.hidden = true

        imageLeao.hidden = false
        imageFish.hidden = true
        imageGemini.hidden = true
        imageAries.hidden = true

        dateSigns.innerText = "De 23 de julho a 22 de agosto"
       planetSigns.innerText = "Sol"
       elementSigns.innerText = "Fogo"
       simbolSigns.innerText = "Leão"

        spanBox1.style.backgroundColor = "red"
        spanBox2.style.backgroundColor = "red"
        spanBox3.style.backgroundColor = "red"
        spanBox4.style.backgroundColor = "red"
        containerBoard.style.borderColor = "red"
        
    }
    if (r == 'cancer') {
        h3Cancer.hidden = false
        h3Fish.hidden = true
        h3Gemini.hidden = true
        h3Aries.hidden = true
        h3leao.hidden = true

        imageCancer.hidden = false
        imageFish.hidden = true
        imageGemini.hidden = true
        imageAries.hidden = true
        imageLeao.hidden = true

        dateSigns.innerText = "De 22 de junho a 22 de julho"
       planetSigns.innerText = "Lua"
       elementSigns.innerText = "Água"
       simbolSigns.innerText = "Carangueijo"
        
        spanBox1.style.backgroundColor = "#fa1ea9"
        spanBox2.style.backgroundColor = "#fa1ea9"
        spanBox3.style.backgroundColor = "#fa1ea9"
        spanBox4.style.backgroundColor = "#fa1ea9"
        containerBoard.style.borderColor = "#fa1ea9"
    }
}
    





