// FluencyIQ — Question Content Pool
// Loaded as a plain global script BEFORE the Babel app script in index.html.
// Each level: { id, title, description, guide: {intro, rules[]}, questions[] }
// The app samples ROUND_SIZE questions from each level.questions pool per playthrough,
// so growing a pool beyond ROUND_SIZE increases replay variety without any app-code changes.

const CONTENT_MODULES = [
            {
                id: "prep_time",
                title: "1. Prepositions of Time",
                description: "Master 'In, On, At' for dates and times.",
                guide: {
                    intro: "Prepositions of time tell us when something happens.",
                    rules: [
                        { title: "AT", content: "Used for precise times (9:00 AM, noon) and holiday periods." },
                        { title: "ON", content: "Used for days (on Monday) and specific dates (on May 5th)." },
                        { title: "IN", content: "Used for months, years, decades, and long periods." }
                    ]
                },
                questions: [
                    { question: "The meeting starts ___ 9:00 AM.", options: [{ text: "at", correct: true, why: "We use 'at' for specific clock times." }, { text: "on", correct: false, why: "'On' is for days, not hours." }, { text: "in", correct: false, why: "'In' is for long periods." }] },
                    { question: "I was born ___ 1995.", options: [{ text: "in", correct: true, why: "Use 'in' for years and months." }, { text: "on", correct: false, why: "'On' is for specific days, not just the year." }] },
                    { question: "We usually go out ___ Fridays.", options: [{ text: "on", correct: true, why: "We always use 'on' for days of the week." }, { text: "in", correct: false, why: "'In' is for months, years, or long periods, not days." }, { text: "at", correct: false, why: "'At' is for clock times, not days." }] },
                    { question: "The store closes ___ midnight.", options: [{ text: "at", correct: true, why: "'Midnight' is treated as a specific clock time, so we use 'at'." }, { text: "on", correct: false, why: "'On' is for days and dates, not clock times." }, { text: "in", correct: false, why: "'In' is for months, years, or long periods." }] }
                ]
            },
            {
                id: "future_forms",
                title: "2. Future Predictions",
                description: "Will vs. Going to.",
                guide: {
                    intro: "Choosing between 'Will' and 'Going to' depends on evidence.",
                    rules: [
                        { title: "GOING TO", content: "Used for plans made before speaking, or present evidence." },
                        { title: "WILL", content: "Used for spontaneous decisions or general opinions." },
                        { title: "PRESENT SIMPLE", content: "Used for fixed schedules and timetables (The train leaves at 6)." }
                    ]
                },
                questions: [
                    { question: "Look! That car ___ hit the wall!", options: [{ text: "is going to", correct: true, why: "Use 'going to' when there is physical evidence happening now." }, { text: "will", correct: false, why: "'Will' is for general predictions." }] },
                    { question: "I think it ___ rain tomorrow.", options: [{ text: "will", correct: true, why: "'Will' is used for personal opinions or general predictions about the future." }, { text: "is going to", correct: false, why: "'Going to' needs present evidence, not just an opinion." }, { text: "rains", correct: false, why: "Present Simple is for facts and habits, not future predictions." }] },
                    { question: "The train ___ at 6 PM tonight.", options: [{ text: "leaves", correct: true, why: "Present Simple is used for fixed schedules and timetables." }, { text: "will leave", correct: false, why: "Fixed timetables use Present Simple, not 'will'." }, { text: "is leaving", correct: false, why: "This suggests a personal arrangement, not a timetable." }] },
                    { question: "I promise I ___ help you move next weekend.", options: [{ text: "will", correct: true, why: "'Will' is used for promises made at the moment of speaking." }, { text: "am going to", correct: false, why: "'Going to' implies a plan made earlier, not a promise made now." }, { text: "help", correct: false, why: "Present Simple doesn't fit a spontaneous promise about the future." }] }
                ]
            },
            {
                id: "articles",
                title: "3. Articles: A, An, The",
                description: "Mastering definite and indefinite articles.",
                guide: {
                    intro: "Articles define nouns as specific or unspecific.",
                    rules: [
                        { title: "AN", content: "Use before vowel sounds (An apple, An honest man)." },
                        { title: "A", content: "Use before consonant sounds (A car)." },
                        { title: "THE", content: "Use for something specific, already mentioned, or unique (The sun, the best student)." }
                    ]
                },
                questions: [
                    { question: "He is ___ honest man.", options: [{ text: "an", correct: true, why: "'Honest' starts with a vowel sound (O), so we use 'an'." }, { text: "a", correct: false, why: "Even though it starts with 'H', the sound is a vowel." }] },
                    { question: "I saw ___ elephant at the zoo.", options: [{ text: "an", correct: true, why: "'Elephant' starts with a vowel sound, so we use 'an'." }, { text: "a", correct: false, why: "'A' is used before consonant sounds." }, { text: "the", correct: false, why: "'The' would only fit if a specific, already-mentioned elephant were meant." }] },
                    { question: "She is ___ best student in the class.", options: [{ text: "the", correct: true, why: "Superlatives like 'best' always take 'the', since they refer to something unique." }, { text: "a", correct: false, why: "'A' doesn't fit with a superlative referring to one unique person." }, { text: "an", correct: false, why: "'Best' starts with a consonant sound, so 'an' wouldn't apply anyway." }] },
                    { question: "I need ___ umbrella; it's raining.", options: [{ text: "an", correct: true, why: "'Umbrella' starts with a vowel sound, so we use 'an'." }, { text: "a", correct: false, why: "'A' is used before consonant sounds." }, { text: "the", correct: false, why: "'The' would only fit for a specific umbrella already known to both speakers." }] }
                ]
            },
            {
                id: "subjunctive",
                title: "4. The Subjunctive Mood",
                description: "Formal demands and suggestions.",
                guide: {
                    intro: "Used after verbs of demand like 'insist' or 'suggest'.",
                    rules: [
                        { title: "THE BASE FORM", content: "Use the base verb (no -s, no -ed) after 'that' in this structure." },
                        { title: "COMMON VERBS", content: "Suggest, recommend, insist, demand, propose, and adjectives like 'essential' or 'vital'." }
                    ]
                },
                questions: [
                    { question: "The boss insists that she ___ the report now.", options: [{ text: "finish", correct: true, why: "In the subjunctive, we use the base form 'finish', not 'finishes'." }, { text: "finishes", correct: false, why: "Incorrect. The subjunctive mood ignores the third-person 's'." }] },
                    { question: "The manager insists that John ___ at the meeting.", options: [{ text: "be", correct: true, why: "After 'insist', the subjunctive requires the base form 'be'." }, { text: "is", correct: false, why: "The subjunctive requires the base form, not the conjugated 'is'." }, { text: "was", correct: false, why: "The subjunctive doesn't change for tense in this structure." }] },
                    { question: "It is vital that she ___ the report today.", options: [{ text: "submit", correct: true, why: "We drop the '-s' in the subjunctive, even for 'she'." }, { text: "submits", correct: false, why: "The base form is used regardless of the subject." }] },
                    { question: "The committee recommended that he ___ the offer immediately.", options: [{ text: "accept", correct: true, why: "After 'recommend', the subjunctive requires the base form." }, { text: "accepts", correct: false, why: "The base form is used regardless of the subject." }, { text: "accepted", correct: false, why: "The subjunctive doesn't change for tense in this structure." }] }
                ]
            },
            {
                id: "reported_speech",
                title: "5. Reported Speech",
                description: "Telling someone what another person said.",
                guide: {
                    intro: "Reported speech tells someone what another person said, without quoting their exact words. Pronouns, tenses, and time expressions usually shift 'one step back' into the past.",
                    rules: [
                        { title: "THE SHIFT", content: "Present Simple -> Past Simple, Present Continuous -> Past Continuous, Present Perfect -> Past Perfect." },
                        { title: "MODALS", content: "will -> would, can -> could." },
                        { title: "EXAMPLE", content: "Direct: 'I am tired,' she said. -> Reported: She said (that) she was tired." }
                    ]
                },
                questions: [
                    { question: "'I am happy,' she said. -> She said that she ___ happy.", options: [{ text: "was", correct: true, why: "Present Simple shifts back to Past Simple in reported speech." }, { text: "is", correct: false, why: "Incorrect. The tense must shift back one step." }, { text: "am", correct: false, why: "Incorrect. This also has the wrong pronoun for reported speech." }] },
                    { question: "'I will call you tomorrow,' he said. -> He said he ___ me the next day.", options: [{ text: "would call", correct: true, why: "'Will' shifts back to 'would' in reported speech." }, { text: "will call", correct: false, why: "Incorrect. Modals shift back one step in reported speech." }, { text: "calls", correct: false, why: "Incorrect. This drops the future meaning entirely." }] },
                    { question: "'I have finished the project,' she said. -> She said she ___ the project.", options: [{ text: "had finished", correct: true, why: "Present Perfect shifts back to Past Perfect." }, { text: "has finished", correct: false, why: "Incorrect. The tense must shift back one step." }, { text: "finished", correct: false, why: "Incorrect. This loses the perfect aspect of the original." }] },
                    { question: "'I can swim,' the boy said. -> The boy said he ___ swim.", options: [{ text: "could", correct: true, why: "'Can' shifts back to 'could' in reported speech." }, { text: "can", correct: false, why: "Incorrect. Modals shift back one step in reported speech." }, { text: "would", correct: false, why: "Incorrect. This is the wrong modal for ability." }] }
                ]
            },
            {
                id: "passive_voice",
                title: "6. Passive Voice",
                description: "Focusing on the action, not the doer.",
                guide: {
                    intro: "The passive voice is used when the focus is on the action or the receiver of the action rather than who performs it. It is formed with a form of 'be' plus the past participle.",
                    rules: [
                        { title: "FORMULA", content: "Object + BE (in correct tense) + Past Participle (+ by + agent)." },
                        { title: "WHEN TO USE", content: "Use the passive when the doer is unknown, unimportant, or obvious from context." },
                        { title: "EXAMPLE", content: "Active: 'They built the house in 1990.' -> Passive: 'The house was built in 1990.'" }
                    ]
                },
                questions: [
                    { question: "The report ___ by the manager yesterday.", options: [{ text: "was written", correct: true, why: "Past Simple passive: was/were + past participle." }, { text: "wrote", correct: false, why: "Incorrect. This is the active form." }, { text: "is written", correct: false, why: "Incorrect. The event happened in the past, so the tense is wrong." }] },
                    { question: "This bridge ___ over 100 years ago.", options: [{ text: "was built", correct: true, why: "Past Simple passive matches the past time marker 'ago'." }, { text: "built", correct: false, why: "Incorrect. This is missing the auxiliary 'be'." }, { text: "has built", correct: false, why: "Incorrect. This is an active construction and the wrong tense." }] },
                    { question: "The letters ___ every morning by the mail carrier.", options: [{ text: "are delivered", correct: true, why: "Present Simple passive: am/is/are + past participle." }, { text: "deliver", correct: false, why: "Incorrect. This is the active form." }, { text: "delivered", correct: false, why: "Incorrect. This is missing the auxiliary 'be'." }] },
                    { question: "The results ___ next week.", options: [{ text: "will be announced", correct: true, why: "Future passive: will be + past participle." }, { text: "will announce", correct: false, why: "Incorrect. This is the active form." }, { text: "are announced", correct: false, why: "Incorrect. The tense should be future, not present." }] }
                ]
            },
            {
                id: "relative_clauses",
                title: "7. Relative Clauses",
                description: "Adding extra information with who, which, and whose.",
                guide: {
                    intro: "Relative clauses give extra information about a noun using words like who, which, that, and whose.",
                    rules: [
                        { title: "PEOPLE VS THINGS", content: "'Who' refers to people, 'which' refers to things, 'that' can refer to either in defining clauses." },
                        { title: "WHOSE", content: "'Whose' shows possession, for both people and things." },
                        { title: "NON-DEFINING", content: "In clauses set off by commas (extra, non-essential info), 'that' cannot be used." }
                    ]
                },
                questions: [
                    { question: "The woman ___ lives next door is a doctor.", options: [{ text: "who", correct: true, why: "'Who' introduces a clause about a person." }, { text: "which", correct: false, why: "Incorrect. 'Which' refers to things, not people." }, { text: "whose", correct: false, why: "Incorrect. 'Whose' shows possession, which isn't needed here." }] },
                    { question: "My neighbor, ___ car was stolen last week, is still upset.", options: [{ text: "whose", correct: true, why: "'Whose' shows that the car belongs to the neighbor." }, { text: "who", correct: false, why: "Incorrect. 'Who' doesn't show possession." }, { text: "which", correct: false, why: "Incorrect. 'Which' refers to things, not people." }] },
                    { question: "Paris, ___ is the capital of France, attracts millions of tourists.", options: [{ text: "which", correct: true, why: "'Which' refers to a place in this non-defining clause." }, { text: "that", correct: false, why: "Incorrect. 'That' cannot be used in a non-defining clause set off by commas." }, { text: "who", correct: false, why: "Incorrect. 'Who' refers to people, not places." }] },
                    { question: "The employees ___ worked overtime received a bonus.", options: [{ text: "who", correct: true, why: "'Who' is the subject relative pronoun for people." }, { text: "which", correct: false, why: "Incorrect. 'Which' refers to things, not people." }, { text: "whom", correct: false, why: "Incorrect. 'Whom' is for the object position, but here it's the subject of the clause." }] }
                ]
            },
            {
                id: "modal_deduction",
                title: "8. Modal Verbs of Deduction",
                description: "Guessing how certain you are, based on evidence.",
                guide: {
                    intro: "We use modal verbs to show how certain we are about something, based on evidence.",
                    rules: [
                        { title: "PRESENT", content: "must (sure it's true), might/could (possible), can't (sure it's not true)." },
                        { title: "PAST", content: "must have / might have / can't have + past participle." },
                        { title: "EXAMPLE", content: "The lights are off. They must not be home." }
                    ]
                },
                questions: [
                    { question: "She's not answering her phone. She ___ be busy.", options: [{ text: "must", correct: true, why: "'Must' shows strong certainty based on evidence." }, { text: "can", correct: false, why: "Incorrect. 'Can' isn't used for this kind of deduction." }, { text: "should", correct: false, why: "Incorrect. 'Should' expresses expectation/obligation, not deduction." }] },
                    { question: "He ___ have missed the train; he's not here yet.", options: [{ text: "must", correct: true, why: "'Must have' expresses a confident deduction about the past." }, { text: "can", correct: false, why: "Incorrect. 'Can have' isn't used this way." }, { text: "will", correct: false, why: "Incorrect. This doesn't express past deduction." }] },
                    { question: "That ___ be John — he's on vacation this week.", options: [{ text: "can't", correct: true, why: "'Can't' expresses certainty that something isn't true." }, { text: "mustn't", correct: false, why: "Incorrect. 'Mustn't' expresses prohibition, not deduction." }, { text: "shouldn't", correct: false, why: "Incorrect. This expresses a different meaning entirely." }] },
                    { question: "They ___ have left already; their car is still in the driveway.", options: [{ text: "can't", correct: true, why: "'Can't have' expresses certainty that a past action didn't happen." }, { text: "mustn't", correct: false, why: "Incorrect. 'Mustn't have' isn't used for this kind of deduction." }, { text: "don't", correct: false, why: "Incorrect. This is the wrong form for past deduction." }] }
                ]
            },
            {
                id: "conditionals_23",
                title: "9. Second and Third Conditional",
                description: "Unreal situations in the present/future and the past.",
                guide: {
                    intro: "The Second Conditional talks about unreal or unlikely situations in the present or future. The Third Conditional talks about unreal situations in the past that cannot be changed.",
                    rules: [
                        { title: "SECOND", content: "If + Past Simple, ... would + base verb. (If I won the lottery, I would travel.)" },
                        { title: "THIRD", content: "If + Past Perfect, ... would have + past participle. (If I had studied, I would have passed.)" }
                    ]
                },
                questions: [
                    { question: "If I ___ more money, I would buy a new car.", options: [{ text: "had", correct: true, why: "Second Conditional uses Past Simple in the if-clause." }, { text: "have", correct: false, why: "Incorrect. This is Present Simple, which doesn't fit the hypothetical meaning." }, { text: "would have", correct: false, why: "Incorrect. This structure isn't used in the if-clause." }] },
                    { question: "If she ___ harder, she would have passed the exam.", options: [{ text: "had studied", correct: true, why: "Third Conditional uses Past Perfect in the if-clause, matching 'would have passed'." }, { text: "studied", correct: false, why: "Incorrect. This is Second Conditional form, which doesn't match 'would have passed'." }, { text: "would study", correct: false, why: "Incorrect. This structure isn't used in the if-clause." }] },
                    { question: "If it rained, I ___ stay inside.", options: [{ text: "would", correct: true, why: "Second Conditional result clause uses 'would' + base verb." }, { text: "will", correct: false, why: "Incorrect. 'Will' is used for real, likely conditions, not hypothetical ones." }, { text: "would have", correct: false, why: "Incorrect. This is Third Conditional form for a past result." }] },
                    { question: "If we had left earlier, we ___ the flight.", options: [{ text: "would have caught", correct: true, why: "Third Conditional result clause uses 'would have' + past participle." }, { text: "would catch", correct: false, why: "Incorrect. This is Second Conditional form, for a present/future result." }, { text: "caught", correct: false, why: "Incorrect. This is missing the modal 'would have'." }] }
                ]
            },
            {
                id: "gerunds_infinitives",
                title: "10. Gerunds vs Infinitives",
                description: "Choosing between the -ing form and to + verb.",
                guide: {
                    intro: "Some verbs are followed by the gerund (-ing form), others by the to-infinitive, and the choice can even change the meaning.",
                    rules: [
                        { title: "GERUND VERBS", content: "enjoy, avoid, suggest, finish, mind + -ing." },
                        { title: "INFINITIVE VERBS", content: "want, decide, hope, plan, promise + to-infinitive." },
                        { title: "CHANGE OF MEANING", content: "'stop to do' (pause in order to do something) vs 'stop doing' (quit an activity)." }
                    ]
                },
                questions: [
                    { question: "She enjoys ___ novels in her free time.", options: [{ text: "reading", correct: true, why: "'Enjoy' is always followed by the gerund." }, { text: "to read", correct: false, why: "Incorrect. 'Enjoy' doesn't take a to-infinitive." }, { text: "read", correct: false, why: "Incorrect. This is the base form, which doesn't fit after 'enjoy'." }] },
                    { question: "We decided ___ the trip until next month.", options: [{ text: "to postpone", correct: true, why: "'Decide' is followed by the to-infinitive." }, { text: "postponing", correct: false, why: "Incorrect. 'Decide' doesn't take a gerund." }, { text: "postpone", correct: false, why: "Incorrect. This is missing the required 'to'." }] },
                    { question: "He stopped ___ a coffee on his way to work.", options: [{ text: "to buy", correct: true, why: "'Stopped to buy' means he paused his journey in order to buy coffee." }, { text: "buying", correct: false, why: "Incorrect. 'Stopped buying' would mean he quit the habit of buying coffee." }, { text: "buy", correct: false, why: "Incorrect. This is missing the required 'to'." }] },
                    { question: "I can't avoid ___ him at the meeting.", options: [{ text: "seeing", correct: true, why: "'Avoid' is always followed by the gerund." }, { text: "to see", correct: false, why: "Incorrect. 'Avoid' doesn't take a to-infinitive." }, { text: "see", correct: false, why: "Incorrect. This is the base form, which doesn't fit after 'avoid'." }] }
                ]
            },
            {
                id: "phrasal_verbs",
                title: "11. Separable Phrasal Verbs",
                description: "Where to put the object with two-part verbs.",
                guide: {
                    intro: "Separable phrasal verbs let the object go either between the verb and particle or after the particle — but pronouns must always go in the middle.",
                    rules: [
                        { title: "NOUN OBJECT", content: "Can go before or after the particle: 'turn off the light' or 'turn the light off'." },
                        { title: "PRONOUN OBJECT", content: "Must go between the verb and particle: 'turn it off', NOT 'turn off it'." }
                    ]
                },
                questions: [
                    { question: "Could you turn ___? It's too loud.", options: [{ text: "it down", correct: true, why: "Pronoun objects must go between the verb and the particle." }, { text: "down it", correct: false, why: "Incorrect. A pronoun can never follow the particle." }] },
                    { question: "I can't find my glasses. Have you picked ___?", options: [{ text: "them up", correct: true, why: "Pronoun objects must go between the verb and the particle." }, { text: "up them", correct: false, why: "Incorrect. A pronoun can never follow the particle." }] },
                    { question: "The meeting was cancelled, so they called ___.", options: [{ text: "it off", correct: true, why: "Pronoun objects must go between the verb and the particle." }, { text: "off it", correct: false, why: "Incorrect. A pronoun can never follow the particle." }] },
                    { question: "Put ___ before you go to bed.", options: [{ text: "them away", correct: true, why: "Pronoun objects must go between the verb and the particle." }, { text: "away them", correct: false, why: "Incorrect. A pronoun can never follow the particle." }] }
                ]
            },
            {
                id: "comparatives",
                title: "12. Comparatives and Superlatives",
                description: "Comparing two things, or three or more.",
                guide: {
                    intro: "We use comparatives to compare two things and superlatives to compare three or more, with different rules for short and long adjectives.",
                    rules: [
                        { title: "SHORT ADJECTIVES", content: "Add -er/-est (tall -> taller -> tallest)." },
                        { title: "LONG ADJECTIVES", content: "Use more/most (expensive -> more expensive -> most expensive)." },
                        { title: "IRREGULAR", content: "good -> better -> best, bad -> worse -> worst." }
                    ]
                },
                questions: [
                    { question: "This laptop is ___ than that one.", options: [{ text: "more expensive", correct: true, why: "Long adjectives use 'more' to form the comparative." }, { text: "expensiver", correct: false, why: "Incorrect. This is not a standard English word." }, { text: "most expensive", correct: false, why: "Incorrect. This is the superlative, but only two things are being compared." }] },
                    { question: "She is ___ student in the class.", options: [{ text: "the best", correct: true, why: "'Good' has the irregular superlative 'best'." }, { text: "the goodest", correct: false, why: "Incorrect. This is not a standard English word." }, { text: "better", correct: false, why: "Incorrect. This is the comparative, but more than two students are being compared." }] },
                    { question: "Today is ___ than yesterday.", options: [{ text: "colder", correct: true, why: "Short adjectives take -er to form the comparative." }, { text: "more cold", correct: false, why: "Incorrect. Short adjectives don't use 'more'." }, { text: "coldest", correct: false, why: "Incorrect. This is the superlative, but only two days are being compared." }] },
                    { question: "This is ___ movie I've ever seen.", options: [{ text: "the worst", correct: true, why: "'Bad' has the irregular superlative 'worst'." }, { text: "the baddest", correct: false, why: "Incorrect. This is not standard English." }, { text: "worse", correct: false, why: "Incorrect. This is the comparative, but the sentence compares against all movies ever seen." }] }
                ]
            },
            {
                id: "quantifiers",
                title: "13. Quantifiers",
                description: "Few, little, many, and much.",
                guide: {
                    intro: "Quantifiers like few, little, many, and much show amount, but the right choice depends on whether the noun is countable or uncountable.",
                    rules: [
                        { title: "COUNTABLE", content: "many, few, a few + plural countable nouns (many books, a few chairs)." },
                        { title: "UNCOUNTABLE", content: "much, little, a little + uncountable nouns (much water, a little sugar)." },
                        { title: "POSITIVE VS NEGATIVE", content: "'a few/a little' = some (positive); 'few/little' = almost none (negative)." }
                    ]
                },
                questions: [
                    { question: "There is ___ milk left in the fridge.", options: [{ text: "little", correct: true, why: "'Milk' is uncountable, so it takes 'little'." }, { text: "few", correct: false, why: "Incorrect. 'Few' is used with countable nouns." }, { text: "many", correct: false, why: "Incorrect. 'Many' is used with countable nouns." }] },
                    { question: "I have ___ friends in this city, so I often feel lonely.", options: [{ text: "few", correct: true, why: "'Friends' is countable, and 'few' gives the negative meaning of 'almost none'." }, { text: "little", correct: false, why: "Incorrect. 'Little' is used with uncountable nouns." }, { text: "a little", correct: false, why: "Incorrect. 'A little' is used with uncountable nouns." }] },
                    { question: "We don't need ___ time to finish this; it's a small task.", options: [{ text: "much", correct: true, why: "'Time' is uncountable, so it takes 'much'." }, { text: "many", correct: false, why: "Incorrect. 'Many' is used with countable nouns." }, { text: "few", correct: false, why: "Incorrect. 'Few' is used with countable nouns." }] },
                    { question: "She has ___ savings, so she can afford a small trip.", options: [{ text: "a little", correct: true, why: "'Savings' is treated as uncountable here, and 'a little' gives the positive meaning of 'some'." }, { text: "a few", correct: false, why: "Incorrect. 'A few' is used with countable nouns." }, { text: "much", correct: false, why: "Incorrect. 'Much' doesn't fit this positive statement naturally." }] }
                ]
            },
            {
                id: "question_tags",
                title: "14. Question Tags",
                description: "Short questions added to check information.",
                guide: {
                    intro: "Question tags are short questions added to the end of a sentence, usually to check information. If the main clause is positive, the tag is negative, and vice versa.",
                    rules: [
                        { title: "POSITIVE -> NEGATIVE TAG", content: "You are coming, aren't you?" },
                        { title: "NEGATIVE -> POSITIVE TAG", content: "She isn't here, is she?" },
                        { title: "MATCH THE AUXILIARY", content: "The tag must reuse the same auxiliary or modal verb as the main clause." }
                    ]
                },
                questions: [
                    { question: "You like coffee, ___?", options: [{ text: "don't you", correct: true, why: "A positive statement takes a negative tag, using 'do' since there's no other auxiliary." }, { text: "do you", correct: false, why: "Incorrect. The tag should be negative here." }, { text: "aren't you", correct: false, why: "Incorrect. The tag must match the auxiliary of the main verb, which is 'do'." }] },
                    { question: "She can't swim, ___?", options: [{ text: "can she", correct: true, why: "A negative statement takes a positive tag." }, { text: "can't she", correct: false, why: "Incorrect. The tag should be positive here." }, { text: "does she", correct: false, why: "Incorrect. The tag must reuse the modal 'can'." }] },
                    { question: "They have finished the project, ___?", options: [{ text: "haven't they", correct: true, why: "A positive statement takes a negative tag, matching the auxiliary 'have'." }, { text: "don't they", correct: false, why: "Incorrect. The tag must reuse the auxiliary 'have', not 'do'." }, { text: "have they", correct: false, why: "Incorrect. The tag should be negative here." }] },
                    { question: "He isn't coming to the party, ___?", options: [{ text: "is he", correct: true, why: "A negative statement takes a positive tag." }, { text: "isn't he", correct: false, why: "Incorrect. The tag should be positive here." }, { text: "doesn't he", correct: false, why: "Incorrect. The tag must reuse the auxiliary 'is'." }] }
                ]
            },
            {
                id: "used_to_would",
                title: "15. Used To vs Would for Past Habits",
                description: "Describing repeated past actions and past states.",
                guide: {
                    intro: "Both 'used to' and 'would' describe repeated past actions, but only 'used to' can describe past states, like feelings or facts.",
                    rules: [
                        { title: "ACTIONS", content: "Both work: 'I used to play/would play football every weekend.'" },
                        { title: "STATES", content: "Only 'used to' works for states: 'I used to live in Paris' (NOT 'I would live in Paris')." },
                        { title: "QUESTIONS", content: "'Used to' forms questions with 'did': 'Did you use to smoke?'" }
                    ]
                },
                questions: [
                    { question: "When I was a child, I ___ swim in the lake every summer.", options: [{ text: "would", correct: true, why: "'Would' works here because swimming is a repeated action, not a state." }, { text: "used to be", correct: false, why: "Incorrect. This construction doesn't fit the sentence." }, { text: "am used to", correct: false, why: "Incorrect. 'Am used to' means 'accustomed to', a different meaning entirely." }] },
                    { question: "She ___ have long hair, but she cut it short last year.", options: [{ text: "used to", correct: true, why: "'Used to' is required for describing a past state, like having long hair." }, { text: "would", correct: false, why: "Incorrect. 'Would' cannot be used to describe a past state." }, { text: "uses to", correct: false, why: "Incorrect. This is not a standard grammatical form." }] },
                    { question: "___ you use to play the piano when you were young?", options: [{ text: "Did", correct: true, why: "Questions with 'used to' are formed with 'did' + subject + use to." }, { text: "Used", correct: false, why: "Incorrect. This isn't the standard question form." }, { text: "Would", correct: false, why: "Incorrect. 'Would you play' asks about willingness, not past habits, in this structure." }] },
                    { question: "We ___ go camping every August, but we stopped after I started university.", options: [{ text: "would", correct: true, why: "'Would' works here because camping is a repeated action, not a state." }, { text: "used to being", correct: false, why: "Incorrect. This construction doesn't fit the sentence." }, { text: "was used to", correct: false, why: "Incorrect. This means 'accustomed to', a different meaning entirely." }] }
                ]
            },
            {
                id: "mixed_conditionals",
                title: "16. Mixed Conditionals",
                description: "Combining a past condition with a present result, or the reverse.",
                guide: {
                    intro: "Mixed conditionals combine a condition from one time period with a result in another — usually a past condition with a present result, or a present condition with a past result.",
                    rules: [
                        { title: "PAST CONDITION, PRESENT RESULT", content: "If + Past Perfect, ... would + base verb. (If I had studied medicine, I would be a doctor now.)" },
                        { title: "PRESENT CONDITION, PAST RESULT", content: "If + Past Simple, ... would have + past participle. (If I weren't afraid of flying, I would have visited you last year.)" }
                    ]
                },
                questions: [
                    { question: "If I had taken that job, I ___ happier now.", options: [{ text: "would be", correct: true, why: "A past condition (had taken) leads to a present result, using 'would' + base verb." }, { text: "would have been", correct: false, why: "Incorrect. This form is for a past result, but the result here is in the present ('now')." }, { text: "will be", correct: false, why: "Incorrect. This structure isn't used with an unreal past condition." }] },
                    { question: "If she weren't so busy, she ___ to the party last night.", options: [{ text: "would have gone", correct: true, why: "A present condition (weren't busy) leads to a past result, using 'would have' + past participle." }, { text: "would go", correct: false, why: "Incorrect. This form is for a present result, but the result here is in the past ('last night')." }, { text: "had gone", correct: false, why: "Incorrect. This structure isn't used in the result clause." }] },
                    { question: "If he had listened to the doctor, he ___ healthier today.", options: [{ text: "would be", correct: true, why: "A past condition (had listened) leads to a present result, using 'would' + base verb." }, { text: "would have been", correct: false, why: "Incorrect. This form is for a past result, but the result here is in the present ('today')." }, { text: "will be", correct: false, why: "Incorrect. This structure isn't used with an unreal past condition." }] },
                    { question: "If I didn't have a fear of heights, I ___ that mountain climbing trip last summer.", options: [{ text: "would have taken", correct: true, why: "A present condition (didn't have a fear) leads to a past result, using 'would have' + past participle." }, { text: "would take", correct: false, why: "Incorrect. This form is for a present result, but the result here is in the past ('last summer')." }, { text: "had taken", correct: false, why: "Incorrect. This structure isn't used in the result clause." }] }
                ]
            },
            {
                id: "cleft_sentences",
                title: "17. Cleft Sentences",
                description: "Splitting a sentence to add emphasis with It and What.",
                guide: {
                    intro: "Cleft sentences split a single idea into two clauses to add emphasis to a specific part of the sentence, often starting with 'It' or 'What'.",
                    rules: [
                        { title: "IT-CLEFT", content: "It + be + emphasized element + that/who clause. (It was Sarah who called you.)" },
                        { title: "WHAT-CLEFT", content: "What + subject + verb + be + emphasized element. (What I need is a vacation.)" }
                    ]
                },
                questions: [
                    { question: "___ was Tom who broke the window, not his brother.", options: [{ text: "It", correct: true, why: "The it-cleft structure emphasizes 'Tom' as the one responsible." }, { text: "What", correct: false, why: "Incorrect. A what-cleft doesn't fit this structure." }, { text: "There", correct: false, why: "Incorrect. This isn't a cleft sentence starter." }] },
                    { question: "___ I really want is a quiet weekend at home.", options: [{ text: "What", correct: true, why: "The what-cleft emphasizes 'a quiet weekend at home' as the desired thing." }, { text: "It", correct: false, why: "Incorrect. An it-cleft would need a different structure here." }, { text: "That", correct: false, why: "Incorrect. This isn't a standard cleft sentence starter." }] },
                    { question: "It was the manager ___ approved the budget, not the accountant.", options: [{ text: "who", correct: true, why: "'Who' refers to the person being emphasized in the it-cleft." }, { text: "which", correct: false, why: "Incorrect. 'Which' refers to things, not people." }, { text: "what", correct: false, why: "Incorrect. 'What' isn't used in this position." }] },
                    { question: "___ she loves most about her job is the flexibility.", options: [{ text: "What", correct: true, why: "The what-cleft emphasizes 'the flexibility' as what she loves most." }, { text: "It", correct: false, why: "Incorrect. An it-cleft would need a different structure here." }, { text: "Which", correct: false, why: "Incorrect. This isn't a cleft sentence starter." }] }
                ]
            }
        ];
