document.getElementById("confirm").addEventListener("click", displayData);


function listOfData(arrayData) {
    const row = document.createElement("tr");

    for (let i = 0; i < arrayData.length; i++) {
        const cell = document.createElement("td");
        const textOfCell = document.createTextNode(arrayData[i]);
        cell.appendChild(textOfCell);
        row.appendChild(cell);
    }
    return row;
}

function displayData() {
    function myData() {
        let arrayInput = [];

        for (let i = 0; i < $("input").length; i++) {
            arrayInput.push($("input")[i].value);
        }

        let selectcurrancy = $("#currancy-select").val();
        arrayInput.push(selectcurrancy);
        return arrayInput;
    }

    let mainTable = document.getElementById("mainTable");
    let data = myData();
    mainTable.appendChild(listOfData(data));
}