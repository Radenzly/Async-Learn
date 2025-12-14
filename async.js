let  token = Math.floor(Math.random() * 1000)

function Login(username) { //Example if function login have delay
   return new Promise((resolve, reject) => {
       setTimeout(() => {
       if(!token) { 
           reject("No Token!")
        } else {
           resolve({ token: token, user: username})
        }
    }, 2000) //delay server 2 second
   })
}

function apikey(token) { //Function that need token from function login
const key = Math.floor(Math.random() * 100000)
  return new Promise((resolve, reject) => {
       setTimeout(() => {
       if(!token) {
        reject("No token!")
    } else {
         resolve({ apiKey: key })
    }
  }, 1000) //make simulate delay server 1 second
  })
}


async function userDisplay() { //display the result
  try {
    const  { user, token } = await Login("Yuuka") //call the function
    const  { apiKey }  = await apikey(token)

    console.log(`
      Username: ${user}
      Apikey: ${apiKey}`)
  } catch (err) {
      console.log("Oopsie, something went wrong~ : ", err)
  }
}

userDisplay()