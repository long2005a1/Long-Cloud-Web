import{c as e,bN as i,av as w,d as y,n as b,r as R,aW as r,b9 as c,cb as k,j as C,a6 as o,K as x,ao as N,J as T,D as W,as as D,G as g,bE as F,aY as H,db as L}from"./index.124d7191.js";const j=n=>e(i,{get children(){return n.content}}),z=n=>e(w,{get src(){return n.content}}),B={string:j,image:z},G=()=>{const n=y();b.info(n("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=k([]),s=async()=>{const t=await u();F(t,I=>{S(L($=>$.push(I)))})},v=async()=>{const t=await m();H(t)},f=setInterval(s,1e3);return C(()=>clearInterval(f)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(N,T({get component(){return B[t.type]}},t))})]}}),e(W,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(D,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{G as Messenger,B as Shower,G as default};
