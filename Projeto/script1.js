let count = 2
function adicionarSequencia(){
	let tbody = document.getElementById('tbody')
	
	let tr = document.createElement('tr')
	let td = document.createElement('td')
	let span = document.createElement('span')
	let input = document.createElement('input')
	let button = document.createElement('button')

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
	span.id = `tirada_peso${count}`
	span.innerHTML = 0
	td.appendChild(span)
	tr.appendChild(td)

	td = document.createElement('td')
	span = document.createElement('span')
	span.id = `tirada_tempo${count}`
	span.innerHTML = 0
	td.appendChild(span)
	tr.appendChild(td)

	
	
    button.addEventListener('click', function() {
    alert(this.id)
    let id = this.id
    deletarSequencia(id)
})
    button.id = `button${count}`
    button.className = 'button1'
	button.textContent = 'remove'
	td = document.createElement('td')
	td.appendChild(button)

	tr.appendChild(td)
    
	tr.id = `tr${count}`
	tbody.appendChild(tr)
	

	count++;

	
}

const deletarSequencia = (id) => {
       
        if(id){
        let deleteId = id[id.length - 1]
		document.getElementById(`tr${deleteId}`).remove()
		alet(deleteId,id)
	    }
		
		
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
	let tiradaPeso = document.getElementById(`tirada_peso${i}`)
	let tiradaTempo = document.getElementById(`tirada_tempo${i}`)
	

	tiradaPeso.innerHTML = numTiradasPeso
	tiradaTempo.innerHTML = numTiradasTempo
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
