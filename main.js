// const Car = {
//     color : "red" , 
//     make  : "Toyota",
//     model: "Corolla",
//     yearModel:2019,
//     engineSize:'3.5L',
//     price: '$48k',

// // method
//     name : function() {
//         return this.yearModel +" "+this.model+" ("+this.engineSize+")";
//     }

// }
// document.getElementById("sasa").innerHTML = Car.name() ;
// // document.getElementById("sasa").innerHTML =`color is :` + "" + Car.color;
// // console.log(Car.make);
// console.log("hi im %c web %c developer","color:red; font-size: 20px;" , "color:blue; font-size: 20px;")


const inpuBox = document.getElementById("input-box");
const ul = document.getElementById("list-container");
const Delete = document.getElementById("Delete");



function task(){

    if(inpuBox.value ===''){
        alert("you must write some thing")
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inpuBox.value;
        ul.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
        inpuBox.value = "";
        saveData();
}

ul.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target. parentElement. remove();
        saveData();
    }

} ,false);

function saveData(){
    localStorage.setItem("Data" , ul.innerHTML);
}

function showList() {
    ul.innerHTML = localStorage .getItem("Data");
    
}
showList();
