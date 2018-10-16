let $cep = $('input.cep').val()
let link = 'https://viacep.com.br/ws/09942100/json/'
let modelo = /\d{8}/

function mudarFoto(foto) {
		document.getElementById("icone").src = foto;
}

function calcTotal() {
	let qtd = parseInt(document.getElementById('quantidade').value)
	let calc = (qtd * 5500).toString()
	let regex = /\d{3}$/.exec(calc)
	if (calc.length > 3) {
		let result = calc.replace(/\d{3}$/,`.${regex},00`)
		document.getElementById('total').value = result
	}	
}

verification()
function verification() {
	$(document).ready(function(){
		$('input.cep').on('input', function(){
			if ($('input.cep').val().length == 8) {
				console.log(link.replace(/\d{8}/, $cep))
				$.ajax({
					url: link.replace(/\d{8}/, $('input.cep').val()),
			 		success: function(result) {
			 			console.log(result)
			 			$('input#street').val(result.logradouro)
			 			$('input#city').val(result.localidade)
			 			document.getElementById("state").value = (result.uf)
			 			$('input#neighborhood').val(result.complemento.replace('(', '').replace(')', ''))
			 		}
			 	})
			}
		})
	})
}