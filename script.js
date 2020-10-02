// <!-- <div class="row">
// <div class="col-md-12">
//   <div class="row">
//     <div class="col-md-2"></div>
//     <div class="col-md-8"></div>
//     <div class="col-md-2"></div>
//   </div> -->
const M = moment();

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
    if(i+9 > M.hour()){
       newTextArea.addClass("future"); 
    }else if(i+9 < M.hour()){
        newTextArea.addClass("past");
    }else{
        newTextArea.addClass("present");
    }
    
    textCol.append(newTextArea);

    var btnCol = $("<div>");
    btnCol.addClass("col-md-2");
    innerRow.append(btnCol);

    var saveBtn = $('<button/>')
        .text('Test')
        .click(function () { alert('hi'); });
    saveBtn.addClass("saveBtn");
    btnCol.append(saveBtn);

    
}