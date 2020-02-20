
var chems = [0, 0, 0, 0, 0, 0, 0];
function doColor(emotion) {

    document.getElementById("array").innerHTML = chems.toString();
    var finalEmotion = getEmotion()
    console.log("I do color")
    if (typeof emotion != "undefined") {
        finalEmotion = emotion
    }
    document.getElementById("mainText").innerHTML = "Current Emotional Status: " + finalEmotion;
    switch (finalEmotion) {
        case "Mania":
            //document.getElementById("backColor").style.color = "rgb(128,128,128)";
            document.body.style.backgroundColor = "rgb(128,128,128)"
            document.getElementById("subText").innerHTML = "this is a sphere wireframe from when I was testing images";
            document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sphere_wireframe_10deg_6r.svg/1200px-Sphere_wireframe_10deg_6r.svg.png";
            document.getElementById("imgDis").innerHTML = "imma just leave it here";
            textWhite();
            break;
        case "Anger":
            document.getElementById("img").src = "https://media.tenor.com/images/ffc3ac4648c1a3c7aa890589b09dc8aa/tenor.gif"
            document.getElementById("subText").innerHTML = "ree"
            document.body.style.backgroundColor = "rgb(179,25,25)";
            document.getElementById("imgDis").innerHTML = "im mad"
            textWhite();
            break;
        case "Love":
            document.body.style.backgroundColor = "rgb(255,200,200)"
            document.getElementById("img").src = "https://i.pinimg.com/originals/94/1f/ec/941fecbb9283e46a37de1c0e46b5d399.jpg";
            document.getElementById("subText").innerHTML = "you did it";
            document.getElementById("imgDis").innerHTML = "Janie and Tea Cake are in love"
            textBlack();
            break;
        case "Stress":
            document.getElementById("img").src = "https://media.npr.org/programs/newsnotes/features/2005/mar/hudson/eyes.jpg";
            document.getElementById("subText").innerHTML = "breathing intensifies";
            document.getElementById("imgDis").innerHTML = "Jaine feels overworked with Logan"
            document.body.style.backgroundColor = "rgb(215, 95, 245)";
            textBlack();
            break;
        case "Depression":
            document.body.style.backgroundColor = "rgb(0,0,0)";
            document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvNxKFcFCSCmBvQjTOvR0-cUhfzgmD86OCFdL8WYE8nuNyFKKx";
            document.getElementById("subText").innerHTML = "same thing really";
            document.getElementById("imgDis").innerHTML = "look it's you";
            textWhite();
            break;
        case "Happy":
            document.body.style.backgroundColor = "rgb(245, 245, 95)";
            document.getElementById("img").src = "https://theireyeswerewatchingbecca.weebly.com/uploads/1/6/8/7/16879310/5247608.jpg?1360081484";
            document.getElementById("subText").innerHTML = "clap"
            document.getElementById("imgDis").innerHTML = "Pheoby is Janie's good friend"
            textBlack();
            break;
        case "Euphoria":
            document.body.style.backgroundColor = "rgb(255, 255, 191)";
            document.getElementById("img").src = "https://media1.giphy.com/media/4a7sWil1NZoRWymHJp/giphy.gif"
            document.getElementById("subText").innerHTML = "feelsGoodMan"
            document.getElementById("imgDis").innerHTML = "Enter the infinite"
            textBlack();
            break;
        case "Apathy":
            document.body.style.backgroundColor = "rgb(81, 82, 105)";
            textWhite();
            document.getElementById("subText").innerHTML = "I am no longer aroused by turtles.";
            document.getElementById("imgDis").innerHTML = "Janie is distant from Joe"
            document.getElementById("img").src = "https://theirteachingeyes.weebly.com/uploads/2/2/0/4/22044376/8553585.jpg?1427422078"
            break;
        case "Surprise":
            document.body.style.backgroundColor = "rgb(255, 196, 0)";
            textBlack();
            document.getElementById("subText").innerHTML = "le spook"
            document.getElementById("imgDis").innerHTML = "o"
            document.getElementById("img").src = "https://en.meming.world/images/en/thumb/2/2c/Surprised_Pikachu_HD.jpg/300px-Surprised_Pikachu_HD.jpg";
            break;
        case "Impulsive":
            document.body.style.backgroundColor = "rgb(201, 77, 151)";
            document.getElementById("subText").innerHTML = "fight or flight"
            document.getElementById("img").src = "https://tewwgqt.weebly.com/uploads/1/5/6/9/15693146/6857431.jpg"
            document.getElementById("imgDis").innerHTML = "Janie runs off with Jody, almost without thinking"
            textWhite();
            break;
        default:
            document.body.style.backgroundColor = "rgb(255,255,255)";
            document.getElementById("mainText").style.color = "rgb(0,0,0)";
            document.getElementById("img").src = "https://www.evolvefish.com/assets/images/Decals/EF-VDC-00035(Black).jpg";
            document.getElementById("imgDis").innerHTML = "If time runs out everyone will be dead.";
            document.getElementById("subText").innerHTML = randomText();
            textBlack();
            break;

    }


}
function randomText() {
    var texts = [9]
    texts[0] = "Click on some button before I break your kneecaps"
    texts[1] = "Time is running out"
    texts[2] = "This texts has a 1/10 chance of happening"
    texts[3] = "How are you enjoying the buttons"
    texts[4] = "Don't look behind you, but someone is watching"
    texts[5] = "Click on buttons and try and find valid combinations"
    texts[6] = "Click on buttons to find emotions"
    texts[7] = "You're so close to love"
    texts[8] = "These texts are random"
    texts[9] = "If this texts occurs something has gone seriously wrong"
    return texts[Math.floor(Math.random() * 10)];
}
var chillcolor = "pink"
function epilepsy() {
    document.getElementById("img").src = "https://steamuserimages-a.akamaihd.net/ugc/927058346491575750/607D8BF29E03E4FCE1FB2E6DF7A334AA5ED704FA/"
    document.body.style.backgroundColor = "rgb(255,113,206)"
    document.getElementById("subText").innerHTML = "Time is running out, make a move"
    document.getElementById("imgDis").innerHTML = "I'm giving up on trying"
    document.getElementById("mainText").innerHTML = "I've made up my mind"
}

function textWhite() {
    document.getElementById("mainText").style.color = "rgb(255,255,255)";
    document.getElementById("subText").style.color = "rgb(255,255,255)";
    document.getElementById("imgDis").style.color = "rgb(255,255,255)";
    document.getElementById("timer").style.color = "rgb(255,255,255)";
}
function textBlack() {
    document.getElementById("mainText").style.color = "rgb(0,0,0)";
    document.getElementById("subText").style.color = "rgb(0,0,0)";
    document.getElementById("imgDis").style.color = "rgb(0,0,0)";
    document.getElementById("timer").style.color = "rgb(0,0,0)";
}
function chemSum() {
    var sum = 0;
    for (i = 0; i < 7; i++) {
        sum += chems[i];
    }
    return sum;
}
function getEmotion() {
    if (chems[0] == 4 && chemSum() == 4) {
        return "Mania";
    }
    if (chems[2] == 4 && chemSum() == 4) {
        return "Anger";
    }
    if (chems[0] + chems[4] + chems[6] >= 9 && chems[1] + chems[2] + chems[5] === 0 && chems[3] <= 1) {
        return "Love";
    }
    if (chems[2] == 4 && chems[1] == 4 && chemSum() == 8) {
        return "Stress";
    }
    if (chems[5] >= 3 && chems[0] == 1 && chems[6] == 1 && chemSum() <= 6) {
        if (chems[3] + chems[4] === 0) {
            return "Depression"
        }
    }
    if (chems[0] >= 3 && chems[3] >= 3) {
        if (chems[1] + chems[2] + chems[5] === 0 && chemSum() <= 8) {
            return "Happy"
        }
    }
    if (chems[3] == 4 && chemSum() == 4) {
        return "Euphoria"
    }
    if (chems[5] == 4 && chems[1] + chems[2] == 2 && chemSum() == 6) {
        return "Apathy"
    }
    if (chems[6] >= 3 && chems[2] >= 3 && chemSum() <= 7 && chems[5] === 0) {
        return "Surprise"
    }
    if (chems[2] + chems[1] >= 6 && chems[6] >= 3 && chems[5] == 0 && chemSum() <= 12) {
        return "Impulsive"
    }
    return "";

}



function buttonOne() {
    console.log("Button 1 be pressed, chem at: " + chems[0].toString());
    move(0, document.getElementById("barOne"));
    chems[0] += 1;
    if (chems[0] > 4) {
        chems[0] = 0;
    }
    doColor();

}
function buttonTwo() {
    console.log("Button 2 be pressed, chem at: " + chems[1].toString());
    move(1, document.getElementById("barTwo"));
    chems[1] += 1;
    if (chems[1] > 4) {
        chems[1] = 0;
    }
    doColor();
}
function buttonThree() {
    console.log("Button 3 be pressed, chem at: " + chems[2].toString());
    move(2, document.getElementById("barThree"));
    chems[2] += 1;
    if (chems[2] > 4) {
        chems[2] = 0;
    }
    doColor();
}
function buttonFour() {
    console.log("Button 4 be pressed, chem at: " + chems[3].toString());
    move(3, document.getElementById("barFour"));
    chems[3] += 1;
    if (chems[3] > 4) {
        chems[3] = 0;
    }
    doColor();
}
function buttonFive() {
    console.log("Button 5 be pressed, chem at: " + chems[4].toString());
    move(4, document.getElementById("barFive"));
    chems[4] += 1;
    if (chems[4] > 4) {
        chems[4] = 0;
    }
    doColor();
}
function buttonSix() {
    console.log("Button 6 be pressed, chem at: " + chems[5].toString());
    move(5, document.getElementById("barSix"));
    chems[5] += 1;
    if (chems[5] > 4) {
        chems[5] = 0;
    }
    doColor();
}
function buttonSeven() {
    console.log("Button 7 be pressed, chem at: " + chems[6].toString());
    move(6, document.getElementById("barSeven"));
    chems[6] += 1;
    if (chems[6] > 4) {
        chems[6] = 0;
    }
    doColor();
}
function reset() {
    chems = [0, 0, 0, 0, 0, 0, 0];
    doColor();
    document.getElementById("barOne").style.width = 0;
    document.getElementById("barOne").innerHTML = "0%";
    document.getElementById("barTwo").style.width = 0;
    document.getElementById("barTwo").innerHTML = "0%";
    document.getElementById("barThree").style.width = 0;
    document.getElementById("barThree").innerHTML = "0%";
    document.getElementById("barFour").style.width = 0;
    document.getElementById("barFour").innerHTML = "0%";
    document.getElementById("barFive").style.width = 0;
    document.getElementById("barFive").innerHTML = "0%";
    document.getElementById("barSix").style.width = 0;
    document.getElementById("barSix").innerHTML = "0%";
    document.getElementById("barSeven").style.width = 0;
    document.getElementById("barSeven").innerHTML = "0%";
}
function move(a, elem) {
    var width = chems[a] * 25;
    var id = setInterval(frame, 10);
    var i = chems[a];
    function frame() {
        if (i < 4) {
            if (width >= (i + 1) * 25) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        } else {
            if (width <= (0)) {
                clearInterval(id);
            } else {
                width--;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
}
function hide() {
    var x = document.getElementById("hideme");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function forceMania() {
    reset()
    forceEmotion("Mania")
    chems = [3, 0, 0, 0, 0, 0, 0]
    move(0, document.getElementById("barOne"))
    chems = [4, 0, 0, 0, 0, 0, 0]
}
function forceAnger() {
    reset()
    forceEmotion("Anger")
    chems = [0, 0, 3, 0, 0, 0, 0]
    move(2, document.getElementById("barThree"))
    chems = [0, 0, 4, 0, 0, 0, 0]
}
function forceLove() {
    reset()
    forceEmotion("Love")
    chems = [2, 0, 0, 0, 2, 0, 2]
    move(0, document.getElementById("barOne"))
    move(4, document.getElementById("barFive"))
    move(6, document.getElementById("barSeven"))
    chems = [3, 0, 0, 0, 3, 0, 3]
}
function forceStress() {
    reset()
    forceEmotion("Stress")
    chems = [0, 3, 3, 0, 0, 0, 0]
    move(2, document.getElementById("barThree"))
    move(1, document.getElementById("barTwo"))
    chems = [0, 4, 4, 0, 0, 0, 0]
}
function forceDepression() {
    reset()
    forceEmotion("Depression")
    chems = [0, 0, 0, 0, 0, 2, 0]
    move(0, document.getElementById("barOne"))
    move(5, document.getElementById("barSix"))
    move(6, document.getElementById("barSeven"))
    chems = [1, 0, 0, 0, 0, 0, 1]
}
function forceHappy() {
    reset()
    forceEmotion("Happy")
    chems = [2, 0, 0, 2, 0, 0, 0]
    move(0, document.getElementById("barOne"))
    move(3, document.getElementById("barFour"))
    chems = [3, 0, 0, 3, 0, 0, 0]
}
function forceEuphoria() {
    reset()
    forceEmotion("Euphoria")
    chems = [0, 0, 0, 3, 0, 0, 0]
    move(3, document.getElementById("barFour"))
    chems = [0, 0, 0, 4, 0, 0, 0]
}
function forceApathy() {
    reset()
    forceEmotion("Apathy")
    chems = [0, 0, 0, 0, 0, 3, 0]
    move(2, document.getElementById("barThree"))
    move(1, document.getElementById("barTwo"))
    move(5, document.getElementById("barSix"))
    chems = [0, 1, 1, 0, 0, 4, 0]
}
function forceSurprise() {
    reset()
    forceEmotion("Surprise")
    chems = [0, 0, 2, 0, 0, 0, 2]
    move(2, document.getElementById("barThree"))
    move(6, document.getElementById("barSeven"))
    chems = [0, 0, 3, 0, 0, 0, 3]
}
function forceImpulsive() {
    reset()
    forceEmotion("Impulsive")
    chems = [0, 2, 2, 0, 0, 0, 2]
    move(2, document.getElementById("barThree"))
    move(1, document.getElementById("barTwo"))
    move(6, document.getElementById("barSeven"))
    chems = [0, 3, 3, 0, 0, 0, 3]
}
function forceEmotion(e) {
    doColor(e)
}