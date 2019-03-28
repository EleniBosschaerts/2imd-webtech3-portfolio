let i = 0;
//let notes; // keyName of //storage.setItem(keyName, keyValue); 
class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    // binnen een element > newNote (geen 2 keer var note mogelijk)
    // class - div met alles in 
    let newNote = document.createElement('div');
    newNote.innerHTML = `<p>${this.title}</p> <a href="#" class="card-remove">Remove</a>`;
    newNote.setAttribute("class", "card");

    // promise toegevoegd - remove klik
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let a = document.getElementsByTagName("a");
        a[i].addEventListener('click', this.remove.bind(newNote));
        i++;
      }, 500);
    });

    return newNote;
  }

  add(element) { //note.element
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(element);
  }

  saveToStorage() {
    // HINT🤩     // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let arrStorage = JSON.parse(localStorage.getItem("notes")); //= loadNotes

    if (arrStorage == null) {
      arrStorage = [];
    } 
    arrStorage.push(this.title); 
    //KORT 
    localStorage.setItem('notes', JSON.stringify(arrStorage));

    //LANG
    //let keyValue = JSON.stringify(arrStorage); localStorage.setItem("notes", keyValue);
    //storage.setItem(keyName, keyValue); 
    // FOUT: A DOMString containing the value of the key. If the key does not exist, null is returned.
  }

  remove() {
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
      if (event.keyCode === 13) {
        this.createNote();
      }
    });

    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  
    let loadNotes = JSON.parse(localStorage.getItem('notes'));

    let notes = "";
    console.log(loadNotes); // als leeg is null // (2) [null, "hi"]
    if (loadNotes != null) {
      if (loadNotes.length > 0) {  // LEGE ARRAY
        loadNotes.forEach(notes => {
          let note = new Note(notes);
          note.add(note.element); // HIER WERD NULL GEMAAKT 
        });
      }
    }
    // console.log(notes); TEST
  }

  createNote() {
    const textInNote = document.querySelector("#txtAddNote").value;
    // this function should create a new note by using the Note() class
    let note = new Note(textInNote);
    // HINT🤩
    note.add(note.element);
    note.saveToStorage();
    this.reset();
  }

  reset() {
    // this function should reset the form
    document.querySelector("#txtAddNote").value = "";
  }

}
let app = new App();