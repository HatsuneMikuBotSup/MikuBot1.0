module.exports = {
  name: "ping",
  description: "this is a ping command!",
    execute(message, date) {
        message.channel.send("Offset is " + date.getHours() + date.getMinutes() + " minutes!");
        message.channel.send("pong!" );
    }
}
