
const LESSON_ONE = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/Lesson1.mp4'
const LESSON_TWO = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/lesson%202.mp4'
const LESSON_THREE = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/lesson3.mp4'
const LESSON_FOUR = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/lesson4.mp4'
const LESSON_FIVE = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/lesson%205.mp4'
const LESSON_SIX_PART1 = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/lesson6p1.mp4'
const LESSON_SIX_PART2 = 'https://foxtraderslesson.nyc3.cdn.digitaloceanspaces.com/lesson6p2.mp4'

export const lessons = [
  {
    name: 'Урок 1. Технический анализ',
    videoUrl: LESSON_ONE,
    list: [
      {
        title: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Свечи и свечные модели',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерный анализ в сочетании со свечным',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерные аномалии',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
    ]
  },

  {
    name: 'Урок 2. Фазы рынка, Скользящие средние, индикатор RSI, Market Profile (Профиль рынка)',
    videoUrl: LESSON_TWO,
    homework: [
      {
        text: 'Необходимо указать на графике восходящий, нисходящий тренд. Отметить места, где один тренд сменил другой. \n' +
        'Необходимо указать на графике боковое движение после нисходящего тренда, указать боковое движение после восходящего тренда. Отметить возникшие условия в момент выхода из бокового движения. '
      },
      {
        text: 'Найти медвежьи и бычьи дивергенции со сменой периодов RSI.'
      },
      {
        text: 'Отразить на графике моменты где цена выходит над МА(периоды - средняя за неделю, средняя за 2 недели, средняя за 4 недели) \n' +
          'Отразить на графике моменты где цена уходит под МА (периоды как и в восходящем) \n' +
          'Примечание: если вы выполняете ДЗ на ТФ от 1 дня и выше, то периоды имеет смысл использовать более "длинные" за пол года например.'
      },
      {
        text: 'Найти и отобразить на графике ситуации, где по индикатору MarketProfile день закрылся выше/ниже относительно предыдущего, указать это на графике. В процессе выполнения обратите внимание на ситуацию по RSI и МА'
      }
    ],
    links: [
      {label: 'Памятка к прошедшему уроку - ', link: 'https://teletype.in/@foxtraders/lMksmZa3dev', linkName: 'teletype'},
      {label: 'Сайт альтернатива трейдингвью где есть marketprofile - ', link: 'https://www.tradinglite.com/join?ref=foxauto', linkName: 'tradinglite'},
    ],
    examples: [
      {
        label: 'Пример 1',
        link: 'https://tradermake.money/trade/v2/JLpQ1W/?ref=7ZR1O7'
      },
      {
        label: 'Пример 2',
        link: 'https://tradermake.money/trade/v2/JKpgng/?ref=7ZR1O7',
      }

    ],
    list: []
  },

  {
    name: 'Урок 3. Виды ордеров и принципы их сведения, Ценовые уровни и логика их формирования, Объёмы торгов и их влияние на цену, Дельта и кумулятивная дельта в сочетании с ценовыми уровнями',
    videoUrl: LESSON_THREE,
    homework: [
      {
        text: 'Указать на графике уровни поддержки и сопротивления сформированные крупными кластерными скоплениями (Дельта, обьемы, bid\\ask). \n' +
          'Необязательно все условия должны быть в рамках одного уровня, но что-то одно нужно отметить обязательно.'
      },
      {
        text: 'Найти на графике ситуации по кум дельте.'
      },
      {
        text: 'Отобразить ситуации где есть дивергенции по столбиковой дельте. Так же отразить моменты где по дельте происходило уменьшение продаж/покупок и происходил разворот.'
      },
    ],
    links: [
      {label: 'Памятка к прошедшему уроку - ', link: 'https://teletype.in/@foxtraders/YW6cDH9b--Z', linkName: 'teletype'},
      {label: 'Дополнения по теме дельта\\кум дельта - ', link: 'https://atas.net/ru/vozmojnosti-atas/indikatory/chto-takoe-delta/', linkName: 'atas.net'},
      {label: 'Дополнения по механике сведения ордеров - ', link: 'https://atas.net/ru/obemnyj-analiz/osnovi-obyomnogo-analiza/svedenie-orderov-na-birzhe/', linkName: 'atas.net'},
    ],
    list: []
  },

  {
    name: 'Урок 4. Разворотные свечные модели в сочетании с дельтой, Открытый интерес и его применение, Обьем торгов и его влияние на цену, Сетка Фибоначчи и мифы с ней связанные',
    videoUrl: LESSON_FOUR,
    homework: [
      {
        text: 'Указать на графике пройденные свечные модели, подкрепить по возможности указанием ситуации по дельте.'
      },
      {
        text: 'Отобразить ситуации сформированные открытым интересом.'
      },
    ],

    links: [
      {label: 'Памятка к прошедшему уроку - ', link: 'https://teletype.in/@foxtraders/QsNMwr2Ndkm', linkName: 'teletype'},
    ],
    list: []
  },

  {
    name: 'Урок 5.',
    videoUrl: LESSON_FIVE,
    homework: [],
    links: [],
    list: []
  },

  {
    name: 'Урок 6.',
    videoUrl: LESSON_SIX_PART1,
    videoSecondaryUrl: LESSON_SIX_PART2,
    homework: [],
    links: [],
    list: []
  },
]