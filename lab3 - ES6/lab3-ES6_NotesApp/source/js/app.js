class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  createElement(title){
    let notes = document.getElementById('notes');
    // MAAK class - div
    let note = document.createElement('div');
    note.innerHTML = `<p>${this.title}</p><br><a href="#" class="card-remove">Remove</a>`;
    note.setAttribute("class", "card");

    // p element
    let newTitle = document.createElement('p');
    // text in innerHTML p
    newTitle.innerHTML = this.title;
    //newTitle.innerHTML = `${title}`;
    console.log(this.titel); //TEST
    note.appendChild(newTitle);

    // make link 
    let a = document.createElement('a');
    a.setAttribute("class", "card-remove");
    a.innerHTML = "Remove";
    // append p 
    note.appendChild(a);
    a.addEventListener('click', this.remove.bind(note));

    return note;
  }
  
  add(noteElement){
    // HINT🤩
    // this function should append the note to the screen somehow
    let notes = document.querySelector('.notes');
    notes.appendChild(noteElement);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
    
    /*let arr = [];
      if(localStorage.length > 0){
        arr = JSON.parse(localStorage.getItem("nodes"));
      }
    arr.push(title);
  */
 
    localStorage.setItem("nodes", JSON.stringify(arr));
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
        console.log("Dit werkt - druk op enter of de knop");
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
      console.log(arr);
      for(let i = 0; i < arr.length; i++){
        let note = new Note(arr[i]);
        note.add(note.element);
      }
    }
  }
  
  createNote(e){  
    // this function should create a new note by using the Note() class
    let note = new Note(document.querySelector("#txtAddNote").value);
    let note = new Note(note);
    console.log(note);
    
    //console.log("klik"); // er wordt op de knop geklikt
    console.log(`klik ${this.note}`);

    // HINT🤩
    note.add(note.noteElement);
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector("txtAddNote").value = "";
  }
}

let app = new App();