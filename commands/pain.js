module.exports = {
    name: "pain",
    description: "If ur painfully hurt",
    execute(message, args, client) {
        var images = 5;
        var shoutouts = ["..it..h-hurts...", "life is pain", "this sucks", "Im not feeling well :(","*sigh*"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/pain/" + Math.floor(Math.random() * images) + ".gif"] });
        client.user.setActivity(message.author.username + " is not feeling well :(");
    }
}

