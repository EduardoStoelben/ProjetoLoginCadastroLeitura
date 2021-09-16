function login() {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut()
    }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        swal
          .fire({
            icon: "success",
            title: "Login realizado com sucesso",
          })
          .then(() => {
            setTimeout(() => {
              window.location.replace("index.html")
            }, 1000)
          })
      })
      .catch((error) => {
        const errorCode = error.code
        switch (errorCode) {
          case "auth/wrong-password":
            swal.fire({
              icon: "error",
              title: "Senha inválida",
            })
            break
          case "auth/invalid-email":
            swal.fire({
              icon: "error",
              title: "E-mail inválido",
            })
            break
          case "auth/user-not-found":
            swal
              .fire({
                icon: "warning",
                title: "Usuário não encontrado",
                cancelButtonColor: "#d33",

              })
              .then((result) => {
                if (result.value) {
                  signUp(email, password)
                }
              })
            break
          default:
            swal.fire({
              icon: "error",
              title: error.message,
            })
        }
      })
  }
  

  
  function logout() {
    firebase.auth().signOut()
  }
  