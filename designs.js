$(function () {
// Select input
let height = $('#inputHeight');
let width = $('#inputWeight');
// Select color
let cp = $('#colorPicker');
// Select canvas
const cv = $('#pixelCanvas');
// Make Grid when user inputs sizes
function makeGrid() {
cv.find('tbody').remove();
// Submits the user's inputs to make the Grid
let gH = $('#inputHeight').val();
let gW = $('#inputWeight').val();

// Adds the rows and columns
cv.append('<tbody></tbody>');

let cvBody = cv.find('tbody');

// create row
for (let x = 0; x < gW; x++) {
    cvBody.append('<tr></tr>');
}

// create columns
for (y = 0; y < gH; y++) {
    cv.find('tr').append('<td></td>');
}
}

//cell = cv.find('td');

// The color to be shown when the user selects
cv.on('click', "td", function(){
    var color = $('#colorPicker').val();
    $(this).attr("bgcolor", color);
    //if $("td").toggle('bgcolor', color);
});

$('.sp').addClass('animated infinite shake');

$(document).ready(function () {
// Click the  button to make the Grid
$('button[type="button"]').on('click', function (e) {
e.preventDefault();
    makeGrid();
});

});

/*$("td").click(function() {
    let var gValue=$(this).css("bgcolor"), color.val());

  });*/
});
