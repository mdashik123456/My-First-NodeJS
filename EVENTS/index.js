const event = require("./school");

setTimeout(() => {
    event.emit("bellRing", {
        period: "class time",
        message: "is over"
    });
}, 2000);