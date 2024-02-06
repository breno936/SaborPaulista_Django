function filtro(filtroParametro) {
    console.log("aqui");

    $.ajax({
        type: "GET",
        url: "/Documentos/BuscarDocuments?filterParameter=" + filtroParametro,
        dataType: "json",
        success: function (data) {
            var newDocument = "";
            for (var i = 0; i <= data.length - 1; i++) {


                newDocument = `
                    <div class="isotope_selector categoria_${data[i].CategoriaId}" style = "padding: 30px 15px; display:flex; align-items:center; width:50%;">
                    <div class="" style="height:fit-content">
                    <div class="inline-flex h-16 mb-6 items-center justify-center text-white bg-vermelho rounded-lg imgMiniatura" style="background-color: white !important; height:200px; display:flex; justify-content:center; align-items:center; margin:auto auto; box-sizing:border-box; width:150px;">
                    ${data[i].Miniatura != null ?
                        `<img data-name="${data[i].Miniatura}" data-number="1" class="lightbox-trigger" src="/Content/UploadImages/${data[i].Miniatura}" style="width:95%; height:95%;" />
                    <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" /></svg>`

                        : `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="white" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>`}

                    </div>
                    </div>
                    <div class="" style="width:60%;">

                    <a href="~/Content/Documentos/${data[i].ArquivoPath}" class="linkArquivo" target="_blank">
                    <div class="manu" style="padding-top:0;" data-eva="${data[i].Titulo}">
                    <div id="documentoContainer" class="h-full px-4 pt-0 text-left rounded-md hover:shadow-xl transition duration-200">


                    <h3 class="mb-4 mt-4" style="font-weight:bold; font-size:22px; color:black;">${data[i].Titulo}</h3><p style="font-size:14px;">${data[i].SubTitulo}</p>
                    </div>

                    </div>
                    </a>
                    <div style="display:flex; align-items:center; margin-top:20px;" class="px-4 download-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                    <a style="width:fit-content; margin-left:5px; height:fit-content; display:block; font-size:13px; " href="/Content/UploadImages/${data[i].Miniatura}" download class="">FAZER DOWNLOAD</a>
                    </div>
                    </div>
                    </div>
                     `


            }
            $("#documentosContainer").html(newDocument);

            lightBoxActivate();
        },
        error: function () {
            alert("json not found");
        }
    });
}
