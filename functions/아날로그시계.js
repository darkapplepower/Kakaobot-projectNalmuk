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
