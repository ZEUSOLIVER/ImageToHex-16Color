strangebutton = false
pcDosPalette = {"00": [0, 0, 0]};
recentColors = [];
maxHistoryColors = 2;
let colordisable = "fill:#321332";
let pal0 = true;
let pal1 = true;
let pal2 = true;
let pal3 = true;
let pal4 = true;
let pal5 = true;
let pal6 = true;
let pal7 = true;
let pal8 = true;
let pal9 = true;
let palA = true;
let palB = true;
let palC = true;
let palD = true;
let palE = true;
let palF = true;
let pal0E = document.getElementById("pal0")
let pal1E = document.getElementById("pal1")
let pal2E = document.getElementById("pal2")
let pal3E = document.getElementById("pal3")
let pal4E = document.getElementById("pal4")
let pal5E = document.getElementById("pal5")
let pal6E = document.getElementById("pal6")
let pal7E = document.getElementById("pal7")
let pal8E = document.getElementById("pal8")
let pal9E = document.getElementById("pal9")
let palAE = document.getElementById("palA")
let palBE = document.getElementById("palB")
let palCE = document.getElementById("palC")
let palDE = document.getElementById("palD")
let palEE = document.getElementById("palE")
let palFE = document.getElementById("palF")
let imgElement = document.getElementById('imageSrc');
let widthImage = document.getElementById('widthImage');
let heightImage = document.getElementById('heightImage');
let codeoutput = document.getElementById('codeoutput')
let canvas = document.getElementById('canvas');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    updatePalette()
}, false);

widthValue.textContent = widthImage.value;
heightValue.textContent = heightImage.value;

widthImage.addEventListener('input', () => {
    widthValue.textContent = widthImage.value;
});

heightImage.addEventListener('input', () => {
    heightValue.textContent = heightImage.value;
});

document.getElementById("resetpalette").onclick = function(){
    updatePalette();
    StartOpen();
}
function updatePalette() {
    pcDosPalette = {
        "00": (pal0==true)?[0, 0, 0]:[5, 5, 5],       // Black
        "01": (pal1==true)?[128, 0, 0]:[5, 5, 5],     // Blue
        "02": (pal2==true)?[0, 128, 0]:[5, 5, 5],     // Green
        "03": (pal3==true)?[128, 128, 0]:[5, 5, 5],     // Cobalt blue
        "04": (pal4==true)?[0, 0, 128]:[5, 5, 5],     // Red
        "05": (pal5==true)?[128, 0, 128]:[5, 5, 5], // Violet
        "06": (pal6==true)?[0, 128, 128]:[5, 5, 5], // Brown
        "07": (pal7==true)?[192, 192, 192]:[5, 5, 5], // Light grey
        "08": (pal8==true)?[128, 128, 128]:[5, 5, 5], // Dark gray
        "09": (pal9==true)?[255, 0, 0]:[5, 5, 5], // Light blue
        "0A": (palA==true)?[0, 255, 0]:[5, 5, 5], // Light green
        "0B": (palB==true)?[255, 255, 0]:[5, 5, 5], // Sky blue
        "0C": (palC==true)?[0, 0, 255]:[5, 5, 5], // Light red
        "0D": (palD==true)?[255, 0, 255]:[5, 5, 5], // Light violet
        "0E": (palE==true)?[0, 255, 85]:[5, 5, 5], // Yellow
        "0F": (palF==true)?[255, 255, 255]:[5, 5, 5], // White
    };
}

document.getElementById("ButtonStrange").onclick = function() {
    if (strangebutton == false){
        strangebutton = true;
    } else {
        strangebutton = false;
    }
}

pal0E.onclick = function() {
    if (pal0 == false){
        pal0E.style = "fill:#000000"
        pal0 = true;
    } else {
        pal0E.style = colordisable;
        pal0 = false;
    }
}
pal1E.onclick = function() {
    if (pal1 == false){
        pal1E.style = "fill:#800000";
        pal1 = true;
    } else {
        pal1E.style = colordisable;
        pal1 = false;
    }
}
pal2E.onclick = function() {
    if (pal2 == false){
        pal2E.style = "fill:#008000";
        pal2 = true;
    } else {
        pal2E.style = colordisable;
        pal2 = false;
    }
}
pal3E.onclick = function() {
    if (pal3 == false){
        pal3E.style = "fill:#808000";
        pal3 = true;
    } else {
        pal3E.style = colordisable;
        pal3 = false;
    }
}
pal4E.onclick = function() {
    if (pal4 == false){
        pal4E.style = "fill:#000080";
        pal4 = true;
    } else {
        pal4E.style = colordisable;
        pal4 = false;
    }
}
pal5E.onclick = function() {
    if (pal5 == false){
        pal5E.style = "fill:#800080";
        pal5 = true;
    } else {
        pal5E.style = colordisable;
        pal5 = false;
    }
}
pal6E.onclick = function() {
    if (pal6 == false){
        pal6E.style = "fill:#008080";
        pal6 = true;
    } else {
        pal6E.style = colordisable;
        pal6 = false;
    }
}
pal7E.onclick = function() {
    if (pal7 == false){
        pal7E.style = "fill:#c0c0c0";
        pal7 = true;
    } else {
        pal7E.style = colordisable;
        pal7 = false;
    }
}
pal8E.onclick = function() {
    if (pal8 == false){
        pal8E.style = "fill:#808080";
        pal8 = true;
    } else {
        pal8E.style = colordisable;
        pal8 = false;
    }
}
pal9E.onclick = function() {
    if (pal9 == false){
        pal9E.style = "fill:#ff0000";
        pal9 = true;
    } else {
        pal9E.style = colordisable;
        pal9 = false;
    }
}
palAE.onclick = function() {
    if (palA == false){
        palAE.style = "fill:#00ff00";
        palA = true;
    } else {
        palAE.style = colordisable;
        palA = false;
    }
}
palBE.onclick = function() {
    if (palB == false){
        palBE.style = "fill:#ffff00";
        palB = true;
    } else {
        palBE.style = colordisable;
        palB = false;
    }
}
palCE.onclick = function() {
    if (palC == false){
        palCE.style = "fill:#0000ff";
        palC = true;
    } else {
        palCE.style = colordisable;
        palC = false;
    }
}
palDE.onclick = function() {
    if (palD == false){
        palDE.style = "fill:#ff00ff";
        palD = true;
    } else {
        palDE.style = colordisable;
        palD = false;
    }
}
palEE.onclick = function() {
    if (palE == false){
        palEE.style = "fill:#00ffff";
        palE = true;
    } else {
        palEE.style = colordisable;
        palE = false;
    }
}
palFE.onclick = function() {
    if (palF == false){
        palFE.style = "fill:#ffffff";
        palF = true;
    } else {
        palFE.style = colordisable;
        palF = false;
    }
}

function findClosestColor(pixel, palette) {
    let minDistance = Infinity;
    let closestColorCode = "00";

    for (const [code, color] of Object.entries(palette)) {
        if (color[0]!=5 || color[1]!=5 || color[2]!=5){
            const distance = Math.sqrt(
                Math.pow(pixel[0] - color[0], 2) +
                Math.pow(pixel[1] - color[1], 2) +
                Math.pow(pixel[2] - color[2], 2)
            );

            if (distance < minDistance & !recentColors.includes(code)) {
                minDistance = distance;
                closestColorIndex = code;
            }
        }
    }
    recentColors.push(closestColorIndex)
    if (recentColors.length > maxHistoryColors){
        recentColors.shift();
    }
    return closestColorIndex.toString(16);
}

function image_to_bin(image) {
    codeout = "";
    //codeout += `${widthImage.value}${heightImage.value}`
    if (strangebutton == true) {
        codeout = "db";
        for(let y = 0; y < image.rows; y++) {
            for(let x = 0; x < image.cols; x++) {
                pixel = image.ucharPtr(y, x);
                closestColorIndex = findClosestColor(pixel, pcDosPalette);
                recentColors = [];
                codeout += `, $${closestColorIndex}`
            }
        }
    } else {
        for(let y = 0; y < image.rows; y++) {
            for(let x = 0; x < image.cols; x++) {
                pixel = image.ucharPtr(y, x);
                closestColorIndex = findClosestColor(pixel, pcDosPalette);
                recentColors = [];
                codeout += `${closestColorIndex}`
            }
        }
    }
    return codeout
}

function binToImage(binCode, width, height) {
    let image = new cv.Mat(height, width, cv.CV_8UC3);
    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            let colorCode = binCode.substr((y * width + x) * 2, 2);
            let color = pcDosPalette[colorCode] || [0, 0, 0];
            image.ucharPtr(y, x)[0] = color[0];
            image.ucharPtr(y, x)[1] = color[1];
            image.ucharPtr(y, x)[2] = color[2];
        }
    }
    return image;
}

imgElement.onload=StartOpen
function StartOpen() {
    let intwidthImage = parseInt(widthImage.value, 10);
    let intheightImage = parseInt(heightImage.value, 10);
    let newSize = new cv.Size(intwidthImage, intheightImage);
    let uploadedImage = cv.imread(imgElement);
    let resizedImage = new cv.Mat();
    cv.resize(uploadedImage, resizedImage, newSize, cv.INTER_NEAREST);
    cv.imshow(canvas, resizedImage);
    codeoutput.value = image_to_bin(resizedImage)
    let reconstructedImage = binToImage(codeoutput.value, intwidthImage, intheightImage);
    cv.imshow(canvas2, reconstructedImage);
    uploadedImage.delete();
    resizedImage.delete();
};

