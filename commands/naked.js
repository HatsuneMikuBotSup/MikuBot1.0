module.exports = {
    name: "naked",
    description: "will send naked jpgs",
    execute(message, args, client) {
        var imagesJpg = 15;
        var imagesGif = 0;
        var shoutouts = ["Hehe :>", "Don't look at me like that Onii-Chan!", "quit staring!", "uhmmmm >.<", "Do u like my body?","Please use me :heart:","Can I see ur pp now? >///<","pls touch me O/./O","Do you think im sexy? :>"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/naked/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
