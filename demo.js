// ===================== VERSÃO DEMO =====================
// Este arquivo só entra na versão demo (gerada por ferramentas/gerar_demo.py). A demo tem o Ato I completo;
// ao vencer o Desfiladeiro do Ocaso aparece o fim da demo e o convite para o jogo completo.
const DEMO=true;
const LINK_COMPRA=''; // quando a loja estiver pronta, coloque aqui o endereço (itch.io, Steam...)

// No mapa, o próximo lugar aparece com um "?" e avisa que está no jogo completo.
LUGARES.push({id:'lago',regiao:'valdren',nome:'Lago Espelhado',tipo:'batalha',fase:'lago-espelhado',de:'ocaso',x:190,y:300});

function aposFim(v){if(v&&!LIVRE&&F.id=='desfiladeiro-do-ocaso'){const b=$('mp');b.textContent='Fim da demo ➜';b.onclick=fimDemo;$('rj').hidden=true}}

function fimDemo(){parar();if(typeof tocar=='function')tocar('celestial');ovl.hidden=false;
ovl.innerHTML=`<div class="sc brief fim-demo"><h2>Obrigado por jogar a demo!</h2>
<p>Garra, Morgana e o Capitão Vorn caíram. Mas as últimas palavras de Vorn ecoam: o Rei Usurpador espera no Lago Espelhado... e a Coroa da Aurora é só o começo.</p>
<div class="obj"><b>No jogo completo:</b><br>4 atos e mais de 20 batalhas · Gelheim, Areth, Maré-Alta e a Cidadela do Eclipse<br>
Chefes gigantes: o Rei Demoníaco, o Kraken, o Colosso do Sol Negro · 7 classes por linha até o nível 50 e 42 habilidades<br>
A base no Castelo de Valdren · dois finais · o pós-jogo com os Guardiões Primordiais e a Ascensão Celestial</div>
<p class="stat">O seu progresso continua no jogo completo: use <b>Jogos salvos → Exportar</b> e depois importe lá.</p>
<div class="acts"><button id="fdc" class="on">⭐ Quero o jogo completo</button><button id="fds">Exportar meu save</button><button id="fdm">Voltar ao mapa</button></div></div>`;
$('fdc').onclick=paginaCompra;$('fds').onclick=()=>saves();$('fdm').onclick=mapa}

function paginaCompra(){parar();if(typeof IN!='undefined'&&IN)IN.fechar();MP=null;ovl.hidden=false;
ovl.innerHTML=`<div class="sc brief fim-demo"><h1 class="logo" style="font-size:56px">Crepúsculo dos Reinos</h1><h2>O jogo completo</h2>
<ul class="lista-completo"><li>⚔️ 4 atos de história e mais de 20 batalhas, com dois finais</li><li>🗺️ 5 regiões: Valdren, Gelheim, Areth, Maré-Alta e a Cidadela do Eclipse</li>
<li>🐉 Chefes gigantes: Rei Demoníaco, Colosso do Sol Negro, Kraken Abissal, Ozrath e o Primeiro Crepúsculo</li><li>🎓 7 classes por linha até o nível 50, com 42 habilidades</li>
<li>🏰 Base no castelo, forjas lendárias e o Conjunto Celestial</li><li>🏆 Conquistas e o pós-jogo com os Guardiões Primordiais</li></ul>
${LINK_COMPRA?`<div class="acts"><a class="btn-compra" href="${LINK_COMPRA}" target="_blank" rel="noopener">Comprar agora</a></div>`:'<p class="obj" style="text-align:center"><b>Em breve</b> na Steam, na Google Play e no itch.io!</p>'}
<div class="acts"><button id="pcv" class="on">Voltar</button></div></div>`;$('pcv').onclick=title}
