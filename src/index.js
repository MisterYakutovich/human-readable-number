module.exports = function toReadable (number) {
    let b=number%10
    let d=number%100
    let a=(number-b)/10
    let c=(number-b)/100
    let k=(number-d)/100
    let m=(number%100)/10
    let f=number/10
    let h=number%10
    let i=((number-b)/10)%10
    const number_1=["one","two","three","four","five","six","seven","eight","nine"]
    const number_2=["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    const number_3=["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    const number_4=["hundred"]
    if (number==0) return "zero"
    if (number>0 && number<10) return number_1[b-1];
    if (number>10 && number<20) return number_2[number-11];
    if (d==0) return number_1[k-1]+" "+number_4[0];
    if (number>100 && number<110 || number>200 && number<210
      || number>300 && number<310 || number>400 && number<410 
      || (number>500 && number<510 ) || number>600 && number<610
      || number>700 && number<710 || number>800 && number<810
      || number>900 && number<910) return number_1[c-1]+" "+number_4[0]+" "+number_1[b-1];
    if ((h>0 && h<10 && number>110 && number<120) || (h>0 && h<10 && number>210 && number<220)
          || (h>0 && h<10 && number>310 && number<320) || (h>0 && h<10 && number>410 && number<420)
          || (h>0 && h<10 && number>510 && number<520) || (h>0 && h<10 && number>610 && number<620)
          || (h>0 && h<10 && number>710 && number<720) || (h>0 && h<10 && number>810 && number<820)
          || (h>0 && h<10 && number>910 && number<920)) return number_1[k-1]+" "+number_4[0]+" "+number_2[d-11];
    if (( h==0 && f>10 && number>=110 && number<200) || (h==0 && f>10 && number!=200  && number>=210 && number<300)
       || (h==0 && f>10 && number!=300 && number>=310 && number<400) || (h==0 && f>10 && number!=400 && number>=410 && number<500)
       || (h==0 && f>10 && number>=510 && number!=500 && number<600)|| (h==0 && f>10 && number!=600 && number>=610 && number<700)
       || (h==0 && f>10 && number>=710 && number!=700 && number<800) || (h==0 && f>10 && number!=800 && number>=810 && number<900)
       || (h==0 && f>10 && number!=900 && number>=910 && number<1000)) return number_1[k-1]+" "+number_4[0]+" "+number_3[m-1];
    if (( h>0 && f>10 && number>=121 && number<=999)) return number_1[k-1]+" "+number_4[0]+" "+number_3[i-1]+" "+number_1[b-1];
    if (b==0) return number_3[a-1];    
    return number_3[a-1]+" "+number_1[b-1]
}
