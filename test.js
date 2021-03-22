const fs = require("fs");

//let arguments=process.argv.slice(2);
//
// function countWord(arguments){
//     let data=fs.readFileSync(arguments[0],"utf-8");
//     let words=data.split(" ");
//     let count=0;
//     for(let i=0;i<words.length;i++){
//         let temp=words[i].split("");
//         count+=temp.length;
//     }
//     console.log(count);
// }

// countWord(arguments);


// function flatten(obj) {
//     let key1 = "newObj.obj2.obj5.one";
//     let key2 = "obj3.obj4.two";
//     let ansObj = {};
//     ansObj[key1] = obj.newObj.obj2.obj5.one;
//     ansObj[key2] = obj.obj3.obj4.two;
//     return ansObj
// }
//console.log(flatten(obj));


let obj = {
    newObj: {
        obj2: {
            obj5: {
                one: 1,
            },
        },
    },
    obj3: {
        obj4: {
            two: 2
        },
    },

    obj4: 5,

    obj8:{
        obj7: 9
    }
};
function flatten(obj){
    let result={};
    for(let i in obj){
        if(typeof obj[i]=="object"){
            let temp=flatten(obj[i]);
            for(j in temp){
                result[i+"."+j]=temp[j];
            }
        }
        else {
            result[i]=obj[i];
        }
    }
    return result;
}
function flatten1(obj,str) {
    let keys=Object.keys(obj);
    let obj1={};
    for(let i=0;i<keys.length;i++){
        if(typeof obj[keys[i]]!="object"){
            obj1[str + keys[i]]=obj[keys[i]];
        }
        else{
            obj1 = Object.assign(obj1, flatten1(obj[keys[i]], str + keys[i] + "."));
        }
    }
    return obj1;
}

console.log(flatten(obj));
console.log(flatten1(obj,""));