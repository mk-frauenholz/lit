import{r as h,e as i,n as g,y as C,a as y,l as m}from"./vendor.1a34caf7.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};v();const b=(l,t,n)=>{const e=l.charAt(0)==="#"?l.substring(1,7):l,o=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),s=parseInt(e.substring(4,6),16),f=[o/255,r/255,s/255].map(p=>p<=.03928?p/12.92:Math.pow((p+.055)/1.055,2.4));return .2126*f[0]+.7152*f[1]+.0722*f[2]>.179?n:t};var F=Object.defineProperty,x=Object.getOwnPropertyDescriptor,d=(l,t,n,e)=>{for(var o=e>1?void 0:e?x(t,n):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&F(t,n,o),o};let a=class extends g{constructor(){super(...arguments);this.fontColor="recalculate",this.lightTextColor="#FFFFFF",this.darkTextColor="#0146e0",this.round=!1}connectedCallback(){super.connectedCallback(),this.fontColor==="recalculate"&&(this.fontColor=b("#FFFFFF",this.lightTextColor,this.darkTextColor))}render(){return C`
      <div class="card ${this.round?"round":""}" style="--foreground: ${this.fontColor}">
        <slot></slot>
      </div>
    `}};a.styles=h`
    .card {
      background-color: #FFF;
      color: var(--foreground);
      padding: 2em;
      margin: 1.2em;
      display: inline-block;
      font-family: 'Roboto', sans-serif;
      border: 2px solid #000;
      box-shadow: 10px 10px 0px 0px var(--foreground);
    }
    .round {
      border-radius: 1em;

    }
  `;d([i()],a.prototype,"fontColor",2);d([i()],a.prototype,"lightTextColor",2);d([i()],a.prototype,"darkTextColor",2);d([i({type:"boolean"})],a.prototype,"round",2);a=d([y("my-card")],a);var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,u=(l,t,n,e)=>{for(var o=e>1?void 0:e?T(t,n):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&O(t,n,o),o};let c=class extends g{constructor(){super(...arguments);this.name="World",this.bgColor="#f3f6e6",this.fontColor="recalculate",this.lightTextColor="#FFFFFF",this.darkTextColor="#0146e0"}connectedCallback(){super.connectedCallback(),this.fontColor==="recalculate"&&(this.fontColor=b(this.bgColor,this.lightTextColor,this.darkTextColor))}render(){return C`
      <div class="section" style="--background: ${this.bgColor}; --foreground: ${this.fontColor}">
        <slot></slot>
      </div>
    `}};c.styles=h`
    .section {
      background-color: var(--background);
      color: var(--foreground);
      padding: 1em;
      font-family: 'Roboto', sans-serif;
    }
  `;u([i()],c.prototype,"name",2);u([i({type:"string"})],c.prototype,"bgColor",2);u([i()],c.prototype,"fontColor",2);u([i()],c.prototype,"lightTextColor",2);u([i()],c.prototype,"darkTextColor",2);c=u([y("my-section")],c);m.highlightAll();
