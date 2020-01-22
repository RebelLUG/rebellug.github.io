function arrayToTable(tableData) {
    let table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        let row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            if (i === 0) {
                row.append($('<td class="ranks"><h3>'+cellData+'</h3></td>'));
            } else if (j === 0) {
                row.append($(`<td class="ranks"><img src="images/profilepics/`+cellData+`" class="ProfilePic253rd"></td>`));
            } else {
                row.append($('<td class="ranks">'+cellData+'</td>'));
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