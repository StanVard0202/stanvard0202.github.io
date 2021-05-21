var Paulo = {nome:"Pedro",vitorias: 0,empate: 0,derrotas:0,pontos:0}
var Rafa = {nome:"Henrique",vitorias: 0,empate: 0,derrotas:0,pontos:0}

function pontos(jogadorpontos){
  var pontos = (jogadorpontos.vitorias * 3) + jogadorpontos.empate
  return pontos
}

Paulo.pontos = pontos(Paulo)
Rafa.pontos = pontos(Rafa)


var jogadores = [Paulo, Rafa]
exibirjogadores(jogadores)
function exibirjogadores(jogadores){
  var html = ""
  for(var i=0;i<jogadores.length;i++){
    html += "<tr><td>"+jogadores[i].nome + "</td>"
    html += "<td>"+jogadores[i].vitorias + "</td>"
    html += "<td>"+jogadores[i].empate + "</td>"
    html += "<td>"+jogadores[i].derrotas + "</td>"
    html += "<td>"+jogadores[i].pontos + "</td>"
    html +="<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html +="<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelajogadores = document.getElementById("tabelaJogadores")
  tabelajogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = pontos(jogador)
  exibirjogadores(jogadores)
}
function adicionarEmpate(i){
   var jogador = jogadores[i]
  jogador.empate++
  jogador.pontos = pontos(jogador)
  exibirjogadores(jogadores)
}
function adicionarDerrota(i){
   var jogador = jogadores[i]
  jogador.derrotas++
  exibirjogadores(jogadores)
}