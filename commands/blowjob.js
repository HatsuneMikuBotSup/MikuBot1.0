module.exports = {
    name: "blowjob",
    description: "will give u a blowjob",
    execute(message, args, client) {
        var imagesJpg = 8;
        var imagesGif = 5;
        var shoutouts = ["Succi Succ", "its soo big o.o", "slurp", "I hope u cum in my mouth :see_no_evil:", "Mhmhm does it feel good?", "Mhmhm how does it feel?", "its so massive", "It nearly just fits :eyes:"];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/blowjob/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/blowjob/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
        client.user.setActivity("with the dicc of " + message.author.username);
    }
}

