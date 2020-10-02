const M = moment();

$("#currentDay").text(M.format('MMMM Do YYYY, h:mm:ss a'));

var outMostRow = $("<div>");
outMostRow.addClass("row");
$("#timeBlocks").append(outMostRow);

var outMostCol = $("<div>");
outMostCol.addClass("col-md-12");
outMostRow.append(outMostCol);

for (var i = 0; i < 8; i++) {
    var innerRow = $("<div>");
    innerRow.addClass("row");
    outMostCol.append(innerRow);

    var hourCol = $("<div>");
    hourCol.addClass("col-md-2");
    innerRow.append(hourCol);
    hourCol.text(i + 9);

    var textCol = $("<div>");
    textCol.addClass("col-md-8");
    innerRow.append(textCol);
    var newTextArea = $("<textarea>");
    if (i + 9 > M.hour()) {
        newTextArea.addClass("future");
    } else if (i + 9 < M.hour()) {
        newTextArea.addClass("past");
    } else {
        newTextArea.addClass("present");
    }
    newTextArea.attr("id", "textArea-" + i);
    newTextArea.val(localStorage.getItem("textArea-" + i));
    textCol.append(newTextArea);

    var btnCol = $("<div>");
    btnCol.addClass("col-md-2");
    innerRow.append(btnCol);

    var saveBtn = $('<button/>')
        .text('Save')
        .attr('id', 'btn-' + i)
        .click(saveItem);
    saveBtn.addClass("saveBtn");
    btnCol.append(saveBtn);
}
function saveItem(event) {
    var element = event.target;
    var index = element.id.substring(4);
    var id = "textArea-" + index;
    localStorage.setItem(id, $("#" + id).val());
}