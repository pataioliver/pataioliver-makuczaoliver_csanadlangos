var rendelesek = {
	"sajtostejfoloslangos": [650, 0,
		false, false
	],
	"nutellaslangos": [900, 0],
	"kaproslangos": [750, 0, false,
		false
	],
	"krumplissonkaslangos": [850, 0,
		false, false
	],
	"sajtossonkastoltottlangos": [
		800, 0, false, false
	],
	"simalangos": [500, 0, false,
		false
	],
};

function rendelesek_megnyitas() {
	localStorage.setItem(
		'rendelesekJSON', JSON
		.stringify(rendelesek));
	window.location.href =
		"osszegzes.html"
}



function kosarba_sajtostejfoloslangos() {
	rendelesek.sajtostejfoloslangos[1] =
		document.getElementById(
			"sajtostejfoloslangos_db")
		.value;
	rendelesek.sajtostejfoloslangos[2] =
		document.getElementById(
			"sajtostejfoloslangos_so")
		.checked;
	rendelesek.sajtostejfoloslangos[3] =
		document.getElementById(
			"sajtostejfoloslangos_fokhagyma"
		).checked;
	if (rendelesek.sajtostejfoloslangos[
			1] == 0) {
		rendelesek.sajtostejfoloslangos[
			2] = false;
		rendelesek.sajtostejfoloslangos[
			3] = false;
	}
}

function kosarba_nutellaslangos() {
	rendelesek.nutellaslangos[1] =
		document.getElementById(
			"nutellaslangos_db").value;
}

function kosarba_kaproslangos() {
	rendelesek.kaproslangos[1] =
		document.getElementById(
			"kaproslangos_db").value;
	rendelesek.kaproslangos[2] =
		document.getElementById(
			"kaproslangos_so").checked;
	rendelesek.kaproslangos[3] =
		document.getElementById(
			"kaproslangos_fokhagyma")
		.checked;
	if (rendelesek.kaproslangos[1] ==
		0) {
		rendelesek.kaproslangos[2] =
			false;
		rendelesek.kaproslangos[3] =
			false;
	}
}

function kosarba_krumplissonkaslangos() {
	rendelesek.krumplissonkaslangos[1] =
		document.getElementById(
			"krumplissonkaslangos_db")
		.value;
	rendelesek.krumplissonkaslangos[2] =
		document.getElementById(
			"krumplissonkaslangos_so")
		.checked;
	rendelesek.krumplissonkaslangos[3] =
		document.getElementById(
			"krumplissonkaslangos_fokhagyma"
		).checked;
	if (rendelesek.krumplissonkaslangos[
			1] == 0) {
		rendelesek.krumplissonkaslangos[
			2] = false;
		rendelesek.krumplissonkaslangos[
			3] = false;
	}
}

function kosarba_sajtossonkastoltottlangos() {
	rendelesek
		.sajtossonkastoltottlangos[1] =
		document.getElementById(
			"sajtossonkastoltottlangos_db"
		).value;
	rendelesek
		.sajtossonkastoltottlangos[2] =
		document.getElementById(
			"sajtossonkastoltottlangos_so"
		).checked;
	rendelesek
		.sajtossonkastoltottlangos[3] =
		document.getElementById(
			"sajtossonkastoltottlangos_fokhagyma"
		).checked;
	if (rendelesek
		.sajtossonkastoltottlangos[1] ==
		0) {
		rendelesek
			.sajtossonkastoltottlangos[
				2] = false;
		rendelesek
			.sajtossonkastoltottlangos[
				3] = false;
	}
}

function kosarba_simalangos() {
	rendelesek.simalangos[1] = document
		.getElementById("simalangos_db")
		.value;
	rendelesek.simalangos[2] = document
		.getElementById("simalangos_so")
		.checked;
	rendelesek.simalangos[3] = document
		.getElementById(
			"simalangos_fokhagyma")
		.checked;
	if (rendelesek.simalangos[1] == 0) {
		rendelesek.simalangos[2] =
			false;
		rendelesek.simalangos[3] =
			false;
	}
}