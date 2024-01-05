document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");
    const canvasDownload = document.getElementById("canvasDownload")
    let nameInput = document.getElementById("nameInput")
    let jobInput = document.getElementById("jobInput")
    let dialogInput = document.getElementById("dialogInput")
    let automaticInput = document.getElementById("automaticInput") 
    let hasJobInput = document.getElementById("hasJob")
    let TextLenghtInput = document.getElementById("TextLenghtInput")

    let blackFade = new Image();
    blackFade.src = '../static/content/images/backfade.png';

    let automaticHud = new Image();
    automaticHud.src = '../static/content/images/automatic.png';

    let dialogLines = new Image();
    dialogLines.src = '../static/content/images/dialoglines/longJob.png'

    dialogLines.onload = function(){
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

    automaticInput.addEventListener("input", function() {
        drawCanvas();
    });

    hasJobInput.addEventListener("click", function() {
        if(hasJob.checked){
                dialogLines.src = '../static/content/images/dialoglines/longJob.png'
            } else{
                dialogLines.src = '../static/content/images/dialoglines/long.png';
            }
            drawCanvas()
    })

    TextLenghtInput.addEventListener("change", function(){
        if(TextLenghtInput.value == "short" && hasJob.checked){
            dialogLines.src = '../static/content/images/dialoglines/shortJob.png'
        }
            drawCanvas
    })

    function drawCanvas() {
        ctx.clearRect(0,0, canvas.width, canvas.height);

        //Draws Black Fades Behind
        ctx.drawImage(blackFade, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(automaticHud, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(dialogLines, 0, 0, canvas.width, canvas.height);

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


        // Dynamic Automatic (Still not)
        ctx.fillStyle = "white"
        ctx.textAlign = "left"
        ctx.font = "15px ja-jp"
        ctx.fillText(automaticInput.value, 70, 37);
    }

    canvasDownload.addEventListener('click', (e) =>{
        const pngDataUrl = canvas.toDataURL("image/png")
        canvasDownload.href = pngDataUrl;
    })
});
