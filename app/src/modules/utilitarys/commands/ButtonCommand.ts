import { Command, BaseCommand } from 'ioc:factory/Core/Command'
import {CommandInteraction, MessageActionRow, MessageButton, MessageEmbed} from 'discord.js'
import {ActionRow, Button, Embed} from "App/utils/types";
import {ColorsPanel} from "App/utils/enums";

@Command({
  scope: 'GUILDS',
  options: {
    name: 'test-button',
    description: 'Commande permettant de tester les bouttons.',
    options: []
  }
})
export default class ButtonCommand extends BaseCommand {
  public async run (interaction: CommandInteraction): Promise<void> {
    const testEmbed: Embed = new MessageEmbed()
        .setTitle(`Test des boutons.`)
        .setDescription(`Veuillez cliquer sur le bouton.`)
        .setColor(ColorsPanel.INVISIBLE)
        .setFooter({text: "Embed de test"})

    const linkButton: Button = new MessageButton()
        .setLabel(`Cliquez ici.`)
        .setStyle("SECONDARY")
        .setCustomId(`linkButton`)
        .setEmoji(`🧾`)

    const row: ActionRow = new MessageActionRow()
        .addComponents(linkButton)

    await interaction.reply({
      embeds: [testEmbed],
      components: [row],
      ephemeral: true
    })
  }
}
