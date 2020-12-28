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
