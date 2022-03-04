/**
 * Validar campos obrigatorios]
 *
 *@author Bruno Antunes
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Preencha o campo Nome')
		frmlContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('Preencha o campo Fone')
		frmlContato.nome.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}