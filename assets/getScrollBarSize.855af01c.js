import{f as s,g as u}from"./index.278b38cc.js";var p=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,m=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,h="".concat(p," ").concat(m).split(/[\s\n]+/),f="aria-",g="data-";function l(o,e){return o.indexOf(e)===0}function E(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;e===!1?n={aria:!0,data:!0,attr:!0}:e===!0?n={aria:!0}:n=s({},e);var a={};return Object.keys(o).forEach(function(t){(n.aria&&(t==="role"||l(t,f))||n.data&&l(t,g)||n.attr&&h.includes(t))&&(a[t]=o[t])}),a}var v=function(){return u()&&window.document.documentElement},r,b=function(){if(!v())return!1;if(r!==void 0)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=e.scrollHeight===1,document.body.removeChild(e),r},d;function y(o){if(typeof document>"u")return 0;if(o||d===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var n=document.createElement("div"),a=n.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",n.appendChild(e),document.body.appendChild(n);var t=e.offsetWidth;n.style.overflow="scroll";var i=e.offsetWidth;t===i&&(i=n.clientWidth),document.body.removeChild(n),d=t-i}return d}function c(o){var e=o.match(/^(.*)px$/),n=Number(e==null?void 0:e[1]);return Number.isNaN(n)?y():n}function x(o){if(typeof document>"u"||!o||!(o instanceof Element))return{width:0,height:0};var e=getComputedStyle(o,"::-webkit-scrollbar"),n=e.width,a=e.height;return{width:c(n),height:c(a)}}export{x as a,v as c,b as d,y as g,E as p};
