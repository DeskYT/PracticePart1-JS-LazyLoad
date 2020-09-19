'use strict'
import {UserCard} from "./userCards.js"

console.log("Task 1");
const strArr = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, natus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
];
function strArrLengths(strArr){
    return strArr.map(item => {
        return item.length;
    });
}

console.log(strArrLengths(strArr));


console.log("Task 2");

function strFirstLetters(str){
    const words = str.split(" ");
    return words.map(item => {
       return item[0];
    });
}

console.log(strFirstLetters("Time And Relative Dimensions In Space"));


console.log("Task 3");

function  charsRemover(str){
    let chars = new Set();
    let res = "";
    for(let item of str){
        if(!chars.has(item)){
            chars.add(item);
            res += item;
        }
    }
    return res;
}

console.log(charsRemover("some chars in this string"));


console.log("Task 4");

function checkData(email, pass){
    const EMAIL_PATTERN = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;
    return EMAIL_PATTERN.test(email) && PASSWORD_PATTERN.test(pass);
}

console.log("Checking test@example.com:123Az5gf74#\n",checkData("test@example.com", "123Az5gf74#"));


console.log("Task 5");

function rgbCheck(str){
    const RGB_PATTERN = /^#[A-Fa-f0-9]{6}$/
    return RGB_PATTERN.test(str);
}

console.log("Checking #F12fff\n", rgbCheck("#F12fff"));


console.log("Task 6");

function objectsExclude(obj_1, obj_2){
    for (let item in obj_2){
        delete obj_1[item];
    }
    return obj_1
}

console.log(objectsExclude({a: "some1", b: "any1", c: "somebody"}, {b: "something", c: "anybody"}));

const options = {
    rootMargin: "25px",
    threshold: 0
}

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 1){
            entry.target.innerHTML = "<h2>LOAD</h2>"
            io.unobserve(entry.target)
        }
    })
}, options)

async function cardsLoader(){
    const mainContainer = document.querySelector(".mainContainer");
    fetch("./js/users.json")
        .then(value => value.json())
        .then(res => {
            for(let item of res){
                const userCard = new UserCard(item.name, item.surname, item.avatar, item.position);
                const userCardElem = userCard.render();
                mainContainer.appendChild(userCardElem);
                io.observe(userCardElem);
            }
        })
        .catch(console.error);
}

cardsLoader();