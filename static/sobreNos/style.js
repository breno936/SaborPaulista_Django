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

                    function resposiveSwiper() {
                        var largura = window.innerWidth;
                        console.log("sdsfdsfdsfdf");
        
                        if (largura < 768) {
                            var swiper = new Swiper(".mySwiper", {
                                slidesPerView: 2,
                                spaceBetween: 200,
                                slidesPerGroup: 1,
                                speed: 3500,
                                loop: true,
                                autoplay: {
                                    delay: 1,
                                    disableOnInteraction: false,
                                },
                                loopFillGroupWithBlank: true,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: true,
                                },
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                },
                            });
                        } else {
        
                            var swiper = new Swiper(".mySwiper", {
                                slidesPerView: 4,
                                spaceBetween: 200,
                                slidesPerGroup: 1,
                                speed: 3500,
                                loop: true,
                                autoplay: {
                                    delay: 1,
                                    disableOnInteraction: false,
                                },
                                loopFillGroupWithBlank: true,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: true,
                                },
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                },
                            });
                        }
                    }
                    window.addEventListener('resize', resposiveSwiper);
        resposiveSwiper();       
        