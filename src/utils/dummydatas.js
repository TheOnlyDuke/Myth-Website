export const universities = [
  { id: 0, name: "دانشجو نیستم", availablity: true },
  { id: 1, name: "دانشگاه تهران", availablity: false },
  { id: 2, name: "دانشگاه شهید بهشتی", availablity: false },
  { id: 3, name: "دانشگاه فردوسی مشهد", availablity: false },
  { id: 4, name: "دانشگاه حکیم سبزواری", availablity: true },
  { id: 5, name: "دانشگاه آزاد واحد قزوین", availablity: false },
];


import mosalasat from '../../public/images/subjects/mosalasat.png'
import degree2 from "../../public/images/subjects/degree2.png"
import logarithm from "../../public/images/subjects/logarithm.png"
import hendese from "../../public/images/subjects/hendese.png"
import borders from "../../public/images/subjects/borders.png"
import theory from "../../public/images/subjects/theory.png"
import limit from "../../public/images/subjects/limit.png"
import posiblities from "../../public/images/subjects/posiblities.png"
import functions from "../../public/images/subjects/functions.png"

export const subjects = [
  {id : 1,name: "مثلثات", numOfEp: 15,difficulty: 2, icon : mosalasat},
  {id : 2,name: "معدلات درجه دو", numOfEp: 16,difficulty: 2, icon : degree2},
  {id : 3,name: "لگاریتم", numOfEp: 21,difficulty: 3, icon: logarithm},
  {id : 4,name: "هندسه", numOfEp: 10,difficulty: 2, icon: hendese},
  {id : 5,name: "بردارها", numOfEp: 8,difficulty: 1, icon: borders},
  {id : 6,name: "تئوری اعداد", numOfEp: 17,difficulty: 3, icon: theory},
  {id : 7,name: "حد و پیوستگی", numOfEp: 8,difficulty: 1, icon: limit},
  {id : 8,name: "آمار و احتمال", numOfEp: 12,difficulty: 2, icon: posiblities},
  {id : 9,name: "تابع ها", numOfEp: 10,difficulty: 1, icon: functions},
];

import { OpenBook, Pencil, RescueTube } from './icons';
export const blogs = [
  {id : 1,title: "مقالات آموزشی", description: "نوشته های با هدف آگاهی بیشتر", icon : OpenBook},
  {id : 2,title: "راهنمای استفاده", description: "آموزش استفاده از خدمات مجموعه", icon : RescueTube},
  {id : 3,title: "جزوات درسی", description: "جمع بندیت با ما", icon : Pencil},
]
