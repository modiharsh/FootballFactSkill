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

var savedFact = 0;

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Soccer developed in London’s famed Newgate Prison in the early 1800s. Prisoners who had their hands cut off for crimes of theft came up with a sport that used only the feet. The game spread from there.',
                'There are 32 panels on a traditional soccer ball, one for each country in Europe.',
                'Brazilian soccer legend Pelé was born Edson Arantes do Nascimento. He took the nickname Pelé, a Brazilian Portuguese word meaning “six feet,” due to being born with six toes on each foot.',
                'The first American professional soccer league, the USSA, played from 1919 to 1921 and paid its players 35 cents for every goal scored.',
                'The original World Cup was made of papier-mâché, but it had to be replaced after the heavy rains of the 1950 World Cup.',
                'Queen Elizabeth II was a natural athlete and, dressed in disguise, was a frequent participant in pickup up soccer matches near Buckingham Palace in her teenage years in the late 1930s and early 40s.',
                'A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game.',
                'English soccer star David Beckham is a distant cousin of Texas congressman Louie Gohmert.',
                'The national sport of Canada is soccer.',
                'Pelé played one preseason game as a punter with the New Orleans Saints in 1981 before deciding to leave camp. His only punt traveled 54 yards.',
                'Soccer was illegal in Mississippi until 1991.',
                'Haitian-American player Jozy Altidore donated more than $168,000 for relief efforts in Haiti through personal contributions and fundraising. He was only 20 when the earthquake happened in 2010.',
                'Clint Dempsey has a tattoo of his home state of Texas on his left arm, with a star signifying his hometown of Nacogdoches',
                'Mark Hughes once played for Wales and Bayern Munich in the same day',
                'Zlatan Ibrahimovic has played for six clubs that have won the Champions League, but he has never actually won the trophy himself',
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48 hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player  134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most - 56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
                'Arsenal went the entire 2003/2004 season unbeaten, the only team to do so in the EPL.',
                'Manchester City and Blackburn Rovers are the only two teams that have both won the EPL and been relegated from it',
                'Petr Cech has 138 clean sheets for Chelsea in Premier League. Most by a goalie for a single club',
                'Robbie Fowler scored the fastest hat-trick in Premier League. Against Arsenal in 4 minutes 23 seconds',
                'Derby County won just once in the 2007-08 season. Fewest by any team in a single season',
                'Chelsea had a +71 goal difference in the 2009-10 season. Highest till date, in a  single season',
                'Birmingham City were the first English club to play in Europe',
                'Dundee united have a 100% record against Barcelona. The Scottish side have won all four games against the Catalan giants.',
                'Mathieu Flamini has never lost a Premier League game at the Emirates.',
                
            ],
            SKILL_NAME: 'Football Facts',
            //GET_FACT_MESSAGE: "Here's your fact: ",
            GET_FACT_MESSAGE: "Did you know that? : ",
            HELP_MESSAGE: 'You can say tell me a football fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye! If you liked the skill, feel free to kick some feedback',
        },
    },
    'en-IN': {
        translation: {
            FACTS: [
                'Soccer developed in London’s famed Newgate Prison in the early 1800s. Prisoners who had their hands cut off for crimes of theft came up with a sport that used only the feet. The game spread from there.',
                'There are 32 panels on a traditional soccer ball, one for each country in Europe.',
                'Brazilian soccer legend Pelé was born Edson Arantes do Nascimento. He took the nickname Pelé, a Brazilian Portuguese word meaning “six feet,” due to being born with six toes on each foot.',
                'The first American professional soccer league, the USSA, played from 1919 to 1921 and paid its players 35 cents for every goal scored.',
                'The original World Cup was made of papier-mâché, but it had to be replaced after the heavy rains of the 1950 World Cup.',
                'Queen Elizabeth II was a natural athlete and, dressed in disguise, was a frequent participant in pickup up soccer matches near Buckingham Palace in her teenage years in the late 1930s and early 40s.',
                'A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game.',
                'English soccer star David Beckham is a distant cousin of Texas congressman Louie Gohmert.',
                'The national sport of Canada is soccer.',
                'Pelé played one preseason game as a punter with the New Orleans Saints in 1981 before deciding to leave camp. His only punt traveled 54 yards.',
                'Soccer was illegal in Mississippi until 1991.',
                'Haitian-American player Jozy Altidore donated more than $168,000 for relief efforts in Haiti through personal contributions and fundraising. He was only 20 when the earthquake happened in 2010.',
                'Clint Dempsey has a tattoo of his home state of Texas on his left arm, with a star signifying his hometown of Nacogdoches',
                'Mark Hughes once played for Wales and Bayern Munich in the same day',
                'Zlatan Ibrahimovic has played for six clubs that have won the Champions League, but he has never actually won the trophy himself',
                'The Korean soccer player, Ahn Jung-hwan, who scored and knocked Italy out of the 2002 World Cup, immediately lost his contract with his Italian club Perugia for ruining Italian soccer.',
                'German soccer player Mesut Ozil donated his €300,000 World Cup victory bonus to pay for surgeries for 23 children in Brazil.',
                'The word “soccer” was first used in England before the USA adopted it.',
                'The fastest red card in football/soccer history was 2 seconds. Lee Todd was sent off for foul language after he exclaimed “f**k me that was loud” after the starting whistle.',
                'The North Korean World Cup soccer fans are actually hand-picked by the North Korean government. The fans are also made up of Chinese volunteers since North Koreans are not allowed to travel.',
                'A Greek soccer player, Giorgos Katidis, was given a life ban for giving the Nazi salute after his winning goal during a league game.',
                'Hitler grew to hate soccer because it couldn’t be fixed to ensure German victory over non-Germans.',
                'In 1967, the two factions involved in the Nigerian Civil War agreed to a 48 hour ceasefire so they could watch Pelé play an exhibition game in Lagos.',
                'Greenland can’t join FIFA because not enough grass grows there for a soccer field.',
                'In 1998, during a soccer match in Congo, a lightning bolt struck the pitch and killed all 11 members of one team. The other team was left unscathed.',
                'In 1985, English soccer hooligans killed 39 people and caused 600 injuries, causing all English teams to be banned from international competition for 5 years.',
                'FC Barcelona, one of the biggest soccer teams in the world, has a “reverse sponsorship” agreement with UNICEF. The team wears the organization’s logo on their shirt while donating 1.5 million euros ($1.8 million) each year.',
                'Norway is the only national football team in the world that has never lost to Brazil. (2 wins and 2 draws).',
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most - 56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
                'Arsenal went the entire 2003/2004 season unbeaten, the only team to do so in the EPL.',
                'Manchester City and Blackburn Rovers are the only two teams that have both won the EPL and been relegated from it',
                'Petr Cech has 138 clean sheets for Chelsea in Premier League. Most by a goalie for a single club',
                'Robbie Fowler scored the fastest hat-trick in Premier League. Against Arsenal in 4 minutes 23 seconds',
                'Derby County won just once in the 2007-08 season. Fewest by any team in a single season',
                'Chelsea had a +71 goal difference in the 2009-10 season. Highest till date, in a  single season',
                'Birmingham City were the first English club to play in Europe',
                'Dundee united have a 100% record against Barcelona. The Scottish side have won all four games against the Catalan giants.',
                'Mathieu Flamini has never lost a Premier League game at the Emirates.',
                
            ],
            SKILL_NAME: 'Football Facts',
            GET_FACT_MESSAGE: "Did you know that? ",
            HELP_MESSAGE: 'You can say tell me a football fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye! If you liked the skill, feel free to kick some feedback',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Soccer developed in London’s famed Newgate Prison in the early 1800s. Prisoners who had their hands cut off for crimes of theft came up with a sport that used only the feet. The game spread from there.',
                'There are 32 panels on a traditional soccer ball, one for each country in Europe.',
                'Brazilian soccer legend Pelé was born Edson Arantes do Nascimento. He took the nickname Pelé, a Brazilian Portuguese word meaning “six feet,” due to being born with six toes on each foot.',
                'The first American professional soccer league, the USSA, played from 1919 to 1921 and paid its players 35-cents for every goal scored.',
                'The original World Cup was made of papier-mâché, but it had to be replaced after the heavy rains of the 1950 World Cup.',
                'Queen Elizabeth II was a natural athlete and, dressed in disguise, was a frequent participant in pickup up soccer matches near Buckingham Palace in her teenage years in the late 1930s and early 40s.',
                'A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game.',
                'English soccer star David Beckham is a distant cousin of Texas congressman Louie Gohmert.',
                'The national sport of Canada is soccer.',
                'Pelé played one preseason game as a punter with the New Orleans Saints in 1981 before deciding to leave camp. His only punt traveled 54 yards.',
                'Soccer was illegal in Mississippi until 1991.',
                'Haitian-American player Jozy Altidore donated more than $168,000 for relief efforts in Haiti through personal contributions and fundraising. He was only 20 when the earthquake happened in 2010.',
                'Clint Dempsey has a tattoo of his home state of Texas on his left arm, with a star signifying his hometown of Nacogdoches',
                'Mark Hughes once played for Wales and Bayern Munich in the same day',
                'Zlatan Ibrahimovic has played for six clubs that have won the Champions League, but he has never actually won the trophy himself',
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
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most - 56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
                'Arsenal went the entire 2003/2004 season unbeaten, the only team to do so in the EPL.',
                'Manchester City and Blackburn Rovers are the only two teams that have both won the EPL and been relegated from it',
                'Petr Cech has 138 clean sheets for Chelsea in Premier League. Most by a goalie for a single club',
                'Robbie Fowler scored the fastest hat-trick in Premier League. Against Arsenal in 4 minutes 23 seconds',
                'Derby County won just once in the 2007-08 season. Fewest by any team in a single season',
                'Chelsea had a +71 goal difference in the 2009-10 season. Highest till date, in a  single season',
                'Birmingham City were the first English club to play in Europe',
                'Dundee united have a 100% record against Barcelona. The Scottish side have won all four games against the Catalan giants.',
                'Mathieu Flamini has never lost a Premier League game at the Emirates.',
                
            ],
            SKILL_NAME: 'Soccer Facts',
        },
    },
    'en-CA': {
        translation: {
            FACTS: [
                'Soccer developed in London’s famed Newgate Prison in the early 1800s. Prisoners who had their hands cut off for crimes of theft came up with a sport that used only the feet. The game spread from there.',
                'There are 32 panels on a traditional soccer ball, one for each country in Europe.',
                'Brazilian soccer legend Pelé was born Edson Arantes do Nascimento. He took the nickname Pelé, a Brazilian Portuguese word meaning “six feet,” due to being born with six toes on each foot.',
                'The first American professional soccer league, the USSA, played from 1919 to 1921 and paid its players 35-cents for every goal scored.',
                'The original World Cup was made of papier-mâché, but it had to be replaced after the heavy rains of the 1950 World Cup.',
                'Queen Elizabeth II was a natural athlete and, dressed in disguise, was a frequent participant in pickup up soccer matches near Buckingham Palace in her teenage years in the late 1930s and early 40s.',
                'A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game.',
                'English soccer star David Beckham is a distant cousin of Texas congressman Louie Gohmert.',
                'The national sport of Canada is soccer.',
                'Pelé played one preseason game as a punter with the New Orleans Saints in 1981 before deciding to leave camp. His only punt traveled 54 yards.',
                'Soccer was illegal in Mississippi until 1991.',
                'Haitian-American player Jozy Altidore donated more than $168,000 for relief efforts in Haiti through personal contributions and fundraising. He was only 20 when the earthquake happened in 2010.',
                'Clint Dempsey has a tattoo of his home state of Texas on his left arm, with a star signifying his hometown of Nacogdoches',
                'Mark Hughes once played for Wales and Bayern Munich in the same day',
                'Zlatan Ibrahimovic has played for six clubs that have won the Champions League, but he has never actually won the trophy himself',
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
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most - 56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
                'Arsenal went the entire 2003/2004 season unbeaten, the only team to do so in the EPL.',
                'Manchester City and Blackburn Rovers are the only two teams that have both won the EPL and been relegated from it',
                'Petr Cech has 138 clean sheets for Chelsea in Premier League. Most by a goalie for a single club',
                'Robbie Fowler scored the fastest hat-trick in Premier League. Against Arsenal in 4 minutes 23 seconds',
                'Derby County won just once in the 2007-08 season. Fewest by any team in a single season',
                'Chelsea had a +71 goal difference in the 2009-10 season. Highest till date, in a  single season',
                'Birmingham City were the first English club to play in Europe',
                'Dundee united have a 100% record against Barcelona. The Scottish side have won all four games against the Catalan giants.',
                'Mathieu Flamini has never lost a Premier League game at the Emirates.',
                
            ],
            SKILL_NAME: 'Soccer Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'Soccer developed in London’s famed Newgate Prison in the early 1800s. Prisoners who had their hands cut off for crimes of theft came up with a sport that used only the feet. The game spread from there.',
                'There are 32 panels on a traditional soccer ball, one for each country in Europe.',
                'Brazilian soccer legend Pelé was born Edson Arantes do Nascimento. He took the nickname Pelé, a Brazilian Portuguese word meaning “six feet,” due to being born with six toes on each foot.',
                'The first American professional soccer league, the USSA, played from 1919 to 1921 and paid its players 35-cents for every goal scored.',
                'The original World Cup was made of papier-mâché, but it had to be replaced after the heavy rains of the 1950 World Cup.',
                'Queen Elizabeth II was a natural athlete and, dressed in disguise, was a frequent participant in pickup up soccer matches near Buckingham Palace in her teenage years in the late 1930s and early 40s.',
                'A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game.',
                'English soccer star David Beckham is a distant cousin of Texas congressman Louie Gohmert.',
                'The national sport of Canada is soccer.',
                'Pelé played one preseason game as a punter with the New Orleans Saints in 1981 before deciding to leave camp. His only punt traveled 54 yards.',
                'Soccer was illegal in Mississippi until 1991.',
                'Haitian-American player Jozy Altidore donated more than $168,000 for relief efforts in Haiti through personal contributions and fundraising. He was only 20 when the earthquake happened in 2010.',
                'Clint Dempsey has a tattoo of his home state of Texas on his left arm, with a star signifying his hometown of Nacogdoches',
                'Mark Hughes once played for Wales and Bayern Munich in the same day',
                'Zlatan Ibrahimovic has played for six clubs that have won the Champions League, but he has never actually won the trophy himself',
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
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most - 56',
                '2015/16 was the first time West Ham had recorded a positive goal difference in a top-flight season since 1985/86',
                'Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper - 5',
                'Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku',
                'The only person born before 1960 to score a Premier League hat-trick is Gordan Strachan',
                'In 2014/15, George Boyd became the fourth player to play for two relegated teams in the same Premier League campaign (others were Mark Robins in 94/95, Steve Kabba in 06/07 and David Nugent in 09/10)',
                'In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days).',
                'Mario Balotelli\’s only assist in the Premier League was for Sergio Aguero\’s title-winning goal vs QPR',
                'Arsenal went the entire 2003/2004 season unbeaten, the only team to do so in the EPL.',
                'Manchester City and Blackburn Rovers are the only two teams that have both won the EPL and been relegated from it',
                'Petr Cech has 138 clean sheets for Chelsea in Premier League. Most by a goalie for a single club',
                'Robbie Fowler scored the fastest hat-trick in Premier League. Against Arsenal in 4 minutes 23 seconds',
                'Derby County won just once in the 2007-08 season. Fewest by any team in a single season',
                'Chelsea had a +71 goal difference in the 2009-10 season. Highest till date, in a  single season',
                'Birmingham City were the first English club to play in Europe',
                'Dundee united have a 100% record against Barcelona. The Scottish side have won all four games against the Catalan giants.',
                'Mathieu Flamini has never lost a Premier League game at the Emirates.',
                
            ],
            SKILL_NAME: 'Football Facts',
        },
    },
    'de': {
        translation: {
            FACTS: [
                'Soccer developed in London’s famed Newgate Prison in the early 1800s. Prisoners who had their hands cut off for crimes of theft came up with a sport that used only the feet. The game spread from there.',
                'There are 32 panels on a traditional soccer ball, one for each country in Europe.',
                'Brazilian soccer legend Pelé was born Edson Arantes do Nascimento. He took the nickname Pelé, a Brazilian Portuguese word meaning “six feet,” due to being born with six toes on each foot.',
                'The first American professional soccer league, the USSA, played from 1919 to 1921 and paid its players 35-cents for every goal scored.',
                'The original World Cup was made of papier-mâché, but it had to be replaced after the heavy rains of the 1950 World Cup.',
                'Queen Elizabeth II was a natural athlete and, dressed in disguise, was a frequent participant in pickup up soccer matches near Buckingham Palace in her teenage years in the late 1930s and early 40s.',
                'A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game.',
                'English soccer star David Beckham is a distant cousin of Texas congressman Louie Gohmert.',
                'The national sport of Canada is soccer.',
                'Pelé played one preseason game as a punter with the New Orleans Saints in 1981 before deciding to leave camp. His only punt traveled 54 yards.',
                'Soccer was illegal in Mississippi until 1991.',
                'Haitian-American player Jozy Altidore donated more than $168,000 for relief efforts in Haiti through personal contributions and fundraising. He was only 20 when the earthquake happened in 2010.',
                'Clint Dempsey has a tattoo of his home state of Texas on his left arm, with a star signifying his hometown of Nacogdoches',
                'Mark Hughes once played for Wales and Bayern Munich in the same day',
                'Zlatan Ibrahimovic has played for six clubs that have won the Champions League, but he has never actually won the trophy himself',
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
                'Harald Bohr (brother of Niels Bohr) was a mathematician and a football player. His popularity as a footballer was such that when he defended his doctoral thesis the audience was reported as having more football fans than mathematicians',
                'Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins.',
                'Ryan Giggs has been substituted more times than any other player - 134 times',
                'Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game.',
                'Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time',
                'Alan Shearer has missed the most Premier League penalties - 11 times. In fairness, he has also scored the most - 56',
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
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        savedFact = factArr[factIndex];
        
        const speechOutput = "Welcome to football facts!! " + this.t('GET_FACT_MESSAGE') + randomFact;
        //this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact).listen("Please say Repeat to listen to the fact again or say Next to listen to a new fact or stop to exit.");
        //this.response.speak(speechOutput).listen("Please say Repeat to listen to the fact again or say Next to listen to a new fact or stop to exit.");
        //this.emit(':responseReady');
        this.emit(':ask',speechOutput,'Please say Repeat to listen to the fact again or say Next to listen to a new fact or say stop to exit.');
    },
    'GetNewFactIntent': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        this.emit('GetFact');
    },
    'GetNextFactIntent': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        this.emit('GetFact');
    },
    'GetPrevFactIntent': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        const speechOutput = this.t('GET_FACT_MESSAGE') + savedFact;
        //this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), savedFact).listen("Please say Repeat to listen to the fact again or say Next to listen to a new fact or stop to exit.");
        //this.response.speak(speechOutput).listen("Please say Repeat to listen to the fact again or say Next to listen to a new fact or stop to exit.");
        //this.emit(':responseReady');
        this.emit(':ask',speechOutput,'Please say Repeat to listen to the fact again or say Next to listen to a new fact or say stop to exit.');
    },
    'GetFact': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        // Get a random football fact from the Football Facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        savedFact = factArr[factIndex];
        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        //this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact).listen("Please say Repeat to listen to the fact again or say Next to listen to a new fact or stop to exit.");
        //this.response.speak(speechOutput).listen("Please say Repeat to listen to the fact again or say Next to listen to a new fact or stop to exit.");
        //this.emit(':responseReady');
        this.emit(':ask',speechOutput,'Please say Repeat to listen to the fact again or say Next to listen to a new fact or say stop to exit.');
    },
    'AMAZON.HelpIntent': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        console.log("THIS.EVENT = " + JSON.stringify(this.event));
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function() {
        this.emit(':ask','I\'m sorry, but I\'m not sure what you asked me.','Say Repeat to listen to the fact again, say Next to listen to a new fact, say stop to exit.');
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
