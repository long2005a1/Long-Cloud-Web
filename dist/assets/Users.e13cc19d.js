import{d as _,e as C,aW as v,b9 as u,r as F,cX as p,c as e,as as h,G as o,a9 as T,cY as G,cZ as L,c_ as f,K as m,c$ as b,d0 as x,d1 as s,ba as g,n as $,a6 as B,cc as O,aF as P,aG as R,at as W}from"./index.124d7191.js";import{g as Y}from"./useTitle.2c9e45b2.js";import{D}from"./DeletePopover.1acbd4f4.js";import{W as H}from"./Wether.55261fbb.js";const I=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(O,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},M=t=>{const n=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:P,children:(a,d)=>e(R,{get label(){return n(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(W.can(t.user,d()))}})}})})}})},V=()=>{const t=_();Y("manage.sidemenu.users");const{to:n}=C(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=F([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[S,U]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[w,y]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(B,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{n("/LONGYun2025/users/add")},get children(){return t("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(G,{highlightOnHover:!0,dense:!0,get children(){return[e(L,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return t(`users.${r}`)}})}),e(b,{get children(){return t("global.operations")}})]}})}}),e(x,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(I,{get role(){return r.role}})}}),e(s,{get children(){return e(M,{user:r})}}),e(s,{get children(){return e(H,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{n(`/LONGYun2025/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(D,{get name(){return r.username},get loading(){return S()===r.id},onClick:async()=>{const c=await U(r.id);g(c,()=>{$.success(t("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return w()===r.id},onClick:async()=>{const c=await y(r.id);g(c,()=>{$.success(t("users.cancel_2fa_success")),l()})},get children(){return t("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{V as default};
