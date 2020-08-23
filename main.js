console.log("this is library project");


//constrator
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display
function Display(){

}


Display.prototype.add = function(book){
    console.log("Adding in UI");
    let tableBody = document.getElementById('tableBody');
    uiString = `  <tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                  </tr>`
    tableBody.innerHTML += uiString;
}


Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function(book) {
    if(book.name.length < 2 || book.author.length <2){
        return false;
    }else{
        return true;
    }
}


Display.prototype.show = function (type, displayMessage){
    console.log('Adding a alert');
    let alert = document.getElementById('alert');
    alert.innerHTML = `${type}  <strong>Messge:</strong> ${displayMessage}`
    setTimeout(() => {
        alert.innerHTML = '';
    }, 2000);
}


// addEventListener in libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  // ficton, programming, cooking
  let ficton = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (ficton.checked) {
    type = ficton.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);

  let display = new Display();

  if(display.validate(book)){
      display.add(book);
      display.clear();
      display.show('success', 'Your book has been successfully added');
  }else {
      display.show('danger', 'your book has not been successfull added');
  }

  console.log(book);
  e.preventDefault();
}
