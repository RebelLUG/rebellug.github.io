function arrayToTable(tableData) {
    let table = $('<table class="members"></table>');
    $(tableData).each(function (i, rowData) {
        let row = $('<tr class="members"></tr>');
        $(rowData).each(function (j, cellData) {
            if (j === 0 && i === 0) {
                row.append($('<th class="members"></th>'));
            } else if (j === 0) {
                row.append($(`<td><img src="images/profilepics/`+cellData+`" class="members"></td>`));
            } else if (i === 0) {
                row.append($('<th class"members"><h3 class="members">'+cellData+'</h3></th>'));
            } else {
                row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
            };
        });
        table.append(row);
    });
    return table;
}

$.ajax({
    type: "GET",
    //url: "members.csv",
    url: "https://raw.githubusercontent.com/RebelLUG/rebellug.github.io/master/members/members.csv",
    success: function (members) {
        $("#members").append(arrayToTable(Papa.parse(members).data));
    }
});