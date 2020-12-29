const chatCount=function(){
    const DATA={};
    return {
        getCount:function(room){
            var sort=[];
            for(let i in DATA[room]){
                sort.push([i,DATA[room][i]]);
            }
            sort.sort(function(a,b){
                return b[1]-a[1];
            });
            return sort.map((x,xx)=>(xx===3?"\u200b".repeat(1000):"")+(xx+1)+"위 "+x[0]+"님 ("+x[1]+"회)").join("\n");
        },
        plus:function(room,sender){
            if(!DATA.hasOwnProperty(room)){
                let a=DataBase.getDataBase("darkbot/채팅수/"+room);
                DATA[room]=JSON.parse(a===null?DataBase.setDataBase("darkbot/채팅수/"+room,"{}"):a);
            }
            if(!DATA[room].hasOwnProperty(sender)){
                DATA[room][sender]=1;
                return;
            }
            DATA[room][sender]++;
            DataBase.setDataBase("darkbot/채팅수/"+room,JSON.stringify(DATA[room]));
            return;
        }
    };
}();
