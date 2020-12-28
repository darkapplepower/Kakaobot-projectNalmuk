const HELP="\u200b".repeat(1000)+["/help","/날씨","/디지털시계","/코로나","/가위바위보 [가위|바위|보]","/계산 {식}","/암호화 {문자}","/복호화 {암호화된 문자}","/따라하기 {따라할 말}","/업다운 시작","/업다운 {숫자}","/시간표검색 {학교명}","/시간표검색 {학교코드}","/출석","/한강","/주사위"].join("\n");
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
    if(msg==="/날씨"){
        replier.reply(Utils.parse("https://m.search.daum.net/search?w=tot&nil_mtopsearch=btn&DA=YZR&q=%EC%A0%84%EA%B5%AD%EB%82%A0%EC%94%A8").select("a[class= link_city now_info]").toArray().map(x=>[x.select("span.txt_name"),x.select("span.txt_temp"),x.select("span[class^=ico_ws ico_w0]")].map(xx=>xx.text()).join(" ")).join("\n"));
        return;
    }
    if(msg==="/시계"){
        replier.reply(getTime1());
        return;
    }
    if(msg==="/디지털시계"){
        replier.reply(getTime2());
        return;
    }
    if(msg==="/코로나"){
        replier.reply(org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/").get().select("ul.liveNum>li").toArray().map(x=>(x.select("strong.tit")+" : "+x.select("span.num")).replace(/\([^\)]+\)/g,"")+" "+x.select("span.before")).join("\n").replace(/<[^>]+>|전일대비 /g,""));
        return;
    }
    if(msg.startsWith("/가위바위보 ")){
        replier.reply(rsp(msg.split(" ")[1]));
        return;
    }
    if(msg.startsWith("/계산 ")){
        replier.reply(calculation(msg.replace("/계산 ","")));
        return;
    }
    if(msg.startsWith("/암호화 ")){
        replier.reply(amhohwa(msg.replace("/암호화 ","")));
        return;
    }
    if(msg.startsWith("/복호화 ")){
        replier.reply(bokhohwa(msg.replace("/복호화 ","")));
        return;
    }
    if(msg.startsWith("/따라하기 ")){
        replier.reply(msg.replace("/따라하기 ","\u200b"));
        return;
    }
    if(msg.startsWith("/업다운 ")){
        replier.reply(ud(msg.split(" ")[1],room,sender));
        return;
    }
    if(msg.startsWith("/시간표검색 ")){
        const split=msg.split(" ");
        if(isNaN(split[1])){
            replier.reply("검색 결과입니다.\n"+Comci.searchSchool(split[1],true));
        }else{
            let dark=Comci.getTimeTable(split[1],split[2],split[3]);
            replier.reply(dark===false?"입력한 값에 문제가 있습니다.\n/시간표검색 [학교코드] [학년] [반] 형식으로 써주세요.\n학교코드는 /시간표검색 [학교명]으로 얻을 수 있습니다.":Comci.sortTable(dark));
        }
        return;
    }
    if(msg==="/출석"){
        replier.reply(chulsuk(room,sender));
        return;
    }
    if(msg==="/한강"){
        replier.reply("현재 한강의 온도는 "+/<td class\="avg1"><\/td>[^>]*<\!-- 수온 -->/.exec(org.jsoup.Jsoup.connect("http://koreawqi.go.kr/wQSCHomeMainView_D.wq?action_type=T").get().select("tr.site_S01004 ").html())[0].replace(/<[^>]*>/g,"").trim()+"도입니다");
        return;
    }
    if(msg==="/help"){
        replier.reply(HELP);
        return;
    }
    if(msg==="/주사위"){
        replier.reply("주사위 결과: "+((Math.random()*6|0)+1));
        return;
    }
}
function getTime1() {
    const Time = new Date();
    var result;
    switch(Math.floor(Time.getMinutes()/5)%12){
        case 0:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　░　　██　　　\n" +
                        "　　█　　　　░　　　　█　　\n" +
                        "　　█　　　　░　　　　█　　\n" +
                        "　█　　　　　░　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 1:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　░　　█　　\n" +
                        "　　█　　　　　░░　　█　　\n" +
                        "　█　　　　　　░　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 2:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　░░░█　　\n" +
                        "　█　　　　　　░░　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 3:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█　　　　　█░░░░░█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 4:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　░░　　　█　\n" +
                        "　　█　　　　　　░░░█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 5:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　░　　　　█　\n" +
                        "　　█　　　　　░░　　█　　\n" +
                        "　　█　　　　　　░　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 6:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　░　　　　　█　\n" +
                        "　　█　　　　░　　　　█　　\n" +
                        "　　█　　　　░　　　　█　　\n" +
                        "　　　██　　░　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 7:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　░　　　　　　█　\n" +
                        "　　█　　░░　　　　　█　　\n" +
                        "　　█　　░　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 8:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　░░　　　　　　█　\n" +
                        "　　█░░░　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 9:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　█░░░░░█　　　　　█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 10:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█░░░　　　　　　█　　\n" +
                        "　█　　　░░　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
        case 11:{
            result="　　　　　█████　　　　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　█　　░　　　　　　█　　\n" +
                        "　　█　　░░　　　　　█　　\n" +
                        "　█　　　　░　　　　　　█　\n" +
                        "　█　　　　　█　　　　　█　\n" +
                        "　█　　　　　　　　　　　█　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　█　　　　　　　　　█　　\n" +
                        "　　　██　　　　　██　　　\n" +
                        "　　　　　█████　　　　　";
            break;
        }
    }
    result=result.split("\n").map(x=>x.split(""));
    switch(Time.getHours()%12){
        case 0:{
            result[3][7]="▓";
            result[4][7]="▓";
            break;
        }
        case 1:{
            result[3][8]="▓";
            result[4][8]="▓";
            break;
        }
        case 2:{
            result[4][9]="▓";
            result[4][8]="▓";
            break;
        }
        case 3:{
            result[5][8]="▓";
            result[5][9]="▓";
            break;
        }
        case 4:{
            result[6][8]="▓";
            result[6][9]="▓";
            break;
        }
        case 5:{
            result[6][8]="▓";
            result[7][8]="▓";
            break;
        }
        case 6:{
            result[6][7]="▓";
            result[7][7]="▓";
            break;
        }
        case 7:{
            result[6][6]="▓";
            result[7][6]="▓";
            break;
        }
        case 8:{
            result[6][5]="▓";
            result[6][6]="▓";
            break;
        }
        case 9:{
            result[5][5]="▓";
            result[5][6]="▓";
            break;
        }
        case 10:{
            result[4][5]="▓";
            result[4][6]="▓";
            break;
        }
        case 11:{
            result[3][6]="▓";
            result[4][6]="▓";
            break;
        }
    }
    return result.map(x=>x.join("")).join('\n');
}
const getTime2=(function(){
    const TIME={
        t6:[null," ░ "," █ "," ░ "," █ "," ░ "],
        t1:["███","░░█","███","███","█░█","███","███","███","███","███"],
        t2:["█░█","░░█","░░█","░░█","█░█","█░░","█░░","█░█","█░█","█░█"],
        t3:["█░█","░░█","███","███","███","███","███","█░█","███","███"],
        t4:["█░█","░░█","█░░","░░█","░░█","░░█","█░█","░░█","█░█","░░█"],
        t5:["███","░░█","███","███","░░█","███","███","░░█","███","███"]
    };
    return function(){
        var Time=new Date(),result="";
        Time=(String(Time.getHours()).length===1?"0"+Time.getHours():String(Time.getHours()))+(String(Time.getMinutes()).length===1?"0"+Time.getMinutes():String(Time.getMinutes()));
        for(let i=1;i<6;i++){
            result+=[TIME["t"+i][Time[0]],TIME["t"+i][Time[1]],TIME["t6"][i],TIME["t"+i][Time[2]],TIME["t"+i][Time[3]]].join(" ")+"\n";
        }
        return result;
    };
})();
const rsp=(function(){
    const a1=["저는 가위를 냈습니다.","저는 바위를 냈습니다.","저는 보를 냈습니다."];
    const a2=["제가 졌습니다.","비겼습니다.","제가 이겼습니다"];
    return function(rsp){
        switch(rsp){
            case "가위":{
                let a=Math.random()*3|0;
                return a1[a]+" "+a2[(a+1)%3];
            }
            case "바위":{
                let a=Math.random()*3|0;
                return a1[a]+" "+a2[a];
            }
            case "보":{
                let a=Math.random()*3|0;
                return a1[a]+" "+a2[(a+2)%3];
            }
            default:{
                return "가위, 바위, 보 중에 하나를 내주세요";
            }
        }
    };
})();
const calculation=(function(){
    const jungGuSik=/ |\%|\,|\(|\)|\*|\-|\/|\+|[0-9]|Math.toSource|Math.abs|Math.acos|Math.asin|Math.atan|Math.atan2|Math.ceil|Math.cos|Math.exp|Math.floor|Math.log|Math.max|Math.min|Math.pow|Math.random|Math.round|Math.sin|Math.sqrt|Math.tan|Math.cbrt|Math.cosh|Math.expm1|Math.hypot|Math.log1p|Math.log10|Math.sinh|Math.tanh|Math.imul|Math.trunc|Math.acosh|Math.asinh|Math.atanh|Math.sign|Math.log2|Math.fround|Math.clz32|Math.E|Math.PI|Math.LN10|Math.LN2|Math.LOG2E|Math.LOG10E|Math.SQRT1_2|Math.SQRT2/g;
    return function(s_num){
        if(s_num.replace(jungGuSik,"")===""){
            try{
                return eval(s_num);
            }catch(e){
                return e;
            }
        }else{
            return "계산할 수 없습니다";
        }
    };
})();
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
}
const ud=(function(){
    const rooms={};
    return function(msg,room,sender){
        if(!Object.keys(rooms).includes(room)){
            rooms[room]=[false,null];
        }
        if(msg==="시작"){
            if(!rooms[room][0]){
                rooms[room]=[true,(Math.random()*100|0)+1];
                return "업다운이 시작되었습니다.\n/업다운 [숫자]로 답을 맞혀주세요.";
            }else{
                return "이전 경기가 끝나지 않았습니다.\n/업다운 [숫자]로 답을 맞혀주세요.";
            }
        }else{
            if(rooms[room][0]){
                if(!isNaN(msg)){
                    msg=Number(msg);
                    if(rooms[room][1]===msg){
                        rooms[room][0]=false;
                        return sender+"님 정답입니다!";
                    }else{
                        return sender+"님 "+(rooms[room][1]>msg?"업":"다운");
                    }
                }else{
                    return "유효하지 않은 값입니다.";
                }
            }else{
                return "업다운이 시작되지 않았습니다.";
            }
        }
    };
})();
const Comci = function () {
    const Jsoup = org.jsoup.Jsoup;
    function getTimeTable(schoolId, grade, cl) {
        try {
            if (!isNaN(schoolId)) {
                const i = String(Jsoup
                    .connect("http://comci.kr:4082/st")
                    .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36")
                    .get()
                    .select("script")
                    .get(1)
                    .html());
                const encodeText = String(new java.lang.String(android.util.Base64.encodeToString(new java.lang.String((scData(i) + schoolId + "_0_1").toString()).getBytes(),android.util.Base64.DEFAULT)));
                var data = String(Jsoup
                    .connect("http://comci.kr:4082" + getUrl(i).split("?")[0] + "?" + encodeText)
                    .get()
                    .text());
                data = JSON.parse(data.replace(/\0/g, ""));
                const zaryo = getVariableName(i);
                const result = {};
                result.수업시간 = JSON.parse(JSON.stringify(data.일과시간));
                result.시간표 = [[], [], [], [], [], []];
                let ord, dad, th, sb, na;
                for (let t = 1; t < 9; t++) {
                    for (let we = 1; we < 7; we++) {
                        ord = data[zaryo[0]][grade][cl][we][t];
                        dad = data[zaryo[1]][grade][cl][we][t];
                        th = Math.floor(dad / 100);
                        sb = dad - th * 100;
                        if (dad > 100) {
                            if (th < data[zaryo[3]].length) {
                                na = data[zaryo[4]][th].substr(0, 2);
                            } else {
                                na = "";
                            }
                            result.시간표[we - 1][t - 1] = (data[zaryo[5]][sb] + "(" + na + ")").toString();
                        }
                    }
                }
                return result;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    function searchSchool(schoolName, isText) {
        var result = String(Jsoup
            .connect(("http://comci.kr:4082" + getUrl(String(Jsoup.connect("http://comci.kr:4082/st").header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36").get().select("script").get(1).html())) + java.net.URLEncoder.encode(schoolName, "EUC-KR")).toString())
            .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36")
            .header("Referer", "http://comci.kr:4082/st")
            .get()
            .text());
        result = JSON.parse(result.replace(/\0/g, ""));
        result = result["학교검색"].map(function (x) {
            return {
                name: (x[2] + "(" + x[1] + ")").toString(),
                value: x[3]
            };
        });
        if (isText) {
            return result.map(x => x.name + "|" + x.value).join("\n");
        }
        return result;
    }
    function getVariableName(i) {
        var result = new Array();
        let count;
        while (true) {
            count = i.indexOf("자료.자료");
            if (count === -1) {
                break;
            }
            result.push(i.substr(count + 3, 5));
            i = i.substring(count + 8);
        }
        return result;
    }
    function getUrl(i) {
        return i.substring(i.indexOf("url")).match(/\/([^\']+)/)[0];
    }
    function scData(i) {
        return i.substr(i.indexOf("sc_data('") + 8).match(/[^']+/)[0];
    }
    return {
        searchSchool: searchSchool.bind(),
        getTimeTable: getTimeTable.bind()
    };
}();
Comci.sortTable=function(timeTable){
    return ["월","화","수","목","금","토","일"].map(function(x,xx){
        if(Array.isArray(timeTable.시간표[xx])){
            return x+"\n"+timeTable.시간표[xx].map(function(y,yy){return timeTable.수업시간[yy]+"|"+y;}).join("\n");
        }else{
            return x;
        }
    }).join("\n\n\n");
};
const chulsuk=(function(){
    var Data={};
    var Day=new Date().getDay();
    return function(room,sender){
        if(Day!==new Date().getDay()){
            Data={};
            Day=new Date().getDay();
        }
        if(!Object.keys(Data).includes(room)){
            Data[room]=[];
        }
        var count=Data[room].length+1;
        if(Data[room].includes(sender)){
            return "이미 출석하셨습니다.";
        }else{
            Data[room][count-1]=sender;
            return sender+"님 출석 완료!\n"+count+"위입니다.";
        }
    };
})();
