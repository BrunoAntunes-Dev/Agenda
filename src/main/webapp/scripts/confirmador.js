/**
 * Confirmação de exclusãode um contato
 * @author Bruno Antunes
 */
 
 function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato?")
	if(resposta === true){
		alert(idcon)
	}
}