function print(obj){
    var num = document.getElementById("input").value;

    //Else-If
    if(num == 89){
        document.getElementById("demo").innerHTML = "Fizz!"
    }
    else if(num == 0){
        document.getElementById("demo").innerHTML = "invalid input"
    }
    else if(num == 100){
        document.getElementById("demo").innerHTML = "Buzz!"
    }
    else{
        document.getElementById("demo").innerHTML = "FizzBuzz!"
    }
}