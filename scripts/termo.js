var nav = document.getElementsByClassName("jogos")[0]
var botao = document.getElementById("bjogos")
var triang = document.getElementsByClassName('triang')[0]
var teclas = document.getElementsByClassName("tecla")
var papert = true
var texto = "RITMO"
var jogo = document.getElementsByClassName("jogo")
var select = [[],[],[],[],[],[]]
var apaga = document.getElementById('apaga')
var enter = document.getElementById('enter')
botao.addEventListener("click",teste)
apaga.addEventListener("click",apagar)
enter.addEventListener("click",inter)





function mostra(){
    for(var o =0;o<=5;o++){
        select[l][o].style.background = "#6F5C62"
    }
}
function teste(){
    
    if (papert){
        papert = false
        nav.style.height = "2em"
        triang.style.transform = "rotate(225deg) scale(1.5,1.5)"
        triang.style.translate= "-20px -15px"
    } else{
        nav.style.height = "0em"
        triang.style.transform = "rotate(45deg) scale(1.5,1.5) translate(-50%,-50%)"
        triang.style.translate= "0px 0px"
        papert = true
    }
}
var a=0
var p = 0
var l=0
for(var i of teclas){
    i.addEventListener("click",function() {
        for(var o = 0; o<5; o++){
            select[l][o].style.background = "#6F5C62"
        }
        select[l][a].style.background = "gray"
        select[l][a].innerHTML = `<p>${this.innerHTML}</p>`
        if(a<4){
            a++
        }
    })
}
for(var o = 0; o< jogo.length; o++){
    select[p].push(jogo[o])
    if(o!=0){
        if((o+1)%5==0){
            p = p+1
        }
    }
    jogo[o].addEventListener("click", function(){
        for(var o = 0; o< 5; o++){
            select[l][o].style.background = "#6F5C62"
        }
        if(select[l].includes(this)){
            this.style.background = "gray"
            a = select[l].findIndex(item => item === this)
        }
        
    })
    
}
function apagar(){
    
    select[l][a].innerHTML= ""
    if(a>0){
        a--
    }
    nav.innerText = "oi"
    for(var r= 0; r<5; r++){
        select[l][r].style.background = "#6F5C62"
    }
    
    
    select[l][a].style.background = "gray"
}
function inter(){
    var vazio = [select[l][0].innerText == "",select[l][1].innerText == "",select[l][2].innerText == "",select[l][3].innerText == "",select[l][4].innerText == ""]
    if(!(vazio.some(Boolean))){
        var cola = {}
        for(var i of texto){
            if(!(i in cola)){
                cola[i]= 1
            }else{
                cola[i] += 1
            }
        }
        for(var r= 0; r<5; r++){
            select[l][r].style.background = "#6F5C62"
        }
        for(var i = 0; i < 5;i++){
            if(select[l][i].innerText == texto[i] && cola[select[l][i].innerText] != 0){
                cola[select[l][i].innerText] -= 1
            }
            if(texto.includes(select[l][i].innerText) && cola[select[l][i].innerText] != 0){
                for(var o of teclas){
                    if(select[l][i].innerText == o.innerText && !(o.style.background == "green")){
                        o.style.background = "yellow"
                    }else if(select[l][i].innerText == o.innerText  && !(o.style.background == "green" || o.style.background == "yellow")){
                        o.style.background = "black"
                    }
                }
                cola[select[l][i].innerText] -= 1
                select[l][i].style.background = "yellow"
                select[l][i].style.transform = "rotatey(360deg)"
            }else{
                select[l][i].style.background = "#4C4346"
                for(var o of teclas){
                    if(o.innerText == select[l][i].innerText && !(o.style.background == "green" || o.style.background == "yellow")){
                        o.style.background = "black"
                    }
                }
            }
            if(select[l][i].innerText == texto[i]){
                
                for(var o of teclas){
                    if(select[l][i].innerText == o.innerText){
                        o.style.background = "green"
                    }
                }
                select[l][i].style.background = "green"
                select[l][i].style.transform = "rotatey(360deg)"
            }
        }
        if(select[l][0].innerText+select[l][1].innerText+select[l][2].innerText+select[l][3].innerText+select[l][4].innerText != texto){
            l++
        }else{
            l= 6
        }
        a=0
        mostra()
    }
}
mostra()
