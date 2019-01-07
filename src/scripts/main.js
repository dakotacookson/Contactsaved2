fetch("http://localhost:8088/Contacts")
    .then(contacts => contacts.json())
    .then(parsaeddatabase => {
        console.table(parsaeddatabase)
    })
const ContactData = {
    ContactDataentry(ContactDataentry2) {
        fetch("http://localhost:8088/Contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ContactDataentry2)
        })
    }
}




const contact = function() {
var ContactName = document.createElement("h3");
var node = document.createTextNode("Name");
ContactName.appendChild(node);
var element = document.getElementById("body1");
element.appendChild(ContactName);


var ContactPhoneNumber = document.createElement("section");
var node = document.createTextNode("PhoneNumber");
ContactPhoneNumber.appendChild(node);
var element = document.getElementById("body1");
element.appendChild(ContactPhoneNumber);


var ContactAdress = document.createElement("section");
var node = document.createTextNode("Adress");
ContactAdress.appendChild(node);
var element = document.getElementById("body1");
element.appendChild(ContactAdress);

}




parsaeddatabase.forEach(contact => {

let ContactTemplete =[
    {
        ContactName: "data",
        ContactPhoneNumber:  "data",
        ContactAdress:  "data"
    }]
    console.table(ContactTemplete)
})