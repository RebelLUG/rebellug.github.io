// function arrayToTable(tableData) {
//     let table = $('<table class="members"></table>');
//     $(tableData).each(function (r, rowData) {
//         let row = $('<tr class="members"></tr>');
//         $(rowData).each(function (c, cellData) {
//             if (r >= 1) {
//                 if (c === 0) {
//                     row.append($(`<td><img src="images/profilepics/`+cellData+`" class="members"></td>`));
//                 }

//                 else {
//                     row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
//                 }
//             }


//             //row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
//             // if (c === 0 && r === 0) {
//             //     row.append($('<th class="members"></th>'));
//             // } else if (c === 0) {
//             //     row.append($(`<td><img src="images/profilepics/`+cellData+`" class="members"></td>`));
//             // } else if (r === 0) {
//             //     row.append($('<th class"members"><h3 class="members">'+cellData+'</h3></th>'));
//             // } else {
//             //     row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
//             // };
//         });
//         table.append(row);
//     });
//     return table;
// }

function arrayToArticle(tableData) {
    //let article = $('<table class="members"></table>');
    let article = $('<article class="box post"><span class="image left highcommand"></span></article');
    $(tableData).each(function (r, rowData) {
        let row = $('<tr class="members"></tr>');
        $(rowData).each(function (c, cellData) {
            if (r >= 1) {
                if (c === 0) {
                    row.append($(`<td><img src="images/profilepics/`+cellData+`" class="members"></td>`));
                }

                else {
                    row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
                }
            }


            //row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
            // if (c === 0 && r === 0) {
            //     row.append($('<th class="members"></th>'));
            // } else if (c === 0) {
            //     row.append($(`<td><img src="images/profilepics/`+cellData+`" class="members"></td>`));
            // } else if (r === 0) {
            //     row.append($('<th class"members"><h3 class="members">'+cellData+'</h3></th>'));
            // } else {
            //     row.append($('<td class="members"><div class="members">'+cellData+'</div></td>'));
            // };
        });
        article.append(row);
    });
    return article;
}

$.ajax({
    type: "GET",
    //url: "members.csv",
    url: "https://raw.githubusercontent.com/RebelLUG/rebellug.github.io/master/members/members.csv",
    success: function (members) {
        $("#members").append(arrayToArticle(Papa.parse(members).data));
    }
});