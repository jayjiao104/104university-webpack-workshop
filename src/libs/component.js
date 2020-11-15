import fat from '../5.jpg';

export function hello() {
    const element = document.createElement("div");
    element.innerHTML = "Hello World Dev Server";
    element.classList.add("hello");   
    return element
}

export function catImg() {
    const element = document.createElement("img");
    element.src = fat;
    return element
}

export function footer() {
    const element = document.createElement("div");
    element.innerHTML = 'this is footer. !!!';
    return element
}