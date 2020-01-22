function arrayToTable(tableData) {
    let table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        let row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            if (j === 0) {
                row.append($(`<img src="images/profilepics/`+cellData+`" class="253rdProfilePic">`));
            } else if (i === 0) {
                row.append($('<td><h1>'+cellData+'</h1></td>'));
            } else {
                row.append($('<td>'+cellData+'</td>'));
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