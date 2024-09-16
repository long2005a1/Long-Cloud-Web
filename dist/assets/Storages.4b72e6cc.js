import{d as h,c as e,a as W,ai as Y,as as o,b5 as v,cc as H,aN as R,a9 as x,a6 as O,d1 as l,c_ as p,e as D,aW as _,b9 as c,G as i,aY as V,ba as u,n as L,r as k,q,c9 as A,S as F,bn as P,bo as X,bp as K,bq as Z,br as j,bs as z,bt as E,K as d,bu as J,bv as Q,bw as U,bx as ee,a1 as re,a2 as C,cO as te,cY as ne,cZ as ae,c$ as T,d0 as se}from"./index.124d7191.js";import{g as le}from"./useTitle.2c9e45b2.js";import{D as oe}from"./DeletePopover.1acbd4f4.js";function B(r){const n=h(),{to:g}=D(),[b,m]=_(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,a]=_(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/LONGYun2025/storages/edit/${r.storage.id}`)},get children(){return n("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await a();V(s,()=>{r.refresh()})},get children(){return n(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return b()},onClick:async()=>{const s=await m();u(s,()=>{L.success(n("global.delete_success")),r.refresh()})}})]}function ce(r){const n=h();return e(O,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return W("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${Y()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(H,{colorScheme:"info",get children(){return n(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[R(()=>n("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(B,r)}})]}})}function ie(r){const n=h();return e(p,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return n(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(B,r)}})}})]}})}const be=()=>{const r=h();le("manage.sidemenu.storages");const{to:n}=D(),[g,b]=_(()=>c.get("/admin/storage/list")),[m,S]=k([]),a=async()=>{const t=await b();u(t,w=>S(w.content))},[s,M]=k([]),[$,G]=k([]);(async()=>{const t=await c.get("/admin/driver/names");u(t,w=>M(w))})(),a();const I=async()=>{const t=await c.post("/admin/storage/load_all");u(t,()=>{L.success(r("storages.other.start_load_success"))})},y=q(()=>m().filter(t=>$().length===0?!0:$().includes(t.driver))),[f,N]=A("storages-layout","grid");return e(O,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{n("/LONGYun2025/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:I,get children(){return r("storages.other.load_all")}}),e(F,{get when(){return s().length>0},get children(){return e(P,{multiple:!0,get value(){return $()},onChange:G,get children(){return[e(X,{get children(){return[e(K,{get children(){return r("storages.other.filter_by_driver")}}),e(Z,{}),e(j,{})]}}),e(z,{get children(){return e(E,{get children(){return e(d,{get each(){return s()},children:t=>e(J,{value:t,get children(){return[e(Q,{get children(){return r(`drivers.drivers.${t}`)}}),e(U,{})]}})})}})}})]}})}}),e(ee,{minW:80,get checked(){return f()==="table"},onChange:t=>{N(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(C,{get when(){return f()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return y()},children:t=>e(ce,{storage:t,refresh:a})})}})}}),e(C,{get when(){return f()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ne,{highlightOnHover:!0,dense:!0,get children(){return[e(ae,{get children(){return e(p,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return y()},children:t=>e(ie,{storage:t,refresh:a})})}})]}})}})}})]}})]}})};export{be as default};
