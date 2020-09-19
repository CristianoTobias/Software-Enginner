let count = 2
function adicionarSequencia(){
	let tbody = document.getElementById('tbody')
	
	let tr = document.createElement('tr')
	let td = document.createElement('td')
	let span = document.createElement('span')
	let input = document.createElement('input')

	span.innerHTML = `Sequência ${count}`
	td.appendChild(span)
	tr.appendChild(td)

	td = document.createElement('td')
	span = document.createElement('span')


	span.appendChild(input)
	input.id = `aproduzir${count}`
	td.appendChild(span)
	tr.appendChild(td)

	td = document.createElement('td')
	span = document.createElement('span')
	span.id = `tiradas_peso${count}`
	span.innerHTML = 0
	td.appendChild(span)
	tr.appendChild(td)

	td = document.createElement('td')
	span = document.createElement('span')
	span.id = `tiradas_tempo${count}`
	span.innerHTML = 0
	td.appendChild(span)
	tr.appendChild(td)

		
	
	tbody.appendChild(tr)
	
	count++;
}
function calcularTiradas(){
	let totalProduzir = document.getElementById('total_a_produzir')
	let totalTiradasPeso = document.getElementById('total_tiradas_peso')
	let totalTiradasTempo = document.getElementById('total_tiradas_tempo')
	let calculoTotalTiradasPeso = 0
	let calculoTotalTiradasTempo = 0
	let calculoTotalProduzir = 0
	for(let i = 1; i < count; i++){
	let aProduzir = document.getElementById(`aproduzir${i}`).value
	let pesoTirada = document.getElementById('peso_tirada').value
	let tempoTirada = document.getElementById('tempo_tirada').value
	let numTiradasPeso = Math.floor(aProduzir / pesoTirada)
	let numTiradasTempo = Math.floor(aProduzir / 1050)
	let tiradasPeso = document.getElementById(`tiradas_peso${i}`)
	let tiradasTempo = document.getElementById(`tiradas_tempo${i}`)
	

	tiradasPeso.innerHTML = numTiradasPeso
	tiradasTempo.innerHTML = numTiradasTempo
	calculoTotalProduzir += parseFloat(aProduzir)

     calculoTotalTiradasPeso += numTiradasPeso
     calculoTotalTiradasTempo += numTiradasTempo

    
}
totalTiradasPeso.innerHTML = calculoTotalTiradasPeso
totalTiradasTempo.innerHTML = calculoTotalTiradasTempo
totalProduzir.innerHTML = calculoTotalProduzir
 
}

function producaoHora(){
	let gramatura = document.getElementById('gramatura').value
	let velocidade = document.getElementById('velocidade').value
	let producaoHora = document.getElementById('producao_hora')
	let calculoProducaoHora = gramatura * 60 * velocidade * 310 / 100000
	producaoHora.innerHTML = parseInt(calculoProducaoHora)
}
