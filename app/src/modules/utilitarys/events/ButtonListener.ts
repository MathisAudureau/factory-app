import { Event, BaseEvent } from 'ioc:factory/Core/Event'
import {Interaction, MessageEmbed} from 'discord.js'
import {Embed} from "App/utils/types";
import {ColorsPanel} from "App/utils/enums";

@Event('interactionCreate')
export default class ButtonListener extends BaseEvent {
  public async run (interaction: Interaction): Promise<void> {
    if(!interaction.isButton()) return
    if(interaction.customId === 'linkButton') {
      let replyEmbed: Embed = new MessageEmbed()
          .setColor(ColorsPanel.INVISIBLE)
          .setTitle(`Félécitation!`)
          .setDescription(`Vous venez d'appuyez sur le bouton !`)
          .setFooter({text: "Test réussi!"})

      await interaction.reply({
        embeds: [replyEmbed],
        ephemeral: true
      })
    }
  }
}