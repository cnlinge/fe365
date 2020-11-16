// server.js
var cluster = require('cluster');
var cpuNums = require('os').cpus().length;
var http = require('http');
// console.log('========>')
// console.log(cluster)
if(cluster.isMaster){
  console.log('cluster.isMaster', cpuNums)
  for(var i = 0; i < cpuNums; i++){
    cluster.fork();
  }
}else{
  console.log('else')
  http.createServer(function(req, res){
    res.end(`response from worker ${process.pid}`);
  }).listen(3999);

  console.log(`Worker ${process.pid} started`);
}

// 疑问: 为什么是以下的输出  => 
// cluster 到底什么 =》 源码看
// 为什么创建CPU数量的 进程， fork的进程 会均匀分布到 CPU的每个核上去运行吗？ 
// 进程与CPU是绑定的吗  =》 不会与 特定的CPU核心进行绑定  
// 怎么去绑定进程与CPU？ 
// 怎么去查看某个进程运行在哪个CPU上


// cluster.isMaster 8
// else
// else
// Worker 60963 started
// Worker 60962 started
// else
// Worker 60965 started
// else
// Worker 60967 started
// else
// Worker 60964 started
// else
// Worker 60966 started
// else
// else
// Worker 60969 started
// Worker 60968 started