(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{"4e12":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"42px"}},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh")},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("refreshtip")))])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{input:function(t){return e.getSearchList()}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"goods_code",attrs:{props:t}},[e._v(e._s(t.row.goods_code))]),a("q-td",{key:"bin_name",attrs:{props:t}},[e._v(e._s(t.row.bin_name))]),a("q-td",{key:"mode_code",attrs:{props:t}},[e._v(e._s(t.row.mode_code))]),a("q-td",{key:"goods_qty",attrs:{props:t}},[e._v(e._s(t.row.goods_qty))]),a("q-td",{key:"creater",attrs:{props:t}},[e._v(e._s(t.row.creater))]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v(e._s(t.row.create_time))]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v(e._s(t.row.update_time))])],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("previous")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("next")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)]],2)},o=[],n=a("3004"),i=a("18d6"),r={name:"PageInbAndOutb",data(){return{login_name:"",authin:"0",pathname:"dashboard/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],filter:"",staff_type_list:["Manager","Inbound","Outbound","Supervisor","StockControl","Customer","Supplier"],columns:[{name:"goods_code",label:this.$t("dashboards.view_tradelist.goods_code"),field:"goods_code",align:"left"},{name:"bin_name",label:this.$t("dashboards.view_tradelist.bin_name"),field:"bin_name",align:"center"},{name:"mode_code",required:!0,label:this.$t("dashboards.view_tradelist.mode_code"),align:"center",field:"mode_code"},{name:"goods_qty",label:this.$t("dashboards.view_tradelist.goods_qty"),field:"goods_qty",align:"center"},{name:"creater",label:this.$t("dashboards.view_tradelist.creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("dashboards.view_tradelist.create_time"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("dashboards.view_tradelist.update_time"),field:"update_time",align:"right"}],pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var e=this;Object(n["e"])("cyclecount/qtyrecorviewset/",{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;Object(n["e"])("cyclecount/qtyrecorviewset/?goods_code__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){this.$q.localStorage.has("auth")&&Object(n["e"])(this.pathname_previous,{}).then((e=>{this.table_list=e.results,this.pathname_previous=e.previous,this.pathname_next=e.next})).catch((e=>{this.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){this.$q.localStorage.has("auth")&&Object(n["e"])(this.pathname_next,{}).then((e=>{this.table_list=e.results,this.pathname_previous=e.previous,this.pathname_next=e.next})).catch((e=>{this.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){this.table_list=[],this.getList()}},created(){var e=this;i["a"].has("openid")?e.openid=i["a"].getItem("openid"):(e.openid="",i["a"].set("openid","")),i["a"].has("login_name")?e.login_name=i["a"].getItem("login_name"):(e.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"}},l=r,c=a("42e1"),d=a("eaac"),p=a("e7a9"),h=a("9c40"),_=a("05c0"),u=a("2c91"),m=a("27f9"),g=a("bd08"),b=a("db86"),v=a("eebe"),f=a.n(v),w=Object(c["a"])(l,s,o,!1,null,null,null);t["default"]=w.exports;f()(w,"components",{QTable:d["a"],QBtnGroup:p["a"],QBtn:h["a"],QTooltip:_["a"],QSpace:u["a"],QInput:m["a"],QTr:g["a"],QTd:b["a"]})}}]);