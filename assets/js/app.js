const cl = console.log;

const btn = document.getElementById("btn")
const box = document.getElementById("box")

let flag = true;

// const hidebox = function(){
//     // box.style.display = "none"
//     if(flag === true){
//         // cl(this);
//         this.innerHTML = "Show Box";
//         box.classList.add("d-none");
//         flag = false;
//     }else{
//         this.innerHTML = "Hide Box";
//         box.classList.remove("d-none");
//         flag = true;
//     }
    
// }


// const hidebox = function(){
//     if(flag){
//         this.innerHTML = "Show Box";
//         box.classList.add("d-none");
//         flag = false;
//     }else{
//         this.innerHTML = "Hide Box";
//         box.classList.remove("d-none");
//         flag = true;
//     }
// }


// const hidebox = function(){
//     if(flag){
//         this.innerHTML = "Show Box";
//         box.classList.toggle("d-none");
//         flag = !flag;
//     }else{
//         this.innerHTML = "Hide Box";
//         box.classList.toggle("d-none");
//         flag = !flag;
//     }
// }


// const hidebox = function(){
//     if(flag){
//         this.innerHTML = "Show Box";
//     }else{
//         this.innerHTML = "Hide Box";
//     }

//     box.classList.toggle("d-none");
//     flag = !flag;
// }


const hidebox = function() {
    flag ? this.innerHTML = "Show Box" : this.innerHTML = "Hide Box";
    box.classList.toggle("d-none");
    flag = !flag;
}

// btn.addEventListener("click", hidebox);
btn.addEventListener("dblclick", hidebox);

// btn >> document object
// .addEventListener >> method
// "click" >> EventName
// hidebox >> CallBackFunction