/*eslint-disable*/
import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        strict: true,
        state: {
            blogs : [
                {
                    id: 1,
                    title : 'My Post Title 1',
                    lead : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                    url : '/blog/1',
                    date : 'Posted on January 1, 2017',
                    img : "/img/750x300.png",
                    description: 'pisicing elit. Reiciendis dlfgk',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                },
                {
                    id: 2,
                    title : 'My Post Title 2',
                    lead : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                    url : '/blog/2',
                    date : 'Posted on January 1, 2017',
                    img : "/img/750x300.png",
                    description: 'pisicing elit. Reiciendis ',
                    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?"
                },
                {
                    id: 3,
                    title : 'My Post Title 3',
                    lead : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                    url : '/blog/3',
                    date : 'Posted on January 1, 2017',
                    img : "/img/transformers2.jpg",
                    description: 'Lorem ipsum dolor sit amet',
                    body: "e plan fails when the Autobots destroy Megatron’s space bridge, leaving him in a comatose state. He eventually recovers, taking back his leadership from the treacherous Starscream, who later defects to follow his own path. In the series finale, the Autobots and Megatron join forces to prevent the rise of Unicron. Optimus uses the Matrix of Leadership to knock Unicron back into hibernation, but in doing so, loses his memories and regain his pre-war personality of Orion Pax.<br/>In season two, Megatron manipulates the amnesiac Optimus into decrypting the Iacon archives, which contain coordinates to Cybertronian r"
                },
                {
                    id: 4,
                    title : 'Transformers My Title',
                    lead : 'is murdered by Starscream, and his corpse used by Megatron to test the necromantic Dark Energon, to create an undead army from Cybertron’s fallen. The plan fails when the Autobots destroy Megatron’s space bridge, leaving him in a comatose state. He eventually recovers, taking back his leadership from the treacherous Starscream, who later defects to follow his own path. In the series finale, the Autobots and Megatro',
                    url : '/blog/4',
                    date : 'Posted on January 1, 2017',
                    description: 'Transformers Prime is set in the “Aligned” continuity, taking place after the video games and books – Transformers: Exodus, Transformers: War for Cybertron, Transformers: Fall of Cybertron, Transformers: Exiles, and Transformers: Retribution.',
                    img : "/img/transformers.jpg",
                    body: "In the season one pilot, “Darkness Rising”, Cliffjumper is murdered by Starscream, and his corpse used by Megatron to test the necromantic Dark Energon, to create an undead army from Cybertron’s fallen. The plan fails when the Autobots destroy Megatron’s space bridge, leaving him in a comatose state. He eventually recovers, taking back his leadership from the treacherous Starscream, who later defects to follow his own path. In the series finale, the Autobots and Megatron join forces to prevent the rise of Unicron. Optimus uses the Matrix of Leadership to knock Unicron back into hibernation, but in doing so, loses his memories and regain his pre-war personality of Orion Pax.<br/>In season two, Megatron manipulates the amnesiac Optimus into decrypting the Iacon archives, which contain coordinates to Cybertronian relics hidden on Earth. Jack travels to Cybertron, obtaining Optimus’ memories from Vector Sigma, and restores them to Optimus. The season mostly is based around the hunt for the Iacon relics. Starscream obtains the four Omega Keys, which power the Omega Lock, a device which can reboot the dead Cybertron, and gives them to Megatron in return for clemency. Optimus destroys the Omega Lock, but not before Megatron uses its powers to create a new base, Darkmount, on Earth. The Decepticons then target and destroy the Autobot base, unaware the team escaped before hand using their ground bridge.<br/>The third season, under the subtitle of “Beast Hunters”, begins with the reunification of Team Prime, introducing Ultra Magnus as Optimus’ second-in-command. The Autobots successfully destroy Darkmount. Shockwave arrives on Earth, planning to create an army of Predacons, starting with Predaking. But when Predaking shows intelligence, Megatron has Shockwave terminate his project, pinning its destruction upon the Autobots. Soundwave later kidnaps Ratchet, Megatron forcing him to rebuild the Omega Lock using synthetic Energon. Ratchet informs Predaking of the truth, and he defects. During the battle for the Omega Lock, Bumblebee is shot by Megatron, falling into the synthetic Energon. However, he survives, gaining a healed voice, and runs Megatron through with the Star Saber, killing the Decepticon leader. The Autobots use the Omega Lock to restore Cybertron and head home victorious.<br/>The series ends with the television movie, Predacons Rising, where the Autobots and remaining Decepticons rebuild Cybertron. Unicron reanimates Megatron, possessing his body, planning to kill Cybertron, actually his brother Primus, using Dark Energon-infected Predacon corpses. Optimus and Wheeljack retrieve the AllSpark from deep space and return to aid their comrades. Optimus uses the AllSpark’s container to imprison Unicron’s spark. Megatron, disillusioned with the prospect of tyranny, disbands the Decepticons and leaves Cybertron. Optimus reveals he fused the Matrix of Leadership and the AllSpark into one, and must fuse with Primus’ core to restore life to Cybertron. Bidding farewell to his comrades, Optimus Prime flies into Cybertron’s core to begin a new era for the Transformers."
                },
            ]
        },
        getters: {
            GetBlog : state => {
                return 'skdfk'
            }
        } 
    })
}

export default createStore
