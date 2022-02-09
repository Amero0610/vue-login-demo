/*
 * @Author: Amero
 * @Date: 2022-02-09 00:51:09
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-09 23:22:45
 * @FilePath: \vue-login-demo\public\test.js
 */
var testStr = "dsa11";
var explainStr =/\w{6,17}/;
console.log(testStr.replace(explainStr, ""));
console.log(testStr);
function testFucntion(_str,_explainStr) {
  return _str.replace(_explainStr, "").length != 0
    ? false
    : true
}
 console.log( testFucntion(testStr,explainStr));
// // MTIzQW1lcm9MOTUw
let tempa = Buffer.from("NTU1MDg1QW1lcm9MSmlhd2VpTHU=","base64").toString();
let temparray = tempa.split('AmeroL');
console.log(temparray);