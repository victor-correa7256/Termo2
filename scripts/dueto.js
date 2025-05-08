var nav = document.getElementsByClassName("jogos")[0]
var botao = document.getElementById("bjogos")
var triang = document.getElementsByClassName('triang')[0]
var teclas = document.getElementsByClassName("tecla")
var papert = true
var texto = ["LETRA","TESTA"]
var jogo = document.getElementsByClassName("jogo")
var select = [
[[],[],[],[],[],[],[]],
[[],[],[],[],[],[],[]]
]
var apaga = document.getElementById('apaga')
var enter = document.getElementById('enter')
botao.addEventListener("click",aba)
apaga.addEventListener("click",apagar)
enter.addEventListener("click",inter)
function aba(){
    if(papert){
        nav.style.height = "2em"
        papert = !(papert)
        triang.style.transform = "rotate(225deg) scale(1.5,1.5)"
        triang.style.translate= "-20px -15px"
    }else{
        nav.style.height = "0em"
        triang.style.transform = "rotate(45deg) scale(1.5,1.5) translate(-50%,-50%)"
        triang.style.translate= "0px 0px"
        papert = !(papert)
        
    }
}
function mostra(){
    for(var i of jogo){
        if(!(i.style.background == "green" || i.style.background == "yellow")){
            i.style.background ="#4C4346"
        }
        
    }
    for(var b=0; b<select.length; b++){
        for(var u = 0; u<5;u++){
            select[b][linhaSelecionado][u].style.background = "#6F5C62"
        }
    }
}




let linhaSelecionado = 0
var unidadeSelecionado= 0
function iniciar(){
    var cont = 0
    for(var bloco =0; bloco<select.length; bloco++){
        for(var linha=0; linha < select[bloco].length; linha++){
            for(var unidade =0; unidade<5; unidade++){
                select[bloco][linha].push(jogo[cont])
                jogo[cont].addEventListener("click",function(){
                    for(var b=0; b<select.length; b++){
                        for(var u = 0; u<5;u++){
                            select[b][linhaSelecionado][u].style.background = "#6F5C62"
                        }
                    }
                    
                    unidadeSelecionado = select[0][linhaSelecionado].findIndex(item => item === this)
                    if(unidadeSelecionado == -1){
                        unidadeSelecionado = select[1][linhaSelecionado].findIndex(item => item === this)
                    }
                    select[0][linhaSelecionado][unidadeSelecionado].style.background = "gray"
                    select[1][linhaSelecionado][unidadeSelecionado].style.background = "gray"
                    
                })
                cont++
            }
        }
    }
    for(var tecla of teclas){
        tecla.addEventListener("click", function(){
            select[0][linhaSelecionado][unidadeSelecionado].innerHTML = `<p>${this.innerText}</p>`
            select[1][linhaSelecionado][unidadeSelecionado].innerHTML = `<p>${this.innerText}</p>`
            //this.style.backgroundImage = "linear-gradient(to left, yellow, green)"
            for(var b=0; b<select.length; b++){
                for(var u = 0; u<5;u++){
                    select[b][linhaSelecionado][u].style.background = "#6F5C62"
                }
            }
            if(unidadeSelecionado<4){
                select[0][linhaSelecionado][unidadeSelecionado+1].style.background = "gray"
                select[1][linhaSelecionado][unidadeSelecionado+1].style.background = "gray"
            }
            
            if(!(unidadeSelecionado == 4)){
                unidadeSelecionado++
            }
            
        })
    }
    
}
iniciar()
mostra()


function apagar(){
    if(select[0][linhaSelecionado][4].innerHTML = ""){
        select[0][linhaSelecionado][unidadeSelecionado-1].innerHTML = ""
        select[1][linhaSelecionado][unidadeSelecionado-1].innerHTML = ""
    }else{
        select[0][linhaSelecionado][unidadeSelecionado].innerHTML = ""
        select[1][linhaSelecionado][unidadeSelecionado].innerHTML = ""
    }
    if(unidadeSelecionado>0){
        if(!(select[0][linhaSelecionado][4].innerHTML = "")){
            unidadeSelecionado--
        }
        
    }
        
    for(var b =0; b<select.length; b++){
        for(var u = 0; u<5;u++){
            select[b][linhaSelecionado][u].style.background = "#6F5C62"
        }
    }
    select[0][linhaSelecionado][unidadeSelecionado].style.background = "gray"
    select[1][linhaSelecionado][unidadeSelecionado].style.background = "gray"
}
function inter(){
    var vazio=[]
    var cola = [{},{}]
    for(var o=0; o<texto.length;o++){
        for(var i of texto[o]){
            if(!(i in cola[o])){
                cola[o][i]=1
            }else{
                cola[o][i]+= 1
            }
        }
    }
    for(var u =0; u<5;u++){
        vazio.push(select[0][linhaSelecionado][u].innerText == "")
    }
    if(!(vazio.some(Boolean))){
        
        //bloco 1
        
        for(var o =0; o<5;o++){
            if(texto[0].includes(select[0][linhaSelecionado][o].innerText) && cola[0][select[0][linhaSelecionado][o].innerText] != 0){
                cola[0][select[0][linhaSelecionado][o].innerText] -= 1
                select[0][linhaSelecionado][o].style.transform = "rotatey(360deg)"
                select[0][linhaSelecionado][o].style.background = "yellow"
            } 
        }
        
        for(var o =0; o<5;o++){
            if(select[0][linhaSelecionado][o].innerText == texto[0][o]){
                select[0][linhaSelecionado][o].style.transform = "rotatey(360deg)"
                select[0][linhaSelecionado][o].style.background = "green"
            }
        }
        
        
        
        //bloco 2
        
        
        for(var o =0; o<5;o++){
            if(texto[1].includes(select[1][linhaSelecionado][o].innerText) && cola[1][select[0][linhaSelecionado][o].innerText] != 0){
                cola[1][select[1][linhaSelecionado][o].innerText] -= 1
                select[1][linhaSelecionado][o].style.transform = "rotatey(360deg)"
                select[1][linhaSelecionado][o].style.background = "yellow"
            } 
        }
        
        for(var o =0; o<5;o++){
            if(select[1][linhaSelecionado][o].innerText == texto[1][o]){
                select[1][linhaSelecionado][o].style.transform = "rotatey(360deg)"
                select[1][linhaSelecionado][o].style.background = "green"
            }
        }
        
        
        
        linhaSelecionado++
        unidadeSelecionado = 0
        mostra()
    }
    
    
}
//console.log(texto[0][1])