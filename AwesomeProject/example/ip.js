/**
 * Created by lenovo on 2017/12/26.
 */
function getIPAdress(){
  var interfaces = require('os').networkInterfaces();
  console.log(interfaces)
  for(var devName in interfaces){
    var iface = interfaces[devName];
    for(var i=0;i<iface.length;i++){
      var alias = iface[i];
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        return alias.address;
      }
    }
  }
}
console.log(getIPAdress());