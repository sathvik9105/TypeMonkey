import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDG5dchW_ULZ_MvMnZG4Z7FRfh_xuSBelM",
    authDomain: "typemonkey-a2b4f.firebaseapp.com",
    projectId: "typemonkey-a2b4f",
    storageBucket: "typemonkey-a2b4f.appspot.com",
    messagingSenderId: "922199415797",
    appId: "1:922199415797:web:9152f1f06b287a959fdebc",
    measurementId: "G-64869LB864"     
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  name = document.getElementById('name').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is invalid!')
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
      email : email,
      name : name,
    }

    database_ref.child('users/' + user.uid).set(user_data)

    alert('User Created!!')
  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

function login () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is incorrect!!')
    return
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
      last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).update(user_data)

    alert('User Logged In!!')

  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    return false
  }
}

function validate_password(password) {
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}

