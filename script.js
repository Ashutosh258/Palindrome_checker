function checkpalindrome(){
    let plinput = document.getElementById("plinput").value;
    let result=document.getElementById("result");
    let reverse=plinput.split("").reverse().join('')
    // console.log(reverse)
    if(plinput==''){
        alert("please enter a word");
    }
   else if(plinput.toLowerCase() == reverse.toLowerCase()){
    // alert("it's a palindrome");
    result.style.display="block"
    result.innerHTML=`${plinput} is a palindrome`
}
else{
    // alert("it's not a palindrome");
    result.style.display="block"
    result.innerHTML=`${plinput} is not a palindrome`
   }
}