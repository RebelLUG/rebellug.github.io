$.ajax({
    type: "GET",
    url: "ranks.csv",
    success: CSVToHTMLTable
});

let ranks = Papa.parse(ranks).data;

function arrayToTable(tableData) {
    let table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        let row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            row.append($('<td>'+cellData+'</td>'));
        });
        table.append(row);
    });
    return table;
}