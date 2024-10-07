const endDate = "17march 2024 1:54:44 pm"
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")


function clocl(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) /1000;
     if (diff<0) return;

     input[0].value = math.floor(diff / 3600 / 24);
     input[1].value = math.floor(diff / 3600 % 24);
     input[2].value = math.floor(diff / 60) % 60; 
     input[3].value = math.floor(diff) / % 60;

}
Clock()

setInterval(
    () => {
        clock()
    },
    1000
)