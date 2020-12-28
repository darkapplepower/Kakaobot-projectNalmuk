{
function amhohwa(str){
    if(str==="")return "";
    var result="";
    var i;
    var o=shuffle(list);
    for(i in str){
        result+=str[i]
            .charCodeAt()
            .toString(5)
            .replace(/0/g,o[0])
            .replace(/1/g,o[1])
            .replace(/2/g,o[2])
            .replace(/3/g,o[3])
            .replace(/4/g,o[4])+key;
    }
    if(result.length<30){
        result=key2.repeat(5)+result;
    }else{
        result=key2+result;
        result=result.split("").map(x=>Math.random()*result.length<5?x+key2:x).join("");
    }
    return o.join("")+result;
}
function bokhohwa(str){
    str=str.replace(new RegExp(key2,"g"),"");
    if(str
        .replace(new RegExp(list[0],"g"),"")
        .replace(new RegExp(list[1],"g"),"")
        .replace(new RegExp(list[2],"g"),"")
        .replace(new RegExp(list[3],"g"),"")
        .replace(new RegExp(list[4],"g"),"")
        .replace(new RegExp(key,"g"),"")!==""
    )return "유효하지 않은 값입니다.";
    var o=str.substring(0,5).split("");
    var i;
    var ii=str.substr(5).split(key);
    for(i in ii){
        ii[i]=String.fromCharCode(parseInt(ii[i]
            .replace(new RegExp(o[0],"g"),"0")
            .replace(new RegExp(o[1],"g"),"1")
            .replace(new RegExp(o[2],"g"),"2")
            .replace(new RegExp(o[3],"g"),"3")
            .replace(new RegExp(o[4],"g"),"4"),5));
    }
    return ii.join("");
}
const shuffle=function(array){ 
    array=JSON.parse(JSON.stringify(array));
    for(let i=array.length-1;i>0;i--){ 
        let j=Math.floor(Math.random()*(i+1)); 
        [array[i],array[j]]=[array[j],array[i]]; 
    } 
    return array;
};
const list=["\u0000","\u200c","\u200d","\u200e","\u200f"];
const key="\u200b";
const key2="\u200a";
