/**
 * Validação de formulário
 *@author Bruno Antunes
 */
 
 function validar(){
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if(nome === ""){
		alert('Preencha o campo Nome')
		frmlContato.nome.focus()
		return fase
	}else  if(fone === ""){
		alert('Preencha o campo Fone')
		frmlContato.nome.focus()
		return fase
}else{
	document.forms["frmContato"].submit()
	}
}