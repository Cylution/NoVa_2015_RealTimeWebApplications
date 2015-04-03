function createCanvas() {
    var c = document.getElementById("heatMap");
    var context = c.getContext("2d");

    return context;
}

function incrementPixel(canvasContext, x, y) {
    if (!canvasContext) {
        canvasContext = context;
    }

    //var imageData = canvasContext.getImageData(x - 2, y - 2, 11, 11);
    //var pixels = imageData.data;
    //for (var loop = 0; loop < (121 * 4) ; loop = loop + 4) {
    //    pixelData.data[loop] = pixels[loop] + 1; // up the RED
    //    pixelData.data[loop + 3] = 255; // SHOW IT
    //}

    canvasContext.fillRect(x, y, 5, 5);

    //canvasContext.putImageData(pixelData, x - 5, y - 5);
}

var context = createCanvas();
var pixelData = context.createImageData(5, 5);

$("#heatMap").on("mousemove", function (event) {
    incrementPixel(context, event.offsetX, event.offsetY);

    if ($.connection.hub.state === 1) {
        mouseHub.server.move({
            x: event.offsetX,
            y: event.offsetY
        });
    }
});

//$.connection.hub.logging = true;
var mouseHub = $.connection.mouseHub;
mouseHub.client.registerMovement = function(movement) {
    incrementPixel(context, movement.x, movement.y);
}
$.connection.hub.start().done(function() {
    console.log("Connected.");
});

