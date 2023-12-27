// let x = false;
// let y = '0';
// let z = 0;
// console.log(x == y)
// console.log(x == z)

// let input = document.querySelector("input");

// function Image(){
//     const file = input.files[0];
//     if(file){
//         const reader  = new FileReader();
//         reader.onload  = function (event){
//             const ImageDataURL = event.target.result;
//         updateImageSRC(ImageDataURL);
//            };
//            reader.onerror = function (error){
//             console.error("Error reading the file" , error);
//            };
//            reader.readAsDataURL(file)
//     }
// }



let img = document.querySelector("img");

let input = document.querySelector("input");

input.onclick = ()=>{

}

// input.addEventListener('click' , ()=>{
//     // img.src = input
//     console.log(input)
// })

input.onchange = function(){
    img.src = URL.createObjectURL(input.files[0])
}
console.log(input.value)