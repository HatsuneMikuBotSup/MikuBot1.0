module.exports = {
    name: "die",
    description: "if u want to die",
    execute(message, args, client) {
        var images = 1;
        message.channel.send("comming soon", { files: ["./images/die/" + Math.floor(Math.random() * images) + ".gif"] });
        client.user.setActivity(message.author.username + " >///<");
    }
}
