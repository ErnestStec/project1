window.addEventListener("load", function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  let painting = false;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPostion() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
   canvas.addEventListener("mousedown", startPosition);
   canvas.addEventListener("mouseup", finishedPostion);
   canvas.addEventListener("mousemove", draw);
});