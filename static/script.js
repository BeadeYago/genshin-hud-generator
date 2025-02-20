document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");
    const canvasDownload = document.getElementById("canvasDownload")

    let nameInput = document.getElementById("nameInput")
    let jobInput = document.getElementById("jobInput")
    let dialogInput = document.getElementById("dialogInput")
    let automaticInput = document.getElementById("automaticInput") 
    const lengthSlider = document.getElementById('lengthSlider');
    const spaceSlider = document.getElementById('spaceSlider');
    const removeSpaceCheckbox = document.getElementById('removeSpaceCheckbox');

    let lineImage = new Image()
    let blackFade = new Image();
    let automaticHud = new Image();
    let dialogLines = new Image();
    let startImageLeft = new Image();
    let endImageLeft = new Image();
    let startImageRight = new Image();
    let endImageRight = new Image();


    //Starts from Outside ends in Middle
    lineImage.src = '../static/content/images/line.png';
    startImageLeft.src = '../static/content/images/startLeftLine.png';
    endImageLeft.src = '../static/content/images/endLeftLine.png';
    startImageRight.src = '../static/content/images/startRightLine.png';
    endImageRight.src = '../static/content/images/endRightLine.png';
    blackFade.src = '../static/content/images/backfade.png';
    automaticHud.src = '../static/content/images/automatic.png';
    dialogLines.src = '../static/content/images/dialoglines/longJob.png'

    dialogLines.onload = function(){
        drawCanvas();
    };

    nameInput.addEventListener("input", drawCanvas);

    jobInput.addEventListener("input", drawCanvas);

    dialogInput.addEventListener("input", drawCanvas);

    automaticInput.addEventListener("input", drawCanvas);

    lengthSlider.addEventListener('input', drawCanvas);
    spaceSlider.addEventListener('input', drawCanvas);
    removeSpaceCheckbox.addEventListener('change', drawCanvas);

    function drawCanvas() {
        console.log("Canvas Updated")
        ctx.clearRect(0,0, canvas.width, canvas.height);

        //Draws Black Fades Behind
        ctx.drawImage(blackFade, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(automaticHud, 0, 0, canvas.width, canvas.height);
    //    ctx.drawImage(dialogLines, 0, 0, canvas.width, canvas.height);

        const lines = dialogInput.value.split('\n');

        // Dynamic Name
        ctx.fillStyle = "#ffc700"
        ctx.textAlign = "center"
        ctx.font = "21px ja-jp"
        ctx.fillText(nameInput.value, 641, 593);

        // Dynamic Job
        ctx.fillStyle = "#d5a203"
        ctx.textAlign = "center"
        ctx.font = "13px ja-jp"
        ctx.fillText(jobInput.value, 641, 614);

        // Dynamic Dialog
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.font = "20px ja-jp"
        lines.forEach((line, index) => {
            ctx.fillText(line, 641, 640 + index * 30);
        })

        // Dynamic Automatic
        ctx.fillStyle = "white"
        ctx.textAlign = "left"
        ctx.font = "15px ja-jp"
        ctx.fillText(automaticInput.value, 70, 37);

              // Get the values from sliders
      const lineLength = parseInt(lengthSlider.value);
      const spaceBetween = parseInt(spaceSlider.value);

      // Disable space slider when checkbox is checked
      spaceSlider.disabled = removeSpaceCheckbox.checked;
      jobInput.disabled = removeSpaceCheckbox.checked;


      // Calculate the positions of the lines
      const line1StartX = canvas.width / 2 - (removeSpaceCheckbox.checked ? 0 : spaceBetween / 2) - lineLength;
      const line1EndX = canvas.width / 2 - (removeSpaceCheckbox.checked ? 0 : spaceBetween / 2);

      const line2StartX = canvas.width / 2 + (removeSpaceCheckbox.checked ? 0 : spaceBetween / 2);
      const line2EndX = canvas.width / 2 + (removeSpaceCheckbox.checked ? 0 : spaceBetween / 2) + lineLength;

      // Set color for the first line (red)
      ctx.strokeStyle = '#ffc701';
      // Draw the first line
      ctx.drawImage(lineImage, line1StartX, 1216 / 2 - lineImage.height / 2, lineLength, lineImage.height)
 

      // Draw start image on the first line if checkbox is not checked
      if (!removeSpaceCheckbox.checked) {
        ctx.drawImage(startImageLeft, line1StartX - startImageLeft.width / 1, 1216 / 2 - startImageLeft.height / 2);
        ctx.drawImage(endImageLeft, line1EndX - endImageLeft.width / 300, 1214 / 2 - endImageLeft.height / 2.2);
      }

      if(removeSpaceCheckbox.checked){
        ctx.drawImage(startImageLeft, line1StartX - startImageLeft.width / 1, 1216 / 2 - startImageLeft.height / 2);
        ctx.drawImage(startImageRight, line2EndX - startImageRight.width / 20, 1216 / 2 - startImageRight.height / 2);

      }

      // Set color for the second line (blue)
      ctx.strokeStyle = '#ffc701';
      // Draw the second line
      ctx.drawImage(lineImage, line2StartX, 1216 / 2 - lineImage.height /2, lineLength, lineImage.height)


      // Draw start image on the second line if checkbox is not checked
      if (!removeSpaceCheckbox.checked) {
        ctx.drawImage(endImageRight, line2StartX - endImageRight.width / 1, 1216 / 2 - endImageRight.height / 2);
        ctx.drawImage(startImageRight, line2EndX - startImageRight.width / 20, 1216 / 2 - startImageRight.height / 2);
      }
    }

    drawCanvas();

    //Download Canvas as PNG image
    canvasDownload.addEventListener('click', (e) =>{
        const pngDataUrl = canvas.toDataURL("image/png")
        canvasDownload.href = pngDataUrl;
    })
});
