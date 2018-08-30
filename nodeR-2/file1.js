let fs = require('fs');
let util = require('util');
//同步读取 文件内容
// let read = fs.readFileSync('./x.txt','utf8');
// console.log(read);

let read = util.promisify(fs.readFile);
// read('./x.txt','utf8').then((data)=>{
//     console.log(data)
// });

const result = async ()=>{
    let [name,age] = await Promise.all([read('./x.txt','utf8'),read('./y.txt','utf8')])
    console.log(name,age);
}
result()



