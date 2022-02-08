/*
 * @Author: Amero
 * @Date: 2022-02-09 00:51:09
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-09 01:35:05
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
// let tempa = Buffer.from("MTIzQW1lcm9MLGNieHp4eixkc2E=","base64").toString();
// console.log(tempa);