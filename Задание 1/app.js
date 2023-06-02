randomArr = []
for (let i = 0; i < 30; i++) {
    randomArr.push(Math.floor(Math.random() * 100));
}
console.log(randomArr)

function generateTable() {
    const tbl = document.getElementById("table");
    const tblBody = document.createElement("tbody");
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(randomArr[i + j]);
            if (randomArr[i + j] >= 50) {
                cell.style.backgroundColor = "orange";
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

window.addEventListener('load', () => {
    generateTable();
});