let i = 0;
class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
    createElement(title){
    // binnen een element > newNote (geen 2 keer var note mogelijk)
    // class - div met alles in 
    let newNote = document.createElement('div');
    newNote.innerHTML = `<p>${this.title}</p> <a href="#" class="card-remove">Remove</a>`;
    newNote.setAttribute("class", "card");

   // promise toegevoegd - remove klik
   new Promise( (resolve, reject) => {
    setTimeout( () => {
      let a = document.getElementsByTagName("a");
      a[i].addEventListener('click', this.remove.bind(newNote));
      i++;
    }, 500 );
  });

    return newNote;
  }
  
  add(element){  //note.element
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(element);
  }
  
  saveToStorage(noteText){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
    let arrStorage = [];

    if (localStorage.length > 0) {
      arrStorage = JSON.parse(localStorage.getItem("nodes"));

      const arrCount = arrStorage.length;
      arrStorage[arrCount] = noteText;
    } else {
      arrStorage[0] = noteText;
    }

    localStorage.setItem("nodes", JSON.stringify(arrStorage));
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note createElement
    
    setTimeout(() => {
      this.style.display = "none";
    }, 1000);
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
    this.input = document.querySelector("#txtAddNote");
    this.input.addEventListener("keydown", event => {
      if(event.keyCode === 13){
        this.createNote();
      }
    });

    this.loadNotesFromStorage();
  }
  
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    const loadNotes = JSON.parse(localStorage.getItem("nodes"));
    
    if (loadNotes.length > 0) {
      loadNotes.forEach(notes => {
        let note = new Note(notes);
        note.add(note.element);
      });
    }
  }

  createNote(){
    const textInNote = document.querySelector("#txtAddNote").value;
    // this function should create a new note by using the Note() class
    let note = new Note(textInNote);
    // HINT🤩
    note.add(note.element);
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("#txtAddNote").value = "";
  }
  
}
let app = new App();