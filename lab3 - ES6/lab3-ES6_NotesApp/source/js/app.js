class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  createElement(title){
    // binnen een element > newNote (geen 2 keer var note mogelijk)
    // class - div met alles in 
    let newNote = document.createElement('div');
    newNote.innerHTML = `<p>${this.title}</p><br><a href="#" class="card-remove">Remove</a>`;
    newNote.setAttribute("class", "card");

    // link 
    let a = document.getElementsByTagName('a');
    a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }
  
  add(){ //note.element
    // HINT🤩
    // this function should append the note to the screen somehow
    let notes = document.querySelector('.notes');
    notes.appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
    let data = JSON.parse(localStorage.getItem('keyNoteTitel'));
    if (data == null) {
      data = [];
    }
    data.push(this.title);
    localStorage.setItem('keyNoteTitel', JSON.stringify(data));
    // localStorage.setItem(tabelKolom, data er in); 
    
    
    /*let arr = [];
    if(localStorage.length > 0){
        arr = JSON.parse(localStorage.getItem("nodes"));
    }
    arr.push(title);

    localStorage.setItem("nodes", JSON.stringify(arr));
    */
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    setTimeout( ()=>{
      this.parentNode.removeChild(this);
      this.parentNode.style.display = "none";
    }, 1000);

    let arr = [];
    arr = JSON.parse(localStorage.getItem("nodes"));
    arr.splice(arr.indexOf(this), 1);
    localStorage.setItem("nodes", JSON.stringify(arr));
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
    if(localStorage.length > 0){
      let arr = [];
      arr = JSON.parse(localStorage.getItem("nodes"));
      for(let i = 0; i < arr.length; i++){
        let note = new Note(arr[i]);
        note.add(note.element);
      }
    }
  }
  
  createNote(e){  
    // this function should create a new note by using the Note() class
    let textInNote = document.querySelector("#txtAddNote").value;
    let note = new Note(textInNote);
    
    // HINT🤩
    note.add(); //(note.element)
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector("txtAddNote").value = "";
  }
}

let app = new App();