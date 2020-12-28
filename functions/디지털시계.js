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
