const form = document.querySelector('form');

const trMaker = (date, item, price, currency) => {
    const table = document.querySelector('table')
    var row = table.insertRow(1);
    const cell0 = row.insertCell(0)
    const cell1 = row.insertCell(1)
    const cell2 = row.insertCell(2)
    const cell3 = row.insertCell(3)
    cell0.innerHTML = date;
    cell1.innerHTML = item;
    cell2.innerHTML = price;
    cell3.innerHTML = currency;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const select_value_of_currency = this[4].options[this[4].selectedIndex].text;

    // this 1 - 4 rauszunehmen und dann als parameter in die Funktion zu geben.
    trMaker(this[1].value, this[2].value, this[3].value, select_value_of_currency);
    this.value = " ";

    // Alle inputs einmal leer machen!
    // Funktion die alle inputs leert
});

let deineMutter = () => {
    trMaker("Text für Zelle 1", "Text für Zelle  2", "Text für Zelle 3", "Text für Zelle 4");
}