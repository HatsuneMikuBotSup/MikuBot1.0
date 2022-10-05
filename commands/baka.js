module.exports = {
    name: "baka",
    description: "If ur baka",
    execute(message, args, client) {
        var images = 1;
        var shoutouts = ["BAKA","baka","Anatawa baka desu","idiot"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/baka/" + Math.floor(Math.random() * images) + ".jpg"] });
    }
}



