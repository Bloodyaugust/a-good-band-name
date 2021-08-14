"use strict";
const path = require('path');

const bandNames = require(path.resolve(__dirname, './src/band-names.json'));
const adjectives = [
  'Fucking',
  'Cool',
  'Annoying',
  'Tricky',
  'Universal',
  'Scientific',
  'Phallic',
  'Primal',
  'Iconic',
  'Bitch',
  'Mangy',
  'Archaic',
  'Sympathy',
  'Potential',
  'Passive',
  'Aggressive',
  'Red',
  'Forcefully',
  'Sexual',
  'Intentional',
  'Horny',
  'Eventual',
  'Some',
  'Semblance',
  'Aquatic',
  'Buffalo',
];
const nouns = [
  'Buzzards',
  'Bilgerats',
  'Scientists',
  'Giants',
  'Fuckers',
  'Sheep',
  'Horrors',
  'Eggplant',
  'Zipper',
  'Puddle',
  'Miki',
  'Face',
  'Pancakes',
  'Dragon',
  'Packets',
  'Bong',
  'Bullet',
  'Trashbag',
  'Jellyfish',
  'Gutter',
  'Cat',
  'Butter',
  'Taco',
  'Butt',
  'Stitches',
  'Scapegoat',
  'Lady',
  'Boner',
  'Grizzlies',
  'Flag',
  'Coincidence',
  'Mason',
  'Scars',
  'Dorks',
  'Consistency',
  'Summer',
  'Vagina',
  'Mormon',
  'Party',
  'Stars',
  'Darkness',
  'Buffalo',
];
const verbs = [
  'Fucking',
  'Gyrating',
  'Corkscrewing',
  'Contemplating',
  'Assaulting',
  'Flappin\'',
  'Fuck',
  'Smoosh',
  'Bloodwork',
  'Swallowing',
  'Fainting',
  'Rage',
  'Phucking',
  'Presentment',
  'Dance',
  'Timeout',
  'Buffalo',
];

module.exports.curated = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        name: bandNames[Math.floor(Math.random() * bandNames.length)]
      },
      null,
      2
    ),
  };
};

module.exports.random = async (event) => {
  const adjective = () => adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = () => nouns[Math.floor(Math.random() * nouns.length)];
  const verb = () => verbs[Math.floor(Math.random() * verbs.length)];

  const formats = [
    `${noun()} ${noun()}`,
    `${adjective()} ${noun()}`,
    `${adjective()} ${noun()} ${verb()}`,
    `${noun()} ${verb()}`,
  ];

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        name: formats[Math.floor(Math.random() * formats.length)]
      },
      null,
      2
    ),
  };
};
