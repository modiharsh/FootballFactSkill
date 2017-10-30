/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.261f2133-df56-494f-9f23-8ae1df43a397';  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48-hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Football evolved out of mob football, a game played between whole villages, with the goal being to get the ball into the center of the other village. Any means could be used to move the ball, as long as it did not lead to manslaughter or murder.',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most -56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
            ],
            SKILL_NAME: 'Football Facts',
            //GET_FACT_MESSAGE: "Here's your fact: ",
            GET_FACT_MESSAGE: "Did you know that? : ",
            HELP_MESSAGE: 'You can say tell me a football fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-IN': {
        translation: {
            FACTS: [
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48-hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Football evolved out of mob football, a game played between whole villages, with the goal being to get the ball into the center of the other village. Any means could be used to move the ball, as long as it did not lead to manslaughter or murder.',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most -56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
            ],
            SKILL_NAME: 'Indian Football Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a football fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48-hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Football evolved out of mob football, a game played between whole villages, with the goal being to get the ball into the center of the other village. Any means could be used to move the ball, as long as it did not lead to manslaughter or murder.',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most -56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
            ],
            SKILL_NAME: 'American soccer Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48-hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Football evolved out of mob football, a game played between whole villages, with the goal being to get the ball into the center of the other village. Any means could be used to move the ball, as long as it did not lead to manslaughter or murder.',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most -56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
            ],
            SKILL_NAME: 'British Football Facts',
        },
    },
    'de': {
        translation: {
            FACTS: [
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48-hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Football evolved out of mob football, a game played between whole villages, with the goal being to get the ball into the center of the other village. Any means could be used to move the ball, as long as it did not lead to manslaughter or murder.',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most -56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random football fact from the Football Facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};