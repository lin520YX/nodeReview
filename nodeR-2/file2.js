// 将1.txt 中的内容写到2.txt中
let fs = require('fs');
//同步读取
const copySync = (source,target)=>{
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result)
}

const copy = (source,target,cb)=>{
    let result = fs.readFile(source,(err,data)=>{
        if(err) return cb(err);
        fs.writeFile(target,data,cb);
    })
}