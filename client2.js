let ws = new WebSocket("ws://127.0.0.1:4000/second");
ws.addEventListener("error", function (err) {
    console.log(err);
});

ws.addEventListener("message", function (ev) {
    let h1 = document.querySelector("#response");
    h1.innerHTML += ev.data + "<br>";
});

window.addEventListener(
    "DOMContentLoaded",
    function () {
        const submitBtn = document.querySelector("#form");
        const inputField = document.querySelector("#chat");
        submitBtn.addEventListener("submit", function (e) {
            e.preventDefault();
            let val = inputField.value;
            ws.send(val);
            inputField.value = "";
        });
    },
    false
);
