// alert("OI")
console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
var upload = document.getElementById("id_curriculo");
upload.addEventListener("change", function (e) {
    alert("A")
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

$(document).ready(function () {
        alert("AAA")
    $("form").submit(function() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var file = $('#id_curriculo')[0].files[0];

        if (file && file.size > 2 * 1024 * 1024) {
        alert("File " + file.name + " of type " + file.type + " is too big");
        return false;
        }
    }
    });

})
