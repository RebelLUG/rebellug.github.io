function arrayToTable(tableData) {
    let table = $('<table class="ranks"></table>');
    $(tableData).each(function (i, rowData) {
        let row = $('<tr class="ranks"></tr>');
        $(rowData).each(function (j, cellData) {
            if (j === 0 && i === 0) {
                row.append($('<th class="ranks"></th>'));
            } else if (j === 0) {
                row.append($(`<td><img src="images/profilepics/`+cellData+`" class="ranks"></td>`));
            } else if (i === 0) {
                row.append($('<th class"ranks"><h3 class="ranks">'+cellData+'</h3></th>'));
            } else {
                row.append($('<td class="ranks"><div class="ranks">'+cellData+'</div></td>'));
            };
        });
        table.append(row);
    });
    return table;
}

$.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/RebelLUG/rebellug.github.io/master/253rd/ranks.csv",
    success: function (ranks) {
        $("#ranks").append(arrayToTable(Papa.parse(ranks).data));
    }
});