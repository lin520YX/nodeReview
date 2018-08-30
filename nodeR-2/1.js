//buffer(16进制) 缓冲
//用来创建一个专门存放二进制数据的缓存区。
// const buf = Buffer.from('runoob', 'ascii');
// console.log(buf.toString())

// buffer 类得api
// Buffer.alloc(size) //返回一个指定大小的实例

//返回一个被array 初始化的新的实例
// console.log(Buffer.from([12,14,15])) //数组中的元素只能是数字

// Buffer.from(string);

// 写数据
// Buffer.write('11111111');//返回写入大小
//读数据
// Buffer.toString(encode,s,e);

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
console.log(JSON.stringify(buf));
console.log(Buffer.isBuffer(buf))