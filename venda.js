const debliw_card_montra_blogger = document.createElement('template');

debliw_card_montra_blogger.innerHTML = `
    <style>
   
/*! lightslider - v1.1.3 - 2015-04-14
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2015 Sachin N; Licensed MIT */

.lSSlideWrapper,
.lSSlideWrapper .lSFade {
    position: relative
}

.lSSlideWrapper .lSSlide,
.lSSlideWrapper.usingCss .lSFade>* {
    -webkit-transition-timing-function: inherit !important;
    transition-timing-function: inherit !important;
    -webkit-transition-duration: inherit !important;
    transition-duration: inherit !important
}

.lSSlideOuter,
.lSSlideOuter .lSPager.lSGallery {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none
}

.lSSlideOuter .lSPager.lSGallery:after,
.lSSlideWrapper>.lightSlider:after {
    clear: both
}

.lSSlideOuter {
    overflow: hidden;
    user-select: none
}

.lightSlider:after,
.lightSlider:before {
    content: " ";
    display: table
}

.lightSlider {
    overflow: hidden;
    margin: 0
}

.lSSlideWrapper {
    max-width: 100%;
    overflow: hidden
}

.lSSlideWrapper .lSSlide {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: all 1s;
    -webkit-transition-property: -webkit-transform, height;
    -moz-transition-property: -moz-transform, height;
    transition-property: transform, height
}

.lSSlideWrapper .lSFade>* {
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 9;
    margin-right: 0;
    width: 90%
    padding:5%;
}

.lSSlideWrapper.usingCss .lSFade>* {
    opacity: 0;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transition-property: opacity;
    transition-property: opacity
}

.lSSlideWrapper .lSFade>.active {
    z-index: 10
}

.lSSlideWrapper.usingCss .lSFade>.active {
    opacity: 1
}

.lSSlideOuter .lSPager.lSpg {
    padding: 0;
    text-align: center
}

.lSSlideOuter .lSPager.lSpg>li {
    cursor: pointer;
    display: inline-block;
    padding: 0 5px
}

.lSSlideOuter .lSPager.lSpg>li a {
    background-color: #222;
    border-radius: 30px;
    display: inline-block;
    height: 8px;
    overflow: hidden;
    text-indent: -999em;
    width: 8px;
    position: relative;
    z-index: 99;
    -webkit-transition: all .5s linear 0s;
    transition: all .5s linear 0s
}

.lSSlideOuter .lSPager.lSpg>li.active a,
.lSSlideOuter .lSPager.lSpg>li:hover a {
    background-color: #428bca
}

.lSSlideOuter .media {
    opacity: .8
}

.lSSlideOuter .media.active {
    opacity: 1
}

.lSSlideOuter .lSPager.lSGallery {
    list-style: none;
    padding-left: 0;
    margin: 0;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    user-select: none
}

.lSSlideOuter .lSPager.lSGallery li {
    overflow: hidden;
    -webkit-transition: border-radius .12s linear 0s .35s linear 0s;
    transition: border-radius .12s linear 0s .35s linear 0s
}

.lSSlideOuter .lSPager.lSGallery li.active,
.lSSlideOuter .lSPager.lSGallery li:hover {
    border-radius: 5px
}

.lSSlideOuter .lSPager.lSGallery img {
    display: block;
    height: auto;
    max-width: 100%
}

.lSSlideOuter .lSPager.lSGallery:after,
.lSSlideOuter .lSPager.lSGallery:before {
    content: " ";
    display: table
}

.lSAction>a {
    width: 32px;
    display: block;
    top: 50%;
    height: 32px;
    background-image: url(../img/controls.png);
    cursor: pointer;
    position: absolute;
    z-index: 99;
    margin-top: -16px;
    opacity: .5;
    -webkit-transition: opacity .35s linear 0s;
    transition: opacity .35s linear 0s
}

.lSAction>a:hover {
    opacity: 1
}

.lSAction>.lSPrev {
    background-position: 0 0;
    left: 10px
}

.lSAction>.lSNext {
    background-position: -32px 0;
    right: 10px
}

.lSAction>a.disabled {
    pointer-events: none
}

.cS-hidden {
    height: 1px;
    opacity: 0;
    filter: alpha(opacity=0);
    overflow: hidden
}

.lSSlideOuter.vertical {
    position: relative
}

.lSSlideOuter.vertical.noPager {
    padding-right: 0 !important
}

.lSSlideOuter.vertical .lSGallery {
    position: absolute !important;
    right: 0;
    top: 0
}

.lSSlideOuter.vertical .lightSlider>* {
    width: 100% !important;
    max-width: none !important
}

.lSSlideOuter.vertical .lSAction>a {
    left: 50%;
    margin-left: -14px;
    margin-top: 0
}

.lSSlideOuter.vertical .lSAction>.lSNext {
    background-position: 31px -31px;
    bottom: 10px;
    top: auto
}

.lSSlideOuter.vertical .lSAction>.lSPrev {
    background-position: 0 -31px;
    bottom: auto;
    top: 10px
}

.lSSlideOuter.lSrtl {
    direction: rtl
}

.lSSlideOuter .lSPager,
.lSSlideOuter .lightSlider {
    padding-left: 0;
    list-style: none
}

.lSSlideOuter.lSrtl .lSPager,
.lSSlideOuter.lSrtl .lightSlider {
    padding-right: 0
}

.lSSlideOuter .lSGallery li,
.lSSlideOuter .lightSlider>* {
    float: left
}

.lSSlideOuter.lSrtl .lSGallery li,
.lSSlideOuter.lSrtl .lightSlider>* {
    float: right !important
}

@-webkit-keyframes rightEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: -15px
    }
}

@keyframes rightEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: -15px
    }
}

@-webkit-keyframes topEnd {
    0%,
    100% {
        top: 0
    }
    50% {
        top: -15px
    }
}

@keyframes topEnd {
    0%,
    100% {
        top: 0
    }
    50% {
        top: -15px
    }
}

@-webkit-keyframes leftEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: 15px
    }
}

@keyframes leftEnd {
    0%,
    100% {
        left: 0
    }
    50% {
        left: 15px
    }
}

@-webkit-keyframes bottomEnd {
    0%,
    100% {
        bottom: 0
    }
    50% {
        bottom: -15px
    }
}

@keyframes bottomEnd {
    0%,
    100% {
        bottom: 0
    }
    50% {
        bottom: -15px
    }
}

.lSSlideOuter .rightEnd {
    -webkit-animation: rightEnd .3s;
    animation: rightEnd .3s;
    position: relative
}

.lSSlideOuter .leftEnd {
    -webkit-animation: leftEnd .3s;
    animation: leftEnd .3s;
    position: relative
}

.lSSlideOuter.vertical .rightEnd {
    -webkit-animation: topEnd .3s;
    animation: topEnd .3s;
    position: relative
}

.lSSlideOuter.vertical .leftEnd {
    -webkit-animation: bottomEnd .3s;
    animation: bottomEnd .3s;
    position: relative
}

.lSSlideOuter.lSrtl .rightEnd {
    -webkit-animation: leftEnd .3s;
    animation: leftEnd .3s;
    position: relative
}

.lSSlideOuter.lSrtl .leftEnd {
    -webkit-animation: rightEnd .3s;
    animation: rightEnd .3s;
    position: relative
}

.lightSlider.lsGrab>* {
    cursor: -webkit-grab;
    cursor: -moz-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
    cursor: grab
}

.lightSlider.lsGrabbing>* {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: -o-grabbing;
    cursor: -ms-grabbing;
    cursor: grabbing
}

 .container{
        width:90%;
        height:fit-content;
        background: none;
        /*border:1px solid #ff008f;*/
        position: relative;
        padding:10px
       
}
.container li{
        display: block;
        position:relative;

}
.container img{
}


 @import url('https://fonts.cdnfonts.com/css/zag');
        
        * {
            font-family: 'Zag', sans-serif;
        }
        .btn{
            width: 75%;
            height: 31px;
            background: #ffffff;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            display:block;
            margin:0 auto;
            border: 1px solid #ffffff;
            cursor:pointer;
        }

        .concluir{
            background: green !important;
            border: 1px solid green !important;
            font-weight: bold;
            color: white;
            width: 95%;
            letter-spacing: 3px;
        }

        .mais-tarde{
            background: #990000 !important;
            border: 1px solid #990000 !important;
            font-weight: bold;
            color: white;
            width: 8%;
            height:3vh;
            position: absolute;
            top: 10px;
            right: 10px;
        }
        .quero-este{
            font-weight: bold;
            width: 100%;
            letter-spacing: 3px;
        }


        *:focus {
            outline:none;
        }
        input:focus {
            outline: none;
        }
        input{
            width: 70%;
            height: 31px;
            border-radius: 5px;
            display:block;
            margin:0 auto 1vh auto;
            border:1px solid #aaa;
            padding:0 2.5%;
            font-weight: bold;
        }
        
        .card-modal{
            position:absolute;
            width:100%;
            top:0;
            left:0;
            z-index: 222102;
        }
        .card-collapse{
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            padding:2vh 0;
        }
        .relativa{
            position: relative;
            z-index: 10102;
            overflow:auto;
            height:fit-content;
            background-color: #ffffff;
            display:block;
            margin:10vh auto 0 auto;
            width: 80%;
            border-radius: 5px;
        }
        .relativa img{
            width: 100%;
            border-radius: 5px 5px 0 0;
        }
        .padding{padding: 2vh;}
        .backdrop{
            width:100%;
            position:fixed;
            left: 0;
            top:0;
            height:100vh;
            background: #00000099;
        }

        .detalhes{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1vh;
            text-transform: capitalize;
            padding:2vh;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 2px;

        }
        .detalhes p{font-size: 16px;margin: 5px;}
        .banner{width: 100%;display: block;}
        .card-detalhes-acao{width:90%;padding:5%;position: relative;letter-spacing:1px}
@media screen and (max-width:1000px) {
   
    
}
</style>

    <ul class="container">
       
    </ul>
`;



class debliwcardmontrablogger extends HTMLElement {

    constructor($, arrayElements, loader, notificacao ) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliw_card_montra_blogger.content.cloneNode(true));

        this.jquery = $;
        this.arrayElements = arrayElements;
        this.itens = 1;
        this.pager = true;
        this.speed = 900;
        this.pause = 2000;
        this.loader = loader;
        this.notificacao = notificacao;

    }

    connectedCallback() {
        var esse = this;
        var container = this.shadowRoot.querySelector('.container');
        var numeroItens = ((this.arrayElements).length) ;
        this.arrayElements.forEach((element, key) => {
            if((key+1) > numeroItens){
                return;
            }
            if (typeof(element) == "string") {
                $(container).append(`<li>${element}</li>`);
                console.log(element);
                

            } else {

            }

        });

        setTimeout(function() {
            for (let index = 0;index < numeroItens; index++) {
                console.log(index);
                esse.shadowRoot.querySelector("#quero"+(index)).addEventListener('click', function(){
                    console.log(index);
                    let collapse = esse.shadowRoot.querySelector("#collapse"+(index));
                    if(collapse.style.display == "block"){
                        collapse.style.display = "none";
                        esse.shadowRoot.querySelector(".container").style.height = "fit-content";
                        return;
                    }
                    if(collapse.style.display == "none"){
                        collapse.style.display = "block";
                        esse.shadowRoot.querySelector(".container").style.height = "fit-content";
                        return;
                    }
                   
                });
                esse.shadowRoot.querySelector("#fazer"+(index)).addEventListener('click', function(){
                    console.log(index);
                    let modal = esse.shadowRoot.querySelector("#modal"+(index));
                    modal.style.display = "block";
                   
                });
                esse.shadowRoot.querySelector("#backdrop"+(index)).addEventListener('click', function(){
                    let modal = esse.shadowRoot.querySelector("#modal"+(index));
                    modal.style.display = "none";
                   
                });
                esse.shadowRoot.querySelector("#tarde"+(index)).addEventListener('click', function(){
                    let modal = esse.shadowRoot.querySelector("#modal"+(index));
                    modal.style.display = "none";
                   
                });
                
            }
        },2000)


        var slider = $(container).lightSlider({
            gallery: false,
            item: esse.itens,
            speed: esse.speed,
            loop: true,
            keyPress: true,
            auto: true,
            controls: false,
            pager: esse.pager,
            pauseOnHover: true,
            pause: esse.pause,
            adaptiveHeight: false,
            onSliderLoad: function() {
                $(container).removeClass('cS-hidden');
            }
        }).css("z-index", "0");


    }

}

window.customElements.define('debliwui-card-montra-blogger', debliwcardmontrablogger)