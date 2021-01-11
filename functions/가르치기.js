const garuchigi=function(){
    const DATA=JSON.parse(DataBase.getDataBase("darkbot/학습/data")===null?DataBase.setDataBase("darkbot/학습/data","{}"):DataBase.getDataBase("darkbot/학습/data"));
    const z="@@";
    return {
        g:function(msg,room){
            if(!DATA.hasOwnProperty(room))DATA[room]={};
            msg=msg.split("@");
            if(msg.length>=2){
                if(msg[1]!==""){
                    if(!Object.keys(DATA[room]).includes(msg[0])){
                        DATA[room][msg[0]]=msg[1];
                        DataBase.setDataBase("darkbot/학습/data",JSON.stringify(DATA));
                        return "성공적으로 학습했습니다.";
                    }else{
                        return "이미 배운 단어입니다.";
                    }
                }else{
                    return "응답할 말은 한 글자 이상이어야 합니다.";
                }
            }else{
                return "형식이 잘못되었습니다.\n올바른 형식: /가르치기 가르칠 말@이렇게 답하기";
            }
        },
        u:function(msg,room){
            if(!Object.keys(DATA).includes(room))DATA[room]={};
            msg=msg.replace(z,"");
            if(Object.keys(DATA[room]).includes(msg)){
                return DATA[room][msg];
            }else{
                return false;
            }
        }
    };
}();
