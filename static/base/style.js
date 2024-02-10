        
        // Substitua "YOUTUBE_VIDEO_ID" pelo ID do vídeo do YouTube desejado

        // Função para obter a thumbnail e atualizar a imagem
        function obterThumbnail(videoId, element) {
            // URL da API do YouTube Data para obter informações do vídeo
            return;
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDh_zEFdweLB3Yi3dVuM9nzyyRCFmGKqA0&part=snippet`;

            // Faça uma solicitação HTTP para a API do YouTube Data
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Obtenha a URL da thumbnail do primeiro snippet do vídeo
                    const thumbnailUrl = data.items[0].snippet.thumbnails.medium.url;

                    // Atualize a imagem com a thumbnail do vídeo
                    element.src = thumbnailUrl;
                })
                .catch(error => {
                    console.error('Erro ao obter a thumbnail:', error);
                });
        }

        // Aguarde o evento "DOMContentLoaded" antes de chamar a função para cada elemento
        document.addEventListener("DOMContentLoaded", function () {
            const thumbnails = document.getElementsByClassName("thumbnail");
            // Substitua os valores dos elementos do array "videoIds" pelos IDs dos vídeos do YouTube desejados

            for (let i = 0; i < thumbnails.length; i++) {
                obterThumbnail(thumbnails[i].getAttribute("data-video-id"), thumbnails[i]);
            }
        });



        document.addEventListener("DOMContentLoaded", function () {






            // Obtenha a referência para o elemento <div> do player
            const playerContainer = document.getElementById("player-container");

            // Defina o ID do vídeo do YouTube
            const youtubeVideoId = "1BZ5s6BcvKg";

            // Defina o atributo 'data-plyr-embed-id' com o ID do vídeo do YouTube
            if (playerContainer == null) {
                return;
            }
            playerContainer.setAttribute("data-plyr-embed-id", youtubeVideoId);

            // Crie o player Plyr
            const player = new Plyr('#player-container');

            const side_videos = document.querySelectorAll(".side-video");

            // Adicione um evento de clique a cada miniatura
            side_videos.forEach(side_video => {
                side_video.addEventListener("click", function () {
                    // Obtenha o ID do vídeo do atributo data-video-id da miniatura clicada
                    const videoId = this.getAttribute("data-video-id");

                    // Obtenha a origem do vídeo do YouTube usando o ID do vídeo
                    const youtubeSource = {
                        type: 'video',
                        sources: [{
                            src: 'https://www.youtube.com/watch?v=' + videoId,
                            provider: 'youtube',
                        }],
                    };

                    // Carregue o novo vídeo no player Plyr
                    player.source = youtubeSource;
                });
            });
        });
     

    // @if (IsSectionDefined("About"))
    // {
             
    //         function resposiveSwiper() {
    //             var largura = window.innerWidth;


    //             if (largura < 768) {
    //                 var swiper = new Swiper(".mySwiper", {
    //                     slidesPerView: 2,
    //                     spaceBetween: 200,
    //                     slidesPerGroup: 1,
    //                     speed: 3500,
    //                     loop: true,
    //                     autoplay: {
    //                         delay: 1,
    //                         disableOnInteraction: false,
    //                     },
    //                     loopFillGroupWithBlank: true,
    //                     pagination: {
    //                         el: ".swiper-pagination",
    //                         clickable: true,
    //                     },
    //                     navigation: {
    //                         nextEl: ".swiper-button-next",
    //                         prevEl: ".swiper-button-prev",
    //                     },
    //                 });
    //             } else {

    //                 var swiper = new Swiper(".mySwiper", {
    //                     slidesPerView: 4,
    //                     spaceBetween: 200,
    //                     slidesPerGroup: 1,
    //                     speed: 3500,
    //                     loop: true,
    //                     autoplay: {
    //                         delay: 1,
    //                         disableOnInteraction: false,
    //                     },
    //                     loopFillGroupWithBlank: true,
    //                     pagination: {
    //                         el: ".swiper-pagination",
    //                         clickable: true,
    //                     },
    //                     navigation: {
    //                         nextEl: ".swiper-button-next",
    //                         prevEl: ".swiper-button-prev",
    //                     },
    //                 });
    //             }
    //         }
    //         window.addEventListener('resize', resposiveSwiper);
    //         resposiveSwiper();                
            

     
         
    // }
    // @if (IsSectionDefined("Produto"))
    // {
         
    //         var swiper = new Swiper(".mySwiper", {
    //             slidesPerView: 'auto',
    //             spaceBetween: 10,
    //             navigation: {
    //                 nextEl: ".swiper-button-next",
    //                 prevEl: ".swiper-button-prev",
    //             },
    //             breakpoints: {
    //                 "@@0.00": {
    //                     slidesPerView: 'auto',
    //                     spaceBetween: 0,
    //                 },
    //                 "@@0.75": {
    //                     slidesPerView: 'auto',
    //                     spaceBetween: 0,
    //                 },
    //                 "@@1.00": {
    //                     slidesPerView: 'auto',
    //                     spaceBetween: 0,
    //                 },
    //                 "@@1.50": {
    //                     slidesPerView: 'auto',
    //                     spaceBetween: 0,
    //                 },
    //             },
    //         });
         
         
            //var swiper = new Swiper(".mySwiper", {
            //    slidesPerView: 3,
            //    spaceBetween: 0,
            //    slidesPerGroup: 1,
            //    speed: 2000,
            //    loop: true,
            //    loopFillGroupWithBlank: true,
            //    pagination: {
            //        el: ".swiper-pagination",
            //        clickable: true,
            //    },
            //    navigation: {
            //        nextEl: ".swiper-button-next",
            //        prevEl: ".swiper-button-prev",
            //    },
            //});
         
        // @RenderSection("Produto", required: false)
    // }
     
        $(document).ready(function () {
            $('.dotdotdot').dotdotdot({
                /* Opções */
                ellipsis: '...', // Texto a ser adicionado ao truncamento
                height: 40, // Altura máxima do elemento (em pixels)
                watch: 'window', // Opção para redotar o texto quando a janela for redimensionada
            });
        });
     

     
        function changeMainVideo(videoId) {

            const playerContainer = document.getElementById("player-container");


            // Defina o atributo 'data-plyr-embed-id' com o ID do vídeo do YouTube
            console.log(videoId);
            playerContainer.setAttribute("data-plyr-embed-id", videoId);

        }
        ///////////animation logo
        $(document).ready(function () {
            // Adicione a classe de animação normal ao carregar a página
            $('.logobolado').addClass('logoAnimacao1');

            // Quando o mouse entrar no elemento, remova a classe de animação normal e adicione a classe de animação do mouse over
            $('.logobolado').on('mouseenter', function () {
                $(this).removeClass('logoAnimacao1');
            });

            // Quando o mouse sair do elemento, remova a classe de animação do mouse over e adicione a classe de animação normal
            //$('.logobolado').on('mouseleave', function () {
            //    $(this).removeClass('logoAnimacao2').addClass('logoAnimacao1');
            //});
        });

                                                                                            /* <![CDATA[ */ var wwsObj = { "supportNumber": "911234567890", "autoPopup": "1", "plugin_url": "http:\/\/collegare.com.br\/said\/", "is_mobile": "0", "is_product": "0", "current_page_url": "http:\/\/collegare.com.br\/said\/", "current_popup_template": "6", "is_popup_display_on_current_page": "1", "group_invitation_id": "XYZ12345678", "admin_ajax_url": "http:\/\/collegare.com.br\/said\/wp-admin\/admin-ajax.php", "scroll_lenght": null, "auto_popup_time": "10", "is_gdpr": "0" }; /* ]]> */

        $(document).ready(function () {
            $(".js-example-basic-single").select2();
        });

        function openCloseNav() {
            var altura = document.getElementById("navbarMobile").style.height;
            console.log(altura);
            if (altura == "0px") {
                document.getElementById("navbarMobile").style.height = "400px";

            } else {
                console.log("some")
                document.getElementById("navbarMobile").style.height = "0px";

            }

        }

        $(window).resize(function () {
            var blocSlide = document.getElementById("bloc-1");
            var blocMenu = document.getElementById("bloc-0");
            var blocMedias = document.getElementById("bloc-1-medias");
            if (blocSlide != null && blocMenu != null && blocMedias != null) {
                var tamRetirar = blocMedias.clientHeight + blocMenu.clientHeight;

                blocSlide.style.height = "calc(100vh - " + tamRetirar + "px)"
            }
            var elemento = document.getElementsByClassName('cardsProductHome');
            var larguraDaTela = window.innerWidth;
            var controlador = 1;
            if (larguraDaTela < 770) {
                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {
                        elemento[i].classList.remove("scroll-fx-left-in");
                        elemento[i + 1].classList.remove("scroll-fx-left-in");
                    } if (controlador == 2) {
                        elemento[i].classList.remove("scroll-fx-up-in");
                        elemento[i + 1].classList.remove("scroll-fx-up-in");
                    } if (controlador == 3) {
                        elemento[i].classList.remove("scroll-fx-right-in");
                        elemento[i + 1].classList.remove("scroll-fx-right-in");
                        controlador = 0;
                    }
                    controlador++;
                }
                controlador = 1;


                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {

                        elemento[i].classList.add("scroll-fx-left-in");
                        elemento[i + 1].classList.add("scroll-fx-left-in");
                    } if (controlador == 2) {

                        elemento[i].classList.add("scroll-fx-right-in");
                        elemento[i + 1].classList.add("scroll-fx-right-in");
                        controlador = 0;
                    }
                    controlador++;
                }


            } else {
                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {
                        elemento[i].classList.remove("scroll-fx-left-in");
                        elemento[i + 1].classList.remove("scroll-fx-left-in");
                    } if (controlador == 2) {
                        elemento[i].classList.remove("scroll-fx-right-in");
                        elemento[i + 1].classList.remove("scroll-fx-right-in");
                        controlador = 0;
                    }
                    controlador++;
                }
                controlador = 1;

                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {
                        elemento[i].classList.add("scroll-fx-left-in");
                        elemento[i + 1].classList.add("scroll-fx-left-in");
                    } if (controlador == 2) {

                        elemento[i].classList.add("scroll-fx-up-in");
                        elemento[i + 1].classList.add("scroll-fx-up-in");
                    }
                    if (controlador == 3) {
                        elemento[i].classList.add("scroll-fx-right-in");
                        elemento[i + 1].classList.add("scroll-fx-right-in");
                        controlador = 0;

                    }
                    controlador++;
                }
            }


        });


        $(window).on("load", function () {



            var blocSlide = document.getElementById("bloc-1");
            var blocMenu = document.getElementById("bloc-0");
            var blocMedias = document.getElementById("bloc-1-medias");
            if (blocSlide != null && blocMenu != null && blocMedias != null) {
                var tamRetirar = blocMedias.clientHeight + blocMenu.clientHeight;

                blocSlide.style.height = "calc(100vh - " + tamRetirar + "px)"
            }
            var elemento = document.getElementsByClassName('cardsProductHome');
            var larguraDaTela = window.innerWidth;
            var controlador = 1;
            if (larguraDaTela < 770) {
                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {
                        elemento[i].classList.remove("scroll-fx-left-in");
                        elemento[i + 1].classList.remove("scroll-fx-left-in");
                    } if (controlador == 2) {
                        elemento[i].classList.remove("scroll-fx-up-in");
                        elemento[i + 1].classList.remove("scroll-fx-up-in");
                    } if (controlador == 3) {
                        elemento[i].classList.remove("scroll-fx-right-in");
                        elemento[i + 1].classList.remove("scroll-fx-right-in");
                        controlador = 0;
                    }
                    controlador++;
                }
                controlador = 1;


                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {

                        elemento[i].classList.add("scroll-fx-left-in");
                        elemento[i + 1].classList.add("scroll-fx-left-in");
                    } if (controlador == 2) {

                        elemento[i].classList.add("scroll-fx-right-in");
                        elemento[i + 1].classList.add("scroll-fx-right-in");
                        controlador = 0;
                    }
                    controlador++;
                }


            } else {
                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {
                        elemento[i].classList.remove("scroll-fx-left-in");
                        elemento[i + 1].classList.remove("scroll-fx-left-in");
                    } if (controlador == 2) {
                        elemento[i].classList.remove("scroll-fx-right-in");
                        elemento[i + 1].classList.remove("scroll-fx-right-in");
                        controlador = 0;
                    }
                    controlador++;
                }
                controlador = 1;

                for (var i = 0; i < elemento.length - 1; i += 2) {
                    if (controlador == 1) {
                        elemento[i].classList.add("scroll-fx-left-in");
                        elemento[i + 1].classList.add("scroll-fx-left-in");
                    } if (controlador == 2) {

                        elemento[i].classList.add("scroll-fx-up-in");
                        elemento[i + 1].classList.add("scroll-fx-up-in");
                    }
                    if (controlador == 3) {
                        elemento[i].classList.add("scroll-fx-right-in");
                        elemento[i + 1].classList.add("scroll-fx-right-in");
                        controlador = 0;

                    }
                    controlador++;
                }
            }


        });
        var travaSubMenuBool = false;
        var subMenuUl = document.getElementsByClassName("subMenu")[0];

        function travaSubMenu(e) {
            console.log("js funcionando");
            if (travaSubMenuBool == false) {

                subMenuUl.style.height = "200%";
                travaSubMenuBool = !travaSubMenuBool;
            } else {

                subMenuUl.style.height = "0";
                travaSubMenuBool = !travaSubMenuBool;

            }
        }
        $(window).on("load scroll", function () {



            var subMenu = document.getElementsByClassName("subMenu")[0];


            var threshold = 30; // porcentagem da altura visível do elemento que aparecer na tela para iniciar a animação
            var scrlTopo = $(window).scrollTop();
            $(".logobolado").each(function () {
                var el = $(this);
                // quanto foi rolada a janela
                //var altJanela = window.innerHeight; // altura da janela
                if (scrlTopo >= 50) {
                    var logo = document.getElementsByClassName("logobolado");
                    logo[0].style.opacity = "0";
                    logo[0].style.display = "none";
                    document.getElementById("iconLadoHome").style.display = "block";
                    document.getElementsByClassName("navbartopo")[0].style.height = "70px";
                    document.getElementsByClassName("navFlex")[0].style.justifyContent = "space-around";
                    document.getElementsByClassName("navFlex")[0].classList.remove("col-11");
                    document.getElementsByClassName("navFlex")[0].classList.add("col-12");
                    if (subMenu != null) {
                        subMenu.style.top = "60px";
                    }

                } else {
                    var logo = document.getElementsByClassName("logobolado");
                    logo[0].style.display = "block";
                    logo[0].style.opacity = "1";
                    document.getElementById("iconLadoHome").style.display = "none";
                    document.getElementsByClassName("navbartopo")[0].style.height = "inherit";
                    document.getElementsByClassName("navFlex")[0].style.justifyContent = "center";
                    document.getElementsByClassName("navFlex")[0].classList.remove("col-12");
                    document.getElementsByClassName("navFlex")[0].classList.add("col-11");
                    if (subMenu != null) {
                        subMenu.style.top = "70px";
                    }



                }
            }
            );
            if (scrlTopo >= 50) {
                if (document.getElementsByClassName("carrinhoMenu")[0] != null) {
                    document.getElementsByClassName("carrinhoMenu")[0].classList.add("carrinhoMenuHoverInternal");
                }
                document.getElementsByClassName("carrinhoMenuHoverInternal")[0].classList.remove("carrinhoMenu");
            } else {
                if (document.getElementsByClassName("carrinhoMenuHoverInternal")[0] != null) {

                    document.getElementsByClassName("carrinhoMenuHoverInternal")[0].classList.add("carrinhoMenu");
                }
                document.getElementsByClassName("carrinhoMenu")[0].classList.remove("carrinhoMenuHoverInternal");
            }

        });

        ///////////////COOKIES
        // Função para ocultar a notificação de cookie
        function hideCookieNotification() {
            toggleCookieTabVisibility();
            if (document.getElementById("fundo-preto-cookie").style != null) {
                document.getElementById("fundo-preto-cookie").style.display = "none";
                var notification = document.getElementById('cookie-notification');
                notification.style.bottom = "-100%";
            }
        }

        // Função para mostrar a notificação de cookie
        function showCookieNotification() {
            if (document.getElementById("fundo-preto-cookie").style != null) {

                document.getElementById("fundo-preto-cookie").style.display = "block";
                var notification = document.getElementById('cookie-notification');
                notification.style.bottom = "20px";
            }
        }

        // Função para definir um cookie quando o usuário aceitar
        function setCookie() {
            // Aqui você pode personalizar o nome e a duração do cookie
            // Neste exemplo, o cookie expirará em 30 dias
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 30);

            document.cookie = 'cookie_accepted=true; expires=' + expirationDate.toUTCString() + '; path=/';
        }

        // Função para verificar se o cookie foi aceito
        function isCookieAccepted() {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie === 'cookie_accepted=true') {
                    return true;
                }
            }
            return false;
        }

        // Função para alternar a visibilidade da aba de cookies
        function toggleCookieTabVisibility() {
            var tab = document.getElementById('cookie-tab');
            tab.classList.toggle('hidden');
        }

        // Verificar se o cookie já foi aceito, se não, mostrar a notificação
        if (!isCookieAccepted()) {
            if (document.getElementById("fundo-preto-cookie") != null) {

                document.getElementById("fundo-preto-cookie").style.display = "block";

                showCookieNotification();
                toggleCookieTabVisibility(); // Exibir a aba de cookies
            }
        } else {

        }

        // Evento de clique no botão "Aceitar"
        var acceptButton = document.getElementById('accept-cookie');

        if (acceptButton != null) {

            acceptButton.addEventListener('click', function () {
                setCookie();
                hideCookieNotification();
                toggleCookieTabVisibility(); // Ocultar a aba de cookies
            });
        }

        // Evento de clique no botão "Rejeitar Cookies"
        var rejectButton = document.getElementById('reject-cookie');

        if (rejectButton != null) {
            rejectButton.addEventListener('click', function () {
                hideCookieNotification();
                toggleCookieTabVisibility(); // Ocultar a aba de cookies
            });
        }
        // Evento de clique na aba de cookies
        var cookieTab = document.getElementById('cookie-tab');

        if (cookieTab) {
            cookieTab.addEventListener('click', function () {
                showCookieNotification();
                toggleCookieTabVisibility(); // Exibir a aba de cookies
            });
        }
        var lastScrollPosition = 0;
        var translateYAmount = 0; // Valor inicial de deslocamento

        function animateElementOnScroll() {
            var animatedElement = document.getElementById('animated-element');
            var currentScrollPosition = window.pageYOffset;
            var scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';

            // Verificar a direção do scroll e calcular o valor de deslocamento
            if (scrollDirection === 'down') {
                translateYAmount += Math.abs(currentScrollPosition - lastScrollPosition);
                translateYAmount = Math.min(100, translateYAmount); // Limite para o deslocamento para baixo
            } else {
                translateYAmount -= Math.abs(currentScrollPosition - lastScrollPosition);
                translateYAmount = Math.max(0, translateYAmount); // Limite para o deslocamento para cima
            }

            // Atualizar a posição do elemento
            if (animatedElement != null) {
                animatedElement.style.transform = 'translateX(-50%) translateY(-' + translateYAmount + 'px)';
            }
            lastScrollPosition = currentScrollPosition;
        }

        window.addEventListener('scroll', animateElementOnScroll);

     

    // @if (!IsSectionDefined("About"))
    // {
         
    //         var controlTop = true;

    //         $(window).on("scroll", function () {
    //             if (controlTop == true) {
    //                 const lightboxOverlay = document.querySelector(".lightbox-overlay");
    //                 if (lightboxOverlay != null) {
    //                     const windowHeight = window.innerHeight;
    //                     const divHeight = lightboxOverlay.clientHeight;
    //                     const scrollTop = window.scrollY;

    //                     // Calcula a posição vertical da div para mantê-la no centro
    //                     const topPosition = ((windowHeight - divHeight) / 2) + scrollTop;
    //                     // Define a posição da div
    //                     lightboxOverlay.style.top = `${topPosition}px`;
    //                     console.log(topPosition);
    //                 }
    //             }
    //         });
         
    // }
    // @if(IsSectionDefined("About") || IsSectionDefined("Documents"))
    //         {
                 
    //                 var controlTop = true;

    //                 $(window).on("load scroll", lightBoxActivate());

    //                 function lightBoxActivate() {
    //                     const lightboxOverlay = document.querySelector(".lightbox-overlay");
    //                     const lightboxImage = document.querySelector(".lightbox-image");
    //                     const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
    //                     const lightBox = document.getElementsByClassName("lightbox")[0];
    //                     const imgName = document.querySelector(".name-image");
    //                     const imgNumber = document.querySelector(".number-image");
    //                     const closeButton = document.querySelector(".close-button");
    //                     const prevBtn = document.querySelector(".prev");
    //                     const nextBtn = document.querySelector(".next");
    //                     const linksArquivos = document.getElementsByClassName("linkArquivo");
    //                     const back = document.getElementsByClassName("backBlack")[0];
    //                     const expandContractBtn = document.getElementsByClassName("expandContract")[0];


    //                     let contractBool = true;
    //                     if (expandContractBtn != null) {
    //                         expandContractBtn.addEventListener("click", () => {
    //                             if (contractBool == true) {
    //                                 //lightbox.style.maxWidth = "130%";
    //                                 lightboxImage.style.opacity = 0;
    //                                 closeButton.style.opacity = 0;
    //                                 imgName.style.opacity = 0;
    //                                 imgNumber.style.opacity = 0;
    //                                 expandContractBtn.style.opacity = 0;

    //                                 setTimeout(function () {
    //                                     lightBox.style.width = "calc(600px + 350px)";
    //                                     lightBox.style.maxHeight = "calc(80% + 350px)";
    //                                     lightboxOverlay.style.maxHeight = "calc(80% + 350px)";
    //                                     //lightbox.style.maxHeight = "100%";
    //                                     lightboxImage.style.width = "100%";
    //                                     lightboxImage.style.maxWidth = "100%";
    //                                     lightboxOverlay.style.height = "calc(80% + 350px)";

    //                                     document.getElementsByClassName("iconMaximize")[0].style.display = "none";
    //                                     document.getElementsByClassName("iconMinimize")[0].style.display = "block";
    //                                     contractBool = !contractBool;
    //                                     controlTop = false;
    //                                 }, 500)
                                 
    //                                 setTimeout(function () {
    //                                     lightboxImage.style.opacity = 1;
    //                                     closeButton.style.opacity = 1;
    //                                     imgName.style.opacity = 1;
    //                                     imgNumber.style.opacity = 1;
    //                                     expandContractBtn.style.opacity = 1;

    //                                 }, 600)




    //                             } else {
    //                                 lightboxImage.style.opacity = 0;
    //                                 closeButton.style.opacity = 0;
    //                                 imgName.style.opacity = 0;
    //                                 imgNumber.style.opacity = 0;
    //                                 expandContractBtn.style.opacity = 0;


    //                                 setTimeout(function () {
    //                                     //lightbox.style.maxWidth = "130%";
    //                                     lightBox.style.width = "600px";
    //                                     lightBox.style.maxHeight = "80%";
    //                                     lightboxOverlay.style.height = "100%";


    //                                     //lightbox.style.maxHeight = "100%";
    //                                     contractBool = !contractBool;
    //                                     document.getElementsByClassName("iconMaximize")[0].style.display = "block";
    //                                     document.getElementsByClassName("iconMinimize")[0].style.display = "none";
    //                                     controlTop = true;
    //                                 }, 500);

                            
    //                                 setTimeout(function () {
    //                                     lightboxImage.style.opacity = 1;
    //                                     closeButton.style.opacity = 1;
    //                                     imgName.style.opacity = 1;
    //                                     imgNumber.style.opacity = 1;
    //                                     expandContractBtn.style.opacity = 1;


    //                                 }, 600)
    //                             }
    //                         })
    //                     }
    //                     lightboxTriggers.forEach(trigger => {
    //                         trigger.addEventListener("click", function (event) {
    //                             event.stopPropagation();
    //                             const imageURL = trigger.src;
    //                             lightboxImage.src = imageURL;
    //                             imgNumber.textContent = trigger.getAttribute("data-number") + "/4";
    //                             imgName.textContent = trigger.getAttribute("data-name");
    //                             lightboxOverlay.style.display = "flex";
    //                             back.style.display = "block";


    //                             const windowHeight = window.innerHeight;
    //                             const divHeight = lightboxOverlay.clientHeight;
    //                             const scrollTop = window.scrollY;

    //                             // Calcula a posição vertical da div para mantê-la no centro
    //                             const topPosition = ((windowHeight - divHeight) / 2) + scrollTop;
    //                             // Define a posição da div
    //                             lightboxOverlay.style.top = `${topPosition}px`;
    //                             console.log(topPosition);
    //                         });
    //                     });


    //                     if (prevBtn != null) {

    //                         prevBtn.addEventListener("click", function () {
    //                             if ((parseInt(imgNumber.textContent) - 2) < 0) {
    //                                 lightboxImage.src = lightboxTriggers[3].src;
    //                                 imgNumber.textContent = lightboxTriggers[3].getAttribute("data-number") + "/4";
    //                                 imgName.textContent = lightboxTriggers[3].getAttribute("data-name");
    //                                 lightboxOverlay.style.display = "flex";

    //                             } else {
    //                                 lightboxImage.src = lightboxTriggers[parseInt(imgNumber.textContent) - 2].src;
    //                                 imgNumber.textContent = lightboxTriggers[parseInt(imgNumber.textContent) - 2].getAttribute("data-number") + "/4";
    //                                 imgName.textContent = lightboxTriggers[parseInt(imgNumber.textContent) - 2].getAttribute("data-name");
    //                                 lightboxOverlay.style.display = "flex";
    //                             }
    //                         });
    //                     }

    //                     if (nextBtn != null) {
    //                         nextBtn.addEventListener("click", function () {
    //                             if (parseInt(imgNumber.textContent) > 3) {
    //                                 lightboxImage.src = lightboxTriggers[0].src;
    //                                 imgNumber.textContent = lightboxTriggers[0].getAttribute("data-number") + "/4";
    //                                 imgName.textContent = lightboxTriggers[0].getAttribute("data-name");
    //                                 lightboxOverlay.style.display = "flex";

    //                             } else {
    //                                 lightboxImage.src = lightboxTriggers[parseInt(imgNumber.textContent)].src;
    //                                 imgNumber.textContent = lightboxTriggers[parseInt(imgNumber.textContent)].getAttribute("data-number") + "/4";
    //                                 imgName.textContent = lightboxTriggers[parseInt(imgNumber.textContent)].getAttribute("data-name");
    //                                 lightboxOverlay.style.display = "flex";

    //                             }

    //                         });
    //                     }
    //                     if (closeButton != null) {
    //                         closeButton.addEventListener("click", () => {
    //                             lightboxOverlay.style.display = "none";
    //                             back.style.display = "none";

    //                         });
    //                     }
    //                     if (lightboxOverlay != null) {
    //                         lightboxOverlay.addEventListener("click", function (event) {
    //                             if (event.target.id == "divFilha" || event.target.id == "name-image-filha" || event.target.id == "next-btn" || event.target.id == "prev-btn" || event.target.id == "prev-svg" || event.target.id == "next-svg" || event.target.id == "expandContract") {
    //                                 return;
    //                             }
    //                             lightboxOverlay.style.display = "none";
    //                             back.style.display = "none";

    //                         });
    //                     }
    //                 }
                 
    //         }
     
        //////////////// INPUT QUANTITY
        /*
        *
        * Free to use - No warranty
        */




        var btnminus = document.querySelector('.qtyminus');
        var btnplus = document.querySelector('.qtyplus');
        var carrinho = new Array();
        var listaProdutos = document.getElementById("listaProducts");
        //let novaDivProdutos = document.createElement("ul");
        //novaDivProdutos.setAttribute("id", "listaProducts");
        var novoProdutoCarrinho = "";
        var totalItensCarrinho = 0;
        if (localStorage.hasOwnProperty("numberItens")) {
            totalItensCarrinho = Number(localStorage.getItem("numberItens"));
        }
        if (totalItensCarrinho == 0 || totalItensCarrinho == null) {
            document.getElementById("numberItens").style.display = "none";
            document.getElementById("numberItensMobile").style.display = "none";
        } else {
            document.getElementById("numberItens").style.display = "block";
            document.getElementById("numberItensMobile").style.display = "block";

        }
        console.log(totalItensCarrinho);

        var numeroItens = document.getElementById("numberItens");
        var numeroItensMobile = document.getElementById("numberItensMobile");
        if (localStorage.hasOwnProperty("itensCarrinho")) {
            carrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
            for (var i = 0; i < carrinho.length; i++) {
                var quantidadeAtual = carrinho[i]['quantidade'];
                totalItensCarrinho = totalItensCarrinho + parseInt(quantidadeAtual);
            }
            if (!localStorage.hasOwnProperty("numberItens")) {
                localStorage.setItem("numberItens", totalItensCarrinho);
            }
        }
        if (localStorage.hasOwnProperty("numberItens")) {
            numeroItens.innerHTML = '<p style="color:white;">' + localStorage.getItem("numberItens") + '</p>';
            numeroItensMobile.innerHTML = '<p style="color:white;">' + localStorage.getItem("numberItens") + '</p>';
        }

        for (var i = 0; i <= carrinho.length - 1; i++) {
            novoProdutoCarrinho += '   <li id="produto' + i + '">' +
                '<div class="tpcart__item">' +
                ' <div class="tpcart__img">' +
                '  <img src="' + carrinho[i]['img'] + '" alt="">' +
                '<div class="tpcart__del">' +
                '  <a href="#"></a>' +
                ' </div>' +
                '  </div>' +
                '  <div class="tpcart__content">' +
                '<span class="tpcart__content-title">' +
                '<a href="shop-details.html">' + carrinho[i]['nome'] + '</a>' +
                '   </span>' +
                '<a onclick="removeElementCart(' + i + ')" style="font-weight:bold; color:red; font-size:15px; margin-left:25px;">X</a>' +
                '  <div class="tpcart__cart-price">' +
                ' <span class="quantity">' + carrinho[i]['quantidade'] + ' x </span>' +
                //' <span class="new-price">R$' + preco.textContent + '</span>' +
                '   </div>' +
                ' </div>' +
                '  </div>' +
                ' </li > '
        }
        var lista = listaProdutos.innerHTML;
        lista = lista + novoProdutoCarrinho;
        listaProdutos.innerHTML = lista;

        $(window).on('load', function () {
            // cache container
            var $container = $('#isotope_container');

            // initialize isotope
            $container.isotope({
                // options...
                animationEngine: 'best-available',
                itemSelector: '.isotope_selector'
            });

            // filter items when filter link is clicked
            $('#isotope_filters a').on('click', function () {
                $('#isotope_filters a').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).data('filter');

                console.log(selector);
                $container.isotope({
                    filter: selector
                });

            });
        });


        function qtyminus(e) {
            var input = document.getElementsByClassName(e);

            //var min = Number(input.getAttribute('min'));
            //var max = Number(input.getAttribute('max'));
            //var step = Number(input.getAttribute('step'));

            //var current = Number(input.value);
            var newval = 0;

            console.log(input);
            for (var i = 0; i <= input.length - 1; i++) {
                newval = parseInt(input[i].value) - 1;
                console.log(newval);
                if (newval < 1) {
                    input[i].value = Number(1);

                } else {
                    input[i].value = Number(newval);
                }
            }

        }

        function qtyplus(e) {
            var input = document.getElementsByClassName(e);

            //var min = Number(input.getAttribute('min'));
            //var max = Number(input.getAttribute('max'));
            //var step = Number(input.getAttribute('step'));

            //var current = Number(input.value);
            var newval = 0;

            console.log(input);
            for (var i = 0; i <= input.length - 1; i++) {
                newval = parseInt(input[i].value) + 1;
                console.log(newval);

                input[i].value = Number(newval);
            }
        }

        function openCloseCard() {
            var card = document.getElementById("cardDiv");
            var bgBlack = document.getElementById("divBlack");
            var whatsIcon = document.getElementById("whats");

            var largura = $(document).width();
            console.log(largura);
            if (card.style.right == "0px") {
                if (largura > 760) {
                    card.style.right = "380px";
                    console.log(card.clientWidth)
                    whatsIcon.style.marginRight = "300px";
                } else {
                    card.style.right = "280px";
                    whatsIcon.style.marginRight = "200px";

                }
                bgBlack.style.display = "block";
            } else {
                card.style.right = "0px";
                bgBlack.style.display = "none";
                whatsIcon.style.marginRight = "0px";

            }
        }

        function addElementInCard(id) {
            totalItensCarrinho = Number(localStorage.getItem("numberItens"));

            document.getElementById("numberItens").style.display = "block";
            document.getElementById("numberItensMobile").style.display = "block";

            var quantidade = document.getElementsByClassName("num-product")[0];
            var nome = document.getElementsByClassName("nomeCar")[0];
            var categoria = document.getElementsByClassName("categoriaCar")[0];
            var img = document.getElementsByClassName("imgCar")[0];


            var listaProducts = document.getElementById("listaProducts");
            console.log(nome.textContent);
            var tamanhoCarrinho = 0;
            if (localStorage.hasOwnProperty("itensCarrinho")) {
                tamanhoCarrinho = JSON.parse(localStorage.getItem("itensCarrinho")).length;
            }
            console.log(tamanhoCarrinho);
            var newProductCart = '<li id="produto' + tamanhoCarrinho + '">' +
                '<div class="tpcart__item">' +
                ' <div class="tpcart__img">' +
                '  <img src="' + img.getAttribute('src') + '" alt="">' +
                '<div class="tpcart__del">' +
                '  <a href="#"></a>' +
                ' </div>' +
                '  </div>' +
                '  <div class="tpcart__content">' +
                '<span class="tpcart__content-title">' +
                '<a href="shop-details.html">' + nome.textContent + '</a>' +
                '   </span>' +
                '<a onclick="removeElementCart(' + i + ')" style="font-weight:bold; color:red; font-size:15px; margin-left:25px;">X</a>' +
                '  <div class="tpcart__cart-price">' +
                ' <span class="quantity">' + quantidade.value + ' x </span>' +
                //' <span class="new-price">R$' + preco.textContent + '</span>' +
                '   </div>' +
                ' </div>' +
                '  </div>' +
                '</li>'

            var lista = listaProdutos.innerHTML;
            lista = lista + newProductCart;
            listaProdutos.innerHTML = lista;

            var itensCarrinho = new Array();

            if (localStorage.hasOwnProperty("itensCarrinho")) {
                itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"))
                itensCarrinho = itensCarrinho;
            }

            itensCarrinho.push({
                nome: nome.text,
                categoria: categoria.text,
                img: img.getAttribute("src"),
                quantidade: quantidade.value
            })
            console.log(totalItensCarrinho, quantidade.value);

            totalItensCarrinho += parseInt(quantidade.value);
            console.log(totalItensCarrinho);
            localStorage.setItem("itensCarrinho", JSON.stringify(itensCarrinho));
            localStorage.setItem("numberItens", totalItensCarrinho);
            numeroItens.innerHTML = '<p style="color:white;">' + localStorage.getItem("numberItens") + '</p>';
            numeroItensMobile.innerHTML = '<p style="color:white;">' + localStorage.getItem("numberItens") + '</p>';

        }
        function removeElementCart(idx) {
            var listaProdutos = document.getElementById("listaProducts");
            var removeCarrinho = Array();
            removeCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
            var itemCarrinho = removeCarrinho[idx];
            var quantidadeItensCarrinho = localStorage.getItem("numberItens");
            console.log(itemCarrinho.quantidade)
            quantidadeItensCarrinho = quantidadeItensCarrinho - itemCarrinho.quantidade;

            localStorage.setItem("numberItens", Number(quantidadeItensCarrinho));

            //var elemento = document.getElementById("produto" + idx);
            //elemento.remove();
            console.log(document.getElementById("listaProducts").children)

            document.getElementById("listaProducts").innerHTML = '';
            removeCarrinho.splice(idx, 1);
            localStorage.setItem("itensCarrinho", JSON.stringify(removeCarrinho));

            numeroItens.innerHTML = '<p style="color:white;">' + localStorage.getItem("numberItens") + '</p>';
            numeroItensMobile.innerHTML = '<p style="color:white;">' + localStorage.getItem("numberItens") + '</p>';

            console.log(removeCarrinho);
            novoProdutoCarrinho = "";
            for (var i = 0; i <= removeCarrinho.length - 1; i++) {
                novoProdutoCarrinho += '   <li id="produto' + i + '">' +
                    '<div class="tpcart__item">' +
                    ' <div class="tpcart__img">' +
                    '  <img src="' + removeCarrinho[i]['img'] + '" alt="">' +
                    '<div class="tpcart__del">' +
                    '  <a href="#"></a>' +
                    ' </div>' +
                    '  </div>' +
                    '  <div class="tpcart__content">' +
                    '<span class="tpcart__content-title">' +
                    '<a href="shop-details.html">' + removeCarrinho[i]['nome'] + '</a>' +
                    '   </span>' +
                    '<a onclick="removeElementCart(' + i + ')" style="font-weight:bold; color:red; font-size:15px; margin-left:25px;">X</a>' +
                    '  <div class="tpcart__cart-price">' +
                    ' <span class="quantity">' + removeCarrinho[i]['quantidade'] + ' x </span>' +
                    //' <span class="new-price">R$' + preco.textContent + '</span>' +
                    '   </div>' +
                    ' </div>' +
                    '  </div>' +
                    ' </li > '
            }

            console.log(document.getElementById("listaProducts"));
            var lista = listaProdutos.innerHTML;
            lista = lista + novoProdutoCarrinho;
            listaProdutos.innerHTML = lista;
        }

        function solicitarOrçamento() {
            let isMobile = (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    return true
                } else {
                    return false
                }
            })(navigator.userAgent || navigator.vendor || window.opera);

            // checar
            if (isMobile) {
                let number = '5519988935849';
                let msg = 'Olá, gostaria de orçamento pros seguintes produtos \n\n';
                itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
                for (var i = 0; i < itensCarrinho.length - 1; i++) {
                    msg += itensCarrinho[i].quantidade + ' Unidades de ' + itensCarrinho[i].nome + ' \n ';
                }

                // montar o link (número e texto) (app)
                let target = `whatsapp://send?text=${encodeURIComponent(msg)}`

                let a = document.createElement('a')
                a.target = '_blank'
                a.href = target // o link URL do api.whatsapp.com
                a.click() // simular o evento de "click"




            } else {
                let number = '5519988935849';
                let msg = 'Olá, gostaria de orçamento pros seguintes produtos \n\n';
                itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"));
                for (var i = 0; i < itensCarrinho.length - 1; i++) {
                    msg += itensCarrinho[i].quantidade + ' Unidades de ' + itensCarrinho[i].nome + ' \n ';
                }

                // montar o link (número e texto) (web)
                let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`

                let a = document.createElement('a')
                a.target = '_blank'
                a.href = target // o link URL do api.whatsapp.com
                a.click() // simular o evento de "click"
            }


        }
     

     
        $(window).on("load", function () {
            expandir(1);

        });
        /////////Expandir pilares
        function expandir(pilar) {
            console.log("sadsadsadsadsad");
            var pilar1 = document.getElementsByClassName("pilares")[0];
            var pilar2 = document.getElementsByClassName("pilares")[1];
            var pilar3 = document.getElementsByClassName("pilares")[2];

            var icon1 = document.getElementsByClassName("iconExpand")[0];
            var icon2 = document.getElementsByClassName("iconExpand")[1];
            var icon3 = document.getElementsByClassName("iconExpand")[2];
            if (pilar1 == null) {
                return;
            }

            if (pilar == 1 && pilar1.clientHeight == 0) {
                console.log("11111")

                pilar1.style.height = pilar1.scrollHeight + "px";
                icon1.style.opacity = 0;
                icon2.style.opacity = 1;
                icon3.style.opacity = 1;
                pilar2.style.height = "0px";
                pilar3.style.height = "0px";
            } else {
                pilar1.style.height = "0px";
                icon1.style.opacity = 1;

            }
            if (pilar == 2 && pilar2.clientHeight == 0) {
                console.log("22222")
                pilar1.style.height = "0px";
                pilar2.style.height = pilar2.scrollHeight + "px";
                pilar3.style.height = "0px";

                icon1.style.opacity = 1;
                icon2.style.opacity = 0;
                icon3.style.opacity = 1;
            } else {
                pilar2.style.height = "0px";
                icon2.style.opacity = 1;


            }
            if (pilar == 3 && pilar3.clientHeight == 0) {
                pilar1.style.height = "0px";
                pilar2.style.height = "0px";
                pilar3.style.height = pilar3.scrollHeight + "px";

                icon1.style.opacity = 1;
                icon2.style.opacity = 1;
                icon3.style.opacity = 0;
            } else {
                pilar3.style.height = "0px";
                icon3.style.opacity = 1;

            }
        }

        $(document).ready(function () {
            $(".js-example-basic-single").select2();

            $("#id_telefone").on( "keydown", function() {
                formataTelefone(this)
            });

        $("form").submit(function() {
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                var file = $('#id_curriculo')[0].files[0];

                if (file && file.size > 2 * 1024 * 1024) {
                    // alert("File " + file.name + " of type " + file.type + " is too big");
                    Swal.fire(
                    'Aviso',
                    'O tamanho do arquivo é superior ao máximo permitido que é de 2Mb',
                    'error',
                  )
                return false;
                }
            }

            var extension = $('#id_curriculo').val().split('.').pop().toLowerCase();
            var validExtensions = ["pdf","doc","docx"]
            if (validExtensions.includes(extension)){

            }
            else{
                  Swal.fire(
                    'Aviso',
                    'Apenas arquivos PDF ou Word são permitidos',
                    'error',
                  )
                return false;
            }

            });
        });
     


