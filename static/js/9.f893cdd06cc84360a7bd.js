webpackJsonp([9],{BMkJ:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"databaseNav"},[t("div",{staticStyle:{float:"left","margin-bottom":"10px"}},[t("md-button",{staticClass:"md-raised md-primary pull-right",on:{click:e.createTable}},[e._v("添加数据表")]),e._v(" "),t("md-button",{staticClass:"md-raised md-primary pull-right",on:{click:e.dropTable}},[e._v("删除数据表")])],1),e._v(" "),t("md-table",{staticClass:"pageList"},[t("md-table-row",e._l(e.dataArr.Message,function(a,s){return t("md-table-head",{attrs:{"md-numeric":0==s}},[e._v(e._s(a))])})),e._v(" "),e._l(e.dataArr.Arrs,function(a){return t("md-table-row",[t("md-table-cell",{attrs:{"md-numeric":""}},[e._v(e._s(a.Id))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.Name))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.Email))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.Gender))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.JobTitle))])],1)}),e._v(" "),e._l(e.dataArr.newArr,function(a){return t("md-table-row",{attrs:{slot:"md-table-row"},slot:"md-table-row"},[t("md-table-cell",{attrs:{"md-numeric":""}},[e._v(e._s(a.Id))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.Name))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.Email))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.Gender))]),e._v(" "),t("md-table-cell",[e._v(e._s(a.JobTitle))])],1)})],2),e._v(" "),t("md-card",{staticClass:"md-flex-100 md-flex-small-100"},[t("md-card-content",[t("div",{staticClass:"md-layout-row md-layout-wrap md-gutter"},[t("div",{staticClass:"md-flex md-flex-small-100"},[t("md-field",[t("label",[e._v("Id ")]),t("md-input",{model:{value:e.ids,callback:function(a){e.ids=a},expression:"ids"}})],1),e._v(" "),0==e.ids.length?t("span",{staticClass:"md-error"},[e._v("请输入Id")]):e._e()],1),e._v(" "),t("div",{staticClass:"md-flex md-flex-small-100"},[t("md-field",[t("label",[e._v("Name ")]),t("md-input",{model:{value:e.names,callback:function(a){e.names=a},expression:"names"}})],1),e._v(" "),0==e.names.length?t("span",{staticClass:"md-error"},[e._v("请输入name")]):e._e()],1),e._v(" "),t("div",{staticClass:"md-flex md-flex-small-100"},[t("md-field",[t("label",[e._v("Email ")]),t("md-input",{model:{value:e.emails,callback:function(a){e.emails=a},expression:"emails"}})],1),e._v(" "),0==e.emails.length?t("span",{staticClass:"md-error"},[e._v("请输入Email")]):e._e()],1),e._v(" "),t("div",{staticClass:"md-flex md-flex-small-100"},[t("md-field",[t("label",[e._v("Gender ")]),t("md-input",{model:{value:e.genders,callback:function(a){e.genders=a},expression:"genders"}})],1),e._v(" "),0==e.genders.length?t("span",{staticClass:"md-error"},[e._v("请输入gender")]):e._e()],1),e._v(" "),t("div",{staticClass:"md-flex md-flex-small-100"},[t("md-field",[t("label",[e._v("Job ")]),t("md-input",{model:{value:e.jobs,callback:function(a){e.jobs=a},expression:"jobs"}})],1),e._v(" "),0==e.jobs.length?t("span",{staticClass:"md-error"},[e._v("请输入job")]):e._e()],1)])]),e._v(" "),t("md-card-actions",[t("md-button",{staticClass:"md-raised md-primary pull-right",on:{click:e.query}},[e._v("查询数据")]),e._v(" "),t("md-button",{staticClass:"md-raised md-primary pull-right",attrs:{disabled:""==e.ids||""==e.names||""==e.emails||""==e.genders||""==e.jobs},on:{click:e.insert}},[e._v("增加数据")])],1)],1)],1)])},l=[],n={render:s,staticRenderFns:l};a.a=n},JPL4:function(e,a,t){"use strict";function s(e){t("OD5E")}Object.defineProperty(a,"__esModule",{value:!0});var l=t("LGEh"),n=t("BMkJ"),i=t("VU/8"),d=s,r=i(l.a,n.a,!1,d,"data-v-0abd94b8",null);a.default=r.exports},LGEh:function(e,a,t){"use strict";a.a={data:function(){return{ids:"",names:"",emails:"",genders:"",jobs:"",dataArr:{Message:["ID","Name","Email","Gender","Job Title"],newArr:[],Arrs:[{Id:"1",Name:"Shana Dabbin",Email:"sdubbin@geocitles.com",Gender:"Male",JobTitle:"Assistant Media Planner"},{Id:"2",Name:"Shana Dabbin",Email:"sdubbin@geocitles.com",Gender:"Male",JobTitle:"Assistant Media Planner"},{Id:"3",Name:"Shana Dabbin",Email:"sdubbin@geocitles.com",Gender:"Male",JobTitle:"Assistant Media Planner"}]},database:""}},mounted:function(){this.dataBase=openDatabase("websql","1.0","数据添加",1048576),this.query()},methods:{clear:function(){this.dataArr.newArr=[]},createTable:function(){this.dataBase.transaction(function(e){e.executeSql("create table if not exists stu(ids TEXT null, name TEXT null, email TEXT null, gender TEXT null, Job TEXT null)",[],function(e,a){alert("创建stu表成功")},function(e,a){alert("创建stu表失败:"+a.message)})})},insert:function(){var e=this.ids,a=this.names,t=this.emails,s=this.genders,l=this.jobs,n=this;this.dataBase.transaction(function(i){i.executeSql("insert into stu(ids, name, email, gender, job) values(?, ?, ?, ?, ?)",[e,a,t,s,l],function(){n.query()},function(e,a){alert("添加数据失败: "+a.message)})})},query:function(){var e=this;this.dataBase.transaction(function(a){a.executeSql("select * from stu",[],function(a,t){console.log(t),e.dataArr.newArr=[];for(var s=0;s<t.rows.length;s++)e.dataArr.newArr.push({Id:t.rows[s].ids,Name:t.rows[s].name,Email:t.rows[s].email,Gender:t.rows[s].gender,JobTitle:t.rows[s].Job})},function(e,a){alert("查询失败: "+a.message)})}),console.log(this.dataArr)},update:function(e,a){this.dataBase.transaction(function(t){t.executeSql("update stu set name = ? where id= ?",[a,e],function(e,a){},function(e,a){alert("更新失败: "+a.message)})})},delete:function(e){this.dataBase.transaction(function(a){a.executeSql("delete from stu where id= ?",[e],function(e,a){this.query()},function(e,a){alert("删除失败: "+a.message)})})},dropTable:function(){var e=this;this.dataBase.transaction(function(a){a.executeSql("drop table stu"),e.dataArr.newArr=[]})}}}},OD5E:function(e,a,t){var s=t("m79a");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("123a8b14",s,!0,{})},m79a:function(e,a,t){a=e.exports=t("FZ+f")(!0),a.push([e.i,"input[data-v-0abd94b8]{width:100px;border:1px double red}.md-error[data-v-0abd94b8]{font-size:12px;color:red}.databaseNav[data-v-0abd94b8]{width:1000px;margin:20px auto}","",{version:3,sources:["G:/bdvues/vuedemo/src/components/database.vue"],names:[],mappings:"AACA,uBAAwB,YAAa,AAAE,qBAAsB,CAC5D,AACD,2BAA4B,eAAgB,AAAC,SAAU,CACtD,AACD,8BAA+B,aAAc,AAAC,gBAAiB,CAC9D",file:"database.vue",sourcesContent:["\ninput[data-v-0abd94b8] {width: 100px;  border:1px double red;\n}\n.md-error[data-v-0abd94b8] {font-size: 12px; color: red\n}\n.databaseNav[data-v-0abd94b8] {width: 1000px; margin: 20px auto\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=9.f893cdd06cc84360a7bd.js.map