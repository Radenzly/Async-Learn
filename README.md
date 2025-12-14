# Async-Learn

Hi hi~ welcome to my lil' coding corner! 💖  
This repo is my cozy spot for learning **JavaScript Async & Promise** using a tiny login & API key example~ :3

---

## 💡 What this repo does

This playground demonstrates:

1. **Promises with delay**  
   - `Login(username)` simulates a server login that takes 2 seconds.  
   - It resolves with a `token` and `user` or rejects if no token exists.

2. **Chaining Promises / Async-Await**  
   - `apikey(token)` simulates requesting an API key with a 1-second delay.  
   - It requires the token from `Login()` to succeed.

3. **Async function to display results**  
   - `userDisplay()` uses `async/await` to call `Login` and `apikey` sequentially.  
   - It prints the username and API key to the console.

4. **Error handling** (optional)  
   - Currently, the code uses `reject()` inside promises.  
   - You can wrap `userDisplay()` in a `try...catch` to handle errors gracefully.
