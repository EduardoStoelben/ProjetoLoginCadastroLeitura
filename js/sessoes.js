firebase.auth().onAuthStateChanged(user => {
    if(user){
      console.log('usuário '+user.email+' logado', user)
    }
    else{
      console.log('usuário está deslogado')
      window.location = "login.html"
    }
})