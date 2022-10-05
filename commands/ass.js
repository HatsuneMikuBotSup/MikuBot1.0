module.exports = {
    name: "ass",
    description: "will send ass jpgs",
    execute(message, args, client) {
        var imagesJpg = 12;
        var imagesGif = 0;
        var shoutouts = ["Zzz..","What are u looking at Onii-chan?","OwO","I hope noone sees me naked","Eeeek!","O////O"];
        message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/ass/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
    }
}
