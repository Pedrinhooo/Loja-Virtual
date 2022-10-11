var qnt;

function preco() {

	var quantidade = document.getElementById("qtdtt").value;
    var tipo = document.getElementById("tipott").value;
	var valor = 40;
	var total = valor * quantidade * tipo;
	document.getElementById("total").innerHTML = total;

	qnt = quantidade;
}
