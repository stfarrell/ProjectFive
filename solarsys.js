const sun = document.querySelector("#Sun");
const earth = document.querySelector("#Earth");
const space = document.querySelector("#space");


earth.addEventListener("click", e=>{
    console.log("Earth clicked!");
});



sun.addEventListener("click", e=>{
    let colorList = ["blue", "green", "red", "yellow"]
    let randColor = colorList[Math.floor(Math.random() * colorList.length)]
    let randx = Math.floor(Math.random() * 100) -50;
    let randy = Math.floor(Math.random() * 100) -50;
    let randz = Math.floor(Math.random() * -100);
    let randrad = Math.random() * 5;
    console.log("Clicked!");
    var star = sun.cloneNode(true);
    space.appendChild(star);
    star.setAttribute("position", `${randx} ${randy} ${randz}`)
    star.setAttribute("radius",randrad)
    star.setAttribute("color", randColor)
    // space.innerHTML += `
    // <a-entity>
    //     <a-sphere position="${randx} ${randy} ${randz}" radius="${randrad}">
    //     </a-sphere>
    // </a-entity>`;
});

function doesThisWork() {
    console.log("IT WORKS!!");
}

// A frame documentation: https://aframe.io/docs/0.8.0/components/cursor.html
// working click event: https://codepen.io/cwervo/pen/rmOgzO
//   var boxClone = greenBox.cloneNode(true);
//       scene.appendChild(boxClone);
//       boxClone.setAttribute("position", `${x} ${y} ${z}`);
//       boxClone.setAttribute("color", `${color}`);
//       console.log(boxClone);