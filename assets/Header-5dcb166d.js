import{_ as u,f as t,r as d,o as f,c as k,e as a,b as s,q as n,s as h,p,j as v}from"./index-7a71ed82.js";const l=_=>(p("data-v-309a7e23"),_=_(),v(),_),b={class:"header"},I={class:"header__menu"},g={class:"menu__link"},C=l(()=>a("a",{class:"link__name"},"Inicio",-1)),x={class:"menu__link"},y=l(()=>a("a",{class:"link__name"},"Tecnologias",-1)),D={class:"menu__link"},M=l(()=>a("a",{class:"link__name"},"Desarrollos",-1)),A={class:"menu__link"},B=l(()=>a("a",{class:"link__name"},"Contacto",-1)),H={class:"menu__link"},S=l(()=>a("a",{class:"link__name"},"Acerca de mi",-1)),w=l(()=>a("a",{class:"link__name-small"},"Inicio",-1)),L=l(()=>a("a",{class:"link__name-small"},"Tecnologias",-1)),N=l(()=>a("a",{class:"link__name-small"},"Desarrollos",-1)),T=l(()=>a("a",{class:"link__name-small"},"Contacto",-1)),V=l(()=>a("a",{class:"link__name-small"},"Acerca de mi",-1)),j={__name:"Header",setup(_){const i=t(null),m=t(null),c=t(!1),r=()=>{c.value?(i.value.classList.remove("header__menu-small"),c.value=!1):(i.value.classList.add("header__menu-small"),c.value=!0)};return(q,z)=>{const e=d("fa"),o=d("router-link");return f(),k("div",b,[a("div",I,[s(o,{to:{name:"inicio"}},{default:n(()=>[a("div",g,[s(e,{class:"link__icon",icon:"fa-solid fa-home"}),C])]),_:1}),s(o,{to:{name:"tecnologias"}},{default:n(()=>[a("div",x,[s(e,{class:"link__icon",icon:"fa-solid fa-code"}),y])]),_:1}),s(o,{to:{name:"desarrollos"}},{default:n(()=>[a("div",D,[s(e,{class:"link__icon",icon:"fa-solid fa-briefcase"}),M])]),_:1}),s(o,{to:{name:"contacto"}},{default:n(()=>[a("div",A,[s(e,{class:"link__icon",icon:"fa-solid fa-address-book"}),B])]),_:1}),s(o,{to:{name:"acercaDeMi"}},{default:n(()=>[a("div",H,[s(e,{class:"link__icon",icon:"fa-solid fa-user"}),S])]),_:1})]),a("div",{onClick:r,class:"header__hamburguer"},[s(e,{ref_key:"menuIcon",ref:m,class:h(c.value?"link__icon-small":"link__icon-small-no-activate"),icon:"fa-solid fa-bars"},null,8,["class"]),a("div",{class:"header__menu-no-active",ref_key:"variable",ref:i},[s(o,{to:{name:"inicio"},class:"menu__link-phone"},{default:n(()=>[s(e,{class:"link__icon-phone",icon:"fa-solid fa-home"}),w]),_:1}),s(o,{to:{name:"tecnologias"},class:"menu__link-phone"},{default:n(()=>[s(e,{class:"link__icon-phone",icon:"fa-solid fa-code"}),L]),_:1}),s(o,{to:{name:"desarrollos"},class:"menu__link-phone"},{default:n(()=>[s(e,{class:"link__icon-phone",icon:"fa-solid fa-briefcase"}),N]),_:1}),s(o,{to:{name:"contacto"},class:"menu__link-phone"},{default:n(()=>[s(e,{class:"link__icon-phone",icon:"fa-solid fa-address-book"}),T]),_:1}),s(o,{to:{name:"acercaDeMi"},class:"menu__link-phone"},{default:n(()=>[s(e,{class:"link__icon-phone",icon:"fa-solid fa-user"}),V]),_:1})],512)])])}}},F=u(j,[["__scopeId","data-v-309a7e23"]]);export{F as default};
