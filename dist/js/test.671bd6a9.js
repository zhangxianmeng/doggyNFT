(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{"18d9":function(t,e,a){"use strict";a("19d6")},"19d6":function(t,e,a){},"257b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.isPC?"pc":"h5"},[i("div",{staticClass:"form"},[i("van-field",{attrs:{name:"check",label:"Collectible value"},scopedSlots:t._u([{key:"input",fn:function(){return[i("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:t.checkCollectibleValueList,callback:function(e){t.checkCollectibleValueList=e},expression:"checkCollectibleValueList"}},t._l(t.attrs.CollectibleValueList,(function(e){return i("van-checkbox",{key:e.name,attrs:{name:e.name,shape:"square"}},[t._v(t._s(e.name))])})),1)]},proxy:!0}])})],1),i("p",{staticStyle:{color:"red"}},[t._v("Total : "+t._s(t.filterDoggyList.length)+" Doggy NFTs")]),t.filterDoggyList.length?i("div",{staticClass:"doggy-list"},t._l(t.filterDoggyList,(function(e){return i("div",{key:e.id,staticClass:"item"},[i("div",{staticClass:"title"},[t._v("BARK # "+t._s(e.nftId))]),i("div",{staticClass:"attrs"},[i("p",[i("span",[t._v(t._s(parseInt(Number(e.price)/1e4))+"万 ")])]),i("p",[i("span",[t._v(t._s(e.attributes.rarity)+"级 ")])])])])})),0):t._e(),t.filterDoggyList.length?t._e():i("div",{staticClass:"no-data"},[i("img",{attrs:{src:a("b86b"),alt:""}}),i("p",[t._v("no-data")])])])},s=[],l=(a("4de4"),a("caad"),a("2532"),a("b0c0"),a("2b0e")),n=a("565f"),c=a("9f14"),o=a("e27c"),r=a("d399"),u=a("417e"),d=a("3acc"),f=a("343b"),h=a("f240"),b=a("bc3a"),g=a.n(b);function p(){for(var t=navigator.userAgent,e=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),a=!0,i=0;i<e.length;i++)if(t.indexOf(e[i])>0){a=!1;break}return a}l["a"].use(h["a"]),l["a"].use(f["a"],{loading:a("cf05")}),l["a"].use(u["a"]),l["a"].use(d["a"]),l["a"].use(c["a"]),l["a"].use(o["a"]),l["a"].use(n["a"]),l["a"].use(r["a"]);var m={name:"App",components:{},data:function(){return{checkCollectibleValueList:[],checkBreedList:[],checkColorList:[],checkAccessoryList:[],checkPriceList:[],attrs:{CollectibleValueList:[{name:"30"},{name:"25"},{name:"20"},{name:"18"},{name:"15"},{name:"12"},{name:"9"}]},doggyList:[],pagation:{page:1,size:500,total:888}}},computed:{isPC:function(){return p()},filterDoggyList:function(){var t=this;return this.doggyList.filter((function(e){return!t.checkCollectibleValueList.length||t.checkCollectibleValueList.includes(e.attributes.rarity)}))}},created:function(){this.setDefault(),this.getList()},methods:{setDefault:function(){this.checkCollectibleValueList=[this.attrs.CollectibleValueList[0].name,this.attrs.CollectibleValueList[1].name,this.attrs.CollectibleValueList[2].name,this.attrs.CollectibleValueList[3].name,this.attrs.CollectibleValueList[4].name,this.attrs.CollectibleValueList[6].name]},getList:function(){var t=this,e="https://www.bakeryswap.org/api/v2/nfts";g.a.get(e,{params:{nftType:"108",offset:0,limit:500,sortName:"price",sortBy:"asc",onSale:1,Breed:"Pug"}}).then((function(e){0===e.data.code?t.doggyList=e.data.data.list:Object(r["a"])("network busy, try it again")}))}}},L=m,v=(a("18d9"),a("2877")),y=Object(v["a"])(L,i,s,!1,null,"c3c1c156",null);e["default"]=y.exports}}]);
//# sourceMappingURL=test.671bd6a9.js.map