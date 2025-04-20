function clock (){
    const timeElement = document.getElementById("clock");

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";


    timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

}
setInterval(clock, 1000)
clock()