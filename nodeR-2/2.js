Buffer.prototype.Myconcat=(list,listLength)=>{
    if(typeof listLength == 'undefined'){
        listLength = list.reduce((prev,next)=>prev+next.length,0);
    }
    let offset =0;
    list.forEach((buffer)=>{
        if(!Buffer.isBuffer(buffer))return;
        Buffer.copy(buffer,offset);
        offset = offset + buffer.length;
    })
    return Buffer.slice(0, offset);
}