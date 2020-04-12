/*eslint-disable */
import gender from "./gender";

 

const characters = [
  {
    id: "character1",
    teamId: "team0",
    genderId: "gender0",
    name: "Rogue",
    description: "",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/c/90/537bc196df2fb/standard_xlarge.jpg"
  },
  {
    id: "character2",
    teamId: "team0",
    genderId: "gender0",
    name: "Storm",
    description:
      "Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg"
  },
  {
    id: "character3",
    teamId: "team1",
    genderId: "gender1",
    name: "Captain America",
    description:
      "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become Americas one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg"
  },
  {
    id: "character4",
    teamId: "team2",
    genderId: "gender0",
    name: "Gamora",
    description:
      "The last of the Zen-Whoberi race, Gamora was adopted by the villainous Thanos and raised as an assassin. Gamora turned on her adopted father and now uses her abilities to help those who cannot help themselves. A veteran of the Annihilation Wave, Gamora now travels with the Guardians of the Galaxy and is known as the Most Dangerous Woman in the Universe.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/9/70/537bab57b84d4/standard_xlarge.jpg"
  },
  {
    id: "character5",
    teamId: "team2",
    genderId: "gender1",
    name: "Groot",
    description:
      "The tree-like creature known as Groot was captured by the Kree and put on a team with Star-Lord, Bug, Mantis, and Rocket Raccoon. A tree of few words, Groot formed a bond with the creature known as Rocket Raccoon. Forming the Guardians of the Galaxy, Groot and his best friend Rocket travel through space getting into trouble wherever they go.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/7/10/538caf1975d39/standard_xlarge.jpg"
  },
  {
    id: "character6",
    teamId: "team1",
    genderId: "gender1",
    name: "Iron Man",
    description:
      "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
  },
  {
    id: "character7",
    teamId: "team1",
    genderId: "gender0",
    name: "Wasp",
    description:
      "When Janet Van Dynes father died, she convinced her fathers associate Hank Pym to give her a supply of Pym particles; Pym also subjected her to a procedure which granted her the ability to, upon shrinking, grow wings and fire blasts of energy, which she called her wasps stings.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/5390dfd5ef165/standard_xlarge.jpg"
  },
  {
    id: "character8",
    teamId: "team0",
    genderId: "gender1",
    name: "Beast",
    description: "",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/40/537ba156b62e6/standard_xlarge.jpg"
  },
  {
    id: "character9",
    teamId: "team0",
    genderId: "gender1",
    name: "Cyclops",
    description: "",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad/standard_xlarge.jpg"
  },
  {
    id: "character10",
    teamId: "team0",
    genderId: "gender0",
    name: "Emma Frost",
    description: "",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/c/80/537ba9fe1c75a/standard_xlarge.jpg"
  },
  {
    id: "character11",
    teamId: "team2",
    genderId: "gender1",
    name: "Drax",
    description:
      "After being murdered along with his family by Thanos, Arthur Douglas was reborn as Drax the Destroyer, a superhuman warrior designed to defeat the mad Titan. Recruited by Star-Lord to join the Guardians of the Galaxy, Drax possesses superhuman strength, durability and a healing factor making him strong enough to face any threat he comes across.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/e/d0/526032deabbff/standard_xlarge.jpg"
  },
  {
    id: "character12",
    teamId: "team0",
    genderId: "gender1",
    name: "Wolverine",
    description:
      "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, hes a premiere member of both the X-Men and the Avengers.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg"
  },
  {
    id: "character13",
    teamId: "team2",
    genderId: "gender1",
    name: "Rocket Raccoon",
    description:
      "An expert marksman with a penchant for large weaponry, Rocket Raccoon is the last of his kind. After being captured by the Kree, Rocket teams up with Star-Lord and other adventurers to form the Guardians of the Galaxy. Together, they travel the galaxy and defend it from those who wish it harm.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/60/537bc14068e5d/standard_xlarge.jpg"
  },
  {
    id: "character14",
    teamId: "team2",
    genderId: "gender1",
    name: "Star-Lord",
    description:
      "Refusing to miss his opportunity, Peter Jason Quill stole a scoutship from Cape Canaveral, returned to Eve, and shot his way to the appointed spot, where his old rival Harrelson, NASAs choice to be Star-Lord, was awaiting selection, where Quill was transported away in his stead, and transformed into Star-Lord.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/9/a0/537bc55e8b1f5/standard_xlarge.jpg"
  },
  {
    id: "character15",
    teamId: "team1",
    genderId: "gender1",
    name: "Falcon",
    description:
      "With a mental connection to all birds and a suit that gives him wings to fly, The Falcon has been both the partner to Captain America and an Avenger himself. Whether as a super hero or in his secret identity of social worker Sam Wilson, The Falcon dedicates his life to standing up for others.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/5/b0/537baa6b25323/standard_xlarge.jpg"
  },
  {
    id: "character16",
    teamId: "team1",
    genderId: "gender1",
    name: "Hulk",
    description:
      "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"
  },
  {
    id: "character17",
    teamId: "team1",
    genderId: "gender1",
    name: "Thor",
    description:
      "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, hes quite smart and compassionate.  Hes self-assured, and he would never, ever stop fighting for a worthwhile cause.",
    imageUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
  }
]


const getCharacters = () => characters;
export default  { getCharacters };

