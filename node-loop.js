const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
//Thread pool size
process.env.UV_THREADPOOL_SIZE = 2;

//out of event loop
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------");
  //   in event loop
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  //   get executed once per tick
  setImmediate(() => console.log("Immediate 2 finished"));

  //   get executed immediately
  process.nextTick(() => console.log("Process.nextTick"));

  //offloaded to the thread pool
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });

  //   Sync version
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from the top-level code");
