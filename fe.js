// Initialize Firebase
var config = {
   //Enter Your Api Key Here
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let company = getInputVal('company');
    let name = getInputVal('name');

    //save message

    saveMessage(company, name);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(company, name){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
     
        company: company,
        name: name
    })
}