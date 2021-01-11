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
