//Global Variables
var items = [
    {
        name: "Makarov",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "M1911",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "P99",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "FN Five-Seven",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Mac-11",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "MR96",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "H&K MP5",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Machete",
        class: "Knife",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "H&K UMP .45",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "AK-74",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Glock 18",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "AR-15",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Thompson",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Glock 17",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Kriss Vector",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Desert Eagle",
        class: "Pistol",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "G36C",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "LR-300",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "DP-28",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Serbu Shorty",
        class: "Shotgun",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "G3A3",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Honey Badger",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "SCAR-H",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "M249",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "BT MP9",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Mosin Nagant",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "M14",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "M3 Super 90",
        class: "Shotgun",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "M4 Carbine",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "IMI Galil",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "ACR-E",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "KSG-12",
        class: "Shotgun",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "AUG A3",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "XM8",
        class: "Rifle",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "L115",
        class: "Exotic",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Silver Baller",
        class: "Exotic",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "HK-416",
        class: "Exotic",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "BMG-50",
        class: "Police",
        amount: 0,
        type: "Weapon"
    },
    {
        name: "Gas Mask",
        class: "Equipable",
        amount: 0,
        type: "Equipment"
    },
    {
        name: "Gas Filter",
        class: "Equipable",
        amount: 0,
        type: "Attachment"
    },
    {
        name: "Door Charge",
        class: "Equipable",
        amount: 0,
        type: "Equipment"
    },
    {
        name: "Copper Ingot",
        class: "Item",
        amount: 0,
        type: "Item"
    },
    {
        name: "Iron Ingot",
        class: "Item",
        amount: 0,
        type: "Item"
    },
    {
        name: "Steel Ingot",
        class: "Item",
        amount: 0,
        type: "Item"
    },
    {
        name: "Silver Ingot",
        class: "Item",
        amount: 0,
        type: "Item"
    },
    {
        name: "Gold Ingot",
        class: "Item",
        amount: 0,
        type: "Item"
    },
    {
        name: "Titanium Ingot",
        class: "Item",
        amount: 0,
        type: "Item"
    }
];

function loadMenu(menuType) {
    if(menuType == "spawner") {
        for(i == 0; i < items.length; i++) {
            const item = document.createElement("div");
        }
    } else if(menuType == "cash") {

    }
}

var currentLetter = 0;

setInterval(function() {
    for(i = 1; i < 12; i++) {
        document.getElementById("title" + i).style.color = "white";
    }
    if(currentLetter == 11) {
        currentLetter = 1;
        document.getElementById("title" + currentLetter).style.color = "orangered";
    } else {
        currentLetter++;
        document.getElementById("title" + currentLetter).style.color = "orangered";
    }
}, 150);

setInterval(function() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var month = d.getMonth();
    month++;
    var day = d.getDate();
    var year = d.getFullYear();

    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(month < 10) {
        month = "0" + month;
    }
    if(day < 10) {
        day = "0" + day;
    }

    var date = month + "/" + day + "/" + year;
    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
}, 1000);