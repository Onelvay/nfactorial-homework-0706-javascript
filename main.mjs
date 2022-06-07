console.log(`Dalida's ACM team \n`)//football

//import {abay} from "./second.mjs";

let members={
    abay:{
        codeforces:1623,
        university:'KBTU',
        age: 18
    },
    gabdyq:{
        codeforces:1743,
        university:'KBTU',
        age: 18
    },
    amanbek:{
        codeforces:1458,
        university:'KBTU',
        age: 17
    },
    chimin:{
        codeforces:-24,
        university:'SDU',
        age: 19
    },
    alikhan:{
        codeforces:1529,
        university:'KBTU',
        age: 18
    },
    abzal:{
        codeforces:849,
        university:'NU',
        age: 19
    },
    kanat:{
        codeforces:49,
        university:'SDU',
        age: 19
    }
}
for(let name in members){
    if (members[name].codeforces<0){
        console.log('ооо сдудын джигиттери')
    }
    else if(members[name].codeforces > 1000){
        console.log(`${name} from ${members[name].university} have in codeforces ${members[name].codeforces} points`);
    }
    else{
        console.log('not interested')
    }
}


console.log("Dalida's store \n");
//идей нету так что чисто прошелся по одному примеру

let store=['orange','apple','pineapple','juice','tea','mango'];

const want='tea';

let have=store.filter((product)=>product==='tea');

if (have.length!=0){
    console.log(`yes we have ${want}`)
}else{
    console.log(`no we don't have ${want}`)
}

function show(store_){

    for (let name in store_){
        console.log(`${name} = ${store_[name]}`)
    }

}

let second_store={
    orange:600,
    apple:320,
    pineapple:600,
    tea:1230
}
let asd=()=> {return second_store.length;}


console.log(`\nчайная Dалиды \n`)
let menu={
    Белый:500,
    black:600,
    green:700,
    red:600,
    chinese_tea:1000,
}
console.log(menu)
console.log('измененное меню')
changed_menu={...menu, black:550, opa:1}
console.log(changed_menu)

console.log(store.slice(1,3))

//let name=abay()
//console.log(`дз выполнил ${name}`)


