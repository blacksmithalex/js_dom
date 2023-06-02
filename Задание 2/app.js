randomArr = []
for (let i = 0; i < 30; i++) {
    randomArr.push(Math.floor(Math.random() * 100));
}
console.log(randomArr)
var count = 0;

function generateTable() {
    const tbl = document.getElementById("table");
    const tblBody = document.createElement("tbody");
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}
function addelement() {
    let i = Math.floor(count / 6);
    let j = count % 6;
    const cell = document.getElementById('table').rows[i].cells[j]
    let val = Math.floor(Math.random() * 100);
    if (val >= 50) {
        cell.style.backgroundColor = "orange";
    }
    const cellText = document.createTextNode(val);
    cell.appendChild(cellText);
    count += 1;
}
window.addEventListener('load', () => {
    generateTable();
});