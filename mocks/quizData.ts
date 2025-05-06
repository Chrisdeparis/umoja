export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: string;
  imageUrl?: string;
  translations?: Record<string, {
    question: string;
    options: string[];
    explanation: string;
  }>;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Which ancient African kingdom was known for its gold trade and reached its peak during the 14th century?",
    options: [
      "Kingdom of Kush",
      "Mali Empire",
      "Songhai Empire",
      "Kingdom of Aksum"
    ],
    correctAnswer: 1,
    explanation: "The Mali Empire was renowned for its wealth from gold trade. Under Mansa Musa, who ruled in the 14th century, the empire reached its peak. His pilgrimage to Mecca, during which he gave away so much gold that it caused inflation in Egypt, is legendary.",
    category: "empires",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1000",
    translations: {
      en: {
        question: "Which ancient African kingdom was known for its gold trade and reached its peak during the 14th century?",
        options: [
          "Kingdom of Kush",
          "Mali Empire",
          "Songhai Empire",
          "Kingdom of Aksum"
        ],
        explanation: "The Mali Empire was renowned for its wealth from gold trade. Under Mansa Musa, who ruled in the 14th century, the empire reached its peak. His pilgrimage to Mecca, during which he gave away so much gold that it caused inflation in Egypt, is legendary."
      },
      fr: {
        question: "Quel ancien royaume africain était connu pour son commerce d'or et a atteint son apogée au 14ème siècle?",
        options: [
          "Royaume de Koush",
          "Empire du Mali",
          "Empire Songhaï",
          "Royaume d'Aksoum"
        ],
        explanation: "L'Empire du Mali était réputé pour sa richesse issue du commerce de l'or. Sous Mansa Moussa, qui a régné au 14ème siècle, l'empire a atteint son apogée. Son pèlerinage à La Mecque, au cours duquel il a distribué tant d'or qu'il a provoqué une inflation en Égypte, est légendaire."
      },
      sw: {
        question: "Ufalme gani wa kale wa Afrika ulijulikana kwa biashara yake ya dhahabu na ulifikia kilele chake katika karne ya 14?",
        options: [
          "Ufalme wa Kush",
          "Milki ya Mali",
          "Milki ya Songhai",
          "Ufalme wa Aksum"
        ],
        explanation: "Milki ya Mali ilijulikana kwa utajiri wake kutokana na biashara ya dhahabu. Chini ya Mansa Musa, aliyetawala katika karne ya 14, milki ilifikia kilele chake. Safari yake ya hija kwenda Mecca, ambayo alitoa dhahabu nyingi kiasi cha kusababisha mfumuko wa bei Misri, ni ya kihistoria."
      }
    }
  },
  {
    id: "q2",
    question: "Who was the founder of the Zulu Kingdom?",
    options: [
      "Shaka Zulu",
      "Cetshwayo",
      "Dingane",
      "Mpande"
    ],
    correctAnswer: 0,
    explanation: "Shaka Zulu (born c. 1787) was the founder of the Zulu Kingdom. He is widely credited with transforming the Zulu tribe from a small clan into a formidable empire through military innovations and social reforms. His military strategies revolutionized African warfare.",
    category: "leaders",
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1580867532901-7e3707f178ce?q=80&w=1000",
    translations: {
      en: {
        question: "Who was the founder of the Zulu Kingdom?",
        options: [
          "Shaka Zulu",
          "Cetshwayo",
          "Dingane",
          "Mpande"
        ],
        explanation: "Shaka Zulu (born c. 1787) was the founder of the Zulu Kingdom. He is widely credited with transforming the Zulu tribe from a small clan into a formidable empire through military innovations and social reforms. His military strategies revolutionized African warfare."
      },
      fr: {
        question: "Qui était le fondateur du Royaume Zoulou?",
        options: [
          "Shaka Zulu",
          "Cetshwayo",
          "Dingane",
          "Mpande"
        ],
        explanation: "Shaka Zulu (né vers 1787) était le fondateur du Royaume Zoulou. On lui attribue largement la transformation de la tribu Zoulou d'un petit clan en un empire redoutable grâce à des innovations militaires et des réformes sociales. Ses stratégies militaires ont révolutionné la guerre africaine."
      },
      sw: {
        question: "Nani alikuwa mwanzilishi wa Ufalme wa Zulu?",
        options: [
          "Shaka Zulu",
          "Cetshwayo",
          "Dingane",
          "Mpande"
        ],
        explanation: "Shaka Zulu (alizaliwa mnamo 1787) alikuwa mwanzilishi wa Ufalme wa Zulu. Anatambuliwa kwa kubadilisha kabila la Zulu kutoka ukoo mdogo kuwa milki yenye nguvu kupitia uvumbuzi wa kijeshi na mageuzi ya kijamii. Mikakati yake ya kijeshi ilibadilisha vita vya Kiafrika."
      }
    }
  },
  {
    id: "q3",
    question: "Which African empire was the first to convert to Christianity as its official religion?",
    options: [
      "Kingdom of Kush",
      "Kingdom of Aksum",
      "Ghana Empire",
      "Great Zimbabwe"
    ],
    correctAnswer: 1,
    explanation: "The Kingdom of Aksum (or Axum) was the first major empire to convert to Christianity, doing so in the 4th century CE under King Ezana. Located in what is now Ethiopia and Eritrea, Aksum was a major trading power in the ancient world.",
    category: "religion",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1566956580800-c8c4b4605099?q=80&w=1000",
    translations: {
      en: {
        question: "Which African empire was the first to convert to Christianity as its official religion?",
        options: [
          "Kingdom of Kush",
          "Kingdom of Aksum",
          "Ghana Empire",
          "Great Zimbabwe"
        ],
        explanation: "The Kingdom of Aksum (or Axum) was the first major empire to convert to Christianity, doing so in the 4th century CE under King Ezana. Located in what is now Ethiopia and Eritrea, Aksum was a major trading power in the ancient world."
      },
      fr: {
        question: "Quel empire africain a été le premier à se convertir au christianisme comme religion officielle?",
        options: [
          "Royaume de Koush",
          "Royaume d'Aksoum",
          "Empire du Ghana",
          "Grand Zimbabwe"
        ],
        explanation: "Le Royaume d'Aksoum (ou Axum) a été le premier grand empire à se convertir au christianisme, au 4ème siècle après J.-C. sous le roi Ezana. Situé dans ce qui est maintenant l'Éthiopie et l'Érythrée, Aksoum était une puissance commerciale majeure dans le monde antique."
      },
      sw: {
        question: "Milki gani ya Afrika ilikuwa ya kwanza kubadilisha dini yake rasmi kuwa Ukristo?",
        options: [
          "Ufalme wa Kush",
          "Ufalme wa Aksum",
          "Milki ya Ghana",
          "Zimbabwe Kuu"
        ],
        explanation: "Ufalme wa Aksum (au Axum) ulikuwa milki kubwa ya kwanza kubadilisha dini kuwa Ukristo, ikifanya hivyo katika karne ya 4 CE chini ya Mfalme Ezana. Iliyoko katika eneo ambalo sasa ni Ethiopia na Eritrea, Aksum ilikuwa nguvu kubwa ya biashara katika ulimwengu wa kale."
      }
    }
  },
  {
    id: "q4",
    question: "Which African queen led resistance against Portuguese colonization in Angola during the 17th century?",
    options: [
      "Queen Nzinga",
      "Queen Amina",
      "Queen Ranavalona",
      "Queen Yaa Asantewaa"
    ],
    correctAnswer: 0,
    explanation: "Queen Nzinga (also known as Njinga Mbande) was the ruler of the Ndongo and Matamba Kingdoms in present-day Angola. She fought against Portuguese colonial rule and slave trade for decades, employing diplomatic strategies and military resistance. Her leadership and resistance lasted from the 1620s to her death in 1663.",
    category: "resistance",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=1000",
    translations: {
      en: {
        question: "Which African queen led resistance against Portuguese colonization in Angola during the 17th century?",
        options: [
          "Queen Nzinga",
          "Queen Amina",
          "Queen Ranavalona",
          "Queen Yaa Asantewaa"
        ],
        explanation: "Queen Nzinga (also known as Njinga Mbande) was the ruler of the Ndongo and Matamba Kingdoms in present-day Angola. She fought against Portuguese colonial rule and slave trade for decades, employing diplomatic strategies and military resistance. Her leadership and resistance lasted from the 1620s to her death in 1663."
      },
      fr: {
        question: "Quelle reine africaine a mené la résistance contre la colonisation portugaise en Angola au 17ème siècle?",
        options: [
          "Reine Nzinga",
          "Reine Amina",
          "Reine Ranavalona",
          "Reine Yaa Asantewaa"
        ],
        explanation: "La Reine Nzinga (également connue sous le nom de Njinga Mbande) était la souveraine des Royaumes de Ndongo et Matamba dans l'Angola actuel. Elle a lutté contre la domination coloniale portugaise et la traite des esclaves pendant des décennies, employant des stratégies diplomatiques et une résistance militaire. Son leadership et sa résistance ont duré des années 1620 jusqu'à sa mort en 1663."
      },
      sw: {
        question: "Malkia gani wa Afrika aliongoza upinzani dhidi ya ukoloni wa Kireno nchini Angola katika karne ya 17?",
        options: [
          "Malkia Nzinga",
          "Malkia Amina",
          "Malkia Ranavalona",
          "Malkia Yaa Asantewaa"
        ],
        explanation: "Malkia Nzinga (pia anajulikana kama Njinga Mbande) alikuwa mtawala wa Falme za Ndongo na Matamba katika Angola ya sasa. Alipigana dhidi ya utawala wa kikoloni wa Kireno na biashara ya watumwa kwa miongo kadhaa, akitumia mikakati ya kidiplomasia na upinzani wa kijeshi. Uongozi wake na upinzani ulidumu kutoka miaka ya 1620 hadi kifo chake mwaka 1663."
      }
    }
  },
  {
    id: "q5",
    question: "What was the name of the ancient city-state in present-day Sudan that was a center of trade and culture from around 1070 BCE to 350 CE?",
    options: [
      "Carthage",
      "Meroe",
      "Timbuktu",
      "Lalibela"
    ],
    correctAnswer: 1,
    explanation: "Meroe was the capital of the Kingdom of Kush for several centuries and was located along the Nile River in what is now Sudan. The city was a center of iron production and trade, with distinctive pyramids that still stand today. The Meroitic civilization developed its own writing system and had a complex political structure.",
    category: "empires",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1523365280197-f1783db9bbf2?q=80&w=1000",
    translations: {
      en: {
        question: "What was the name of the ancient city-state in present-day Sudan that was a center of trade and culture from around 1070 BCE to 350 CE?",
        options: [
          "Carthage",
          "Meroe",
          "Timbuktu",
          "Lalibela"
        ],
        explanation: "Meroe was the capital of the Kingdom of Kush for several centuries and was located along the Nile River in what is now Sudan. The city was a center of iron production and trade, with distinctive pyramids that still stand today. The Meroitic civilization developed its own writing system and had a complex political structure."
      },
      fr: {
        question: "Quel était le nom de la cité-État antique dans l'actuel Soudan qui était un centre de commerce et de culture d'environ 1070 av. J.-C. à 350 après J.-C.?",
        options: [
          "Carthage",
          "Méroé",
          "Tombouctou",
          "Lalibela"
        ],
        explanation: "Méroé était la capitale du Royaume de Koush pendant plusieurs siècles et était située le long du Nil dans ce qui est maintenant le Soudan. La ville était un centre de production de fer et de commerce, avec des pyramides distinctives qui existent encore aujourd'hui. La civilisation méroïtique a développé son propre système d'écriture et avait une structure politique complexe."
      },
      sw: {
        question: "Jina la mji-jimbo la kale katika Sudan ya sasa ambalo lilikuwa kituo cha biashara na utamaduni kutoka takriban 1070 KK hadi 350 BK lilikuwa lipi?",
        options: [
          "Carthage",
          "Meroe",
          "Timbuktu",
          "Lalibela"
        ],
        explanation: "Meroe ilikuwa mji mkuu wa Ufalme wa Kush kwa karne kadhaa na ilikuwa karibu na Mto Nile katika eneo ambalo sasa ni Sudan. Mji huo ulikuwa kituo cha uzalishaji wa chuma na biashara, ukiwa na mapiramidi ya kipekee ambayo bado yamesimama hadi leo. Ustaarabu wa Meroitic ulitengeneza mfumo wake wa maandishi na ulikuwa na muundo mgumu wa kisiasa."
      }
    }
  },
  {
    id: "q6",
    question: "Which African intellectual and activist founded the Pan-African movement and organized the first Pan-African Conference in 1900?",
    options: [
      "Marcus Garvey",
      "W.E.B. Du Bois",
      "Henry Sylvester Williams",
      "Kwame Nkrumah"
    ],
    correctAnswer: 2,
    explanation: "Henry Sylvester Williams, a Trinidadian lawyer of African descent, is credited with organizing the first Pan-African Conference in London in 1900, which marked the formal beginning of the Pan-African movement. He coined the term 'Pan-African' and brought together people of African descent from America, the Caribbean, and Africa to discuss colonial rule and racial discrimination.",
    category: "diaspora",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1000",
    translations: {
      en: {
        question: "Which African intellectual and activist founded the Pan-African movement and organized the first Pan-African Conference in 1900?",
        options: [
          "Marcus Garvey",
          "W.E.B. Du Bois",
          "Henry Sylvester Williams",
          "Kwame Nkrumah"
        ],
        explanation: "Henry Sylvester Williams, a Trinidadian lawyer of African descent, is credited with organizing the first Pan-African Conference in London in 1900, which marked the formal beginning of the Pan-African movement. He coined the term 'Pan-African' and brought together people of African descent from America, the Caribbean, and Africa to discuss colonial rule and racial discrimination."
      },
      fr: {
        question: "Quel intellectuel et activiste africain a fondé le mouvement panafricain et organisé la première Conférence panafricaine en 1900?",
        options: [
          "Marcus Garvey",
          "W.E.B. Du Bois",
          "Henry Sylvester Williams",
          "Kwame Nkrumah"
        ],
        explanation: "Henry Sylvester Williams, un avocat trinidadien d'origine africaine, est crédité d'avoir organisé la première Conférence panafricaine à Londres en 1900, qui a marqué le début formel du mouvement panafricain. Il a inventé le terme 'panafricain' et a rassemblé des personnes d'origine africaine d'Amérique, des Caraïbes et d'Afrique pour discuter de la domination coloniale et de la discrimination raciale."
      },
      sw: {
        question: "Mwanazuoni na mwanaharakati gani wa Kiafrika alianzisha harakati za Pan-Afrika na kuandaa Kongamano la kwanza la Pan-Afrika mwaka 1900?",
        options: [
          "Marcus Garvey",
          "W.E.B. Du Bois",
          "Henry Sylvester Williams",
          "Kwame Nkrumah"
        ],
        explanation: "Henry Sylvester Williams, wakili wa Kitrinidad wa asili ya Kiafrika, anapewa sifa ya kuandaa Kongamano la kwanza la Pan-Afrika huko London mwaka 1900, ambalo liliashiria mwanzo rasmi wa harakati za Pan-Afrika. Alianzisha istilahi 'Pan-Afrika' na aliwakusanya watu wa asili ya Kiafrika kutoka Amerika, Karibi, na Afrika kujadili utawala wa kikoloni na ubaguzi wa rangi."
      }
    }
  },
  {
    id: "q7",
    question: "What was the name of the ancient writing system used in the Kingdom of Kush?",
    options: [
      "Hieroglyphics",
      "Meroitic script",
      "Ge'ez script",
      "Nsibidi"
    ],
    correctAnswer: 1,
    explanation: "The Meroitic script was the writing system developed in the Napatan-Meroitic period of the Kingdom of Kush. It appeared during the 2nd century BCE and continued until the 5th century CE. The script has two forms: hieroglyphic, which was used for monumental inscriptions, and cursive, which was used for general writing. While the script has been deciphered in terms of phonetics, the underlying language is still not fully understood.",
    category: "culture",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=1000",
    translations: {
      en: {
        question: "What was the name of the ancient writing system used in the Kingdom of Kush?",
        options: [
          "Hieroglyphics",
          "Meroitic script",
          "Ge'ez script",
          "Nsibidi"
        ],
        explanation: "The Meroitic script was the writing system developed in the Napatan-Meroitic period of the Kingdom of Kush. It appeared during the 2nd century BCE and continued until the 5th century CE. The script has two forms: hieroglyphic, which was used for monumental inscriptions, and cursive, which was used for general writing. While the script has been deciphered in terms of phonetics, the underlying language is still not fully understood."
      },
      fr: {
        question: "Quel était le nom du système d'écriture ancien utilisé dans le Royaume de Koush?",
        options: [
          "Hiéroglyphes",
          "Écriture méroïtique",
          "Écriture guèze",
          "Nsibidi"
        ],
        explanation: "L'écriture méroïtique était le système d'écriture développé pendant la période napatéenne-méroïtique du Royaume de Koush. Elle est apparue au 2ème siècle avant J.-C. et a continué jusqu'au 5ème siècle après J.-C. L'écriture a deux formes: hiéroglyphique, utilisée pour les inscriptions monumentales, et cursive, utilisée pour l'écriture générale. Bien que l'écriture ait été déchiffrée en termes de phonétique, la langue sous-jacente n'est toujours pas entièrement comprise."
      },
      sw: {
        question: "Jina la mfumo wa kale wa maandishi uliotumika katika Ufalme wa Kush lilikuwa lipi?",
        options: [
          "Hieroglyphics",
          "Maandishi ya Meroitic",
          "Maandishi ya Ge'ez",
          "Nsibidi"
        ],
        explanation: "Maandishi ya Meroitic yalikuwa mfumo wa maandishi uliotengenezwa katika kipindi cha Napatan-Meroitic cha Ufalme wa Kush. Yalitokea wakati wa karne ya 2 KK na yaliendelea hadi karne ya 5 BK. Maandishi hayo yana aina mbili: ya kihieroglyphic, ambayo ilitumika kwa maandishi ya kumbukumbu, na ya kawaida, ambayo ilitumika kwa maandishi ya kawaida. Ingawa maandishi hayo yamefasiriwa kwa upande wa sauti, lugha yenyewe bado haijaeleweka kikamilifu."
      }
    }
  },
  {
    id: "q8",
    question: "Which African empire was known for its salt mines in Taghaza and its control of trans-Saharan trade routes?",
    options: [
      "Ghana Empire",
      "Mali Empire",
      "Songhai Empire",
      "Kanem-Bornu Empire"
    ],
    correctAnswer: 2,
    explanation: "The Songhai Empire, which reached its peak in the 15th and 16th centuries under the leadership of Sonni Ali and Askia Muhammad, controlled important trans-Saharan trade routes and the valuable salt mines of Taghaza. The empire was one of the largest in African history, stretching from modern-day Niger to the Atlantic coast. Its control of both gold and salt trade made it extremely wealthy.",
    category: "empires",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    translations: {
      en: {
        question: "Which African empire was known for its salt mines in Taghaza and its control of trans-Saharan trade routes?",
        options: [
          "Ghana Empire",
          "Mali Empire",
          "Songhai Empire",
          "Kanem-Bornu Empire"
        ],
        explanation: "The Songhai Empire, which reached its peak in the 15th and 16th centuries under the leadership of Sonni Ali and Askia Muhammad, controlled important trans-Saharan trade routes and the valuable salt mines of Taghaza. The empire was one of the largest in African history, stretching from modern-day Niger to the Atlantic coast. Its control of both gold and salt trade made it extremely wealthy."
      },
      fr: {
        question: "Quel empire africain était connu pour ses mines de sel à Taghaza et son contrôle des routes commerciales transsahariennes?",
        options: [
          "Empire du Ghana",
          "Empire du Mali",
          "Empire Songhaï",
          "Empire de Kanem-Bornou"
        ],
        explanation: "L'Empire Songhaï, qui a atteint son apogée aux 15ème et 16ème siècles sous la direction de Sonni Ali et d'Askia Muhammad, contrôlait d'importantes routes commerciales transsahariennes et les précieuses mines de sel de Taghaza. L'empire était l'un des plus grands de l'histoire africaine, s'étendant du Niger actuel à la côte atlantique. Son contrôle du commerce de l'or et du sel l'a rendu extrêmement riche."
      },
      sw: {
        question: "Milki gani ya Afrika ilijulikana kwa migodi yake ya chumvi huko Taghaza na udhibiti wake wa njia za biashara za kupitia Sahara?",
        options: [
          "Milki ya Ghana",
          "Milki ya Mali",
          "Milki ya Songhai",
          "Milki ya Kanem-Bornu"
        ],
        explanation: "Milki ya Songhai, ambayo ilifikia kilele chake katika karne ya 15 na 16 chini ya uongozi wa Sonni Ali na Askia Muhammad, ilidhibiti njia muhimu za biashara za kupitia Sahara na migodi ya thamani ya chumvi ya Taghaza. Milki hiyo ilikuwa moja ya kubwa zaidi katika historia ya Afrika, ikienea kutoka Niger ya sasa hadi pwani ya Atlantiki. Udhibiti wake wa biashara ya dhahabu na chumvi uliifanya iwe tajiri sana."
      }
    }
  },
  {
    id: "q9",
    question: "Which African civilization built the Great Zimbabwe stone structures between the 11th and 15th centuries?",
    options: [
      "Swahili civilization",
      "Shona civilization",
      "Zulu Kingdom",
      "Benin Empire"
    ],
    correctAnswer: 1,
    explanation: "The Great Zimbabwe stone structures were built by the Shona civilization between the 11th and 15th centuries. This complex of stone ruins, located in present-day Zimbabwe, was the capital of the Kingdom of Zimbabwe. The structures demonstrate sophisticated architectural and engineering skills, with walls built without mortar that have stood for centuries. The site was a center of trade, particularly in gold, and could house up to 18,000 people at its peak.",
    category: "culture",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1489493585363-13bbdd2a6e8a?q=80&w=1000",
    translations: {
      en: {
        question: "Which African civilization built the Great Zimbabwe stone structures between the 11th and 15th centuries?",
        options: [
          "Swahili civilization",
          "Shona civilization",
          "Zulu Kingdom",
          "Benin Empire"
        ],
        explanation: "The Great Zimbabwe stone structures were built by the Shona civilization between the 11th and 15th centuries. This complex of stone ruins, located in present-day Zimbabwe, was the capital of the Kingdom of Zimbabwe. The structures demonstrate sophisticated architectural and engineering skills, with walls built without mortar that have stood for centuries. The site was a center of trade, particularly in gold, and could house up to 18,000 people at its peak."
      },
      fr: {
        question: "Quelle civilisation africaine a construit les structures en pierre du Grand Zimbabwe entre les 11ème et 15ème siècles?",
        options: [
          "Civilisation swahilie",
          "Civilisation shona",
          "Royaume zoulou",
          "Empire du Bénin"
        ],
        explanation: "Les structures en pierre du Grand Zimbabwe ont été construites par la civilisation shona entre les 11ème et 15ème siècles. Ce complexe de ruines en pierre, situé dans l'actuel Zimbabwe, était la capitale du Royaume du Zimbabwe. Les structures démontrent des compétences architecturales et d'ingénierie sophistiquées, avec des murs construits sans mortier qui ont résisté pendant des siècles. Le site était un centre de commerce, particulièrement de l'or, et pouvait abriter jusqu'à 18 000 personnes à son apogée."
      },
      sw: {
        question: "Ustaarabu gani wa Afrika ulijenga miundo ya mawe ya Great Zimbabwe kati ya karne ya 11 na 15?",
        options: [
          "Ustaarabu wa Kiswahili",
          "Ustaarabu wa Kishona",
          "Ufalme wa Zulu",
          "Milki ya Benin"
        ],
        explanation: "Miundo ya mawe ya Great Zimbabwe iliundwa na ustaarabu wa Kishona kati ya karne ya 11 na 15. Mabaki haya ya mawe, yaliyoko katika Zimbabwe ya sasa, yalikuwa mji mkuu wa Ufalme wa Zimbabwe. Miundo hiyo inaonyesha ujuzi wa hali ya juu wa ujenzi na uhandisi, ukiwa na kuta zilizojengwa bila nondo ambazo zimesimama kwa karne nyingi. Eneo hilo lilikuwa kituo cha biashara, hasa ya dhahabu, na lingeweza kukaa hadi watu 18,000 wakati wa kilele chake."
      }
    }
  },
  {
    id: "q10",
    question: "Which African leader was known as the 'Lion of Judah' and resisted Italian colonization in the 1930s?",
    options: [
      "Kwame Nkrumah",
      "Jomo Kenyatta",
      "Haile Selassie",
      "Patrice Lumumba"
    ],
    correctAnswer: 2,
    explanation: "Haile Selassie I, Emperor of Ethiopia from 1930 to 1974, was known as the 'Lion of Judah.' He led Ethiopia's resistance against Italian invasion in 1935 during the Second Italo-Ethiopian War. Though forced into exile in 1936, he continued to advocate for his country at the League of Nations and returned to power in 1941 with the help of British forces. Selassie is also revered as a messianic figure in the Rastafari movement.",
    category: "resistance",
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1526659666037-96f63c2ec0b9?q=80&w=1000",
    translations: {
      en: {
        question: "Which African leader was known as the 'Lion of Judah' and resisted Italian colonization in the 1930s?",
        options: [
          "Kwame Nkrumah",
          "Jomo Kenyatta",
          "Haile Selassie",
          "Patrice Lumumba"
        ],
        explanation: "Haile Selassie I, Emperor of Ethiopia from 1930 to 1974, was known as the 'Lion of Judah.' He led Ethiopia's resistance against Italian invasion in 1935 during the Second Italo-Ethiopian War. Though forced into exile in 1936, he continued to advocate for his country at the League of Nations and returned to power in 1941 with the help of British forces. Selassie is also revered as a messianic figure in the Rastafari movement."
      },
      fr: {
        question: "Quel leader africain était connu comme le 'Lion de Juda' et a résisté à la colonisation italienne dans les années 1930?",
        options: [
          "Kwame Nkrumah",
          "Jomo Kenyatta",
          "Haile Selassie",
          "Patrice Lumumba"
        ],
        explanation: "Haile Selassie I, Empereur d'Éthiopie de 1930 à 1974, était connu comme le 'Lion de Juda'. Il a dirigé la résistance de l'Éthiopie contre l'invasion italienne en 1935 pendant la Seconde guerre italo-éthiopienne. Bien que forcé à l'exil en 1936, il a continué à défendre son pays à la Société des Nations et est revenu au pouvoir en 1941 avec l'aide des forces britanniques. Selassie est également vénéré comme une figure messianique dans le mouvement rastafari."
      },
      sw: {
        question: "Kiongozi gani wa Afrika alijulikana kama 'Simba wa Yuda' na alipinga ukoloni wa Italia katika miaka ya 1930?",
        options: [
          "Kwame Nkrumah",
          "Jomo Kenyatta",
          "Haile Selassie",
          "Patrice Lumumba"
        ],
        explanation: "Haile Selassie I, Mfalme wa Ethiopia kutoka 1930 hadi 1974, alijulikana kama 'Simba wa Yuda.' Aliongoza upinzani wa Ethiopia dhidi ya uvamizi wa Italia mwaka 1935 wakati wa Vita vya Pili vya Italia-Ethiopia. Ingawa alilazimika kwenda uhamishoni mwaka 1936, aliendelea kutetea nchi yake katika Shirikisho la Mataifa na alirudi madarakani mwaka 1941 kwa msaada wa majeshi ya Uingereza. Selassie pia anaheshimiwa kama mtu wa kimungu katika harakati za Rastafari."
      }
    }
  },
  {
    id: "q11",
    question: "What was the name of the university founded in Timbuktu in the 14th century that became a center of Islamic learning?",
    options: [
      "University of Fez",
      "Al-Azhar University",
      "Sankore University",
      "University of Karueein"
    ],
    correctAnswer: 2,
    explanation: "Sankore University (or Sankore Madrasah) was established in Timbuktu, Mali in the 14th century during the Mali Empire. It became one of the world's most important centers for Islamic learning, mathematics, astronomy, literature, and law. At its peak in the 16th century under the Songhai Empire, it attracted scholars from across Africa and the Muslim world. The university's library contained up to 700,000 manuscripts, many of which still exist today.",
    category: "culture",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1000",
    translations: {
      en: {
        question: "What was the name of the university founded in Timbuktu in the 14th century that became a center of Islamic learning?",
        options: [
          "University of Fez",
          "Al-Azhar University",
          "Sankore University",
          "University of Karueein"
        ],
        explanation: "Sankore University (or Sankore Madrasah) was established in Timbuktu, Mali in the 14th century during the Mali Empire. It became one of the world's most important centers for Islamic learning, mathematics, astronomy, literature, and law. At its peak in the 16th century under the Songhai Empire, it attracted scholars from across Africa and the Muslim world. The university's library contained up to 700,000 manuscripts, many of which still exist today."
      },
      fr: {
        question: "Quel était le nom de l'université fondée à Tombouctou au 14ème siècle qui est devenue un centre d'apprentissage islamique?",
        options: [
          "Université de Fès",
          "Université Al-Azhar",
          "Université de Sankoré",
          "Université de Karuéine"
        ],
        explanation: "L'Université de Sankoré (ou Madrasa de Sankoré) a été établie à Tombouctou, au Mali, au 14ème siècle pendant l'Empire du Mali. Elle est devenue l'un des centres les plus importants au monde pour l'apprentissage islamique, les mathématiques, l'astronomie, la littérature et le droit. À son apogée au 16ème siècle sous l'Empire Songhaï, elle attirait des érudits de toute l'Afrique et du monde musulman. La bibliothèque de l'université contenait jusqu'à 700 000 manuscrits, dont beaucoup existent encore aujourd'hui."
      },
      sw: {
        question: "Jina la chuo kikuu kilichoanzishwa Timbuktu katika karne ya 14 ambacho kilikuwa kituo cha elimu ya Kiislamu lilikuwa lipi?",
        options: [
          "Chuo Kikuu cha Fez",
          "Chuo Kikuu cha Al-Azhar",
          "Chuo Kikuu cha Sankore",
          "Chuo Kikuu cha Karueein"
        ],
        explanation: "Chuo Kikuu cha Sankore (au Madrasah ya Sankore) kilianzishwa Timbuktu, Mali katika karne ya 14 wakati wa Milki ya Mali. Kilikuwa moja ya vituo muhimu zaidi duniani kwa elimu ya Kiislamu, hisabati, astronomia, fasihi, na sheria. Katika kilele chake katika karne ya 16 chini ya Milki ya Songhai, kilivutia wasomi kutoka Afrika nzima na ulimwengu wa Kiislamu. Maktaba ya chuo kikuu ilikuwa na hadi maandishi 700,000, ambayo mengi bado yapo hadi leo."
      }
    }
  },
  {
    id: "q12",
    question: "Which African country successfully resisted European colonization and maintained its independence throughout the colonial period, except for a brief Italian occupation?",
    options: [
      "Liberia",
      "South Africa",
      "Ethiopia",
      "Egypt"
    ],
    correctAnswer: 2,
    explanation: "Ethiopia successfully resisted European colonization and maintained its independence throughout the colonial period, with the exception of a brief Italian occupation from 1936 to 1941 during World War II. Ethiopia's victory over Italy at the Battle of Adwa in 1896 marked the first time an African nation defeated a European colonial power, becoming a symbol of African resistance and independence. Under Emperor Menelik II and later Haile Selassie, Ethiopia modernized while preserving its sovereignty.",
    category: "resistance",
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1580867532901-7e3707f178ce?q=80&w=1000",
    translations: {
      en: {
        question: "Which African country successfully resisted European colonization and maintained its independence throughout the colonial period, except for a brief Italian occupation?",
        options: [
          "Liberia",
          "South Africa",
          "Ethiopia",
          "Egypt"
        ],
        explanation: "Ethiopia successfully resisted European colonization and maintained its independence throughout the colonial period, with the exception of a brief Italian occupation from 1936 to 1941 during World War II. Ethiopia's victory over Italy at the Battle of Adwa in 1896 marked the first time an African nation defeated a European colonial power, becoming a symbol of African resistance and independence. Under Emperor Menelik II and later Haile Selassie, Ethiopia modernized while preserving its sovereignty."
      },
      fr: {
        question: "Quel pays africain a résisté avec succès à la colonisation européenne et a maintenu son indépendance tout au long de la période coloniale, à l'exception d'une brève occupation italienne?",
        options: [
          "Libéria",
          "Afrique du Sud",
          "Éthiopie",
          "Égypte"
        ],
        explanation: "L'Éthiopie a résisté avec succès à la colonisation européenne et a maintenu son indépendance tout au long de la période coloniale, à l'exception d'une brève occupation italienne de 1936 à 1941 pendant la Seconde Guerre mondiale. La victoire de l'Éthiopie sur l'Italie à la bataille d'Adoua en 1896 a marqué la première fois qu'une nation africaine a vaincu une puissance coloniale européenne, devenant un symbole de résistance et d'indépendance africaines. Sous l'empereur Ménélik II et plus tard Haile Selassie, l'Éthiopie s'est modernisée tout en préservant sa souveraineté."
      },
      sw: {
        question: "Nchi gani ya Afrika ilipinga kwa mafanikio ukoloni wa Ulaya na kudumisha uhuru wake katika kipindi chote cha ukoloni, isipokuwa kwa muda mfupi wa uvamizi wa Italia?",
        options: [
          "Liberia",
          "Afrika Kusini",
          "Ethiopia",
          "Misri"
        ],
        explanation: "Ethiopia ilipinga kwa mafanikio ukoloni wa Ulaya na kudumisha uhuru wake katika kipindi chote cha ukoloni, isipokuwa kwa muda mfupi wa uvamizi wa Italia kutoka 1936 hadi 1941 wakati wa Vita vya Pili vya Dunia. Ushindi wa Ethiopia dhidi ya Italia katika Vita vya Adwa mwaka 1896 ulikuwa mara ya kwanza taifa la Afrika kushinda nguvu ya kikoloni ya Ulaya, na kuwa ishara ya upinzani na uhuru wa Afrika. Chini ya Mfalme Menelik II na baadaye Haile Selassie, Ethiopia iliendelea kisasa huku ikihifadhi uhuru wake."
      }
    }
  },
  {
    id: "q13",
    question: "Which ancient African kingdom was located in present-day Sudan and Egypt, and ruled Egypt as the 25th Dynasty?",
    options: [
      "Kingdom of Kush",
      "Kingdom of Aksum",
      "Kingdom of Kerma",
      "Kingdom of Punt"
    ],
    correctAnswer: 0,
    explanation: "The Kingdom of Kush was located in present-day Sudan and southern Egypt. During the 8th century BCE, Kushite kings conquered Egypt and established the 25th Dynasty, also known as the Nubian Dynasty or the Black Pharaohs. They ruled Egypt for nearly a century (ca. 744-656 BCE) until they were driven back by the Assyrians. The Kushite rulers were known for reviving Egyptian religious traditions, art, and architecture, including the construction of numerous pyramids in their homeland.",
    category: "empires",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    translations: {
      en: {
        question: "Which ancient African kingdom was located in present-day Sudan and Egypt, and ruled Egypt as the 25th Dynasty?",
        options: [
          "Kingdom of Kush",
          "Kingdom of Aksum",
          "Kingdom of Kerma",
          "Kingdom of Punt"
        ],
        explanation: "The Kingdom of Kush was located in present-day Sudan and southern Egypt. During the 8th century BCE, Kushite kings conquered Egypt and established the 25th Dynasty, also known as the Nubian Dynasty or the Black Pharaohs. They ruled Egypt for nearly a century (ca. 744-656 BCE) until they were driven back by the Assyrians. The Kushite rulers were known for reviving Egyptian religious traditions, art, and architecture, including the construction of numerous pyramids in their homeland."
      },
      fr: {
        question: "Quel ancien royaume africain était situé dans l'actuel Soudan et Égypte, et a régné sur l'Égypte en tant que 25ème dynastie?",
        options: [
          "Royaume de Koush",
          "Royaume d'Aksoum",
          "Royaume de Kerma",
          "Royaume de Pount"
        ],
        explanation: "Le Royaume de Koush était situé dans l'actuel Soudan et le sud de l'Égypte. Au cours du 8ème siècle avant J.-C., les rois koushites ont conquis l'Égypte et établi la 25ème dynastie, également connue sous le nom de dynastie nubienne ou des Pharaons noirs. Ils ont régné sur l'Égypte pendant près d'un siècle (env. 744-656 av. J.-C.) jusqu'à ce qu'ils soient repoussés par les Assyriens. Les souverains koushites étaient connus pour avoir fait revivre les traditions religieuses, l'art et l'architecture égyptiens, y compris la construction de nombreuses pyramides dans leur patrie."
      },
      sw: {
        question: "Ufalme gani wa kale wa Afrika ulikuwa katika Sudan na Misri ya sasa, na ulitawala Misri kama Nasaba ya 25?",
        options: [
          "Ufalme wa Kush",
          "Ufalme wa Aksum",
          "Ufalme wa Kerma",
          "Ufalme wa Punt"
        ],
        explanation: "Ufalme wa Kush ulikuwa katika Sudan ya sasa na kusini mwa Misri. Wakati wa karne ya 8 KK, wafalme wa Kush waliteka Misri na kuanzisha Nasaba ya 25, pia inajulikana kama Nasaba ya Nubia au Mafarao Weusi. Walitawala Misri kwa karibu karne moja (takriban 744-656 KK) hadi waliporudishwa nyuma na Waashuru. Watawala wa Kush walijulikana kwa kufufua mila za kidini za Kimisri, sanaa, na ujenzi, ikiwa ni pamoja na ujenzi wa mapiramidi nyingi katika nchi yao."
      }
    }
  },
  {
    id: "q14",
    question: "Which African queen led the Ashanti resistance against British colonization in 1900?",
    options: [
      "Queen Amina",
      "Queen Nzinga",
      "Queen Yaa Asantewaa",
      "Queen Ranavalona"
    ],
    correctAnswer: 2,
    explanation: "Queen Yaa Asantewaa led the Ashanti (Asante) resistance against British colonization in what is now Ghana. In 1900, when the British governor demanded the Golden Stool, a sacred symbol of the Ashanti nation, Yaa Asantewaa mobilized an army and led what became known as the War of the Golden Stool or the Yaa Asantewaa War. Although the Ashanti were eventually defeated, her courage and leadership made her an important symbol of resistance to colonialism and female leadership.",
    category: "resistance",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=1000",
    translations: {
      en: {
        question: "Which African queen led the Ashanti resistance against British colonization in 1900?",
        options: [
          "Queen Amina",
          "Queen Nzinga",
          "Queen Yaa Asantewaa",
          "Queen Ranavalona"
        ],
        explanation: "Queen Yaa Asantewaa led the Ashanti (Asante) resistance against British colonization in what is now Ghana. In 1900, when the British governor demanded the Golden Stool, a sacred symbol of the Ashanti nation, Yaa Asantewaa mobilized an army and led what became known as the War of the Golden Stool or the Yaa Asantewaa War. Although the Ashanti were eventually defeated, her courage and leadership made her an important symbol of resistance to colonialism and female leadership."
      },
      fr: {
        question: "Quelle reine africaine a dirigé la résistance ashanti contre la colonisation britannique en 1900?",
        options: [
          "Reine Amina",
          "Reine Nzinga",
          "Reine Yaa Asantewaa",
          "Reine Ranavalona"
        ],
        explanation: "La Reine Yaa Asantewaa a dirigé la résistance ashanti (asante) contre la colonisation britannique dans ce qui est maintenant le Ghana. En 1900, lorsque le gouverneur britannique a exigé le Tabouret d'Or, un symbole sacré de la nation ashanti, Yaa Asantewaa a mobilisé une armée et a dirigé ce qui est devenu connu sous le nom de Guerre du Tabouret d'Or ou la Guerre de Yaa Asantewaa. Bien que les Ashanti aient finalement été vaincus, son courage et son leadership ont fait d'elle un symbole important de résistance au colonialisme et de leadership féminin."
      },
      sw: {
        question: "Malkia gani wa Afrika aliongoza upinzani wa Waashanti dhidi ya ukoloni wa Uingereza mwaka 1900?",
        options: [
          "Malkia Amina",
          "Malkia Nzinga",
          "Malkia Yaa Asantewaa",
          "Malkia Ranavalona"
        ],
        explanation: "Malkia Yaa Asantewaa aliongoza upinzani wa Waashanti (Asante) dhidi ya ukoloni wa Uingereza katika eneo ambalo sasa ni Ghana. Mwaka 1900, wakati gavana wa Kiingereza alipodai Kiti cha Dhahabu, ishara takatifu ya taifa la Ashanti, Yaa Asantewaa aliandaa jeshi na kuongoza kile kilichojulikana kama Vita vya Kiti cha Dhahabu au Vita vya Yaa Asantewaa. Ingawa Waashanti hatimaye walishindwa, ujasiri wake na uongozi wake ulimfanya awe ishara muhimu ya upinzani dhidi ya ukoloni na uongozi wa wanawake."
      }
    }
  },
  {
    id: "q15",
    question: "What was the name of the African philosophy and political concept developed by Julius Nyerere in Tanzania?",
    options: [
      "Ubuntu",
      "Ujamaa",
      "Negritude",
      "Harambee"
    ],
    correctAnswer: 1,
    explanation: "Ujamaa was a political and economic philosophy developed by Julius Nyerere, the first president of Tanzania, as part of his vision for post-colonial African socialism. The term means 'familyhood' in Swahili and emphasized traditional African values of cooperation, communal ownership, and self-reliance. Nyerere implemented Ujamaa through the creation of collective villages and nationalization of industries. While the economic aspects of the policy had mixed results, the philosophy contributed significantly to Tanzania's national identity and peaceful development.",
    category: "leaders",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1000",
    translations: {
      en: {
        question: "What was the name of the African philosophy and political concept developed by Julius Nyerere in Tanzania?",
        options: [
          "Ubuntu",
          "Ujamaa",
          "Negritude",
          "Harambee"
        ],
        explanation: "Ujamaa was a political and economic philosophy developed by Julius Nyerere, the first president of Tanzania, as part of his vision for post-colonial African socialism. The term means 'familyhood' in Swahili and emphasized traditional African values of cooperation, communal ownership, and self-reliance. Nyerere implemented Ujamaa through the creation of collective villages and nationalization of industries. While the economic aspects of the policy had mixed results, the philosophy contributed significantly to Tanzania's national identity and peaceful development."
      },
      fr: {
        question: "Quel était le nom de la philosophie africaine et du concept politique développés par Julius Nyerere en Tanzanie?",
        options: [
          "Ubuntu",
          "Ujamaa",
          "Négritude",
          "Harambee"
        ],
        explanation: "L'Ujamaa était une philosophie politique et économique développée par Julius Nyerere, le premier président de la Tanzanie, dans le cadre de sa vision du socialisme africain post-colonial. Le terme signifie 'famille' en swahili et mettait l'accent sur les valeurs africaines traditionnelles de coopération, de propriété communale et d'autonomie. Nyerere a mis en œuvre l'Ujamaa par la création de villages collectifs et la nationalisation des industries. Bien que les aspects économiques de la politique aient eu des résultats mitigés, la philosophie a contribué de manière significative à l'identité nationale et au développement pacifique de la Tanzanie."
      },
      sw: {
        question: "Jina la falsafa ya Kiafrika na dhana ya kisiasa iliyotengenezwa na Julius Nyerere nchini Tanzania lilikuwa lipi?",
        options: [
          "Ubuntu",
          "Ujamaa",
          "Negritude",
          "Harambee"
        ],
        explanation: "Ujamaa ilikuwa falsafa ya kisiasa na kiuchumi iliyotengenezwa na Julius Nyerere, rais wa kwanza wa Tanzania, kama sehemu ya maono yake ya ujamaa wa Kiafrika baada ya ukoloni. Neno hilo linamaanisha 'udugu' kwa Kiswahili na lilisisitiza maadili ya jadi ya Kiafrika ya ushirikiano, umiliki wa pamoja, na kujitegemea. Nyerere alitekeleza Ujamaa kupitia uundaji wa vijiji vya pamoja na utaifishaji wa viwanda. Ingawa vipengele vya kiuchumi vya sera hiyo vilikuwa na matokeo mchanganyiko, falsafa hiyo ilichangia kwa kiasi kikubwa katika utambulisho wa kitaifa wa Tanzania na maendeleo ya amani."
      }
    }
  },
  {
    id: "q16",
    question: "Which North African scholar is considered one of the fathers of modern sociology and historiography?",
    options: [
      "Ibn Khaldun",
      "Ibn Battuta",
      "Al-Farabi",
      "Ibn Rushd"
    ],
    correctAnswer: 0,
    explanation: "Ibn Khaldun (1332-1406) was a North African Arab historian and scholar born in present-day Tunisia. He is considered one of the founding fathers of modern sociology, historiography, economics, and demography. His most famous work, the Muqaddimah (Introduction to History), developed a scientific methodology for studying history and society. He introduced concepts such as social cohesion, the economic theory of labor value, and the cyclical rise and fall of civilizations that were revolutionary for his time and continue to influence social sciences today.",
    category: "scholars",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=1000",
    translations: {
      en: {
        question: "Which North African scholar is considered one of the fathers of modern sociology and historiography?",
        options: [
          "Ibn Khaldun",
          "Ibn Battuta",
          "Al-Farabi",
          "Ibn Rushd"
        ],
        explanation: "Ibn Khaldun (1332-1406) was a North African Arab historian and scholar born in present-day Tunisia. He is considered one of the founding fathers of modern sociology, historiography, economics, and demography. His most famous work, the Muqaddimah (Introduction to History), developed a scientific methodology for studying history and society. He introduced concepts such as social cohesion, the economic theory of labor value, and the cyclical rise and fall of civilizations that were revolutionary for his time and continue to influence social sciences today."
      },
      fr: {
        question: "Quel érudit nord-africain est considéré comme l'un des pères de la sociologie moderne et de l'historiographie?",
        options: [
          "Ibn Khaldoun",
          "Ibn Battuta",
          "Al-Farabi",
          "Ibn Rushd"
        ],
        explanation: "Ibn Khaldoun (1332-1406) était un historien et érudit arabe nord-africain né dans l'actuelle Tunisie. Il est considéré comme l'un des pères fondateurs de la sociologie moderne, de l'historiographie, de l'économie et de la démographie. Son œuvre la plus célèbre, la Muqaddima (Introduction à l'histoire), a développé une méthodologie scientifique pour étudier l'histoire et la société. Il a introduit des concepts tels que la cohésion sociale, la théorie économique de la valeur du travail et le cycle d'ascension et de chute des civilisations qui étaient révolutionnaires pour son époque et continuent d'influencer les sciences sociales aujourd'hui."
      },
      sw: {
        question: "Msomi gani wa Afrika Kaskazini anazingatiwa kuwa mmoja wa waasisi wa sosiolojia ya kisasa na historiografia?",
        options: [
          "Ibn Khaldun",
          "Ibn Battuta",
          "Al-Farabi",
          "Ibn Rushd"
        ],
        explanation: "Ibn Khaldun (1332-1406) alikuwa mwanahistoria na msomi wa Kiarabu wa Afrika Kaskazini aliyezaliwa katika eneo la Tunisia ya sasa. Anazingatiwa kuwa mmoja wa waasisi wa sosiolojia ya kisasa, historiografia, uchumi, na demografia. Kazi yake maarufu zaidi, Muqaddimah (Utangulizi wa Historia), ilitengeneza mbinu za kisayansi za kuchunguza historia na jamii. Alianzisha dhana kama mshikamano wa kijamii, nadharia ya kiuchumi ya thamani ya kazi, na mzunguko wa kupanda na kushuka kwa ustaarabu ambazo zilikuwa za mapinduzi kwa wakati wake na zinaendelea kuathiri sayansi za jamii hadi leo."
      }
    }
  },
  {
    id: "q17",
    question: "Which ancient African kingdom controlled the trade of salt, gold, and slaves across the Sahara from the 6th to the 13th century?",
    options: [
      "Mali Empire",
      "Ghana Empire",
      "Songhai Empire",
      "Kanem-Bornu Empire"
    ],
    correctAnswer: 1,
    explanation: "The Ghana Empire (not related to modern Ghana) controlled the trans-Saharan trade of salt, gold, and slaves from approximately the 6th to the 13th century. Located in what is now southeastern Mauritania and western Mali, it was known to Arab traders as the 'Land of Gold.' The empire's wealth came from taxing the goods that passed through its territory, particularly gold from the south and salt from the north. The Ghana Empire declined in the 13th century due to invasions, drought, and the rise of the Mali Empire.",
    category: "empires",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    translations: {
      en: {
        question: "Which ancient African kingdom controlled the trade of salt, gold, and slaves across the Sahara from the 6th to the 13th century?",
        options: [
          "Mali Empire",
          "Ghana Empire",
          "Songhai Empire",
          "Kanem-Bornu Empire"
        ],
        explanation: "The Ghana Empire (not related to modern Ghana) controlled the trans-Saharan trade of salt, gold, and slaves from approximately the 6th to the 13th century. Located in what is now southeastern Mauritania and western Mali, it was known to Arab traders as the 'Land of Gold.' The empire's wealth came from taxing the goods that passed through its territory, particularly gold from the south and salt from the north. The Ghana Empire declined in the 13th century due to invasions, drought, and the rise of the Mali Empire."
      },
      fr: {
        question: "Quel ancien royaume africain contrôlait le commerce du sel, de l'or et des esclaves à travers le Sahara du 6ème au 13ème siècle?",
        options: [
          "Empire du Mali",
          "Empire du Ghana",
          "Empire Songhaï",
          "Empire de Kanem-Bornou"
        ],
        explanation: "L'Empire du Ghana (sans rapport avec le Ghana moderne) contrôlait le commerce transsaharien du sel, de l'or et des esclaves d'environ le 6ème au 13ème siècle. Situé dans ce qui est maintenant le sud-est de la Mauritanie et l'ouest du Mali, il était connu des commerçants arabes comme le 'Pays de l'Or'. La richesse de l'empire provenait de la taxation des marchandises qui passaient par son territoire, en particulier l'or du sud et le sel du nord. L'Empire du Ghana a décliné au 13ème siècle en raison d'invasions, de sécheresses et de la montée de l'Empire du Mali."
      },
      sw: {
        question: "Ufalme gani wa kale wa Afrika ulidhibiti biashara ya chumvi, dhahabu, na watumwa kupitia Sahara kutoka karne ya 6 hadi ya 13?",
        options: [
          "Milki ya Mali",
          "Milki ya Ghana",
          "Milki ya Songhai",
          "Milki ya Kanem-Bornu"
        ],
        explanation: "Milki ya Ghana (isiyohusiana na Ghana ya kisasa) ilidhibiti biashara ya kupitia Sahara ya chumvi, dhahabu, na watumwa kutoka takriban karne ya 6 hadi ya 13. Iliyoko katika eneo ambalo sasa ni kusini-mashariki mwa Mauritania na magharibi mwa Mali, ilijulikana kwa wafanyabiashara wa Kiarabu kama 'Nchi ya Dhahabu'. Utajiri wa milki hiyo ulitokana na kutoza ushuru kwa bidhaa zilizopitia eneo lake, hasa dhahabu kutoka kusini na chumvi kutoka kaskazini. Milki ya Ghana ilipungua katika karne ya 13 kutokana na uvamizi, ukame, na kuinuka kwa Milki ya Mali."
      }
    }
  },
  {
    id: "q18",
    question: "Which African explorer traveled over 75,000 miles through Africa, Asia, and Europe in the 14th century?",
    options: [
      "Ibn Battuta",
      "Mansa Musa",
      "Leo Africanus",
      "Zheng He"
    ],
    correctAnswer: 0,
    explanation: "Ibn Battuta (1304-1369) was a Moroccan scholar and explorer who traveled over 75,000 miles through Africa, Asia, and Europe during the 14th century. His journeys, which lasted nearly 30 years, took him to North and West Africa, the Middle East, India, Southeast Asia, and China. He documented his travels in a book called the Rihla (The Journey), which provides valuable insights into the medieval Islamic world and the cultures he encountered. Ibn Battuta's travels exceeded those of his European contemporary Marco Polo in both distance and scope.",
    category: "explorers",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1566956580800-c8c4b4605099?q=80&w=1000",
    translations: {
      en: {
        question: "Which African explorer traveled over 75,000 miles through Africa, Asia, and Europe in the 14th century?",
        options: [
          "Ibn Battuta",
          "Mansa Musa",
          "Leo Africanus",
          "Zheng He"
        ],
        explanation: "Ibn Battuta (1304-1369) was a Moroccan scholar and explorer who traveled over 75,000 miles through Africa, Asia, and Europe during the 14th century. His journeys, which lasted nearly 30 years, took him to North and West Africa, the Middle East, India, Southeast Asia, and China. He documented his travels in a book called the Rihla (The Journey), which provides valuable insights into the medieval Islamic world and the cultures he encountered. Ibn Battuta's travels exceeded those of his European contemporary Marco Polo in both distance and scope."
      },
      fr: {
        question: "Quel explorateur africain a parcouru plus de 120 000 kilomètres à travers l'Afrique, l'Asie et l'Europe au 14ème siècle?",
        options: [
          "Ibn Battuta",
          "Mansa Moussa",
          "Léon l'Africain",
          "Zheng He"
        ],
        explanation: "Ibn Battuta (1304-1369) était un érudit et explorateur marocain qui a parcouru plus de 120 000 kilomètres à travers l'Afrique, l'Asie et l'Europe au cours du 14ème siècle. Ses voyages, qui ont duré près de 30 ans, l'ont mené en Afrique du Nord et de l'Ouest, au Moyen-Orient, en Inde, en Asie du Sud-Est et en Chine. Il a documenté ses voyages dans un livre appelé la Rihla (Le Voyage), qui fournit des aperçus précieux sur le monde islamique médiéval et les cultures qu'il a rencontrées. Les voyages d'Ibn Battuta ont dépassé ceux de son contemporain européen Marco Polo tant en distance qu'en portée."
      },
      sw: {
        question: "Mtafiti gani wa Afrika alisafiri zaidi ya kilomita 120,000 kupitia Afrika, Asia, na Ulaya katika karne ya 14?",
        options: [
          "Ibn Battuta",
          "Mansa Musa",
          "Leo Africanus",
          "Zheng He"
        ],
        explanation: "Ibn Battuta (1304-1369) alikuwa msomi na mtafiti wa Kimoroko ambaye alisafiri zaidi ya kilomita 120,000 kupitia Afrika, Asia, na Ulaya wakati wa karne ya 14. Safari zake, ambazo zilidumu karibu miaka 30, zilimpeleka Afrika Kaskazini na Magharibi, Mashariki ya Kati, India, Asia ya Kusini-Mashariki, na China. Aliandika safari zake katika kitabu kilichoitwa Rihla (Safari), ambacho kinatoa maarifa muhimu kuhusu ulimwengu wa Kiislamu wa zama za kati na tamaduni alizokutana nazo. Safari za Ibn Battuta zilizidi zile za mwenzake wa Ulaya Marco Polo kwa umbali na upeo."
      }
    }
  },
  {
    id: "q19",
    question: "Which African kingdom, located in present-day Nigeria, was known for its advanced bronze casting techniques and intricate artwork?",
    options: [
      "Dahomey Kingdom",
      "Oyo Empire",
      "Benin Kingdom",
      "Ashanti Empire"
    ],
    correctAnswer: 2,
    explanation: "The Benin Kingdom (not related to the modern country of Benin) was located in what is now southern Nigeria. From the 13th to the 19th century, it was renowned for its sophisticated bronze casting techniques and intricate artwork, particularly the famous Benin Bronzes. These included elaborate plaques, sculptures, and ceremonial objects that depicted royal figures, historical events, and religious ceremonies. The technical and artistic quality of these works astonished European visitors, challenging their preconceptions about African civilizations. Many of these artifacts were looted during the British punitive expedition of 1897 and are now housed in museums around the world, with ongoing debates about their repatriation.",
    category: "culture",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1489493585363-13bbdd2a6e8a?q=80&w=1000",
    translations: {
      en: {
        question: "Which African kingdom, located in present-day Nigeria, was known for its advanced bronze casting techniques and intricate artwork?",
        options: [
          "Dahomey Kingdom",
          "Oyo Empire",
          "Benin Kingdom",
          "Ashanti Empire"
        ],
        explanation: "The Benin Kingdom (not related to the modern country of Benin) was located in what is now southern Nigeria. From the 13th to the 19th century, it was renowned for its sophisticated bronze casting techniques and intricate artwork, particularly the famous Benin Bronzes. These included elaborate plaques, sculptures, and ceremonial objects that depicted royal figures, historical events, and religious ceremonies. The technical and artistic quality of these works astonished European visitors, challenging their preconceptions about African civilizations. Many of these artifacts were looted during the British punitive expedition of 1897 and are now housed in museums around the world, with ongoing debates about their repatriation."
      },
      fr: {
        question: "Quel royaume africain, situé dans l'actuel Nigeria, était connu pour ses techniques avancées de fonte du bronze et ses œuvres d'art complexes?",
        options: [
          "Royaume du Dahomey",
          "Empire d'Oyo",
          "Royaume du Bénin",
          "Empire Ashanti"
        ],
        explanation: "Le Royaume du Bénin (sans rapport avec le pays moderne du Bénin) était situé dans ce qui est maintenant le sud du Nigeria. Du 13ème au 19ème siècle, il était réputé pour ses techniques sophistiquées de fonte du bronze et ses œuvres d'art complexes, en particulier les célèbres Bronzes du Bénin. Ceux-ci comprenaient des plaques élaborées, des sculptures et des objets cérémoniels qui représentaient des figures royales, des événements historiques et des cérémonies religieuses. La qualité technique et artistique de ces œuvres a étonné les visiteurs européens, remettant en question leurs idées préconçues sur les civilisations africaines. Beaucoup de ces artefacts ont été pillés lors de l'expédition punitive britannique de 1897 et sont maintenant conservés dans des musées du monde entier, avec des débats en cours sur leur rapatriement."
      },
      sw: {
        question: "Ufalme gani wa Afrika, ulioko katika Nigeria ya sasa, ulijulikana kwa mbinu zake za hali ya juu za kutengeneza shaba na sanaa tata?",
        options: [
          "Ufalme wa Dahomey",
          "Milki ya Oyo",
          "Ufalme wa Benin",
          "Milki ya Ashanti"
        ],
        explanation: "Ufalme wa Benin (usiohusiana na nchi ya kisasa ya Benin) ulikuwa katika eneo ambalo sasa ni kusini mwa Nigeria. Kutoka karne ya 13 hadi ya 19, ulijulikana kwa mbinu zake za hali ya juu za kutengeneza shaba na sanaa tata, hasa Shaba za Benin maarufu. Hizi zilijumuisha mabamba yaliyoundwa kwa ustadi, sanamu, na vitu vya sherehe ambavyo vilionyesha watu wa kifalme, matukio ya kihistoria, na sherehe za kidini. Ubora wa kiufundi na kisanaa wa kazi hizi uliwashangaza wageni wa Kizungu, ukipinga dhana zao za awali kuhusu ustaarabu wa Kiafrika. Vitu vingi vya kale viliporwa wakati wa msafara wa adhabu wa Kiingereza wa 1897 na sasa vimehifadhiwa katika makumbusho duniani kote, huku mijadala ikiendelea kuhusu kurudishwa kwao."
      }
    }
  },
  {
    id: "q20",
    question: "Which African freedom fighter led the Mau Mau rebellion against British colonial rule in Kenya during the 1950s?",
    options: [
      "Jomo Kenyatta",
      "Dedan Kimathi",
      "Tom Mboya",
      "Oginga Odinga"
    ],
    correctAnswer: 1,
    explanation: "Dedan Kimathi was a key military leader of the Mau Mau rebellion (also known as the Kenya Emergency or the Mau Mau Uprising) against British colonial rule in Kenya during the 1950s. As a senior commander of the Kenya Land and Freedom Army, he organized guerrilla warfare in the forests of the Aberdare Range and Mount Kenya. The rebellion was sparked by grievances over land alienation, economic inequality, and political exclusion of the Kikuyu people. Kimathi was captured in 1956 and executed by the British colonial government, but he remains an important symbol of Kenya's struggle for independence, which was achieved in 1963.",
    category: "resistance",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1526659666037-96f63c2ec0b9?q=80&w=1000",
    translations: {
      en: {
        question: "Which African freedom fighter led the Mau Mau rebellion against British colonial rule in Kenya during the 1950s?",
        options: [
          "Jomo Kenyatta",
          "Dedan Kimathi",
          "Tom Mboya",
          "Oginga Odinga"
        ],
        explanation: "Dedan Kimathi was a key military leader of the Mau Mau rebellion (also known as the Kenya Emergency or the Mau Mau Uprising) against British colonial rule in Kenya during the 1950s. As a senior commander of the Kenya Land and Freedom Army, he organized guerrilla warfare in the forests of the Aberdare Range and Mount Kenya. The rebellion was sparked by grievances over land alienation, economic inequality, and political exclusion of the Kikuyu people. Kimathi was captured in 1956 and executed by the British colonial government, but he remains an important symbol of Kenya's struggle for independence, which was achieved in 1963."
      },
      fr: {
        question: "Quel combattant de la liberté africain a dirigé la rébellion des Mau Mau contre la domination coloniale britannique au Kenya dans les années 1950?",
        options: [
          "Jomo Kenyatta",
          "Dedan Kimathi",
          "Tom Mboya",
          "Oginga Odinga"
        ],
        explanation: "Dedan Kimathi était un leader militaire clé de la rébellion des Mau Mau (également connue sous le nom d'Urgence du Kenya ou de Soulèvement des Mau Mau) contre la domination coloniale britannique au Kenya dans les années 1950. En tant que commandant principal de l'Armée de la Terre et de la Liberté du Kenya, il a organisé la guérilla dans les forêts de la chaîne des Aberdare et du mont Kenya. La rébellion a été déclenchée par des griefs concernant l'aliénation des terres, l'inégalité économique et l'exclusion politique du peuple Kikuyu. Kimathi a été capturé en 1956 et exécuté par le gouvernement colonial britannique, mais il reste un symbole important de la lutte du Kenya pour l'indépendance, qui a été obtenue en 1963."
      },
      sw: {
        question: "Mpiganaji gani wa uhuru wa Afrika aliongoza uasi wa Mau Mau dhidi ya utawala wa kikoloni wa Uingereza nchini Kenya katika miaka ya 1950?",
        options: [
          "Jomo Kenyatta",
          "Dedan Kimathi",
          "Tom Mboya",
          "Oginga Odinga"
        ],
        explanation: "Dedan Kimathi alikuwa kiongozi muhimu wa kijeshi wa uasi wa Mau Mau (pia unajulikana kama Dharura ya Kenya au Mapinduzi ya Mau Mau) dhidi ya utawala wa kikoloni wa Uingereza nchini Kenya katika miaka ya 1950. Kama kamanda mkuu wa Jeshi la Ardhi na Uhuru la Kenya, aliandaa vita vya msituni katika misitu ya Milima ya Aberdare na Mlima Kenya. Uasi huo ulisababishwa na malalamiko kuhusu kunyang'anywa ardhi, ukosefu wa usawa wa kiuchumi, na kutengwa kwa kisiasa kwa watu wa Kikuyu. Kimathi alikamatwa mwaka 1956 na kunyongwa na serikali ya kikoloni ya Uingereza, lakini anabaki kuwa ishara muhimu ya mapambano ya Kenya kwa uhuru, ambao ulitimia mwaka 1963."
      }
    }
  },
  {
    id: "q21",
    question: "Which ancient African civilization built the pyramids of Meroe in present-day Sudan?",
    options: [
      "Ancient Egyptians",
      "Kingdom of Kush",
      "Aksumite Empire",
      "Nubian Kingdom"
    ],
    correctAnswer: 1,
    explanation: "The pyramids of Meroe were built by the Kingdom of Kush, specifically during its Meroitic period (approximately 300 BCE to 300 CE). Located in present-day Sudan, these pyramids are steeper and more narrow than Egyptian pyramids, with distinctive offering chapels facing east. Over 200 pyramids were constructed at Meroe, serving as tombs for Kushite kings and queens. The Kushite civilization had earlier ruled Egypt as the 25th Dynasty before being pushed south, where they established their capital at Meroe. These pyramids represent a unique architectural tradition that blended Egyptian influences with local Kushite elements.",
    category: "empires",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1523365280197-f1783db9bbf2?q=80&w=1000",
    translations: {
      en: {
        question: "Which ancient African civilization built the pyramids of Meroe in present-day Sudan?",
        options: [
          "Ancient Egyptians",
          "Kingdom of Kush",
          "Aksumite Empire",
          "Nubian Kingdom"
        ],
        explanation: "The pyramids of Meroe were built by the Kingdom of Kush, specifically during its Meroitic period (approximately 300 BCE to 300 CE). Located in present-day Sudan, these pyramids are steeper and more narrow than Egyptian pyramids, with distinctive offering chapels facing east. Over 200 pyramids were constructed at Meroe, serving as tombs for Kushite kings and queens. The Kushite civilization had earlier ruled Egypt as the 25th Dynasty before being pushed south, where they established their capital at Meroe. These pyramids represent a unique architectural tradition that blended Egyptian influences with local Kushite elements."
      },
      fr: {
        question: "Quelle ancienne civilisation africaine a construit les pyramides de Méroé dans l'actuel Soudan?",
        options: [
          "Anciens Égyptiens",
          "Royaume de Koush",
          "Empire Aksumite",
          "Royaume Nubien"
        ],
        explanation: "Les pyramides de Méroé ont été construites par le Royaume de Koush, spécifiquement pendant sa période méroïtique (environ 300 av. J.-C. à 300 apr. J.-C.). Situées dans l'actuel Soudan, ces pyramides sont plus raides et plus étroites que les pyramides égyptiennes, avec des chapelles d'offrandes distinctives orientées vers l'est. Plus de 200 pyramides ont été construites à Méroé, servant de tombes pour les rois et reines koushites. La civilisation koushite avait auparavant régné sur l'Égypte en tant que 25ème dynastie avant d'être repoussée vers le sud, où ils ont établi leur capitale à Méroé. Ces pyramides représentent une tradition architecturale unique qui mélangeait des influences égyptiennes avec des éléments koushites locaux."
      },
      sw: {
        question: "Ustaarabu gani wa kale wa Afrika ulijenga mapiramidi ya Meroe katika Sudan ya sasa?",
        options: [
          "Wamisri wa Kale",
          "Ufalme wa Kush",
          "Milki ya Aksum",
          "Ufalme wa Nubia"
        ],
        explanation: "Mapiramidi ya Meroe yalijengwa na Ufalme wa Kush, hasa wakati wa kipindi chake cha Meroitic (takriban 300 KK hadi 300 BK). Yaliyoko katika Sudan ya sasa, mapiramidi haya ni ya mwinuko zaidi na nyembamba kuliko mapiramidi ya Kimisri, yakiwa na vituo vya sadaka vinavyoelekea mashariki. Zaidi ya mapiramidi 200 yalijengwa huko Meroe, yakitumika kama makaburi ya wafalme na malkia wa Kush. Ustaarabu wa Kush ulikuwa umetawala Misri hapo awali kama Nasaba ya 25 kabla ya kusukumwa kusini, ambapo walianzisha mji wao mkuu huko Meroe. Mapiramidi haya yanawakilisha mapokeo ya kipekee ya ujenzi ambayo yalichanganya mvuto wa Kimisri na vipengele vya Kush vya mtaa."
      }
    }
  },
  {
    id: "q22",
    question: "Which African country was founded by freed American slaves in 1847?",
    options: [
      "Sierra Leone",
      "Liberia",
      "Ghana",
      "Namibia"
    ],
    correctAnswer: 1,
    explanation: "Liberia was founded in 1847 by freed American slaves with the support of the American Colonization Society, making it Africa's first independent republic. The capital, Monrovia, was named after U.S. President James Monroe. The freed slaves, known as Americo-Liberians, established a government modeled after that of the United States and dominated the country's politics until a coup in 1980. The relationship between the Americo-Liberians and the indigenous population was often tense, creating social divisions that contributed to later conflicts. Despite these challenges, Liberia's founding represented a unique experiment in self-governance by formerly enslaved people.",
    category: "diaspora",
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1580867532901-7e3707f178ce?q=80&w=1000",
    translations: {
      en: {
        question: "Which African country was founded by freed American slaves in 1847?",
        options: [
          "Sierra Leone",
          "Liberia",
          "Ghana",
          "Namibia"
        ],
        explanation: "Liberia was founded in 1847 by freed American slaves with the support of the American Colonization Society, making it Africa's first independent republic. The capital, Monrovia, was named after U.S. President James Monroe. The freed slaves, known as Americo-Liberians, established a government modeled after that of the United States and dominated the country's politics until a coup in 1980. The relationship between the Americo-Liberians and the indigenous population was often tense, creating social divisions that contributed to later conflicts. Despite these challenges, Liberia's founding represented a unique experiment in self-governance by formerly enslaved people."
      },
      fr: {
        question: "Quel pays africain a été fondé par des esclaves américains libérés en 1847?",
        options: [
          "Sierra Leone",
          "Libéria",
          "Ghana",
          "Namibie"
        ],
        explanation: "Le Libéria a été fondé en 1847 par des esclaves américains libérés avec le soutien de la Société américaine de colonisation, ce qui en fait la première république indépendante d'Afrique. La capitale, Monrovia, a été nommée d'après le président américain James Monroe. Les esclaves libérés, connus sous le nom d'Américano-Libériens, ont établi un gouvernement modelé sur celui des États-Unis et ont dominé la politique du pays jusqu'à un coup d'État en 1980. La relation entre les Américano-Libériens et la population autochtone était souvent tendue, créant des divisions sociales qui ont contribué aux conflits ultérieurs. Malgré ces défis, la fondation du Libéria représentait une expérience unique d'autonomie gouvernementale par des personnes anciennement réduites en esclavage."
      },
      sw: {
        question: "Nchi gani ya Afrika ilianzishwa na watumwa wa Kimarekani walioachwa huru mwaka 1847?",
        options: [
          "Sierra Leone",
          "Liberia",
          "Ghana",
          "Namibia"
        ],
        explanation: "Liberia ilianzishwa mwaka 1847 na watumwa wa Kimarekani walioachwa huru kwa msaada wa Chama cha Ukoloni cha Kimarekani, ikiifanya kuwa jamhuri ya kwanza huru ya Afrika. Mji mkuu, Monrovia, ulipewa jina la Rais wa Marekani James Monroe. Watumwa walioachwa huru, waliojulikana kama Americo-Liberians, walianzisha serikali iliyofuata mfano wa Marekani na kutawala siasa za nchi hiyo hadi mapinduzi ya 1980. Uhusiano kati ya Americo-Liberians na wenyeji mara nyingi ulikuwa na wasiwasi, ukiunda migawanyiko ya kijamii iliyochangia migogoro ya baadaye. Licha ya changamoto hizi, kuanzishwa kwa Liberia kuliwakilisha jaribio la kipekee la kujitawala kwa watu waliokuwa watumwa hapo awali."
      }
    }
  },
  {
    id: "q23",
    question: "Which African leader was the first Secretary-General of the Organization of African Unity (OAU), the predecessor to the African Union?",
    options: [
      "Kwame Nkrumah",
      "Haile Selassie",
      "Diallo Telli",
      "Julius Nyerere"
    ],
    correctAnswer: 2,
    explanation: "Diallo Telli from Guinea was the first Secretary-General of the Organization of African Unity (OAU), serving from 1964 to 1972. The OAU was established in 1963 with the goal of promoting unity and solidarity among African states, coordinating efforts for decolonization, and defending the sovereignty and territorial integrity of member states. Under Telli's leadership, the OAU worked to mediate conflicts, support liberation movements, and establish a framework for pan-African cooperation. The OAU was later transformed into the African Union in 2002, with a broader mandate that includes promoting economic integration, democratic principles, and sustainable development across the continent.",
    category: "leaders",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1000",
    translations: {
      en: {
        question: "Which African leader was the first Secretary-General of the Organization of African Unity (OAU), the predecessor to the African Union?",
        options: [
          "Kwame Nkrumah",
          "Haile Selassie",
          "Diallo Telli",
          "Julius Nyerere"
        ],
        explanation: "Diallo Telli from Guinea was the first Secretary-General of the Organization of African Unity (OAU), serving from 1964 to 1972. The OAU was established in 1963 with the goal of promoting unity and solidarity among African states, coordinating efforts for decolonization, and defending the sovereignty and territorial integrity of member states. Under Telli's leadership, the OAU worked to mediate conflicts, support liberation movements, and establish a framework for pan-African cooperation. The OAU was later transformed into the African Union in 2002, with a broader mandate that includes promoting economic integration, democratic principles, and sustainable development across the continent."
      },
      fr: {
        question: "Quel leader africain a été le premier Secrétaire général de l'Organisation de l'unité africaine (OUA), le prédécesseur de l'Union africaine?",
        options: [
          "Kwame Nkrumah",
          "Haile Selassie",
          "Diallo Telli",
          "Julius Nyerere"
        ],
        explanation: "Diallo Telli de Guinée a été le premier Secrétaire général de l'Organisation de l'unité africaine (OUA), servant de 1964 à 1972. L'OUA a été établie en 1963 avec l'objectif de promouvoir l'unité et la solidarité entre les États africains, de coordonner les efforts pour la décolonisation, et de défendre la souveraineté et l'intégrité territoriale des États membres. Sous la direction de Telli, l'OUA a travaillé à médier les conflits, à soutenir les mouvements de libération, et à établir un cadre pour la coopération panafricaine. L'OUA a été plus tard transformée en Union africaine en 2002, avec un mandat plus large qui comprend la promotion de l'intégration économique, des principes démocratiques, et du développement durable à travers le continent."
      },
      sw: {
        question: "Kiongozi gani wa Afrika alikuwa Katibu Mkuu wa kwanza wa Shirika la Umoja wa Afrika (OAU), mtangulizi wa Umoja wa Afrika?",
        options: [
          "Kwame Nkrumah",
          "Haile Selassie",
          "Diallo Telli",
          "Julius Nyerere"
        ],
        explanation: "Diallo Telli kutoka Guinea alikuwa Katibu Mkuu wa kwanza wa Shirika la Umoja wa Afrika (OAU), akihudumu kutoka 1964 hadi 1972. OAU ilianzishwa mwaka 1963 kwa lengo la kukuza umoja na mshikamano kati ya nchi za Afrika, kuratibu juhudi za kuondoa ukoloni, na kutetea uhuru na utimilifu wa ardhi wa nchi wanachama. Chini ya uongozi wa Telli, OAU ilifanya kazi kupatanisha migogoro, kusaidia harakati za ukombozi, na kuanzisha mfumo wa ushirikiano wa Pan-Afrika. OAU baadaye ilibadilishwa kuwa Umoja wa Afrika mwaka 2002, ukiwa na mamlaka mapana zaidi ambayo yanajumuisha kukuza ushirikiano wa kiuchumi, kanuni za kidemokrasia, na maendeleo endelevu katika bara zima."
      }
    }
  },
  {
    id: "q24",
    question: "Which African language is the most widely spoken indigenous language on the continent, with over 100 million speakers?",
    options: [
      "Hausa",
      "Yoruba",
      "Swahili",
      "Amharic"
    ],
    correctAnswer: 2,
    explanation: "Swahili (Kiswahili) is the most widely spoken indigenous African language, with over 100 million speakers across East and Central Africa. It serves as an official language in Kenya, Tanzania, Uganda, and the Democratic Republic of Congo, and is recognized by the African Union. Swahili developed as a trade language along the East African coast, blending Bantu grammatical structures with vocabulary from Arabic, Persian, Portuguese, and other languages. As a lingua franca, it has facilitated communication across ethnic and national boundaries, playing a crucial role in regional integration, commerce, and cultural exchange. The language has a rich literary tradition dating back centuries and continues to evolve with modern terminology for technology, science, and contemporary life.",
    category: "culture",
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=1000",
    translations: {
      en: {
        question: "Which African language is the most widely spoken indigenous language on the continent, with over 100 million speakers?",
        options: [
          "Hausa",
          "Yoruba",
          "Swahili",
          "Amharic"
        ],
        explanation: "Swahili (Kiswahili) is the most widely spoken indigenous African language, with over 100 million speakers across East and Central Africa. It serves as an official language in Kenya, Tanzania, Uganda, and the Democratic Republic of Congo, and is recognized by the African Union. Swahili developed as a trade language along the East African coast, blending Bantu grammatical structures with vocabulary from Arabic, Persian, Portuguese, and other languages. As a lingua franca, it has facilitated communication across ethnic and national boundaries, playing a crucial role in regional integration, commerce, and cultural exchange. The language has a rich literary tradition dating back centuries and continues to evolve with modern terminology for technology, science, and contemporary life."
      },
      fr: {
        question: "Quelle langue africaine est la langue indigène la plus parlée sur le continent, avec plus de 100 millions de locuteurs?",
        options: [
          "Haoussa",
          "Yoruba",
          "Swahili",
          "Amharique"
        ],
        explanation: "Le swahili (kiswahili) est la langue africaine indigène la plus parlée, avec plus de 100 millions de locuteurs en Afrique de l'Est et centrale. Il sert de langue officielle au Kenya, en Tanzanie, en Ouganda et en République démocratique du Congo, et est reconnu par l'Union africaine. Le swahili s'est développé comme une langue commerciale le long de la côte est-africaine, mélangeant des structures grammaticales bantoues avec du vocabulaire arabe, perse, portugais et d'autres langues. En tant que lingua franca, il a facilité la communication à travers les frontières ethniques et nationales, jouant un rôle crucial dans l'intégration régionale, le commerce et les échanges culturels. La langue a une riche tradition littéraire datant de plusieurs siècles et continue d'évoluer avec une terminologie moderne pour la technologie, la science et la vie contemporaine."
      },
      sw: {
        question: "Lugha gani ya Afrika ndiyo lugha asilia inayozungumzwa zaidi katika bara hilo, ikiwa na wazungumzaji zaidi ya milioni 100?",
        options: [
          "Kihausa",
          "Kiyoruba",
          "Kiswahili",
          "Kiamhara"
        ],
        explanation: "Kiswahili ni lugha asilia ya Kiafrika inayozungumzwa zaidi, ikiwa na wazungumzaji zaidi ya milioni 100 katika Afrika Mashariki na Kati. Inatumika kama lugha rasmi nchini Kenya, Tanzania, Uganda, na Jamhuri ya Kidemokrasia ya Kongo, na inatambuliwa na Umoja wa Afrika. Kiswahili kilianza kama lugha ya biashara kando ya pwani ya Afrika Mashariki, ikichanganya miundo ya kisarufi ya Kibantu na msamiati kutoka Kiarabu, Kiajemi, Kireno, na lugha nyingine. Kama lingua franca, imesaidia mawasiliano kuvuka mipaka ya kikabila na kitaifa, ikichukua nafasi muhimu katika ushirikiano wa kikanda, biashara, na kubadilishana kitamaduni. Lugha hiyo ina mapokeo tajiri ya fasihi yanayorudi karne nyingi na inaendelea kuendelea na istilahi za kisasa za teknolojia, sayansi, na maisha ya kisasa."
      }
    }
  },
  {
    id: "q25",
    question: "Which African mathematician and astronomer calculated the circumference of the Earth in the 17th century?",
    options: [
      "Ibn al-Haytham",
      "Muhammad al-Idrisi",
      "Ahmad Baba al-Timbukti",
      "Muhammad Bello"
    ],
    correctAnswer: 1,
    explanation: "Muhammad al-Idrisi (1100-1165) was a North African geographer, cartographer, and traveler who made significant contributions to geography and astronomy. Born in Ceuta (in present-day Morocco), he studied in Córdoba and traveled extensively throughout Europe, Asia, and Africa. Al-Idrisi is best known for creating the Tabula Rogeriana, a detailed world map commissioned by King Roger II of Sicily. In his astronomical work, he calculated the circumference of the Earth with remarkable accuracy for his time, building upon and refining the earlier calculations of Greek and Islamic scholars. His geographical encyclopedia, 'Nuzhat al-Mushtaq fi'khtiraq al-Afaq' (The Pleasure Excursion of One Who Is Eager to Traverse the Regions of the World), remained an authoritative reference for several centuries.",
    category: "scholars",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=1000",
    translations: {
      en: {
        question: "Which African mathematician and astronomer calculated the circumference of the Earth in the 17th century?",
        options: [
          "Ibn al-Haytham",
          "Muhammad al-Idrisi",
          "Ahmad Baba al-Timbukti",
          "Muhammad Bello"
        ],
        explanation: "Muhammad al-Idrisi (1100-1165) was a North African geographer, cartographer, and traveler who made significant contributions to geography and astronomy. Born in Ceuta (in present-day Morocco), he studied in Córdoba and traveled extensively throughout Europe, Asia, and Africa. Al-Idrisi is best known for creating the Tabula Rogeriana, a detailed world map commissioned by King Roger II of Sicily. In his astronomical work, he calculated the circumference of the Earth with remarkable accuracy for his time, building upon and refining the earlier calculations of Greek and Islamic scholars. His geographical encyclopedia, 'Nuzhat al-Mushtaq fi'khtiraq al-Afaq' (The Pleasure Excursion of One Who Is Eager to Traverse the Regions of the World), remained an authoritative reference for several centuries."
      },
      fr: {
        question: "Quel mathématicien et astronome africain a calculé la circonférence de la Terre au 17ème siècle?",
        options: [
          "Ibn al-Haytham",
          "Muhammad al-Idrisi",
          "Ahmad Baba al-Timbukti",
          "Muhammad Bello"
        ],
        explanation: "Muhammad al-Idrisi (1100-1165) était un géographe, cartographe et voyageur nord-africain qui a apporté des contributions significatives à la géographie et à l'astronomie. Né à Ceuta (dans l'actuel Maroc), il a étudié à Cordoue et a voyagé extensivement à travers l'Europe, l'Asie et l'Afrique. Al-Idrisi est surtout connu pour avoir créé la Tabula Rogeriana, une carte du monde détaillée commandée par le roi Roger II de Sicile. Dans son travail astronomique, il a calculé la circonférence de la Terre avec une précision remarquable pour son époque, s'appuyant sur et affinant les calculs antérieurs des érudits grecs et islamiques. Son encyclopédie géographique, 'Nuzhat al-Mushtaq fi'khtiraq al-Afaq' (L'Excursion de Plaisir de Celui Qui Est Désireux de Traverser les Régions du Monde), est restée une référence faisant autorité pendant plusieurs siècles."
      },
      sw: {
        question: "Mwanasayansi wa hisabati na mwanafalaki gani wa Afrika alikokotoa mzunguko wa Dunia katika karne ya 17?",
        options: [
          "Ibn al-Haytham",
          "Muhammad al-Idrisi",
          "Ahmad Baba al-Timbukti",
          "Muhammad Bello"
        ],
        explanation: "Muhammad al-Idrisi (1100-1165) alikuwa mwanajiografia, mchoraji ramani, na msafiri wa Afrika Kaskazini ambaye alichangia sana katika jiografia na unajimu. Alizaliwa Ceuta (katika Morocco ya sasa), alisoma Córdoba na alisafiri sana katika Ulaya, Asia, na Afrika. Al-Idrisi anajulikana zaidi kwa kuunda Tabula Rogeriana, ramani ya kina ya dunia iliyoagizwa na Mfalme Roger II wa Sicily. Katika kazi yake ya unajimu, alikokotoa mzunguko wa Dunia kwa usahihi wa kushangaza kwa wakati wake, akijenga juu ya na kusafisha mahesabu ya awali ya wasomi wa Kigiriki na Kiislamu. Ensaiklopidia yake ya kijiografia, 'Nuzhat al-Mushtaq fi'khtiraq al-Afaq' (Safari ya Starehe ya Mtu Ambaye Ana Hamu ya Kupitia Maeneo ya Dunia), ilibaki rejea yenye mamlaka kwa karne kadhaa."
      }
    }
  },
  {
    id: "q26",
    question: "Which African empire was known for its powerful naval fleet that controlled the Indian Ocean trade routes in the 15th century?",
    options: [
      "Kilwa Sultanate",
      "Ajuran Sultanate",
      "Swahili Confederation",
      "Zanzibar Sultanate"
    ],
    correctAnswer: 1,
    explanation: "The Ajuran Sultanate, which ruled parts of present-day Somalia, Ethiopia, Djibouti, and Kenya from the 13th to the 17th centuries, was known for its powerful naval fleet that controlled the Indian Ocean trade routes in the 15th century. The Ajuran Navy used both traditional Somali ships and captured vessels from other nations, establishing dominance along the East African coast and the Indian Ocean. This naval power allowed the sultanate to control lucrative trade routes, collect taxes from merchant ships, and resist Portuguese colonial expansion in the region. The Ajuran Sultanate's maritime strength contributed to its wealth and influence, enabling it to build extensive irrigation systems, fortifications, and urban centers throughout the Horn of Africa.",
    category: "empires",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    translations: {
      en: {
        question: "Which African empire was known for its powerful naval fleet that controlled the Indian Ocean trade routes in the 15th century?",
        options: [
          "Kilwa Sultanate",
          "Ajuran Sultanate",
          "Swahili Confederation",
          "Zanzibar Sultanate"
        ],
        explanation: "The Ajuran Sultanate, which ruled parts of present-day Somalia, Ethiopia, Djibouti, and Kenya from the 13th to the 17th centuries, was known for its powerful naval fleet that controlled the Indian Ocean trade routes in the 15th century. The Ajuran Navy used both traditional Somali ships and captured vessels from other nations, establishing dominance along the East African coast and the Indian Ocean. This naval power allowed the sultanate to control lucrative trade routes, collect taxes from merchant ships, and resist Portuguese colonial expansion in the region. The Ajuran Sultanate's maritime strength contributed to its wealth and influence, enabling it to build extensive irrigation systems, fortifications, and urban centers throughout the Horn of Africa."
      },
      fr: {
        question: "Quel empire africain était connu pour sa puissante flotte navale qui contrôlait les routes commerciales de l'océan Indien au 15ème siècle?",
        options: [
          "Sultanat de Kilwa",
          "Sultanat d'Ajuran",
          "Confédération Swahilie",
          "Sultanat de Zanzibar"
        ],
        explanation: "Le Sultanat d'Ajuran, qui a régné sur des parties de l'actuelle Somalie, Éthiopie, Djibouti et Kenya du 13ème au 17ème siècle, était connu pour sa puissante flotte navale qui contrôlait les routes commerciales de l'océan Indien au 15ème siècle. La Marine d'Ajuran utilisait à la fois des navires somaliens traditionnels et des vaisseaux capturés d'autres nations, établissant une domination le long de la côte est-africaine et de l'océan Indien. Cette puissance navale a permis au sultanat de contrôler des routes commerciales lucratives, de percevoir des taxes sur les navires marchands et de résister à l'expansion coloniale portugaise dans la région. La force maritime du Sultanat d'Ajuran a contribué à sa richesse et à son influence, lui permettant de construire de vastes systèmes d'irrigation, des fortifications et des centres urbains dans toute la Corne de l'Afrique."
      },
      sw: {
        question: "Milki gani ya Afrika ilijulikana kwa jeshi lake lenye nguvu la meli ambalo lilidhibiti njia za biashara za Bahari ya Hindi katika karne ya 15?",
        options: [
          "Usultani wa Kilwa",
          "Usultani wa Ajuran",
          "Shirikisho la Waswahili",
          "Usultani wa Zanzibar"
        ],
        explanation: "Usultani wa Ajuran, ambao ulitawala sehemu za Somalia ya sasa, Ethiopia, Djibouti, na Kenya kutoka karne ya 13 hadi ya 17, ulijulikana kwa jeshi lake lenye nguvu la meli ambalo lilidhibiti njia za biashara za Bahari ya Hindi katika karne ya 15. Jeshi la Baharini la Ajuran lilitumia meli za jadi za Kisomali na vyombo vilivyotekwa kutoka mataifa mengine, likianzisha utawala kando ya pwani ya Afrika Mashariki na Bahari ya Hindi. Nguvu hii ya baharini iliruhusu usultani kudhibiti njia za biashara zenye faida, kukusanya kodi kutoka meli za wafanyabiashara, na kupinga upanuzi wa ukoloni wa Kireno katika eneo hilo. Nguvu ya baharini ya Usultani wa Ajuran ilichangia utajiri na ushawishi wake, ikiwezesha kujenga mifumo ya umwagiliaji, ngome, na vituo vya mijini katika Pembe ya Afrika."
      }
    }
  },
  {
    id: "q27",
    question: "Which African queen ruled the Kingdom of Ndongo and Matamba (in present-day Angola) and fought against Portuguese colonization in the 17th century?",
    options: [
      "Queen Amina",
      "Queen Nzinga",
      "Queen Ranavalona",
      "Queen Yaa Asantewaa"
    ],
    correctAnswer: 1,
    explanation: "Queen Nzinga (also known as Ana de Sousa Nzinga Mbande) ruled the kingdoms of Ndongo and Matamba in present-day Angola from 1624 to 1663. She is renowned for her diplomatic skills, military leadership, and fierce resistance against Portuguese colonial expansion and the slave trade. Nzinga employed various strategies, including forming alliances with rival European powers like the Dutch, adopting European diplomatic practices, and leading her armies personally in battle. Her resistance lasted for decades, during which she transformed her kingdom into a powerful military state that successfully held off Portuguese conquest. Queen Nzinga's legacy as a symbol of resistance to colonialism and female leadership continues to inspire, and she is celebrated as a national hero in Angola.",
    category: "resistance",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=1000",
    translations: {
      en: {
        question: "Which African queen ruled the Kingdom of Ndongo and Matamba (in present-day Angola) and fought against Portuguese colonization in the 17th century?",
        options: [
          "Queen Amina",
          "Queen Nzinga",
          "Queen Ranavalona",
          "Queen Yaa Asantewaa"
        ],
        explanation: "Queen Nzinga (also known as Ana de Sousa Nzinga Mbande) ruled the kingdoms of Ndongo and Matamba in present-day Angola from 1624 to 1663. She is renowned for her diplomatic skills, military leadership, and fierce resistance against Portuguese colonial expansion and the slave trade. Nzinga employed various strategies, including forming alliances with rival European powers like the Dutch, adopting European diplomatic practices, and leading her armies personally in battle. Her resistance lasted for decades, during which she transformed her kingdom into a powerful military state that successfully held off Portuguese conquest. Queen Nzinga's legacy as a symbol of resistance to colonialism and female leadership continues to inspire, and she is celebrated as a national hero in Angola."
      },
      fr: {
        question: "Quelle reine africaine a régné sur le Royaume de Ndongo et Matamba (dans l'actuelle Angola) et a lutté contre la colonisation portugaise au 17ème siècle?",
        options: [
          "Reine Amina",
          "Reine Nzinga",
          "Reine Ranavalona",
          "Reine Yaa Asantewaa"
        ],
        explanation: "La Reine Nzinga (également connue sous le nom d'Ana de Sousa Nzinga Mbande) a régné sur les royaumes de Ndongo et Matamba dans l'actuelle Angola de 1624 à 1663. Elle est réputée pour ses compétences diplomatiques, son leadership militaire et sa résistance féroce contre l'expansion coloniale portugaise et la traite des esclaves. Nzinga a employé diverses stratégies, notamment en formant des alliances avec des puissances européennes rivales comme les Néerlandais, en adoptant des pratiques diplomatiques européennes et en dirigeant personnellement ses armées au combat. Sa résistance a duré des décennies, pendant lesquelles elle a transformé son royaume en un puissant État militaire qui a réussi à repousser la conquête portugaise. L'héritage de la Reine Nzinga en tant que symbole de résistance au colonialisme et de leadership féminin continue d'inspirer, et elle est célébrée comme une héroïne nationale en Angola."
      },
      sw: {
        question: "Malkia gani wa Afrika alitawala Ufalme wa Ndongo na Matamba (katika Angola ya sasa) na kupigana dhidi ya ukoloni wa Kireno katika karne ya 17?",
        options: [
          "Malkia Amina",
          "Malkia Nzinga",
          "Malkia Ranavalona",
          "Malkia Yaa Asantewaa"
        ],
        explanation: "Malkia Nzinga (pia anajulikana kama Ana de Sousa Nzinga Mbande) alitawala falme za Ndongo na Matamba katika Angola ya sasa kutoka 1624 hadi 1663. Anajulikana kwa ujuzi wake wa kidiplomasia, uongozi wa kijeshi, na upinzani mkali dhidi ya upanuzi wa kikoloni wa Kireno na biashara ya watumwa. Nzinga alitumia mikakati mbalimbali, ikiwa ni pamoja na kuunda ushirikiano na nguvu za Ulaya zinazoshindana kama Waholanzi, kuiga mazoea ya kidiplomasia ya Kizungu, na kuongoza majeshi yake binafsi katika vita. Upinzani wake ulidumu kwa miongo kadhaa, ambapo alibadilisha ufalme wake kuwa jimbo la kijeshi lenye nguvu ambalo lilifanikiwa kuzuia ushindi wa Kireno. Urithi wa Malkia Nzinga kama ishara ya upinzani dhidi ya ukoloni na uongozi wa wanawake unaendelea kuhamasisha, na anaadhimishwa kama shujaa wa kitaifa nchini Angola."
      }
    }
  },
  {
    id: "q28",
    question: "Which ancient African civilization built the rock-hewn churches of Lalibela in the 12th and 13th centuries?",
    options: [
      "Kingdom of Aksum",
      "Ethiopian Empire",
      "Nubian Kingdom",
      "Kingdom of Kush"
    ],
    correctAnswer: 1,
    explanation: "The rock-hewn churches of Lalibela were built during the reign of King Lalibela of the Ethiopian Empire (also known as Abyssinia) in the late 12th and early 13th centuries. These 11 monolithic churches were carved directly out of solid volcanic rock, with some standing completely free from the surrounding rock. The churches were created as a 'New Jerusalem' after Muslim conquests made pilgrimages to the Holy Land dangerous for Christians. The construction of these churches represents an extraordinary feat of engineering and artistry, involving the removal of thousands of tons of rock. Today, the churches of Lalibela are a UNESCO World Heritage site and remain an important place of pilgrimage and worship for Ethiopian Orthodox Christians.",
    category: "culture",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1566956580800-c8c4b4605099?q=80&w=1000",
    translations: {
      en: {
        question: "Which ancient African civilization built the rock-hewn churches of Lalibela in the 12th and 13th centuries?",
        options: [
          "Kingdom of Aksum",
          "Ethiopian Empire",
          "Nubian Kingdom",
          "Kingdom of Kush"
        ],
        explanation: "The rock-hewn churches of Lalibela were built during the reign of King Lalibela of the Ethiopian Empire (also known as Abyssinia) in the late 12th and early 13th centuries. These 11 monolithic churches were carved directly out of solid volcanic rock, with some standing completely free from the surrounding rock. The churches were created as a 'New Jerusalem' after Muslim conquests made pilgrimages to the Holy Land dangerous for Christians. The construction of these churches represents an extraordinary feat of engineering and artistry, involving the removal of thousands of tons of rock. Today, the churches of Lalibela are a UNESCO World Heritage site and remain an important place of pilgrimage and worship for Ethiopian Orthodox Christians."
      },
      fr: {
        question: "Quelle ancienne civilisation africaine a construit les églises rupestres de Lalibela aux 12ème et 13ème siècles?",
        options: [
          "Royaume d'Aksoum",
          "Empire éthiopien",
          "Royaume nubien",
          "Royaume de Koush"
        ],
        explanation: "Les églises rupestres de Lalibela ont été construites pendant le règne du roi Lalibela de l'Empire éthiopien (également connu sous le nom d'Abyssinie) à la fin du 12ème et au début du 13ème siècle. Ces 11 églises monolithiques ont été taillées directement dans la roche volcanique solide, certaines se tenant complètement libres de la roche environnante. Les églises ont été créées comme une 'Nouvelle Jérusalem' après que les conquêtes musulmanes aient rendu les pèlerinages en Terre Sainte dangereux pour les chrétiens. La construction de ces églises représente un exploit extraordinaire d'ingénierie et d'art, impliquant l'enlèvement de milliers de tonnes de roche. Aujourd'hui, les églises de Lalibela sont un site du patrimoine mondial de l'UNESCO et restent un lieu important de pèlerinage et de culte pour les chrétiens orthodoxes éthiopiens."
      },
      sw: {
        question: "Ustaarabu gani wa kale wa Afrika ulijenga makanisa ya kuchongwa kwenye miamba ya Lalibela katika karne ya 12 na 13?",
        options: [
          "Ufalme wa Aksum",
          "Milki ya Ethiopia",
          "Ufalme wa Nubia",
          "Ufalme wa Kush"
        ],
        explanation: "Makanisa ya kuchongwa kwenye miamba ya Lalibela yalijengwa wakati wa utawala wa Mfalme Lalibela wa Milki ya Ethiopia (pia inajulikana kama Abyssinia) katika mwisho wa karne ya 12 na mwanzo wa karne ya 13. Makanisa haya 11 ya monolithic yalichongwa moja kwa moja kutoka kwenye mwamba wa volkano mgumu, baadhi yakisimama kabisa huru kutoka mwamba unaozunguka. Makanisa hayo yaliundwa kama 'Yerusalemu Mpya' baada ya ushindi wa Waislamu kufanya hija kwenda Nchi Takatifu kuwa hatari kwa Wakristo. Ujenzi wa makanisa haya unawakilisha mafanikio ya kipekee ya uhandisi na usanii, ukihusisha uondoaji wa maelfu ya tani za mwamba. Leo, makanisa ya Lalibela ni eneo la Urithi wa Dunia la UNESCO na yanabaki kuwa mahali muhimu pa hija na ibada kwa Wakristo wa Orthodox wa Ethiopia."
      }
    }
  },
  {
    id: "q29",
    question: "Which African country was the first to gain independence from colonial rule in the 20th century?",
    options: [
      "Ghana",
      "Libya",
      "Egypt",
      "Ethiopia"
    ],
    correctAnswer: 2,
    explanation: "Egypt was the first African country to gain independence from colonial rule in the 20th century, achieving nominal independence from British protection in 1922. While Ethiopia maintained its independence throughout most of the colonial period (except for a brief Italian occupation from 1936-1941), and Liberia was founded as an independent nation in the 19th century, Egypt's independence in 1922 marked the beginning of the end of European colonialism in Africa. However, it's important to note that Britain maintained significant control over Egypt's defense and foreign policy until the 1950s. The Egyptian Revolution of 1952 led by Gamal Abdel Nasser established full sovereignty and inspired independence movements across Africa, contributing to the wave of decolonization that followed in the 1950s and 1960s.",
    category: "independence",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1526659666037-96f63c2ec0b9?q=80&w=1000",
    translations: {
      en: {
        question: "Which African country was the first to gain independence from colonial rule in the 20th century?",
        options: [
          "Ghana",
          "Libya",
          "Egypt",
          "Ethiopia"
        ],
        explanation: "Egypt was the first African country to gain independence from colonial rule in the 20th century, achieving nominal independence from British protection in 1922. While Ethiopia maintained its independence throughout most of the colonial period (except for a brief Italian occupation from 1936-1941), and Liberia was founded as an independent nation in the 19th century, Egypt's independence in 1922 marked the beginning of the end of European colonialism in Africa. However, it's important to note that Britain maintained significant control over Egypt's defense and foreign policy until the 1950s. The Egyptian Revolution of 1952 led by Gamal Abdel Nasser established full sovereignty and inspired independence movements across Africa, contributing to the wave of decolonization that followed in the 1950s and 1960s."
      },
      fr: {
        question: "Quel pays africain a été le premier à obtenir son indépendance de la domination coloniale au 20ème siècle?",
        options: [
          "Ghana",
          "Libye",
          "Égypte",
          "Éthiopie"
        ],
        explanation: "L'Égypte a été le premier pays africain à obtenir son indépendance de la domination coloniale au 20ème siècle, obtenant une indépendance nominale de la protection britannique en 1922. Bien que l'Éthiopie ait maintenu son indépendance pendant la majeure partie de la période coloniale (à l'exception d'une brève occupation italienne de 1936 à 1941), et que le Libéria ait été fondé comme nation indépendante au 19ème siècle, l'indépendance de l'Égypte en 1922 a marqué le début de la fin du colonialisme européen en Afrique. Cependant, il est important de noter que la Grande-Bretagne a maintenu un contrôle significatif sur la défense et la politique étrangère de l'Égypte jusqu'aux années 1950. La Révolution égyptienne de 1952 dirigée par Gamal Abdel Nasser a établi la pleine souveraineté et a inspiré des mouvements d'indépendance à travers l'Afrique, contribuant à la vague de décolonisation qui a suivi dans les années 1950 et 1960."
      },
      sw: {
        question: "Nchi gani ya Afrika ilikuwa ya kwanza kupata uhuru kutoka utawala wa kikoloni katika karne ya 20?",
        options: [
          "Ghana",
          "Libya",
          "Misri",
          "Ethiopia"
        ],
        explanation: "Misri ilikuwa nchi ya kwanza ya Afrika kupata uhuru kutoka utawala wa kikoloni katika karne ya 20, ikipata uhuru wa kinadharia kutoka ulinzi wa Uingereza mwaka 1922. Ingawa Ethiopia ilidumisha uhuru wake katika kipindi chote cha ukoloni (isipokuwa kwa muda mfupi wa uvamizi wa Italia kutoka 1936-1941), na Liberia ilianzishwa kama taifa huru katika karne ya 19, uhuru wa Misri mwaka 1922 uliashiria mwanzo wa mwisho wa ukoloni wa Kizungu barani Afrika. Hata hivyo, ni muhimu kutambua kwamba Uingereza ilidumisha udhibiti mkubwa juu ya ulinzi na sera za kigeni za Misri hadi miaka ya 1950. Mapinduzi ya Misri ya 1952 yaliyoongozwa na Gamal Abdel Nasser yalianzisha uhuru kamili na kuvutia harakati za uhuru katika Afrika nzima, kuchangia katika wimbi la kuondoa ukoloni ambalo lilifuata katika miaka ya 1950 na 1960."
      }
    }
  },
  {
    id: "q30",
    question: "Which African leader was the first democratically elected female president on the continent?",
    options: [
      "Ellen Johnson Sirleaf",
      "Joyce Banda",
      "Ngozi Okonjo-Iweala",
      "Winnie Mandela"
    ],
    correctAnswer: 0,
    explanation: "Ellen Johnson Sirleaf became the first democratically elected female president in Africa when she won the Liberian presidential election in 2005. She took office in January 2006 and served two terms until 2018. Known as the 'Iron Lady,' Sirleaf inherited a country devastated by 14 years of civil war and worked to rebuild Liberia's infrastructure, economy, and international relations. Her achievements in promoting peace and women's rights were recognized with the Nobel Peace Prize in 2011, which she shared with Leymah Gbowee and Tawakkol Karman. Sirleaf's presidency marked a significant milestone for women's political leadership in Africa and globally, paving the way for other female leaders on the continent.",
    category: "leaders",
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1000",
    translations: {
      en: {
        question: "Which African leader was the first democratically elected female president on the continent?",
        options: [
          "Ellen Johnson Sirleaf",
          "Joyce Banda",
          "Ngozi Okonjo-Iweala",
          "Winnie Mandela"
        ],
        explanation: "Ellen Johnson Sirleaf became the first democratically elected female president in Africa when she won the Liberian presidential election in 2005. She took office in January 2006 and served two terms until 2018. Known as the 'Iron Lady,' Sirleaf inherited a country devastated by 14 years of civil war and worked to rebuild Liberia's infrastructure, economy, and international relations. Her achievements in promoting peace and women's rights were recognized with the Nobel Peace Prize in 2011, which she shared with Leymah Gbowee and Tawakkol Karman. Sirleaf's presidency marked a significant milestone for women's political leadership in Africa and globally, paving the way for other female leaders on the continent."
      },
      fr: {
        question: "Quelle dirigeante africaine a été la première femme présidente démocratiquement élue sur le continent?",
        options: [
          "Ellen Johnson Sirleaf",
          "Joyce Banda",
          "Ngozi Okonjo-Iweala",
          "Winnie Mandela"
        ],
        explanation: "Ellen Johnson Sirleaf est devenue la première femme présidente démocratiquement élue en Afrique lorsqu'elle a remporté l'élection présidentielle libérienne en 2005. Elle a pris ses fonctions en janvier 2006 et a servi deux mandats jusqu'en 2018. Connue sous le nom de 'Dame de Fer', Sirleaf a hérité d'un pays dévasté par 14 ans de guerre civile et a travaillé à reconstruire l'infrastructure, l'économie et les relations internationales du Libéria. Ses réalisations dans la promotion de la paix et des droits des femmes ont été reconnues par le Prix Nobel de la Paix en 2011, qu'elle a partagé avec Leymah Gbowee et Tawakkol Karman. La présidence de Sirleaf a marqué une étape importante pour le leadership politique des femmes en Afrique et dans le monde, ouvrant la voie à d'autres dirigeantes sur le continent."
      },
      sw: {
        question: "Kiongozi gani wa Afrika alikuwa rais wa kike wa kwanza kuchaguliwa kidemokrasia katika bara hilo?",
        options: [
          "Ellen Johnson Sirleaf",
          "Joyce Banda",
          "Ngozi Okonjo-Iweala",
          "Winnie Mandela"
        ],
        explanation: "Ellen Johnson Sirleaf alikuwa rais wa kike wa kwanza kuchaguliwa kidemokrasia barani Afrika aliposhinda uchaguzi wa urais wa Liberia mwaka 2005. Aliingia madarakani Januari 2006 na kutumikia vipindi viwili hadi 2018. Akijulikana kama 'Mwanamke wa Chuma,' Sirleaf alirithi nchi iliyoharibiwa na miaka 14 ya vita vya wenyewe kwa wenyewe na alifanya kazi kujenga upya miundombinu ya Liberia, uchumi, na uhusiano wa kimataifa. Mafanikio yake katika kukuza amani na haki za wanawake yalitambuliwa kwa Tuzo ya Amani ya Nobel mwaka 2011, ambayo alishirikiana na Leymah Gbowee na Tawakkol Karman. Urais wa Sirleaf ulikuwa hatua muhimu kwa uongozi wa kisiasa wa wanawake barani Afrika na duniani kote, ukitengeneza njia kwa viongozi wengine wa kike katika bara hilo."
      }
    }
  }
];