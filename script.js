



var count = 0;
var a1 = [];
var a2 = [];

function create(x, y) {
    this.x = x;
    this.y = y;
}

function disableAll() {
    const allButtons = document.querySelectorAll(".b");
    allButtons.forEach(button => {
        button.disabled = true;
    });
}


function check(arr) {
    // Check if any combination of 3 points in the array are collinear
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const k1 = (arr[k].y - arr[j].y) * (arr[j].x - arr[i].x);
                const m1 = (arr[j].y - arr[i].y) * (arr[k].x - arr[j].x);
                if (k1 === m1) {
                    return 1; // Points are collinear
                }
            }
        }
    }
    return 0; // No combination of 3 points is collinear
}



function f(x, y, button) {
    var p = new create(x, y);
    if (count % 2 == 0) {
        a1.push(p);
        button.innerHTML = "<h1>X</h1>";
        button.style.backgroundColor = "#12AD2B";
    }
    else {
        a2.push(p);
        button.innerHTML = "<h1>O</h1>";
        button.style.backgroundColor = "red";
    }
    console.log(a1);
    console.log(a2);
    count++;


    button.disabled = true;

    if (a1.length >= 3) {
        var res = check(a1);
        if (res == 1) {
            var res1 = document.getElementById("res");
            res1.textContent = "player 1 won";
            disableAll();




        }
    }
    if (a1.length == 5) {
        var res = check(a1);
        if (res != 1) {
            var res1 = document.getElementById("res");
            res1.textContent = "DRAW";
            disableAll();



        }
    }



    if (a2.length >= 3) {
        check(a2);
        var res = check(a2);
        if (res == 1) {
            var res1 = document.getElementById("res");
            res1.textContent = "player 2 won";
            disableAll();
        }

    }

}

