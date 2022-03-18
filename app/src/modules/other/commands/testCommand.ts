import { Command, BaseCommand } from 'ioc:factory/Core/Command'
import {CommandInteraction, MessageEmbed} from 'discord.js'
import { Embed } from "App/utils/types";
import { ColorsPanel } from "App/utils/enums";

@Command({
  scope: 'GUILDS',
  options: {
    name: 'test',
    description: 'Commande de test',
    options: []
  }
})
export default class TestCommand extends BaseCommand {
  public async run (interaction: CommandInteraction): Promise<void> {
    const replyEmbed: Embed = new MessageEmbed()
        .setTitle(`Embed de test`)
        .setColor(ColorsPanel.YES)
        .setDescription(`Ceci est un test`)

    await interaction.reply({
      embeds: [replyEmbed],
      ephemeral: true
    })
  }
}