module.exports = {
  name: "help",
  description: "Lists all commands!",
    execute(message, args, embed) {
        embed.setTitle("All commands:");
        embed.setDescription(
            "Miku commands:\n" +
            "!anal                       - Anal with miku\n" +
            "!armpit                     - Kinky armpit\n" +
            "!ass                        - Mikus big ass\n" +
            "!bj                         - Blowjob from miku\n" +
            "!boobs                      - Boink!\n" +
            "!bunny                      - Miku with Bunny/Cat ears\n" +
            "!creampie                   - Cum inside Miku\n" +
            "!cute                       - Cute photos to lewd for !love\n" +
            "!feet                       - Kinky feet\n" +
            "!love                       - Get Mikus affection\n" +
            "!naked                      - See Miku without clothes\n" +
            "!oral                       - Blowjob from miku\n" +
            "!pussy                      - Thight\n" +
            "!sex                        - Sex with miku\n" +
            "!titjob                     - Cum on mikus tits\n" +
            "-------------------------------------------------------\n" +
            "Self commands:\n" +
            "!baka                       - If u are stupid\n" +
            "!blush                      - If u >///<\n" +
            "!horny                      - If u are desperatly horny\n" +
            "!pain                       - If u are in pain\n" +
            "-------------------------------------------------------\n" +
            "User commands:\n" +
            "!bdsm [text]                - Bdsm with [text]\n" +
            "!choke [text]               - Chokes [text]\n" +
            "!fuck [text]                - Fucks [text]\n" +
            "!kill [text]                - Kills [text]\n" +
            "!kiss [text]                - Kisses [text]\n" +
            "!lick [text]                - Licks [text]\n" +
            "!marry [text]               - Marries [text]\n" +
            "!rob [text]                 - Robs [text]\n" +
            "!spank [text]               - Spanks [text]\n" +
            "-------------------------------------------------------\n" +
            "Other commands:\n" +
            "!h [text]                   - Searches for Hentai on rule34\n" +
            "!help                       - Lists all commands\n" +
            "!ping                       - Checks if the bot is online\n" +
            "!spam [text]                - Spams [text]\n"
        );
        message.channel.send(embed);
    }
}
