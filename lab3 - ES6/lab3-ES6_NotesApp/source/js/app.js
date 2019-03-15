class Note {
  titel = "Hello";
  constructor(title) {
    this.title = title;
    // HINT🤩 
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
    
    console.log(this.titel);

    // make link 
    let removeLink = document.createElement('a');
    removeLink.setAttribute("href", "#");
    removeLink.setAttribute("class", "card-remove");
    removeLink.innerHTML = "Remove";
    // append p and link to div.card
    newNote.appendChild(newTitle);
    newNote.appendChild(removeLink);
    // HINT🤩 
    removeLink.addEventListener('click', this.remove.bind(newNote));

    // HINT🤩 
    //a.addEventListener('click', this.remove.bind(newNote));
    //removeLink.addEventListener('click', this.remove.bind(newNote));


    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    
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
    // pressing the enter key should also work
    // this.btnAdd = ???
    this.btnAdd = document.querySelector("#btnAddNote")
    //this.btnAdd = 
      
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
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