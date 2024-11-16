// area of circle- area will be the return value of the function

// Default Parameter
function area(radius, precision=2){
    return (Math.PI * radius* radius).toFixed(precision)
}

console.log("area == >", area(4));
console.log("area == >", area(4, 3));
console.log("area == >", area(4, undefined));
console.log("area == >", area(4, 0));

// Empty Return
function func1(){
    return;
}
console.log(func1()); //undefined


// Multiline return value
function func2(){
    return (
        1+ 3 * 3
        + "Hello"
    );
}
console.log(func2()); //10Hello

// Call Back function
function fun1(){
    console.log("fun 1");
}
function fun2(cb){
    console.log("fun2");
    cb();
}
fun2(fun1);
//fun2
//fun 1

function ask(question, yes, no){
    const answer = confirm(question);
    if (answer){
        yes()
    }
    else{
        no()
    }
}
function showOK()
{
    alert("OK")
}
function showCancelled()
{
    alert("Cancelled")
}

ask("Do you want to Delete this user?", showOK, showCancelled)


ask("Do you agree with the terms & conditions?",
    function() {console.log("Yes, I agree");
    }, function() {console.log("No, I disagree");
    }
);