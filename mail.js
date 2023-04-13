const firebaseConfig = {
    apiKey: "AIzaSyDwSFqeEpVi7Qf_xjXl4GX_mz4Sgr-7fqM",
    authDomain: "software-personnel.firebaseapp.com",
    databaseURL: "https://software-personnel-default-rtdb.firebaseio.com",
    projectId: "software-personnel",
    storageBucket: "software-personnel.appspot.com",
    messagingSenderId: "642069603029",
    appId: "1:642069603029:web:9e01810547aeb89755785c"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var password = getElementVal("password");
    var designation = getElementVal("designation");
    var birthday= getElementVal("birthday");
  
    saveMessages(name, emailid, password,designation,birthday);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, password,designation,birthday) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      password: password,
      designation:designation,
      birthday:birthday,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };