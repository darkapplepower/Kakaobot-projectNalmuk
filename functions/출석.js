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
