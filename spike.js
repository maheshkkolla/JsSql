var JsSql = require("./JsSql.js").JsSql;

var qry1 = new JsSql();
qry1.select(["id","name"]).as(["st_id","st_name"]);
qry1.from(["students"]);
qry1.where(["id='1'","name='mahesh'"]).connectors(["and"]);
console.log("select-->",qry1.query);

var qry2 = new JsSql();
qry2.insertInto("students").someFields(["id","name"]);
qry2.values([1,"mahesh"])
console.log("insert-->",qry2.query);

var qry3 = new JsSql();
qry3.select();
qry3.from(["subjects"]);
console.log("select * -->",qry3.query);

var qry4 = new JsSql();
qry4.update("students");
qry4.set(["id","name"]).values([1,"mahesh"]);
qry4.where(["id=1"]);
console.log("update-->",qry4.query);

var callback = function(err,data){

} 

// qry1.ready(db,"all",callback);
// qry2.ready(db,"run",qry1);

// qry2.fire();
