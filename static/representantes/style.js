
    var selectUF = document.getElementById("selectEstados");
    var selectCidade = document.getElementById("selectCidade");
    var divSelectCidade = document.getElementById("divSelectCidade");
    var divSelectEstado = document.getElementById("dropEstado");



    //function habilitaCidade(uf) {
    //    divSelectCidade.style.display = "block";

    //    $.ajax({
    //        type: "Get",
    //        url: "../../Content/cidades/" + uf + ".json",
    //        dataType: "json",
    //        success: function (data) {
    //            var options = "";
    //            var optionsLi = "";

    //            options = "<option value='0' selected hidden>Selecione uma Cidade</option>"
    //            //optionsLi += "<option value='0' class='option'>Selecione uma Cidade</option>"
    //            for (var i = 0; i < data['cidades'].length - 1; i++) {
    //                options += '<option value=' + data['cidades'][i]['cidade'] + '>' + data['cidades'][i]['cidade'] + '</option>'
    //                optionsLi += '<li data-value=' + data['cidades'][i]['cidade'] + ' class="option">' + data['cidades'][i]['cidade'] + '</li>'
    //                //var sele = document.getElementById('selectCidade');
    //                //$("#selectCidade").append($('<option>'), { text: data['cidades'][i]['cidade'] });
    //                //$("#selectCidade").show(300);
    //            }
    //            $("#selectCidade").html(options);
    //            var a = $("#divSelectCidade").find(".nice-select").find("ul");
    //            a.html(optionsLi);
    //            $("#divSelectCidade").find(".nice-select").find(".current").html(data['cidades'][0]['cidade'])

    //            console.log(a);

    //        },
    //        error: function () {
    //            alert("json not found");
    //        }
    //    });


    //}

    //fetch('../../Content/estados.json')
    //    .then(function (response) {
    //        return response.json();
    //    })
    //    .then(function (data) {
    //        var options = "";
    //        options += "<option value='0'>Selecione um Estado</option>"
    //        for (var i = 0; i < data['estados'].length; i++) {
    //            options += '<option value=' + data['estados'][i]['id'] + '>' + data['estados'][i]['estado'] + '</option>'

    //        }
    //        selectUF.innerHTML = options;
    //    })


    function searchRepresentantes() {
        console.log("aqui 61");
        var uf = document.getElementById("selectEstados").value;
        var cidade = document.getElementById("selectCidade");

        $.ajax({
            type: "GET",
            url: "/Representante/BuscarRepresentantes?uf=" + uf + "&cidade=" + cidade.children[cidade.selectedIndex].textContent,
            dataType: "json",
            success: function (data) {
                console.log(data[0])
                var newRow = "";
                for (var i = 0; i <= data.length - 1; i++) {
                    newRow += '<tr><th scope="row"></th>';
                    newRow += "<td>" + data[i].Nome + "</td>";
                    newRow += "<td>" + data[i].Cidade + "</td>";
                    newRow += "<td>" + data[i].Estado + "</td>";
                    newRow += "<td>" + data[i].Email + "</td>";
                    if (data[0].Tel != null) {
                        newRow += "<td>" + data[i].Tel + "</td>";

                    } else {
                        newRow += "<td>" + data[i].Cel + "</td></tr>";

                    }
                }

                $("#tableRepresentantes tbody").html(newRow);

            },
            error: function () {
                alert("json not found 91");
            }
        });
    }
    function filtro(filtroParametro) {
        console.log("aqui");

        $.ajax({
            type: "GET",
            url: "/Representante/BuscarRepresentantes?filterParameter=" + filtroParametro,
            dataType: "json",
            success: function (data) {
                console.log(data[0])
                var newDocument = "";
                for (var i = 0; i <= data.length - 1; i++) {
                    newDocument =
                    `
                        <div class="d-flex flex-wrap -mx-4">
                        <div class="col-4">
                        <div class="col-12 px-4 manu" data-eva="${data[i].Nome}">
                        <div id="documentoContainer" class="h-full p-4 text-center rounded-md hover:shadow-xl transition duration-200">
                        <div class="inline-flex h-16 mb-6 items-center justify-center text-white bg-vermelho rounded-lg" style="background-color: rgba(255, 182, 13, 0.75) !important; height:60px; margin:auto auto; box-sizing:border-box; padding:15px; width:60px;">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="white" d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" /></svg>
                        </div>
                        
                        <h3 class="mb-4 mt-4" style="font-weight:bold; font-size:25px; color:black;"> ${data[i].Nome} </h3><br/>
                        ${data[i].Cel != null ? `<p> ${data[i].Cel}</p>` : ``}
                        ${data[i].Tel != null ? `<p>${data[i].Tel}</p>` : ``}

                      
                        <br/><p> ${data[i].Email}</p><br/>
                        <p> ${data[i].EnderecoMaps}</p>
                        
                        </div>

                        </div>
                        </div> 
                        </div>
                        `
                }
                console.log(newDocument);
                $("#documentosContainer").html(newDocument);

            },
            error: function () {
                alert("json not found 136");
            }
        });
    }
        function EnviarForm() {
            var nome = document.getElementById("nomeInput").value;
            var email = document.getElementById("emailInput").value;
            var telefone = document.getElementById("telefoneInput").value;
            var cidade = document.getElementById("cidadeInput").value;
            var mensagem = document.getElementById("mensagemInput").value;
            $.ajax({
                type: "POST",
                url: "/Representante/SendEmail?nome=" + nome + "&email=" + email + "&telefone=" + telefone + "&cidade=" + cidade + "&mensagem=" + mensagem,
                dataType: "json",
                success: function (data) {
                    alert("a");
                }
            }).done(function (data) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                });
          
        }
