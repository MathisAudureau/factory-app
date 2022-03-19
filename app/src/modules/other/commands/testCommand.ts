import { Command, BaseCommand } from 'ioc:factory/Core/Command'
import {Application} from "ioc:factory/Core";
import {CommandInteraction, MessageEmbed} from 'discord.js'
import {Embed} from "App/utils/types";
import {ColorsPanel} from "App/utils/enums";

@Command({
  scope: 'GUILDS',
  options: {
    name: 'test-command',
    description: 'Commande de test',
    options: []
  }
})

export default class TestCommand extends BaseCommand {
  public async run (interaction: CommandInteraction): Promise<void> {
    const client: any = Application.getClient()

    const replyEmbed: Embed = new MessageEmbed()
        .setTitle(`Embed de test`)
        .setColor(ColorsPanel.INVISIBLE)
        .setDescription(`Le bot est allumé depuis ${client.uptime}ms`)

    await interaction.reply({
      embeds: [replyEmbed],
      ephemeral: true
    })
  }
}