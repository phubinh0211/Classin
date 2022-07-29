let names = ["Binh", "Phuoc"]
localStorage.setItem("Names", JSON.stringify(names))
arrays = JSON.parse(localStorage.getItem("names"))
names = ["Binh", "Hoa"]
localStorage.setItem("Names", JSON.stringify(names))

let item = JSON.parse(localStorage.getItem("names"))
localStorage.removeItem(names)


var lyric = setInterval(function(){
    alert("You don't know the difference");
    alert("But you want something different babe");
    alert("I know what you missin'");
    alert("Don't care about no distance babe");
    alert("Let me pull up and fill your cup");

    clearInterval(lyric);
}, 1000);



















