import{d as m,r as n,a7 as p,c as e,as as u,G as r,dt as g,du as d,a3 as a,ds as f}from"./index.124d7191.js";import{F as h}from"./File.1483aee4.js";import"./icon.b0ba71d4.js";import"./index.47a4ef2c.js";import"./useTitle.2c9e45b2.js";import"./Layout.b6c0d646.js";import"./index.7952daab.js";import"./FolderTree.81e5b029.js";import"./index.3e2567d7.js";const R=()=>{const t=m(),[i,s]=n(!1),[o,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{s(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${o()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};