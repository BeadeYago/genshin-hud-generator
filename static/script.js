document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");
    const canvasDownload = document.getElementById("canvasDownload")
    let nameInput = document.getElementById("nameInput")
    let jobInput = document.getElementById("jobInput")
    let dialogInput = document.getElementById("dialogInput")

    var backgroundImage = new Image();
    backgroundImage.src = '../static/content/images/base2.png';

    backgroundImage.onload = function() {
        drawCanvas();
    };

    nameInput.addEventListener("input", function() {
        drawCanvas();
    });

    jobInput.addEventListener("input", function() {
        drawCanvas();
    });

    dialogInput.addEventListener("input", function() {
        drawCanvas();
    });

    function drawCanvas() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        // Dialog Hud
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Dynamic Name
        ctx.fillStyle = "#ffc700"
        ctx.textAlign = "center"
        ctx.font = "21px ja-jp"
        ctx.fillText(nameInput.value, 641, 593);

        // Dynamic Job
        ctx.fillStyle = "#ffc700"
        ctx.textAlign = "center"
        ctx.font = "13px ja-jp"
        ctx.fillText(jobInput.value, 641, 614);

        // Dynamic Dialog
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.font = "20px ja-jp"
        ctx.fillText(dialogInput.value, 641, 640);

        // Dynamic Automatic (Still not)
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.font = "16px ja-jp"
        ctx.fillText("Automatico", 119, 38);
    }

    canvasDownload.addEventListener('click', (e) =>{
        const pngDataUrl = canvas.toDataURL("image/png")
        canvasDownload.href = pngDataUrl;
    })
});
