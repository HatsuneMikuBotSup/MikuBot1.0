module.exports = {
    name: "copycat",
    description: "Copy's importent messages like OwO or UwU and removes duplicates",
    execute(message, args, prefix, command) {
        if (command[0] + command[1] + command[2] + command[3] + command[4] != "play " || command[0] + command[1] + command[2] + command[3] + command[4] + command[5] + command[6] != "lyrics ") {
            if (!["play", "disconnect", "np", "aliases", "skip", "seek", "soundcloud", "remove", "loopqueue", "search", "stats", "loop", "donate",
                "shard","join","lyrics","info","resume","settings","move","forward","skipto","clear","replay","clean","pause","removedupes","volume",
                "rewind", "playtop", "playskip", "invite", "shuffle", "queue", "leavecleanup", "d help", "d bump", "d page", "d invite [channel]",
                "nigger", "fs"].includes(message.content.slice(prefix.length).toLowerCase())) {
                if (!["owo", "uwu"].includes(message.content.slice(prefix.length).toLowerCase())) {
                    message.channel.send(message.content + " has no feature yet!");
                }
                else {
                    message.channel.send(message.content.slice(prefix.length));
                }
            }
        }
    }
}
