const EvntEmitter = require("events");
const http = require("http");

// inherit from EvntEmitter
class Sales extends EvntEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new EvntEmitter();

// observe the emitter and wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("There was a new sale guys!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jhone");
});

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock`);
});

//object thet emit the events
myEmitter.emit("newSale", 9);

const server = http.createServer();

// another thing from EventEmitter or inherit from EventEmitter on http module
//listen to event 'request'
server.on("request", (req, res) => {
  console.log(req.url);
  console.log("Request recived!");
  res.end("Request recived!");
});

server.on("request", (req, res) => {
  console.log("Another request recived!");
});

server.on("close", () => {
  console.log("close");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Waiting for request!");
});
