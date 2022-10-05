module.exports = {
    name: "membercount",
    description: "counts all members",
    execute(message, args) {
        channelId = "794606199663230977";
        guild.channels.cache.get(channelId).setName("Members: ${guild.memberCount}");
    }
}
