function jedem() {
    var rows = parseInt(document.getElementById("radky").value);
    var cols = parseInt(document.getElementById("sloupce").value);
    var table = document.getElementById("sachovnice");
    var cislo=3
    table.innerHTML = "";

    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            cell.className = (i + j) % 2 === 0 ? "even" : "odd";
        }
    }
}



