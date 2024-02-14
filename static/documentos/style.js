function filtro(filtroParametro) {
    console.log("aqui");

    $.ajax({
        type: "GET",
        url: "/api/documents/?search="+filtroParametro,
        dataType: "json",
        success: function (data) {
            console.log(data);
            var newDocument = "";
            for (var i = 0; i <= data.length - 1; i++) {


                newDocument = `
                    <div class="isotope_selector categoria_${data[i].categoriaid}" style = "padding: 30px 15px; display:flex; align-items:center; width:50%;">
                    <div class="" style="height:fit-content">
                    <div class="inline-flex h-16 mb-6 items-center justify-center text-white bg-vermelho rounded-lg imgMiniatura" style="background-color: white !important; height:200px; display:flex; justify-content:center; align-items:center; margin:auto auto; box-sizing:border-box; width:150px;">
                    ${data[i].miniatura != null ?
                        `<img data-name="${data[i].miniatura}" data-number="1" class="lightbox-trigger" src="/Content/UploadImages/${data[i].miniatura}" style="width:95%; height:95%;" />
                    <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" /></svg>`

                        : `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="white" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>`}

                    </div>
                    </div>
                    <div class="" style="width:60%;">

                    <a href="~/Content/Documentos/${data[i].arquivo}" class="linkArquivo" target="_blank">
                    <div class="manu" style="padding-top:0;" data-eva="${data[i].titulo}">
                    <div id="documentoContainer" class="h-full px-4 pt-0 text-left rounded-md hover:shadow-xl transition duration-200">


                    <h3 class="mb-4 mt-4" style="font-weight:bold; font-size:22px; color:black;">${data[i].titulo}</h3><p style="font-size:14px;">${data[i].subtitulo}</p>
                    </div>

                    </div>
                    </a>
                    <div style="display:flex; align-items:center; margin-top:20px;" class="px-4 download-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                    <a style="width:fit-content; margin-left:5px; height:fit-content; display:block; font-size:13px; " href="/Content/UploadImages/${data[i].miniatura}" download class="">FAZER DOWNLOAD</a>
                    </div>
                    </div>
                    </div>
                     `


            }
            $("#documentosContainer").html(newDocument);

            lightBoxActivate();
        },
        error: function () {
            alert("json not found aaaa");
        }
    });
}


                 
                    var controlTop = true;

                    $(window).on("load scroll", lightBoxActivate());

                    function lightBoxActivate() {
                        const lightboxOverlay = document.querySelector(".lightbox-overlay");
                        const lightboxImage = document.querySelector(".lightbox-image");
                        const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
                        const lightBox = document.getElementsByClassName("lightbox")[0];
                        const imgName = document.querySelector(".name-image");
                        const imgNumber = document.querySelector(".number-image");
                        const closeButton = document.querySelector(".close-button");
                        const prevBtn = document.querySelector(".prev");
                        const nextBtn = document.querySelector(".next");
                        const linksArquivos = document.getElementsByClassName("linkArquivo");
                        const back = document.getElementsByClassName("backBlack")[0];
                        const expandContractBtn = document.getElementsByClassName("expandContract")[0];


                        let contractBool = true;
                        if (expandContractBtn != null) {
                            expandContractBtn.addEventListener("click", () => {
                                if (contractBool == true) {
                                    //lightbox.style.maxWidth = "130%";
                                    lightboxImage.style.opacity = 0;
                                    closeButton.style.opacity = 0;
                                    imgName.style.opacity = 0;
                                    imgNumber.style.opacity = 0;
                                    expandContractBtn.style.opacity = 0;

                                    setTimeout(function () {
                                        lightBox.style.width = "calc(600px + 350px)";
                                        lightBox.style.maxHeight = "calc(80% + 350px)";
                                        lightboxOverlay.style.maxHeight = "calc(80% + 350px)";
                                        //lightbox.style.maxHeight = "100%";
                                        lightboxImage.style.width = "100%";
                                        lightboxImage.style.maxWidth = "100%";
                                        lightboxOverlay.style.height = "calc(80% + 350px)";

                                        document.getElementsByClassName("iconMaximize")[0].style.display = "none";
                                        document.getElementsByClassName("iconMinimize")[0].style.display = "block";
                                        contractBool = !contractBool;
                                        controlTop = false;
                                    }, 500)
                                 
                                    setTimeout(function () {
                                        lightboxImage.style.opacity = 1;
                                        closeButton.style.opacity = 1;
                                        imgName.style.opacity = 1;
                                        imgNumber.style.opacity = 1;
                                        expandContractBtn.style.opacity = 1;

                                    }, 600)




                                } else {
                                    lightboxImage.style.opacity = 0;
                                    closeButton.style.opacity = 0;
                                    imgName.style.opacity = 0;
                                    imgNumber.style.opacity = 0;
                                    expandContractBtn.style.opacity = 0;


                                    setTimeout(function () {
                                        //lightbox.style.maxWidth = "130%";
                                        lightBox.style.width = "600px";
                                        lightBox.style.maxHeight = "80%";
                                        lightboxOverlay.style.height = "100%";


                                        //lightbox.style.maxHeight = "100%";
                                        contractBool = !contractBool;
                                        document.getElementsByClassName("iconMaximize")[0].style.display = "block";
                                        document.getElementsByClassName("iconMinimize")[0].style.display = "none";
                                        controlTop = true;
                                    }, 500);

                            
                                    setTimeout(function () {
                                        lightboxImage.style.opacity = 1;
                                        closeButton.style.opacity = 1;
                                        imgName.style.opacity = 1;
                                        imgNumber.style.opacity = 1;
                                        expandContractBtn.style.opacity = 1;


                                    }, 600)
                                }
                            })
                        }
                        lightboxTriggers.forEach(trigger => {
                            trigger.addEventListener("click", function (event) {
                                event.stopPropagation();
                                const imageURL = trigger.src;
                                lightboxImage.src = imageURL;
                                imgNumber.textContent = trigger.getAttribute("data-number") + "/4";
                                imgName.textContent = trigger.getAttribute("data-name");
                                lightboxOverlay.style.display = "flex";
                                back.style.display = "block";


                                const windowHeight = window.innerHeight;
                                const divHeight = lightboxOverlay.clientHeight;
                                const scrollTop = window.scrollY;

                                // Calcula a posição vertical da div para mantê-la no centro
                                const topPosition = ((windowHeight - divHeight) / 2) + scrollTop;
                                // Define a posição da div
                                lightboxOverlay.style.top = `${topPosition}px`;
                                console.log(topPosition);
                            });
                        });


                        if (prevBtn != null) {

                            prevBtn.addEventListener("click", function () {
                                if ((parseInt(imgNumber.textContent) - 2) < 0) {
                                    lightboxImage.src = lightboxTriggers[3].src;
                                    imgNumber.textContent = lightboxTriggers[3].getAttribute("data-number") + "/4";
                                    imgName.textContent = lightboxTriggers[3].getAttribute("data-name");
                                    lightboxOverlay.style.display = "flex";

                                } else {
                                    lightboxImage.src = lightboxTriggers[parseInt(imgNumber.textContent) - 2].src;
                                    imgNumber.textContent = lightboxTriggers[parseInt(imgNumber.textContent) - 2].getAttribute("data-number") + "/4";
                                    imgName.textContent = lightboxTriggers[parseInt(imgNumber.textContent) - 2].getAttribute("data-name");
                                    lightboxOverlay.style.display = "flex";
                                }
                            });
                        }

                        if (nextBtn != null) {
                            nextBtn.addEventListener("click", function () {
                                if (parseInt(imgNumber.textContent) > 3) {
                                    lightboxImage.src = lightboxTriggers[0].src;
                                    imgNumber.textContent = lightboxTriggers[0].getAttribute("data-number") + "/4";
                                    imgName.textContent = lightboxTriggers[0].getAttribute("data-name");
                                    lightboxOverlay.style.display = "flex";

                                } else {
                                    lightboxImage.src = lightboxTriggers[parseInt(imgNumber.textContent)].src;
                                    imgNumber.textContent = lightboxTriggers[parseInt(imgNumber.textContent)].getAttribute("data-number") + "/4";
                                    imgName.textContent = lightboxTriggers[parseInt(imgNumber.textContent)].getAttribute("data-name");
                                    lightboxOverlay.style.display = "flex";

                                }

                            });
                        }
                        if (closeButton != null) {
                            closeButton.addEventListener("click", () => {
                                lightboxOverlay.style.display = "none";
                                back.style.display = "none";

                            });
                        }
                        if (lightboxOverlay != null) {
                            lightboxOverlay.addEventListener("click", function (event) {
                                if (event.target.id == "divFilha" || event.target.id == "name-image-filha" || event.target.id == "next-btn" || event.target.id == "prev-btn" || event.target.id == "prev-svg" || event.target.id == "next-svg" || event.target.id == "expandContract") {
                                    return;
                                }
                                lightboxOverlay.style.display = "none";
                                back.style.display = "none";

                            });
                        }
                    }
                 
    
