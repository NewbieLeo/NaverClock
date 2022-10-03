setInterval(() => {
    let now = new Date();
    var hr = (""+now.getHours()%12).padStart(2, "0").replace("00", "12");
    var min = (""+now.getMinutes()).padStart(2, "0");
    var sec = (""+now.getSeconds()).padStart(2, "0");
    var apm = (now.getHours() < 12) ? "오전" : "오후";
    
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("apm").innerHTML = apm;

    document.title = `현재 시각: ${apm} ${hr}:${min}:${sec}`

    if (sec >= 50) document.getElementById("sec").style.color = "red";
    else document.getElementById("sec").style.color = "black";
    
    if (now.getMilliseconds() >= 500) document.querySelectorAll(".colon").forEach(item => item.style.color = "rgba(0, 0, 0, 0.7)");
    else document.querySelectorAll(".colon").forEach(item => item.style.color = "rgba(0, 0, 0, 0.3)");

}, 25);

window.onload = () => {
    document.documentElement.requestFullscreen();
}
