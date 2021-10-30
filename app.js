// Your web app's Firebase configuration
var firebaseConfig = {
  //yours firebase configs here
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Refernece contactInfo collections
let contactInfo = firebase.database().ref('infos')

// Listen for a submit
document.querySelector('.contact-form').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  //   Get input Values
  let name = document.querySelector('.name').value
  let email = document.querySelector('.email').value
  let message = document.querySelector('.message').value
  console.log(name, email, message)

  saveContactInfo(name, email, message)

  document.querySelector('.contact-form').reset()

  sendEmail(name, email, message)
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push()

  newContactInfo.set({
    name: name,
    email: email,
    message: message
  })
}

//Send E-mail
function sendEmail(name, email, message) {
  Email.send({
    Host: 'yourhost.com',
    Username: 'contact@yourmail.com',
    Password: 'yourpassword',
    To: 'contact@yourmail.com',
    From: 'contact@yourmail.com',
    Subject: `${name} sent you mail`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
  }).then(message => alert('Sent with success!'))
}
