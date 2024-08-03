// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXp2f9_nvLDTK7T3LYu97BLO-nYNgC5EM",
  authDomain: "hackman-a1141.firebaseapp.com",
  projectId: "hackman-a1141",
  storageBucket: "hackman-a1141.appspot.com",
  messagingSenderId: "186586352126",
  appId: "1:186586352126:web:0ee6be0f98d910c9d858af",
  measurementId: "G-H3XJRYK8TT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const registerButton = document.getElementById("submit"); // Get the register button element

registerButton.addEventListener("click", (e) => {
  // Add event listener to the register button
  // e.preventDefault(); // Prevent default form submission
  console.log("Register button clicked");

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  console.log("Form Data:", {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User created successfully");
      // Signed up
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
        .then(() => {
          console.log("User data stored successfully in database");
          alert("User created");
        })
        .catch((error) => {
          console.error("Error writing user data to database:", error);
          alert("Failed to store user data");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
      alert(errorMessage); // Display error message
    });
});