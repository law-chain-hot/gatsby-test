(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6Gk8":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=r("9eSz"),s=r.n(o);t.a=function(){var e,t,r,n,o=Object(i.useStaticQuery)("302475014"),l=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,u=(null===(t=o.site.siteMetadata)||void 0===t||t.social,null==o||null===(r=o.avatar)||void 0===r||null===(n=r.childImageSharp)||void 0===n?void 0:n.fixed);return a.a.createElement("div",{className:"bio-container"},a.a.createElement("div",{className:"bio"},u&&a.a.createElement(s.a,{fixed:u,alt:(null==l?void 0:l.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==l?void 0:l.name)&&a.a.createElement("div",{className:"Flex-box-center"},a.a.createElement("p",null,"Personal blog by",a.a.createElement("a",{className:"a-underline",href:"https://github.com/law-chain-hot"}," Brian Luo ")),a.a.createElement("p",{style:{fontSize:"small"}},"An Engineering Master Student @ UIUC && Front End Developer"))),a.a.createElement("div",null),a.a.createElement("div",null))}},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function d(){u=e(c.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){c.push(this),d()},s.componentDidUpdate=function(){d()},s.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),d()},s.render=function(){return i.createElement(n,this.props)},a}(a.Component);return s(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(f,"canUseDOM",l),f}}},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),l=n(r("pVnL")),u=n(r("q1tI")),c=n(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=T(t||r||[]);return n&&n.src},T=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},E=Object.create({}),h=function(e){var t=d(e),r=p(t);return E[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,S=g&&window.IntersectionObserver,y=new WeakMap;function A(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function b(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function _(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+u+o+s+r+n+t+i+a+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(I,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),s):s})),I=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,T=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},T,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var M=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=g&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!m&&S&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||g&&(m||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:g}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(E[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,E=e.fluid,h=e.fixed,m=e.backgroundColor,g=e.durationFadeIn,S=e.Tag,y=e.itemProp,b=e.loading,_=e.draggable,O=E||h;if(!O)return null;var M=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:M?1:0,transition:L?"opacity "+g+"ms":"none"},s),N="boolean"==typeof m?"lightgray":m,G={transitionDelay:g+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&G,s,f),j={title:t,alt:this.state.isVisible?"":r,style:H,className:p,itemProp:y},x=this.state.isHydrated?T(O):O[0];if(E)return u.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:x.maxWidth?x.maxWidth+"px":null,maxHeight:x.maxHeight?x.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},u.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),N&&u.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&G)}),x.base64&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:x.base64,spreadProps:j,imageVariants:O,generateSources:R}),x.tracedSVG&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:x.tracedSVG,spreadProps:j,imageVariants:O,generateSources:v}),this.state.isVisible&&u.default.createElement("picture",null,A(O),u.default.createElement(I,{alt:r,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:b,draggable:_})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:r,title:t,loading:b},x,{imageVariants:O}))}}));if(h){var k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete k.display,u.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},N&&u.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},L&&G)}),x.base64&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:x.base64,spreadProps:j,imageVariants:O,generateSources:R}),x.tracedSVG&&u.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:x.tracedSVG,spreadProps:j,imageVariants:O,generateSources:v}),this.state.isVisible&&u.default.createElement("picture",null,A(O),u.default.createElement(I,{alt:r,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:b,draggable:_})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:r,title:t,loading:b},x,{imageVariants:O}))}}))}return null},t}(u.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");c.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}M.propTypes={resolutions:L,sizes:C,fixed:N(c.default.oneOfType([L,c.default.arrayOf(L)])),fluid:N(c.default.oneOfType([C,c.default.arrayOf(C)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var G=M;t.default=G},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=(r("9eSz"),r("6Gk8"));t.a=function(e){var t,r=e.location,n=e.title,s=e.children,l="/luo-blog/"===r.pathname;t=l?a.a.createElement("h2",{className:"main-heading"},a.a.createElement(i.Link,{to:"/"},n)):a.a.createElement("h2",{className:"main-heading"},a.a.createElement(i.Link,{to:"/"},"Back to ",n));var u=new Date;return console.log("Layout -> date",u),a.a.createElement("div",{className:"global-wrapper","data-is-root-path":l},a.a.createElement("header",{className:"global-header"},t),a.a.createElement("main",null,s),a.a.createElement("footer",null,a.a.createElement(o.a,null),a.a.createElement("p",{style:{fontSize:"small"}},"© ",(new Date).getFullYear(),", Built on ",(new Date).toDateString()," ","using ",a.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},Gytx:function(e,t){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(a=r?r.call(n,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),s=d(r("8+s/")),l=d(r("bmMU")),u=r("v1p5"),c=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,h,m,g=(0,s.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),S=(E=g,m=h=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(a.type){case c.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=s,t.titleAttributes=n({},o),t));case c.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case c.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),s=(0,u.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),h.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=E.peek,h.rewind=function(){var e=E.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},bmMU:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,l,u,c=n(t),d=n(r);if(c&&d){if((l=t.length)!=r.length)return!1;for(s=l;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(c!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,E=r instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==r.toString();var h=a(t);if((l=h.length)!==a(r).length)return!1;for(s=l;0!=s--;)if(!i.call(r,h[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=l;0!=s--;)if(!("_owner"===(u=h[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=l(r("q1tI")),o=l(r("YVoz")),s=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),r=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},E=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],u=l.toLowerCase();-1===t.indexOf(u)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(l)||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),l=0;l<i.length;l++){var u=i[l],c=(0,o.default)({},a[u],n[u]);a[u]=c}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},m=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){m(e)}),0)}),g=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;O(s.TAG_NAMES.BODY,n),O(s.TAG_NAMES.HTML,a),_(f,p);var T={baseTag:w(s.TAG_NAMES.BASE,r),linkTags:w(s.TAG_NAMES.LINK,i),metaTags:w(s.TAG_NAMES.META,o),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,l),scriptTags:w(s.TAG_NAMES.SCRIPT,c),styleTags:w(s.TAG_NAMES.STYLE,d)},E={},h={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)})),t&&t(),u(e,E,h)},R=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=R(e)),O(s.TAG_NAMES.TITLE,t)},O=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var u=o[l],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===a.indexOf(u)&&a.push(u);var d=i.indexOf(u);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=I(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),i=R(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+c(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+c(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+c(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){b&&y(b),e.defer?b=S((function(){v(e,(function(){b=null}))})):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:M(s.TAG_NAMES.BASE,t,n),bodyAttributes:M(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(s.ATTRIBUTE_NAMES.HTML,a,n),link:M(s.TAG_NAMES.LINK,i,n),meta:M(s.TAG_NAMES.META,o,n),noscript:M(s.TAG_NAMES.NOSCRIPT,l,n),script:M(s.TAG_NAMES.SCRIPT,u,n),style:M(s.TAG_NAMES.STYLE,c,n),title:M(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=A}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("TJpk"),o=r("Wbzz"),s=function(e){var t,r,n,s=e.description,l=e.lang,u=e.meta,c=e.title,d=Object(o.useStaticQuery)("2841359383").site,f=s||d.siteMetadata.description,p=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(i.Helmet,{htmlAttributes:{lang:l},title:c,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:c},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=d.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:f}].concat(u)})};s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-8b9770719212a63e4cda.js.map