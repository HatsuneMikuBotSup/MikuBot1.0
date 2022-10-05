module.exports = {
    name: "dailydosezerotwo",
    description: "will send nsfw zerotwo pics",
    execute(client) {
        var images = 53;
        var shoutouts = ["Zero Two is too thicc","Zero Two is hot","OwO","UwU","02","Im in love with Zero Two","KAWAII!","its illegal to be that cute >.<", "Zero Two is cute","would smash"];
        const channel = client.channels.cache.find(channel => channel.name === "«🍦»-soft-and-loving")

        for (var i = 0; i < 1; i++) {
            channel.send(shoutouts[Math.floor(Math.random() * shoutouts.length)], { files: ["./images/dailydosezerotwo/" + Math.floor(Math.random() * images) + ".jpg"] })
        }
        console.log("Zero Two Time!");
    }
}
