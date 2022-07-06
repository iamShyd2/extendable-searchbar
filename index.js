const express = require('express');
const path = require('path');
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.watch(path.join(__dirname, 'views'));

const connectLivereload = require("connect-livereload");

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const port = 8000;

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(connectLivereload());

app.use(express.static('public'));

const env = process.env.NODE_ENV;

app.get('/', function (req, res) {

  let services = [
    {
      img: "/imgs/plant.png",
      title: "Massages"
    },
    {
      img: "/imgs/towel.png",
      title: "Manicure"
    },
    {
      img: "/imgs/sauna.png",
      title: "Body Treatment"
    }
  ]

  let images = [
    {
      img: "/imgs/1.jpg",
      text: "Manicure"
    },
    {
      img: "/imgs/3.jpg",
      text: "Body Treatment"
    },
    {
      img: "/imgs/3.jpg",
      text: "Massage"
    },
    {
      img: "/imgs/1.jpg",
      text: "Manicure"
    },
  ]

  res.render("pages/index", {
    services,
    images
  })

});

console.log(port);
module.exports = app.listen(port);
// 6:55 - 14:19 May, 5
/*
<section class="section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="text-center title">
          <h4>About US</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit non augue libero sed nec suspendisse sapien sed. Volutpat lorem libero nisl.</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <img src="/imgs/2.jpeg" alt="">
      </div>
      <div class="col-lg-1">
      </div>
      <div class="col-lg-6 services position-relative">
        <% for(var i=0; i < services.length;  i++) { %>
          <div class="p-4 ps-0 d-flex align-items-center">
            <div class="ring" class="border rounded-circle p-4">
              <img src="<%= services[i].img %>" alt="" width="60" height="60">
            </div>
            <div class="ms-5">
              <h4 class="title"><%= services[i].title %></h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil numquam aspernatur</p>
            </div>
          </div>
        <% } %>
        <div class="position-absolute bottom-0">
          <a href="#" class="btn btn-primary mt-5">Make a Reservation</a>
        </div>
      </div>
    </div>
  </div>
</section>
*/
