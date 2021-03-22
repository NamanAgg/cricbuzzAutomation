
setTimeout(function(){
    console.log("hello");
},5000);   //this is in millisecond

console.log("I am first");


async function main() {
    console.log("1");
    setTimeout(() => {
        console.log(2);
    }, 4000);

    console.log(3);
    setTimeout(() => {
        console.log(4);
    }, 2500);
}
main();
console.log(5);