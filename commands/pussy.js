module.exports = {
    name: "pussy",
    description: "will send pussy jpgs",
    execute(message, args, client) {
        var imagesJpg = 15;
        var imagesGif = 0;
        var shoutouts = ["Hehe :>", "Don't look at me like that Onii-Chan!", "quit staring!", "uhmmmm >.<", "Do u like my pussy?", "Please use me :heart:", "Can I see ur pp now? >///<", "pls touch it O/./O", "Put it inside allready! :heart:","I think I lost my credit card inside it, can u check?","Can we have...s-sex?","Im giving u consent uwu","you can do everything u wan with me >w<","please be gentle >.<"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/pussy/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
