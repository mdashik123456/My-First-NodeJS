const Event = require("events");
const event = new Event();

event.on("bellRing", ({ period, message }) => {
    console.log(`Bell is ringing because ${period} ${message}`);
});

module.exports = event;

