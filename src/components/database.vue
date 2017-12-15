<template>
    <div>
      <div class="databaseNav">
        <div style="float: left; margin-bottom: 10px;">
          <md-button @click="createTable" class="md-raised md-primary pull-right">添加数据表</md-button>
          <md-button @click="dropTable" class="md-raised md-primary pull-right">删除数据表</md-button>
        </div>
        <md-table class="pageList">
          <md-table-row>
            <md-table-head :md-numeric="index == 0" v-for="(items,index) in dataArr.Message">{{items}}</md-table-head>
          </md-table-row>
          <md-table-row v-for="items in dataArr.Arrs">
            <md-table-cell md-numeric>{{items.Id}}</md-table-cell>
            <md-table-cell>{{items.Name}}</md-table-cell>
            <md-table-cell>{{items.Email}}</md-table-cell>
            <md-table-cell>{{items.Gender}}</md-table-cell>
            <md-table-cell>{{items.JobTitle}}</md-table-cell>
          </md-table-row>
          <md-table-row  slot="md-table-row" v-for="items in dataArr.newArr">
            <md-table-cell md-numeric>{{items.Id}}</md-table-cell>
            <md-table-cell>{{items.Name}}</md-table-cell>
            <md-table-cell>{{items.Email}}</md-table-cell>
            <md-table-cell>{{items.Gender}}</md-table-cell>
            <md-table-cell>{{items.JobTitle}}</md-table-cell>
          </md-table-row>
        </md-table>

        <md-card class="md-flex-100 md-flex-small-100">
          <md-card-content>
            <div class="md-layout-row md-layout-wrap md-gutter">
              <div class="md-flex md-flex-small-100">
                <md-field><label>Id </label><md-input v-model="ids"></md-input> </md-field>
                <span class="md-error" v-if="ids.length == 0">请输入Id</span>
              </div>
              <div class="md-flex md-flex-small-100">
                <md-field><label>Name </label><md-input v-model="names"></md-input></md-field>
                <span class="md-error" v-if="names.length == 0">请输入name</span>
              </div>
              <div class="md-flex md-flex-small-100">
                <md-field><label>Email </label><md-input v-model="emails"></md-input></md-field>
                <span class="md-error" v-if="emails.length == 0">请输入Email</span>
              </div>
              <div class="md-flex md-flex-small-100">
                <md-field><label>Gender </label><md-input v-model="genders"></md-input></md-field>
                <span class="md-error" v-if="genders.length == 0">请输入gender</span>
              </div>
              <div class="md-flex md-flex-small-100">
                <md-field><label>Job </label><md-input v-model="jobs"></md-input></md-field>
                <span class="md-error" v-if="jobs.length == 0">请输入job</span>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button @click="query" class="md-raised md-primary pull-right">查询数据</md-button>
            <md-button @click="insert" :disabled="ids == '' || names == '' || emails == '' || genders == '' || jobs == ''" class="md-raised md-primary pull-right">增加数据</md-button>
          </md-card-actions>
        </md-card>

      </div>
    </div>
</template>

<style scoped="">
  input {width: 100px;  border:1px double red;}
  .md-error {font-size: 12px; color: red}
  .databaseNav {width: 1000px; margin: 20px auto}
</style>

<script>
    export default ({
        data() {
            return {
              ids : '',
              names : '',
              emails: '',
              genders: '',
              jobs : '',
              dataArr : {
                Message : ['ID','Name','Email','Gender','Job Title'],
                newArr : [],
                Arrs: [{
                  Id: '1',
                  Name: 'Shana Dabbin',
                  Email: 'sdubbin@geocitles.com',
                  Gender: 'Male',
                  JobTitle: 'Assistant Media Planner'
                },{
                  Id: '2',
                  Name: 'Shana Dabbin',
                  Email: 'sdubbin@geocitles.com',
                  Gender: 'Male',
                  JobTitle: 'Assistant Media Planner'
                },{
                  Id: '3',
                  Name: 'Shana Dabbin',
                  Email: 'sdubbin@geocitles.com',
                  Gender: 'Male',
                  JobTitle: 'Assistant Media Planner'
                }]
              },
              database: ''
            }
        },
        mounted(){
          this.dataBase = openDatabase("websql","1.0","数据添加",1024*1024);
          this.query();
        },
        methods:{
          clear(){
            this.dataArr.newArr = [];
          },
          createTable() {
            this.dataBase.transaction(function(tx) {
              tx.executeSql(
                "create table if not exists stu(ids TEXT null, name TEXT null, email TEXT null, gender TEXT null, Job TEXT null)",
                [],function(tx,result){
                  alert('创建stu表成功')
                },
                function(tx, error){ alert('创建stu表失败:' + error.message);
                });
            });
          },
          //添加数据
          insert() {
            var ids = this.ids;
            var names = this.names;
            var emails = this.emails;
            var genders = this.genders;
            var jobs = this.jobs;
            var that = this;
            this.dataBase.transaction(function (tx) {
              tx.executeSql(
                "insert into stu(ids, name, email, gender, job) values(?, ?, ?, ?, ?)",
                [ids, names, emails, genders, jobs],
                function () {that.query();},
                function (tx, error) { alert('添加数据失败: ' + error.message);
                } );
            });
          },
          //查询数据
          query () {
            var that = this;
            this.dataBase.transaction(function (tx) {
              tx.executeSql(
                "select * from stu", [],
                function (tx, result) { //执行成功的回调函数
                  //在这里对result 做你想要做的事情吧...........
                  console.log(result);
                  that.dataArr.newArr = [];
                  for(var i = 0; i < result.rows.length; i++){
                    that.dataArr.newArr.push({
                      Id: result.rows[i].ids,
                      Name: result.rows[i].name,
                      Email: result.rows[i].email,
                      Gender: result.rows[i].gender,
                      JobTitle: result.rows[i].Job
                    });
                  }
                },
                function (tx, error) {
                  alert('查询失败: ' + error.message);
                } );
            });
            console.log(this.dataArr)
          },
          //更新数据
          update(id, name) {
            this.dataBase.transaction(function (tx) {
              tx.executeSql(
                "update stu set name = ? where id= ?",
                [name, id],
                function (tx, result) {
                },
                function (tx, error) {
                  alert('更新失败: ' + error.message);
                });
            });
          },
          //删除数据
          delete(id) {
            this.dataBase.transaction(function (tx) {
              tx.executeSql(
                "delete from stu where id= ?",
                [id],
                function (tx, result) {
                  this.query()
                },
                function (tx, error) {
                  alert('删除失败: ' + error.message);
                });
            });
          },
          //删除数据表
          dropTable() {
            var that = this;
            this.dataBase.transaction(function (tx) {
              tx.executeSql('drop table stu');
              that.dataArr.newArr = []
            });
          }
        }
    })
</script>
