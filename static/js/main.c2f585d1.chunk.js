(this["webpackJsonplakeweather-client"]=this["webpackJsonplakeweather-client"]||[]).push([[0],{21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a,r,i,l,o,c,d,s,m,u,f,h,g,b,p,v=t(1),E=t.n(v),w=t(12),x=t.n(w),y=(t(21),t(7)),k=t.n(y),j=t(13),N=t(5),O=Object(v.createContext)(),z=function(e){var n=e.children,t=Object(v.useState)(null),a=Object(N.a)(t,2),r=a[0],i=a[1];return Object(v.useEffect)((function(){function e(){return(e=Object(j.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3333/data");case 2:return n=e.sent,e.t0=i,e.next=6,n.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),E.a.createElement(O.Provider,{value:r},n)},S=t(3),F=t(2),C={colors:{main:"#f5f6f7;",header:{current:"#020024",title:{light:"#80d0c7",dark:"#0093e9"},byline:"#e96e50",background:{light:"#FFFEF4",dark:"#b7e8eb "},wave:{light:"",dark:"",ocean:"#0093e9"}},body:{old:"#fff788",title:{color:"#FFFEF4",background:"#e96e50",underline:"#753526"},card:{color:"#999",underline:"#999"},text:"#fefef7",background:{light:"#0093E9",dark:"#020024"}},footer:{text:"#0a0a0a",background:{light:"#fefef7",dark:"#0093E9"},link:{color:"#e96e50"}}}},W=F.b.div(a||(a=Object(S.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    min-height: 100vh;\n    background: ",";\n    z-index: 0;\n    position: relative;\n    background: radial-gradient(\n        ellipse at center,\n        "," 0%,\n        "," 35%,\n        "," 100%\n    );\n    overflow: hidden;\n"])),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.header.background.light}),(function(e){return e.theme.colors.header.background.light}),(function(e){return e.theme.colors.header.background.dark})),L=F.b.div(r||(r=Object(S.a)(["\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1em;\n    z-index: 2;\n    position: relative;\n\n    .headline {\n        font-size: 4em;\n        margin: 0;\n        background: -webkit-linear-gradient(\n            45deg,\n            ",",\n            ","\n        );\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n\n    .byline {\n        font-size: 3em;\n        font-weight: 700;\n        margin: 0;\n        color: ",";\n    }\n"])),(function(e){return e.theme.colors.header.title.dark}),(function(e){return e.theme.colors.header.title.light}),(function(e){return e.theme.colors.header.byline})),B=F.b.div(i||(i=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 600;\n    font-size: 0.9em;\n    width: 100vw;\n    position: absolute;\n    top: 0;\n    color: ",";\n\n    * {\n        text-align: center;\n    }\n\n    .icon {\n        height: 2em;\n        width: 2em;\n    }\n\n    .temp {\n        flex: 2;\n    }\n\n    .description {\n        flex: 3;\n    }\n\n    .humidity {\n        flex: 3;\n    }\n\n    .humidity span {\n        font-size: 0.7em;\n    }\n"])),(function(e){return e.theme.colors.header.current})),H=t.p+"static/media/lightwave.a86043e8.svg",D=t.p+"static/media/darkwave.a86043e8.svg",U=F.b.div(l||(l=Object(S.a)(["\n    max-width: 100vw;\n    background: #f5f6f7;\n    overflow: hidden;\n    z-index: 0;\n\n    .ocean {\n        height: 5%;\n        width: 100%;\n        background: ",";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n    }\n\n    .wave {\n        background: url(",") repeat-x;\n        position: absolute;\n        top: -198px;\n        width: 6400px;\n        height: 198px;\n        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;\n        transform: translate3d(0, 0, 0);\n    }\n\n    .wave:nth-of-type(2) {\n        top: -175px;\n        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,\n            swell 7s ease -1.25s infinite;\n        opacity: 1;\n    }\n\n    @keyframes wave {\n        0% {\n            margin-left: 0;\n        }\n        100% {\n            margin-left: -1600px;\n        }\n    }\n\n    @keyframes swell {\n        0%,\n        100% {\n            transform: translate3d(0, -25px, 0);\n        }\n        50% {\n            transform: translate3d(0, 5px, 0);\n        }\n    }\n"])),(function(e){return e.theme.colors.header.wave.ocean}),(function(e){return e.background})),A=function(){var e=Object(v.useState)(),n=Object(N.a)(e,2),t=n[0],a=n[1],r=Object(F.c)();return Object(v.useEffect)((function(){a("day"===r?H:D)}),[]),E.a.createElement(U,{background:t},E.a.createElement("div",{className:"ocean"},E.a.createElement("div",{className:"wave"}),E.a.createElement("div",{className:"wave"})))},I=function(e){var n=e.children,t=e.label,a=e.className;return E.a.createElement("span",{role:"img","aria-label":t,className:a},n)},J=F.b.div(o||(o=Object(S.a)(["\n    position: relative;\n    width: 64px;\n    height: 64px;\n\n    div {\n        position: absolute;\n        border: 4px solid #;\n        border-radius: 50%;\n        animation: ripple-loader 1s ease-out infinite;\n    }\n\n    div:nth-child(2) {\n        animation-delay: -0.5s;\n    }\n\n    @keyframes ripple-loader {\n        0% {\n            top: 32px;\n            left: 32px;\n            width: 0;\n            height: 0;\n            opacity: 1;\n        }\n        100% {\n            top: 0;\n            left: 0;\n            width: 64px;\n            height: 64px;\n            opacity: 0;\n        }\n    }\n"]))),M=function(){return E.a.createElement(J,null,E.a.createElement("div",null),E.a.createElement("div",null))},q=function(e){var n,t,a=e.bundle;return E.a.createElement(B,null,E.a.createElement("img",{className:"icon",src:(n=a.icon,t=2,"http://openweathermap.org/img/wn/".concat(n,"@").concat(t,"x.png")),alt:a.description}),E.a.createElement("div",{className:"temp"},a.temp,"\xb0 F"),E.a.createElement("div",{className:"description"},function(e){for(var n=e.split(" "),t=0;t<n.length;t++)n[t]=n[t][0].toUpperCase()+n[t].substring(1);return n.join(" ")}(a.description)),E.a.createElement("div",{className:"humidity"},a.humidity,"% ",E.a.createElement("span",null,"HUM")))},K=function(){var e=Object(v.useContext)(O);return E.a.createElement(W,null,E.a.createElement(L,null,e?E.a.createElement(q,{bundle:e.current}):E.a.createElement(M,null),E.a.createElement("h1",{className:"headline"},"Lake Erie"),E.a.createElement("p",{className:"byline"},"Shall we ",E.a.createElement(I,{label:"kayak"},"\ud83d\udef6"),"?")),E.a.createElement(A,null))},P=F.b.div(c||(c=Object(S.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    flex: 1;\n    margin-left: 1em;\n"]))),Z=function(e){var n=e.children;return E.a.createElement(P,null,n)},$=t.p+"static/media/Lake_Erie.6c4f4521.svg",_=F.b.div(d||(d=Object(S.a)(["\n    background: ",";\n    height: .5em;\n    width: 100vw;\n    position: absolute;\n    top: 0;;\n"])),(function(e){return e.theme.colors.footer.link.color})),G=F.b.div(s||(s=Object(S.a)(["\n    background: linear-gradient(\n        0deg,\n        "," 70%,\n        "," 100%\n    );\n    display: none;\n"])),(function(e){return e.theme.colors.footer.background.light}),(function(e){return e.theme.colors.footer.background.dark})),Q=F.b.div(m||(m=Object(S.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    padding-top: 2em;\n    font-size: 1.2em;\n    background-image: ",";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 50% auto;\n    color: ",";\n\n    a {\n        color: ",";\n        text-decoration: none;\n    }\n\n    ul,\n    li {\n        padding: 0;\n        margin: 0;\n        font-size: 0.8em;\n    }\n\n    li {\n        list-style-type: none;\n        margin: 1em 0 0 0;\n    }\n\n    img {\n        max-width: 10vw;\n    }\n\n    .copyright {\n        margin: 0 auto;\n        margin-top: 2em;\n        font-size: 0.65em;\n\n        span {\n            margin: 0 0.5em 0 0.5em;\n        }\n    }\n\n    .list-container {\n        margin: 0 0 0 2em;\n    }\n\n    .heading {\n        font-size: 1em;\n        font-weight: 900;\n        margin: 0;\n        padding: 0;\n    }\n"])),"url(".concat($,")"),(function(e){return e.theme.colors.footer.text}),(function(e){return e.theme.colors.footer.link.color})),R=function(){return E.a.createElement(G,null,E.a.createElement(Q,null,E.a.createElement(_,null),E.a.createElement("div",{className:"content"},E.a.createElement("div",{className:"list-container"},E.a.createElement("h2",{className:"heading"},"Data Sources"),E.a.createElement("ul",null,E.a.createElement("li",null,E.a.createElement("a",{href:"https://www.ndbc.noaa.gov/data/Forecasts/FZUS61.KCLE.html"},"National Data Buoy Center (NDBC)")),E.a.createElement("li",null,E.a.createElement("a",{href:"https://www.noaa.gov/"},"National Oceanic and Atmospheric Administration"))))),E.a.createElement("p",{className:"copyright"},"\xa9 Copyright 2021. Built with",E.a.createElement(I,{label:"coffee"},"\u2615"),"by"," ",E.a.createElement("a",{href:"https://ethanling.com"},"Ethan Ling"),".")))},T=F.b.div(u||(u=Object(S.a)(["\n    height: 100%;\n    min-height: 100vh;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: rgb(2, 0, 36);\n    background: linear-gradient(\n        0deg,\n        "," 0%,\n        "," 40%,\n        "," 100%\n    );\n    padding: 0;\n    margin: 0;\n    z-index: 2;\n    box-shadow: 0 0px 20px 0 #000;\n"])),(function(e){return e.theme.colors.body.background.dark}),(function(e){return e.theme.colors.body.background.light}),(function(e){return e.theme.colors.body.background.light})),V=function(e){var n=e.children;return E.a.createElement(F.a,{theme:C},E.a.createElement(T,null,E.a.createElement(K,null),E.a.createElement(Z,null,n)),E.a.createElement(R,null))},X=F.b.div(f||(f=Object(S.a)(['\n    .title {\n        display: flex;\n        align-items: center;\n        font-size: 1.8em;\n        font-family: "Inter", mono;\n        font-weight: 900;\n        color: ',";\n        background: ",";\n        letter-spacing: 1px;\n        padding: 0.25em 0.25em 0.25em 0.5em;\n        margin: 0;\n        font-style: oblique;\n        border: 1px 1px 0px 1px solid\n            ",";\n    }\n\n    .title-underline {\n        height: 0.5em;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n    }\n\n    .title-underline-inner {\n        flex: 1;\n        height: 100%;\n        background: ",";\n    }\n\n    .title-underline-corner {\n        border-top: 0.5em solid\n            ",";\n        border-left: 0.5em solid rgba(0, 0, 0, 0);\n        width: 0;\n    }\n"])),(function(e){return e.theme.colors.body.title.color}),(function(e){return e.theme.colors.body.title.background}),(function(e){return e.theme.colors.body.title.underline}),(function(e){return e.theme.colors.body.title.underline}),(function(e){return e.theme.colors.body.title.underline})),Y=F.b.div(h||(h=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    .card {\n        margin-bottom: 3em;\n        width: 100%;\n    }\n\n    .card-background {\n        margin-left: 0.5em;\n        border: 0 0.5em 0.5em 0.5em solid\n            ",";\n    }\n\n    .card-underline {\n        height: 0.5em;\n        width: 100%;\n        position: relative;\n        display: flex;\n        flex-direction: row;\n    }\n\n    .card-underline-corner {\n        border-top: 0.5em solid\n            ",";\n        border-left: 0.5em solid rgba(0, 0, 0, 0);\n        width: 0;\n    }\n\n    .card-underline-inner {\n        flex: 1;\n        height: 100%;\n        background: ",";\n    }\n\n    .content {\n        display: flex;\n        flex-direction: row;\n        padding: 1em;\n        background: white;\n        color: ",";\n        margin: 0;\n    }\n\n    .container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .text-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.3em;\n        font-weight: 600;\n        margin: 1em 0 0 0;\n    }\n\n    .alert {\n        background: rgba(255, 0, 0, 0.5);\n        border-radius: 2em;\n        transition: all 0.2s ease;\n    }\n\n    .alert:hover {\n        background: rgba(255, 0, 0, 0.8);\n    }\n\n    .alert-message {\n        opacity: 0;\n    }\n\n    .row {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .col {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .timestamp {\n        display: flex;\n        justify-content: center;\n        color: ",";\n        font-size: .8em;\n        margin-bottom: 2em;\n    }\n"])),(function(e){return e.theme.colors.body.title.background}),(function(e){return e.theme.colors.body.card.underline}),(function(e){return e.theme.colors.body.card.underline}),(function(e){return e.theme.colors.body.card.color}),(function(e){return e.theme.colors.body.text})),ee=(F.b.div(g||(g=Object(S.a)(["\n    opacity: ",";\n"])),(function(e){return e.show?"1":"0"})),F.b.div(b||(b=Object(S.a)(["\n    opacity: ",";\n"])),(function(e){return e.show?"1":"0"})),t(9)),ne=t(4),te=(ne.d,ne.b,ne.c,ne.a,F.b.div(p||(p=Object(S.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])))),ae=function(e){var n=e.direction;return"West"===n?E.a.createElement(ne.a,null):"East"===n?E.a.createElement(ne.c,null):"North"===n?E.a.createElement(ne.d,null):"South"===n?E.a.createElement(ne.b,null):""},re=function(e){var n=e.direction;return E.a.createElement(te,null,E.a.createElement(ae,{direction:n}))},ie=function(e){var n=e.data,t=e.iconSize,a=e.maxWaveHeight,r=Object(v.useState)(!1),i=Object(N.a)(r,2),l=(i[0],i[1]);return Object(v.useEffect)((function(){n.waves.height.high>a&&l(!0)}),[]),E.a.createElement("div",{className:"card"},E.a.createElement(X,null,E.a.createElement("h1",{className:"title"},n.time),E.a.createElement("div",{className:"title-underline"},E.a.createElement("div",{className:"title-underline-corner"}),E.a.createElement("div",{className:"title-underline-inner"}))),E.a.createElement("div",{className:"card-background"},E.a.createElement("div",{className:"content"},E.a.createElement("div",{className:"container"},E.a.createElement(ee.b,{size:t}),E.a.createElement("span",{className:"text-container"},"".concat(n.wind.speed.low," - \n                                        ").concat(n.wind.speed.high," kt."),E.a.createElement("br",null),E.a.createElement("span",{className:"row"},E.a.createElement(re,{direction:n.wind.direction}),n.wind.direction))),E.a.createElement("div",{className:"container"},E.a.createElement(ee.a,{size:t}),E.a.createElement("span",{className:"text-container"},"".concat(n.waves.height.low).concat(n.waves.height.high?" - "+n.waves.height.high+" ft.":" ft. or less")))),E.a.createElement("div",{className:"card-underline"},E.a.createElement("div",{className:"card-underline-corner"}),E.a.createElement("div",{className:"card-underline-inner"}))))},le=function(e){var n=e.weather,t=e.iconSize,a=e.maxWaveHeight,r=function(e){var n=Object(v.useState)(null),t=Object(N.a)(n,2),a=t[0],r=t[1];return Object(v.useEffect)((function(){var n=new Date(e);r(n.toLocaleString())}),[e]),a}(n.date);return E.a.createElement(Y,null,n.data.map((function(e,n){return E.a.createElement(ie,{key:n,data:e,iconSize:t,maxWaveHeight:a})})),E.a.createElement("div",{className:"timestamp"},"Last updated at ".concat(r)))},oe=function(){var e=Object(v.useContext)(O);return E.a.createElement(V,null,e?E.a.createElement(le,{weather:e,iconSize:"1.5rem",maxWaveHeight:3}):E.a.createElement(M,null))};var ce=function(){return E.a.createElement(z,null,E.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(E.a.createElement(E.a.StrictMode,null,E.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c2f585d1.chunk.js.map