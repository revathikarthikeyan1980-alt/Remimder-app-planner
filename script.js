function addReminder() {
    const task = document.getElementById("task").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (task === "" || date === "" || time === "") {
        alert("Please enter your task, date, and time!");
        return;
    }

    const reminderList = document.getElementById("reminderList");
    const item = document.createElement("li");

    item.textContent = task + " - " + date + " at " + time;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginTop = "8px";

    deleteButton.onclick = function () {
        item.remove();
    };

    item.appendChild(document.createElement("br"));
    item.appendChild(deleteButton);
    reminderList.appendChild(item);

    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}