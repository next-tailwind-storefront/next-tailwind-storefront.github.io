"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{9969:function(e,n,t){t.d(n,{a4:function(){return l},AP:function(){return f},vo:function(){return x},GZ:function(){return v},Iv:function(){return h},PZ:function(){return j},To:function(){return p},aM:function(){return g},G6:function(){return b},Vq:function(){return y},kI:function(){return O},rj:function(){return A},E_:function(){return C},h4:function(){return E},h_:function(){return M},Ar:function(){return V},P$:function(){return B},dn:function(){return D},qN:function(){return H},jF:function(){return _},tc:function(){return G},$z:function(){return Q},Fz:function(){return U},X2:function(){return X},iG:function(){return $},QN:function(){return Y},jL:function(){return J},oV:function(){return K},Od:function(){return ne},r7:function(){return te},Nb:function(){return re},l7:function(){return le},Zm:function(){return ie}});var r=t(5893);function l(e){var n=e.loading,t=e.variantId,l=e.addProductVariant;return(0,r.jsx)(ne,{active:n,children:(0,r.jsx)("button",{className:"flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 skeleton-blocks",onClick:function(){return l&&t&&l(t)},children:"Add to Cart"})})}var i=t(5666),o=t.n(i),s=t(7294),a=t(6486),c=t(6518);function u(e,n,t,r,l,i,o){try{var s=e[i](o),a=s.value}catch(c){return void t(c)}s.done?n(a):Promise.resolve(a).then(r,l)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,l){var i=e.apply(n,t);function o(e){u(i,r,l,o,s,"next",e)}function s(e){u(i,r,l,o,s,"throw",e)}o(void 0)}))}}function f(e){var n=e.loading,t=e.nodes,l=void 0===t?[]:t,i=e.cartOpen,u=e.setCartOpen,f=void 0===u?function(){return null}:u,m=e.removeLineItem,g=void 0===m?d(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}}),e)}))):m,b=e.updateLineItemQuantity,y=void 0===b?d(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}}),e)}))):b,N=(0,s.useMemo)((function(){return(0,a.first)(l)}),[l]);return(0,r.jsx)(Y,{open:i,setOpen:f,children:(0,r.jsx)(ne,{active:n,children:(0,r.jsxs)("div",{className:"flex flex-col h-full overflow-y-scroll bg-white shadow-xl",children:[(0,r.jsxs)("div",{className:"flex-1 px-4 py-6 overflow-y-auto sm:px-6",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between",children:[(0,r.jsx)(c.V.Title,{className:"text-lg font-medium text-gray-900",children:"Shopping cart"}),(0,r.jsx)("div",{className:"flex items-center ml-3 h-7",children:(0,r.jsx)(j,{onClick:function(){return f(!1)}})})]}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("div",{className:"flow-root",children:(0,r.jsx)("ul",{role:"list",className:"-my-6 divide-y divide-gray-200 skeleton-blocks",children:(null===N||void 0===N?void 0:N.lineItems.edges.length)?null===N||void 0===N?void 0:N.lineItems.edges.map((function(e){var n=e.node;return(0,r.jsx)(x,{node:n,onRemoveItem:function(){return g(n.id)},onUpdateItemQuantity:function(e){return y(n.id,e)}},n.id)})):(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:"text-sm text-gray-500 mt-0.5",children:"The cart is empty."})})})})})]}),(0,r.jsxs)("div",{className:"px-4 py-6 border-t border-gray-200 sm:px-6",children:[(0,r.jsx)(v,{node:N}),(0,r.jsx)("p",{className:"text-sm text-gray-500 mt-0.5",children:"Shipping and taxes calculated at checkout."}),(0,r.jsx)(h,{}),(0,r.jsx)(p,{onClick:function(){return f(!1)}})]})]})})})}var m=t(1664);function x(e){var n,t,l,i,o,s,a,c,u,d,f,x,v,h,j,p=e.loading,g=e.node,b=e.onRemoveItem,y=e.onUpdateItemQuantity;return(0,r.jsx)(ne,{active:p,children:(0,r.jsxs)("li",{className:"flex py-6",children:[(0,r.jsx)(m.default,{passHref:!0,href:{pathname:g?"/product/[handle]":"",query:{handle:null!==(x=null===g||void 0===g||null===(n=g.variant)||void 0===n?void 0:n.product.handle)&&void 0!==x?x:""}},children:(0,r.jsx)("div",{className:"relative flex-shrink-0 block overflow-hidden border border-gray-200 w-28 h-28 rounded-md skeleton-blocks",children:(0,r.jsx)(H,{alt:null===g||void 0===g||null===(t=g.variant)||void 0===t||null===(l=t.image)||void 0===l?void 0:l.altText,src:null===g||void 0===g||null===(i=g.variant)||void 0===i||null===(o=i.image)||void 0===o?void 0:o.thumbnailSrc,width:"120",height:"120"})})}),(0,r.jsxs)("div",{className:"flex flex-col flex-1 ml-4",children:[(0,r.jsx)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:(0,r.jsx)(m.default,{passHref:!0,href:{pathname:g?"/product/[handle]":"",query:{handle:null!==(v=null===g||void 0===g||null===(s=g.variant)||void 0===s?void 0:s.product.handle)&&void 0!==v?v:""}},children:(0,r.jsx)("h3",{className:"skeleton-texts",children:null!==(h=null===g||void 0===g?void 0:g.title)&&void 0!==h?h:"Loading Product Title"})})}),(0,r.jsx)("div",{className:"flex-1",children:null===g||void 0===g||null===(a=g.variant)||void 0===a?void 0:a.selectedOptions.map((function(e){return(0,r.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:[e.name,": ",e.value]},e.name)}))}),(0,r.jsx)(U,{quantity:null===g||void 0===g?void 0:g.quantity,onChange:y})]}),(0,r.jsxs)("div",{className:"flex flex-col ml-4 flex-0",children:[(0,r.jsx)("p",{className:"flex-1 ml-4 skeleton-texts flex-start",children:g?(null===g||void 0===g||null===(c=g.variant)||void 0===c?void 0:c.priceV2)&&(null===g||void 0===g?void 0:g.quantity)?new Intl.NumberFormat("en-US",{style:"currency",currency:g.variant.priceV2.currencyCode}).format(g.variant.priceV2.amount*g.quantity-(null!==(j=null===g||void 0===g||null===(u=g.discountAllocations)||void 0===u||null===(d=u[0])||void 0===d||null===(f=d.allocatedAmount)||void 0===f?void 0:f.amount)&&void 0!==j?j:0)):"":"$00"}),(0,r.jsx)("div",{className:"flex flex-col flex-end",children:(null===g||void 0===g?void 0:g.quantity)?(0,r.jsx)("button",{type:"button",className:"text-sm font-medium text-indigo-600 hover:text-indigo-500",onClick:b,children:"Remove"}):null})]})]})})}function v(e){var n=e.node;return(0,r.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[(0,r.jsx)("p",{className:"skeleton-texts",children:"Subtotal"}),(0,r.jsx)("p",{className:"skeleton-texts",children:(null===n||void 0===n?void 0:n.subtotalPriceV2)?new Intl.NumberFormat("en-US",{style:"currency",currency:n.subtotalPriceV2.currencyCode}).format(n.subtotalPriceV2.amount):"$00"})]})}function h(){return(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsx)("a",{href:"#",className:"flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 skeleton-blocks",children:"Checkout"})})}function j(e){var n=e.onClick,t=void 0===n?function(){return null}:n;return(0,r.jsxs)("button",{type:"button",className:"p-2 -m-2 text-gray-400 hover:text-gray-500",onClick:t,children:[(0,r.jsx)("span",{className:"sr-only",children:"Close"}),(0,r.jsx)(g,{className:"w-6 h-6"})]})}function p(e){var n=e.onClick,t=void 0===n?function(){return null}:n;return(0,r.jsx)("div",{className:"flex justify-center mt-6 text-sm text-center text-gray-500",children:(0,r.jsxs)("p",{children:["or"," ",(0,r.jsxs)("button",{type:"button",className:"font-medium text-indigo-600 hover:text-indigo-500",onClick:t,children:["Continue Shopping",(0,r.jsx)("span",{"aria-hidden":"true",children:" \u2192"})]})]})})}function g(e){var n=e.className;return(0,r.jsx)("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:n,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})}function b(e){var n=e.className;return(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:n,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M6 9l6 6 6-6"})})}function y(e){var n=e.className;return(0,r.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:n,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){N(e,n,t[n])}))}return e}function k(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function O(e){var n=e.className,t=e.alt,l=e.src,i=k(e,["className","alt","src"]),o=(0,s.useRef)(null),a=(0,s.useState)("opacity-0"),c=a[0],u=a[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("img",w({ref:o,alt:t,src:l,className:"transition-opacity duration-500 ".concat(c," ").concat(n),onLoad:function(){return u("opacity-100")}},i))})}function L(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e){var n,t=e.size,l=e.loading,i=e.nodes,o=void 0===i?[]:i,a=e.children,c=(0,s.useMemo)((function(){return new Array(null!==t&&void 0!==t?t:0).fill(null)}),[t]),u=(0,s.useMemo)((function(){return a?s.Children.map(a,(function(e){return(l?L(o).concat(L(c)):o).map((function(t,r){return(0,s.cloneElement)(e,{key:null!==(n=null===t||void 0===t?void 0:t.id)&&void 0!==n?n:"".concat(r),loading:!t&&l,node:t})}))})):[]}),[a,l,c,o]);return a?(0,r.jsx)("section",{className:"text-gray-600 body-font",children:(0,r.jsx)("div",{className:"container px-5 py-24 mx-auto",children:(0,r.jsx)("div",{className:"flex flex-wrap -m-4",children:u})})}):null}function C(e){var n,t,l,i,o,s=e.loading,a=e.node;return(0,r.jsx)(ne,{active:s,children:(0,r.jsxs)("div",{className:"w-full p-4 lg:w-1/4 md:w-1/2",children:[(0,r.jsx)(m.default,{passHref:!0,href:{pathname:a?"/product/[handle]":"",query:{handle:null!==(o=null===a||void 0===a?void 0:a.handle)&&void 0!==o?o:""}},children:(0,r.jsx)("div",{className:"relative block h-48 overflow-hidden rounded cursor-pointer skeleton-blocks",children:(0,r.jsx)(H,{alt:null===(n=null===a||void 0===a?void 0:a.images.edges)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.node.altText,src:null===(l=null===a||void 0===a?void 0:a.images.edges)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.node.mediumSrc,width:"480",height:"480"})})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(re,{node:a,variant:"small",isLinked:!0,hasPrice:!0})})]})})}var P=t(7770);function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}function E(){var e=(0,s.useContext)(P.XB);return(0,r.jsx)("header",{className:"text-gray-600 body-font",children:(0,r.jsxs)("div",{className:"container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row",children:[(0,r.jsxs)("a",{className:"flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-10 h-10 p-2 text-white bg-indigo-500 rounded-full",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),(0,r.jsx)("span",{className:"ml-3 text-xl",children:"Tailblocks"})]}),(0,r.jsxs)("nav",{className:"flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400",children:[(0,r.jsx)("a",{className:"mr-5 hover:text-gray-900",children:"First Link"}),(0,r.jsx)("a",{className:"mr-5 hover:text-gray-900",children:"Second Link"}),(0,r.jsx)("a",{className:"mr-5 hover:text-gray-900",children:"Third Link"}),(0,r.jsx)("a",{className:"mr-5 hover:text-gray-900",children:"Fourth Link"})]}),(0,r.jsx)(le,I({},e))]})})}function M(e){var n=e.className;return(0,r.jsx)("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:n,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})})}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}function V(e){var n=e.children,t=(0,s.useContext)(P.A9);return(0,r.jsxs)("div",{style:{paddingLeft:"calc(100vw - 100%)"},children:[(0,r.jsx)(f,T({},t)),(0,r.jsx)(E,{}),n]})}function B(e){var n=e.className;return(0,r.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:n,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})}function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){q(e,n,t[n])}))}return e}function D(e){var n,t,i,o,c,u=e.loading,d=e.node,f=(0,s.useContext)(P.A9);return(0,r.jsx)(ne,{active:!d||u,children:(0,r.jsx)("section",{className:"overflow-hidden text-gray-600 body-font",children:(0,r.jsx)("div",{className:"container px-5 py-12 mx-auto lg:py-24",children:(0,r.jsxs)("div",{className:"flex flex-wrap mx-auto lg:w-full",children:[(0,r.jsx)("div",{className:"relative block w-full h-64 lg:w-1/2 lg:h-96 skeleton-blocks",children:(0,r.jsx)(H,{alt:null===(n=null===d||void 0===d?void 0:d.images.edges)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.node.altText,src:null===(i=null===d||void 0===d?void 0:d.images.edges)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.node.largeSrc,width:"680",height:"680"})}),(0,r.jsxs)("div",{className:"w-full pt-6 lg:w-1/2 lg:pl-10 lg:pb-6 lg:pt-0",children:[(0,r.jsx)(re,{node:d}),(0,r.jsxs)("div",{className:"flex mb-4",children:[(0,r.jsx)(X,{}),(0,r.jsxs)("span",{className:"flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s",children:[(0,r.jsx)("a",{className:"text-gray-500",children:(0,r.jsx)(y,{className:"w-5 h-5 skeleton-figures"})}),(0,r.jsx)("a",{className:"text-gray-500",children:(0,r.jsx)(ie,{className:"w-5 h-5 skeleton-figures"})}),(0,r.jsx)("a",{className:"text-gray-500",children:(0,r.jsx)(B,{className:"w-5 h-5 skeleton-figures"})})]})]}),(0,r.jsx)("p",{className:"leading-relaxed skeleton-multiline-texts",children:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over."}),(0,r.jsx)("div",{className:"flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mr-3 skeleton-blocks",children:"Size"}),(0,r.jsxs)(J,{children:[(0,r.jsx)("option",{children:"SM"}),(0,r.jsx)("option",{children:"M"}),(0,r.jsx)("option",{children:"L"}),(0,r.jsx)("option",{children:"XL"})]})]})}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(_,{node:d}),(0,r.jsx)(l,z({variantId:null===(c=(0,a.first)(null===d||void 0===d?void 0:d.variants.edges))||void 0===c?void 0:c.node.id},f)),(0,r.jsx)("button",{className:"inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full skeleton-blocks",children:(0,r.jsx)(M,{className:"w-5 h-5"})})]})]})]})})})})}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function H(e){var n=e.alt,t=e.src,l=W(e,["alt","src"]);return(0,r.jsx)(O,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){R(e,n,t[n])}))}return e}({className:"object-center rounded w-100 h-100",alt:null!==n&&void 0!==n?n:"Loading Image",src:null!==t&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},l))}function _(e){var n=e.node,t=e.variant,l=void 0===t?"large":t,i=(0,s.useMemo)((function(){var e,t,r,l,i,o;return n?new Intl.NumberFormat("en-US",{style:"currency",currency:null===(e=n.variants.edges)||void 0===e||null===(t=e[0])||void 0===t||null===(r=t.node)||void 0===r?void 0:r.priceV2.currencyCode}).format(null===(l=n.variants.edges)||void 0===l||null===(i=l[0])||void 0===i||null===(o=i.node)||void 0===o?void 0:o.priceV2.amount):"$00"}),[n]);return"large"===l?(0,r.jsx)("span",{className:"text-2xl font-medium text-gray-900 title-font skeleton-blocks",children:i}):(0,r.jsx)("span",{className:"text-xs font-medium tracking-widest text-gray-500 self-baseline title-font skeleton-texts",children:i})}function G(e){var n=e.variant,t=void 0===n?"large":n,l=e.children;return"large"===t?(0,r.jsx)("h1",{className:"mb-2 text-3xl font-medium text-gray-900 title-font self-baseline skeleton-texts",children:l}):(0,r.jsx)("h2",{className:"mb-2 text-lg font-medium text-gray-900 title-font skeleton-texts self-baseline",children:l})}function Q(e){var n=e.variant,t=void 0===n?"large":n,l=e.children;return"large"===t?(0,r.jsx)("h2",{className:"mb-1 text-sm tracking-widest text-gray-500 self-baseline title-font skeleton-texts",children:l}):(0,r.jsx)("h3",{className:"mb-1 text-xs tracking-widest text-gray-500 self-baseline title-font skeleton-texts",children:l})}function U(e){var n=e.min,t=void 0===n?0:n,l=e.max,i=void 0===l?10:l,o=e.quantity,s=void 0===o?0:o,a=e.onChange,c=void 0===a?function(){return null}:a;return(0,r.jsxs)("div",{className:"relative flex flex-row h-8 mt-1 flex-0",children:[(0,r.jsx)("button",{className:"w-8 h-full text-white bg-indigo-600 rounded-l outline-none cursor-pointer leading-3 active:bg-indigo-700 line-",onClick:function(){return s-1>=t&&c(s-1)},children:(0,r.jsx)("span",{className:"m-auto text-sm",children:"\u2212"})}),(0,r.jsx)("input",{className:"flex items-center w-4 h-full text-sm font-thin font-semibold text-center text-white bg-indigo-600 outline-none focus:outline-none md:text-basecursor-default",type:"number",min:t,max:i,value:s,onChange:function(e){return c(Number(e.currentTarget.value))}}),(0,r.jsx)("button",{className:"w-8 h-full text-white bg-indigo-600 rounded-r cursor-pointer leading-3 active:bg-indigo-700",onClick:function(){return s+1<=i&&c(s+1)},children:(0,r.jsx)("span",{className:"m-auto text-sm",children:"+"})})]})}function X(){return(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)($,{className:"w-4 h-4 text-indigo-500 skeleton-figures",value:2}),(0,r.jsx)("span",{className:"ml-3 text-gray-600 skeleton-blocks",children:"4 Reviews"})]})}function $(e){var n=e.value,t=e.className;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(te,{className:t,fill:n>=1}),(0,r.jsx)(te,{className:t,fill:n>=2}),(0,r.jsx)(te,{className:t,fill:n>=3}),(0,r.jsx)(te,{className:t,fill:n>=4}),(0,r.jsx)(te,{className:t,fill:n>=5})]})}var Z=t(5131);function Y(e){var n=e.open,t=void 0!==n&&n,l=e.setOpen,i=void 0===l?function(){return null}:l,o=e.children;return(0,r.jsx)(Z.u.Root,{show:t,children:(0,r.jsx)(c.V,{as:"div",className:"fixed inset-0 overflow-hidden",onClose:i,children:(0,r.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,r.jsx)(Z.u.Child,{as:s.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(c.V.Overlay,{className:"absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,r.jsx)("div",{className:"fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,r.jsx)(Z.u.Child,{as:s.Fragment,enter:"transform transition ease-in-out duration-500",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,r.jsx)("div",{className:"w-screen max-w-md",children:o})})})]})})})}function J(e){var n=e.children;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("select",{className:"py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 skeleton-blocks",children:n}),(0,r.jsx)("span",{className:"absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none skeleton-blocks",children:(0,r.jsx)(b,{className:"w-4 h-4"})})]})}function K(e){var n=e.loading,t=e.nodes,l=e.children;return l?(0,r.jsx)(r.Fragment,{children:s.Children.map(l,(function(e){return n?(0,s.cloneElement)(e,{loading:n,node:null}):(0,s.cloneElement)(e,{loading:n,node:(0,a.first)(t)})}))}):null}function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){var n=e.active,t=e.children;return(0,s.isValidElement)(t)?(0,s.cloneElement)(t,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}({},t.props,{className:"".concat(t.props.className," ").concat(n?"skeleton":"")})):null}function te(e){var n=e.fill,t=e.className;return(0,r.jsx)("svg",{fill:n?"currentColor":"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:t,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}function re(e){var n,t,l,i=e.node,o=e.variant,s=void 0===o?"large":o,a=e.isLinked,c=void 0!==a&&a,u=e.hasPrice,d=void 0!==u&&u;return(0,r.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)(Q,{variant:s,children:null!==(n=null===i||void 0===i?void 0:i.vendor)&&void 0!==n?n:"Loading Vendor"}),d&&(0,r.jsx)(_,{node:i,variant:s})]}),(0,r.jsx)(m.default,{passHref:!0,href:{pathname:i?"/product/[handle]":"",query:{handle:null!==(t=null===i||void 0===i?void 0:i.handle)&&void 0!==t?t:""}},children:(0,r.jsx)("a",{className:c?"cursor-pointer":"pointer-events-none",children:(0,r.jsx)(G,{variant:s,children:null!==(l=null===i||void 0===i?void 0:i.title)&&void 0!==l?l:"Loading Product Title"})})})]})}function le(e){var n=e.forcedLoading,t=e.setForcedLoading,l=void 0===t?function(){return null}:t;return(0,r.jsx)("button",{className:"inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0",onClick:function(){return l(!n)},children:"Toggle Loading"})}function ie(e){var n=e.className;return(0,r.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:n,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}}}]);