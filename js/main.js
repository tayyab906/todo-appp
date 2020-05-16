
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.vlaue = '';
    console.log(notesObj);

    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function(element, index){
        html += `

        <div class="card my-2 mx-2 noteCard">
               
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <div class="row noted">
          <h6 class="card-text">${element}</h6>
          <button id="${index}" onclick="deleteNote(this.id)" href="#" class="btn btn-primary"><i class="fa fa-trash"></i></button>
          </div>
          
          
        </div>
      </div>
        
        `;

    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0) {
        notesElm.innerHTML = html;

    }else{
        notesElm.innerHTML = `
        <h2 class="no">no notes</h2>`
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}