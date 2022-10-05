module.exports = {
    name: "sex",
    description: "will send sex gifs",
    execute(message, args, client) {
        var imagesJpg = 13;
        var imagesGif = 6;
        var shoutouts = ["DEEPER!", "CUM INSIDE ME!", "Onii-chan?! >///<", "HARDER!", "DON'T CUM INSIDE ME!", "IM NOT A VIRGIN ANYMORE!:sob:", "THIS FEELS SOO GOOD!", "FUCK ME HARDER DADDY!", "FUCK ME HARDER ONII-CHAN!", "YOUR DICK IS TOO LARGE!:sob:", "I can feel your dick inside me","PLEASE BE GENTLE","USE ME!","OMG YES *moans*"];
        if (Math.random() >= imagesGif / imagesJpg) {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/sex/" + Math.floor(Math.random() * imagesJpg) + ".jpg"] });
        }
        else {
            message.channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/sex/" + Math.floor(Math.random() * imagesGif) + ".gif"] });
        }
        client.user.setActivity("sex with " + message.author.username);
    }
}
