!function(){const n=n=>{const t=document.getElementsByTagName("script");return t[t.length-1].getAttribute(n)},t=n("primary-color")||"#25d366",a=n("icon-white-color")||"#ffffff",o=n("icon-black-color")||"#1D1D1B",e=n("btn-text-color")||"#ffffff",i=n("btn-background-color")||"#1D1D1B",l=n("welcome-text")||"Welcome, how can we help you today?",c=n("phone"),s=n("position")||"right",r=n("distance")||"24px",h=document.createElement("style");h.innerHTML=`\n        :root {\n            --primary-color: ${t};\n            --icon-white-color: ${a};\n            --icon-black-color: ${o};\n            --btn-text-color: ${e};\n            --btn-background-color: ${i};\n            --text-color: ${o};\n        }\n\n    .doc-button {\n        position: fixed;\n        background-color: var(--primary-color);\n        bottom: 20px;\n        ${"left"===s?`left: ${r};`:`right: ${r};`}\n        width: 58px;\n        height: 58px;\n        border-radius: 50px;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\n        z-index: 20;\n        overflow: hidden;\n    }\n\n    .doc-button a,\n    .doc-button label {\n        color: #fff;\n        display: flex;\n        align-items: center;\n        width: 58px;\n        height: 58px;\n        margin: auto;\n        -webkit-transition: all .3s ease-out;\n        transition: all .3s ease-out;\n        justify-content: center;\n    }\n\n    .doc-button a svg,\n    .doc-button label svg {\n        margin: auto;\n        display: block;\n    }\n\n    .doc-button label svg.svg-2 {\n        display: none\n    }\n\n    .sticky-chat {\n        position: fixed;\n        bottom: 60px;\n        ${"left"===s?`left: ${r};`:`right: ${r};`}\n        min-width: 348px;\n        width: 348px;\n        opacity: 0;\n        -webkit-transition: all .3s ease-out;\n        transition: all .3s ease-out;\n        z-index: 21;\n        line-height: normal;\n        visibility: hidden\n    }\n\n    .sticky-chat-active {\n        bottom: 100px;\n        opacity: 1;\n        visibility: visible\n    }\n\n    .sticky-chat .chat-content {\n        border-radius: 10px;\n        background-color: #fff;\n        box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.09);\n        padding: 32px 32px 16px;\n        overflow: hidden\n    }\n\n    .sticky-chat .chat-icon {\n        margin-bottom: 16px;\n    }\n\n    .sticky-chat .chat-icon svg {\n        height: 58px;\n        width: 58px;\n    }\n\n    .sticky-chat .chat-icon svg {\n        fill: var(--primary-color);\n    }\n\n    .sticky-chat .chat-icon svg .class-1 {\n        fill: var(--icon-white-color)\n    }\n\n    .sticky-chat .chat-icon svg .class-2 {\n        fill: var(--icon-black-color)\n    }\n\n    .sticky-chat .chat-welcome {\n        position: relative;\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n    }\n\n    .sticky-chat .chat-welcome .title {\n        font-size: 1.5rem;\n        line-height: 1.3;\n        font-weight: 700;\n        color: var(--text-color);\n        margin-bottom: 16px;\n    }\n\n    .sticky-chat .chat-button {\n        display: flex;\n        align-items: center;\n        padding: 12px 16px;\n        border-radius: 10px;\n        background-color: var(--btn-background-color);\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .05);\n        overflow: hidden;\n        font-size: 1rem;\n        z-index: 700;\n        text-decoration: none;\n        color: var(--btn-text-color);\n        margin: 12px 0;\n    }\n\n    .sticky-chat .chat-button b {\n        color: var(--btn-text-color);\n        transition: all .25s ease;\n    }\n\n    .sticky-chat .chat-button svg {\n        width: 26px;\n        height: 26px;\n        margin-left: auto;\n    }\n\n    .sticky-chat .chat-button svg path {\n        fill: var(--btn-text-color);\n    }\n\n    .sticky-chat .chat-content .copyright {\n        margin-left: auto;\n        margin-right: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 3px;\n        font-size: 12px;\n        line-height: 18px;\n        color: #999999;\n    }\n\n    .sticky-chat .chat-content .copyright .poweredby-link {\n        font-weight: 600;\n        font-size: 12px;\n        color: #666666 !important;\n        text-decoration: none !important;\n    }\n\n    .doc-button label {\n        transition: all .25s ease;\n        cursor: pointer;\n    }\n\n    \n    .doc-button label .svg-1 svg .class-1 {\n        fill: var(--icon-white-color);\n    }\n\n    .doc-button label .svg-1 svg .class-2 {\n        fill: var(--icon-black-color);\n    }\n\n    .doc-button label .svg-1-off {\n        display: none;\n    }\n\n    .doc-button label .svg-2 {\n        display: none\n    }\n\n    .doc-button label .svg-2-on {\n        display: block !important;\n        fill: var(--icon-black-color);\n    }\n    `,document.head.appendChild(h);const d=`\n    <div class='doc-button' id='doc-button'>\n        <label for='offchat-menu'>\n            <div class="svg-1">\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61.303" height="61.405" viewBox="0 0 61.303 61.405">\n                    <g id="Group_215" data-name="Group 215" transform="translate(-1079.029 -1429.931)">\n                      <g id="Group_147" data-name="Group 147" transform="translate(1093.816 1446.758)" clip-path="url(#clip-path)">\n                        <path id="Path_303" data-name="Path 303" d="M939.907,1074.789h9.66l5.772,5.769v-5.769h2.467a5.359,5.359,0,0,0,5.35-5.347v-7.594a5.359,5.359,0,0,0-5.35-5.347h-17.9a5.359,5.359,0,0,0-5.35,5.347v7.594A5.359,5.359,0,0,0,939.907,1074.789Z" transform="translate(-930.395 -1052.334)" class="class-1"/>\n                        <path id="Path_304" data-name="Path 304" d="M952.828,1079.513l-6.208-6.2H937.39a6.4,6.4,0,0,1-6.39-6.389v-7.594a6.4,6.4,0,0,1,6.39-6.389h17.9a6.4,6.4,0,0,1,6.39,6.389v7.594a6.4,6.4,0,0,1-6.39,6.389h-2.467v-2.083h2.467a4.312,4.312,0,0,0,4.308-4.306v-7.594a4.312,4.312,0,0,0-4.308-4.306h-17.9a4.312,4.312,0,0,0-4.308,4.306v7.594a4.312,4.312,0,0,0,4.308,4.306h10.092l5.364,5.359-.017,2.925Z" transform="translate(-931 -1052.94)" class="class-2"/>\n                      </g>\n                    </g>\n                  </svg>  \n            </div>\n            <div class="svg-2">\n                <svg style='width:30px;height:30px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\n                    <path\n                        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"\n                         />\n                </svg>\n            </div>\n        </label>\n    </div>\n    <div class='sticky-chat'>\n        <div class='chat-content'>\n            \n            <div class="chat-icon">\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61.303" height="61.405" viewBox="0 0 61.303 61.405">\n                    <g id="Group_215" data-name="Group 215" transform="translate(-1079.029 -1429.931)">\n                      <g id="Group_146" data-name="Group 146" transform="translate(1079.28 1430.284)">\n                        <g id="Group_156" data-name="Group 156" transform="translate(0 0)">\n                          <rect id="Rectangle_60" data-name="Rectangle 60" width="61.052" height="61.052" rx="30.526" transform="translate(0 0)"/>\n                        </g>\n                      </g>\n                      <g id="Group_147" data-name="Group 147" transform="translate(1093.816 1446.758)" clip-path="url(#clip-path)">\n                        <path id="Path_303" data-name="Path 303" d="M939.907,1074.789h9.66l5.772,5.769v-5.769h2.467a5.359,5.359,0,0,0,5.35-5.347v-7.594a5.359,5.359,0,0,0-5.35-5.347h-17.9a5.359,5.359,0,0,0-5.35,5.347v7.594A5.359,5.359,0,0,0,939.907,1074.789Z" transform="translate(-930.395 -1052.334)" class="class-1"/>\n                        <path id="Path_304" data-name="Path 304" d="M952.828,1079.513l-6.208-6.2H937.39a6.4,6.4,0,0,1-6.39-6.389v-7.594a6.4,6.4,0,0,1,6.39-6.389h17.9a6.4,6.4,0,0,1,6.39,6.389v7.594a6.4,6.4,0,0,1-6.39,6.389h-2.467v-2.083h2.467a4.312,4.312,0,0,0,4.308-4.306v-7.594a4.312,4.312,0,0,0-4.308-4.306h-17.9a4.312,4.312,0,0,0-4.308,4.306v7.594a4.312,4.312,0,0,0,4.308,4.306h10.092l5.364,5.359-.017,2.925Z" transform="translate(-931 -1052.94)" class="class-2"/>\n                      </g>\n                    </g>\n                  </svg>            </div>\n\n            <div class='chat-welcome'>\n                <div class='title'>${l}</div>\n            </div>\n\n            <a class='chat-button' href='https://api.whatsapp.com/send?phone=${c}' rel='nofollow noreferrer'\n            target='_blank'>\n            <b>Chat with us</b>\n            <svg class='svg-1' viewBox='0 0 24 24'>\n                <path\n                    d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z'\n                     />\n            </svg>\n            </a>\n\n        <div class="copyright">\n            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block">\n              <path d="M3 15V9H0L5 0V6H8L3 15Z" fill="#999999"></path>\n            </svg>\n            Powered by <a rel="noopener noreffer" href="https://getwebup.com" target="_blank" class="poweredby-link">Getwebup.com</a>\n        </div>\n\n        </div>\n    </div>\n    `;document.body.insertAdjacentHTML("beforeend",d),document.querySelector(".doc-button label").addEventListener("click",(function(){document.querySelector(".sticky-chat").classList.toggle("sticky-chat-active"),document.querySelector(".doc-button label .svg-1").classList.toggle("svg-1-off"),document.querySelector(".doc-button label .svg-2").classList.toggle("svg-2-on")}))}();