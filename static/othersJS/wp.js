function closeWP() {
    $(".box_whatsapp").css('display', 'none');
}

function openWP() {
    $(".box_whatsapp").css('display', 'block');
}

function iniciarChat() {

    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if ($("#wp_nome").val() == '') {
        swal("Aviso", "Por favor insira um nome válido!", "warning");
        $("#wp_nome").addClass('invalido');
        $("#wp_nome").focus();
        return false;
    }
    else {
        $("#wp_nome").removeClass('invalido');
    }
    if ($("#wp_email").val() != '') {
        if (pattern.test($("#wp_email").val()) === false) {
            $("#wp_email").addClass('invalido');
            $("#wp_email").focus();
            swal("Aviso", "Endereço de e-mail inválido!", "warning");
            return false;
        }
        else {
            $("#wp_email").removeClass('invalido');
        }
    }
    else {
        $("#wp_email").addClass('invalido');
        $("#wp_email").focus();
        swal("Aviso", "Insira um e-mail válido!", "warning");
        return false;
    }
    if ($("#wp_whatsapp").val() == '') {
        swal("Aviso", "Por favor insira um número de whatsapp válido!", "warning");
        $("#wp_whatsapp").addClass('invalido');
        $("#wp_whatsapp").focus();
        return false;
    }
    else {
       $("#wp_whatsapp").removeClass('invalido');
    }
    
    var itens = {};
    itens = { infoCliente: [{ nome: $("#wp_nome").val(), email: $("#wp_email").val(), telefone: $("#wp_whatsapp").val() }] };
    window.location.href = "https://web.whatsapp.com/send?phone=+5519988935849&text=*Nome*:" + $("#wp_nome").val() +"%0a+Gostaria+de+realizar+uma+cotação";
    // var jsonData = JSON.stringify({ 'mDados': JSON.stringify(itens) });
    // console.log(jsonData);
    //            $.ajax({
    //                beforeSend: function () {
    //                    $("#loading").show();
    //                    window.location.href = "https://web.whatsapp.com/send?phone=+5519981714060&text=*Nome*:" + $("#wp_nome").val() +"%0a+Gostaria+de+realizar+uma+cotação";
    //                },
    //                complete: function () {
    //                    $("#loading").hide();
    //                },
    //                type: "POST",
    //                url: "req-data.asmx/iniciarchat",
    //                data: jsonData,
    //                contentType: "application/json; charset=utf-8",
    //                dataType: "json", // dataType is json format
    //                success: OnSuccess,
    //                error: OnErrorCall
    //            });

    // function OnSuccess(response) {
    //     console.log(response);
    // }
    //            function OnErrorCall(response) {
    //                //console.log(response);
    //             }
}

function iniciarChat2() {

    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if ($("#wp_nome2").val() == '') {
        swal("Alert", "Please insert a valid name!", "warning");
        $("#wp_nome2").addClass('invalido');
        $("#wp_nome2").focus();
        return false;
    }
    else {
        $("#wp_nome2").removeClass('invalido');
    }
    if ($("#wp_email2").val() != '') {
        if (pattern.test($("#wp_email2").val()) === false) {
            $("#wp_email2").addClass('invalido');
            $("#wp_email2").focus();
            swal("Alert", "E-mail adress invalid!", "warning");
            return false;
        }
        else {
            $("#wp_email2").removeClass('invalido');
        }
    }
    else {
        $("#wp_email2").addClass('invalido');
        $("#wp_email2").focus();
        swal("Alert", "Insert a valid e-mail!", "warning");
        return false;
    }
    if ($("#wp_whatsapp2").val() == '') {
        swal("Alert", "Insert a whatsapp number!", "warning");
        $("#wp_whatsapp2").addClass('invalido');
        $("#wp_whatsapp2").focus();
        return false;
    }
    else {
       $("#wp_whatsapp2").removeClass('invalido');
    }

    var itens = {};
    itens = { infoCliente: [{ nome: $("#wp_nome2").val(), email: $("#wp_email2").val(), telefone: $("#wp_whatsapp2").val() }] };
    var jsonData = JSON.stringify({ 'mDados': JSON.stringify(itens) });
    console.log(jsonData);
               $.ajax({
                   beforeSend: function () {
                       $("#loading").show();
                       window.location.href = "https://web.whatsapp.com/send?phone=+5511998133116&text=*Name*:" + $("#wp_nome2").val() +"%0a+I+would+like+to+make+a+quote";
                   },
                   complete: function () {
                       $("#loading").hide();
                   },
                   type: "POST",
                   url: "req-data.asmx/iniciarchat",
                   data: jsonData,
                   contentType: "application/json; charset=utf-8",
                   dataType: "json", // dataType is json format
                   success: OnSuccess,
                   error: OnErrorCall
               });

    function OnSuccess(response) {
        console.log(response);
    }
               function OnErrorCall(response) {
                   //console.log(response);
                }
}