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
