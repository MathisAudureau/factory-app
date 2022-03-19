import { Command, BaseCommand } from 'ioc:factory/Core/Command'
import {CommandInteraction, MessageActionRow, MessageEmbed, MessageSelectMenu} from 'discord.js'
import {ActionRow, Embed, SelectMenu} from "App/utils/types";
import {ColorsPanel} from "App/utils/enums";

@Command({
  scope: 'GUILDS',
  options: {
    name: 'test-selectmenu',
    description: 'Commande permettant de tester les selects-menus.',
    options: []
  }
})
export default class MenuCommand extends BaseCommand {
  public async run (interaction: CommandInteraction): Promise<void> {
    const embed: Embed = new MessageEmbed()
        .setTitle(`Test des menus`)
        .setDescription(`Veuillez cliquer sur le menu déroulant.`)
        .setColor(ColorsPanel.INVISIBLE)
        .setFooter({text: "Embed de test"})

    const menu: SelectMenu = new MessageSelectMenu()
        .setPlaceholder("Cliquez ici")
        .setCustomId("select-menu")
        .setOptions(
            {
              value: "value1",
              description: "Saluer le bot",
              label: "Bonjour",
              emoji: "✌"
            },
            {
              value: "value2",
              description: "Dire au revoir au bot",
              label: "Aurevoir",
              emoji: "👋"
            }
        )

    const row: ActionRow = new MessageActionRow()
        .addComponents(menu)

    await interaction.reply({
      embeds: [embed],
      components: [row],
      ephemeral: true
    })
  }
}