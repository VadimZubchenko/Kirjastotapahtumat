const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(express.static("./Webpage"));
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

function getConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nadym1971",
    database: "library_project",
  });
}

//Luo tapahtuma
app.post("/event_create", (req, res) => {
  console.log("Creating new event..");
  console.log("Name: " + req.body.eventname);
  console.log("Type: " + req.body.kirjasto);

  const event_kirjasto = req.body.kirjasto;
  const event_name = req.body.eventname;
  const event_date = req.body.eventdate;
  const event_time = req.body.eventtime;
  const event_location = req.body.location;

  const queryString =
    "INSERT INTO event (Event_Kirjasto, Event_Name, Event_Date, Event_Time, Event_Location) VALUES(?, ?, ?, ?, ?)";
  getConnection().query(
    queryString,
    [event_kirjasto, event_name, event_date, event_time, event_location],
    (err, results, fields) => {
      if (err) {
        console.log("Failed to insert new event" + err);
        res.sendStatus(500);
        return;
      }
      console.log("Inserted new event", results.insertedId);
      res.end();
    }
  );
});

//Hae uusimmat tulevat tapahtumat
app.get("/upcoming_events", (req, res) => {
  console.log("Fetching events: ");

  const queryString =
    "SELECT Event_Kirjasto, Event_Name, Event_Date, Event_Time, Event_Location FROM event WHERE Event_Date > CURRENT_DATE()" +
    Date.now();
  getConnection().query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err);
      res.sendStatus(500);
      return;
    }
    console.log("Fetched users");
    res.json(rows);
  });
});

//Hae kaikki tapahtumat
app.get("/events", (req, res) => {
  console.log("Fetching events: ");

  const queryString =
    "SELECT Event_Kirjasto, Event_Name, DATE_FORMAT(Event_Date, '%d.%m.%Y') AS Event_Date, Date_Format(Event_Time, '%H:%i') AS Event_Time, Event_Location FROM event";
  getConnection().query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err);
      res.sendStatus(500);
      return;
    }
    console.log("Fetched users");
    res.json(rows);
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
