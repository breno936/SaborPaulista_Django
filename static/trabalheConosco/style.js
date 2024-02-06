var upload = document.getElementById("curriculoArquivo");
upload.addEventListener("change", function (e) {
    var size = upload.files[0].size;
    if (size < 1048576 * 2) { //1MB
        document.getElementById("avisoArquivo").style.display = "none";
        document.getElementById("nomeArquivo").innerHTML = upload.value;
    } else {
        document.getElementById("avisoArquivo").style.display = "block";
        upload.value = ""; //Limpa o campo
    }
    e.preventDefault();
});