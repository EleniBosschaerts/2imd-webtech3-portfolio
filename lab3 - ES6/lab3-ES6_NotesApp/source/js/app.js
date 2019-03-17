class Note {
  titel = "Hello";
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  createElement(title){
    // class - div
    let newNote = document.createElement('div');
    newNote.setAttribute("class", "card");

    // p element
    let newTitle = document.createElement('p');

    // text in innerHTML p
    newTitle.innerHTML = `${title}`;
    console.log(this.titel); //TEST

    // make link 
    let a = document.createElement('a');
    a.setAttribute("href", "#");
    a.setAttribute("class", "card-remove");
    a.innerHTML = "Remove";
    // append p and link to div.card
    newNote.appendChild(newTitle);
    newNote.appendChild(a);
    // HINT🤩 
    a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }
  
  add(noteElement){
    // HINT🤩
    // this function should append the note to the screen somehow
    let notes = document.querySelector('#notes');
    notes.appendChild(noteElement);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    
    // HINT🤩
    // clicking the button should work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // pressing the enter key should also work
    this.txtAdd = document.querySelector("#txtAddNote");
    this.txtAdd.addEventListener("keydown", event => {
      if(event.keyCode = 13){
        this.createNote();
      }
    });
 
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
  
  createNote(e){  // STAP 1 
    // this function should create a new note by using the Note() class
    let newNote = new Note(document.querySelector("#txtAddNote").value);
    let note = new Note(newNote);
    console.log(newNote);
    
    //console.log("klik"); // er wordt op de knop geklikt
    console.log(`klik ${this.note}`);

    
    // HINT🤩
    note.add();
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form 

  }
  
}

let app = new App();