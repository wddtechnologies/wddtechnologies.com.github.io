//function changeBox() {
   // const box = document.getElementById("myBox");
   // box.innerText = "You clicked the button!";
   // box.style.backgroundColor = "lightcoral";
   // box.style.color = "white";
 // }

  function changeBox() {
    const box = document.querySelector("#mybox2"); // same as getElementById("myBox")
    box.textContent = "Changed with querySelector!";
    box.style.backgroundColor = "seagreen";
    box.style.color = "white";
  }

  function changeAllBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, index) => {
      box.textContent = `Changed Box ${index + 1}`;
      box.style.backgroundColor = "mediumseagreen";
      box.style.color = "white";
      box.style.transform = "scale(1.05)";
      setTimeout(() => {
        box.style.transform = "scale(1)";
      }, 300);
    });
  }
  

  
  
  