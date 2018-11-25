const myNames = ["Mahtab", "Max", "Marjan", "Isaac"]

function listOfRequiredNames(arrayNames) {
    const ul = document.createElement("ul");

    for (let i = 0; i < arrayNames.length; i++) {
        const listItem = document.createElement("li");
        const textOfItem = document.createTextNode(arrayNames[i]);
        listItem.appendChild(textOfItem);
        ul.appendChild(listItem);
    }
    document.body.appendChild(ul);
}

function writeNewName() {
    const enterNewName = document.getElementById("name").value;
}