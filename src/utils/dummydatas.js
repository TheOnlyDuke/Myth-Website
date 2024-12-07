export const universities = [
  { id: 0, name: "دانشجو نیستم", availablity: true },
  { id: 1, name: "دانشگاه تهران", availablity: false },
  { id: 2, name: "دانشگاه شهید بهشتی", availablity: false },
  { id: 3, name: "دانشگاه فردوسی مشهد", availablity: false },
  { id: 4, name: "دانشگاه حکیم سبزواری", availablity: true },
  { id: 5, name: "دانشگاه آزاد واحد قزوین", availablity: false },
];

import mosalasat from "../../public/images/subjects/mosalasat.png";
import degree2 from "../../public/images/subjects/degree2.png";
import logarithm from "../../public/images/subjects/logarithm.png";
import hendese from "../../public/images/subjects/hendese.png";
import borders from "../../public/images/subjects/borders.png";
import theory from "../../public/images/subjects/theory.png";
import limit from "../../public/images/subjects/limit.png";
import posiblities from "../../public/images/subjects/posiblities.png";
import functions from "../../public/images/subjects/functions.png";

export const subjects = [
  { id: 1, name: "مثلثات", numOfEp: 15, difficulty: 2, icon: mosalasat },
  { id: 2, name: "معدلات درجه دو", numOfEp: 16, difficulty: 2, icon: degree2 },
  { id: 3, name: "لگاریتم", numOfEp: 21, difficulty: 3, icon: logarithm },
  { id: 4, name: "هندسه", numOfEp: 10, difficulty: 2, icon: hendese },
  { id: 5, name: "بردارها", numOfEp: 8, difficulty: 1, icon: borders },
  { id: 6, name: "تئوری اعداد", numOfEp: 17, difficulty: 3, icon: theory },
  { id: 7, name: "حد و پیوستگی", numOfEp: 8, difficulty: 1, icon: limit },
  {
    id: 8,
    name: "آمار و احتمال",
    numOfEp: 12,
    difficulty: 2,
    icon: posiblities,
  },
  { id: 9, name: "تابع ها", numOfEp: 10, difficulty: 1, icon: functions },
];

import { OpenBook, Pencil, RescueTube } from "./icons";
export const blogs = [
  {
    id: 1,
    title: "مقالات آموزشی",
    description: "نوشته های با هدف آگاهی بیشتر",
    icon: OpenBook,
  },
  {
    id: 2,
    title: "راهنمای استفاده",
    description: "آموزش استفاده از خدمات مجموعه",
    icon: RescueTube,
  },
  { id: 3, title: "جزوات درسی", description: "جمع بندیت با ما", icon: Pencil },
];

import SubjectIntro1 from "../../public/images/SubjectIntro/SubjectIntro1.png";
import SubjectIntro2 from "../../public/images/SubjectIntro/SubjectIntro2.png";
import SubjectIntro3 from "../../public/images/SubjectIntro/SubjectIntro3.png";
export const SubjectIntroPics = [
  { id: 1, src: SubjectIntro3, alt: "SubjectIntro3" },
  { id: 2, src: SubjectIntro2, alt: "SubjectIntro2" },
  { id: 3, src: SubjectIntro1, alt: "SubjectIntro1" },
];

export const TopSubjects = [
  { id: 1, name: "مثلثات", icon: mosalasat },
  { id: 2, name: "معدلات درجه دو", icon: degree2 },
  { id: 3, name: "لگاریتم", icon: logarithm },
  { id: 4, name: "هندسه", icon: hendese },
  { id: 5, name: "بردارها", icon: borders },
];

import { Layers } from "./icons";
export const Questions = [
  {
    id: 1,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 2,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 3,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 4,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 5,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 6,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 7,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
  {
    id: 8,
    title: "سوال انتگرال مرتبه دوم",
    group: "تابع ها",
    difficulty: "سخت",
    score: 13,
    icon: Layers,
    latex: "g(x) = sin(x)",
  },
];

export const descriptions = {
  مثلثات:
    "مثلثات یکی از مهم‌ترین مباحث ریاضی است که کاربرد گسترده‌ای در رشته‌های مهندسی، فیزیک، نجوم و حتی کامپیوتر دارد. این موضوع شامل کار با زوایا، نسبت‌های مثلثاتی و فرمول‌های خاص است که در مسائل پیشرفته‌تری مثل آنالیز سیگنال و طراحی سیستم‌های الکترونیکی استفاده می‌شود. یادگیری این مبحث پایه‌ای از طریق اپلیکیشن سیگما به شما کمک می‌کند تا در امتحانات دانشگاهی و کاربردهای عملی موفق باشید.",
  "معادلات درجه دو":
    "معادلات درجه دو یکی از مفاهیم اساسی در ریاضیات است که در اکثر رشته‌های دانشگاهی از جمله مهندسی، علوم پایه و اقتصاد مورد استفاده قرار می‌گیرد. این معادلات به حل مسائل مربوط به مسیر پرتابه‌ها، بهینه‌سازی و حتی تحلیل نمودارهای مالی کمک می‌کنند. در اپلیکیشن سیگما، شما می‌توانید به راحتی روش‌های حل معادلات درجه دو مانند تجزیه، فرمول کلی و تکمیل مربع را یاد بگیرید.",
  لگاریتم:
    "لگاریتم یکی از موضوعات مهم و پرکاربرد در ریاضیات پیشرفته است که در زمینه‌های گسترده‌ای از جمله علوم کامپیوتر، مهندسی، زیست‌شناسی و تحلیل داده‌ها به کار می‌رود. این مبحث درک مفاهیم رشد نمایی و کاهش، مقیاس‌بندی داده‌ها و معادلات پیچیده را آسان می‌کند. با استفاده از اپلیکیشن سیگما، یادگیری لگاریتم ساده‌تر از همیشه خواهد بود و شما را برای کاربردهای آکادمیک و عملی آماده می‌کند.",
  هندسه:
    "هندسه دانش مطالعه اشکال، زوایا و خواص فضایی آن‌ها است که نقش کلیدی در معماری، طراحی، نقشه‌کشی و حتی گرافیک کامپیوتری دارد. این مبحث علاوه بر تقویت مهارت‌های فضایی، به درک بهتر مفاهیم ریاضیات و حل مسائل عملی کمک می‌کند. با اپلیکیشن سیگما، می‌توانید اصول پایه هندسه و مفاهیم پیشرفته‌تر مانند قضیه‌های مثلثاتی و تحلیل فضایی را به آسانی بیاموزید.",
  بردارها:
    "بردارها یکی از ابزارهای اساسی در ریاضیات و فیزیک هستند که برای تحلیل حرکات، نیروها و جهت‌ها به کار می‌روند. از رشته‌های مهندسی تا شیمی کوانتومی، بردارها به عنوان زبان ریاضیات مدرن اهمیت ویژه‌ای دارند. با یادگیری این مبحث در اپلیکیشن سیگما، شما می‌توانید اصول پایه‌ای و کاربردهای پیشرفته بردارها را درک کرده و برای دانشگاه و پروژه‌های عملی آماده شوید.",
  "تئوری اعداد":
    "تئوری اعداد یکی از شاخه‌های زیبا و بنیادین ریاضیات است که به بررسی اعداد صحیح و خواص آن‌ها می‌پردازد. این مبحث نقش مهمی در رمزنگاری، امنیت داده‌ها، الگوریتم‌ها و حتی نجوم ایفا می‌کند. با یادگیری تئوری اعداد در اپلیکیشن سیگما، می‌توانید مهارت‌های خود را در زمینه‌های تحقیقاتی و کاربردهای روزمره تقویت کنید.",
  "حد و پیوستگی":
    "حد و پیوستگی، پایه‌ای‌ترین مفاهیم در حسابان هستند که برای درک تغییرات و تحلیل رفتار توابع به کار می‌روند. این مبحث در رشته‌های مهندسی، فیزیک، اقتصاد و حتی علوم کامپیوتر نقش کلیدی دارد. یادگیری حد و پیوستگی از طریق اپلیکیشن سیگما، به شما در فهم مفاهیمی مانند مشتق و انتگرال کمک می‌کند و موفقیت شما را در دانشگاه تضمین می‌کند.",
  "آمار و احتمال":
    "آمار و احتمال از موضوعات حیاتی در علوم داده، تحلیل بازار، هوش مصنوعی و بسیاری از رشته‌های مهندسی هستند. این مبحث ابزارهایی برای تحلیل داده‌ها و پیش‌بینی رویدادها فراهم می‌کند که در تصمیم‌گیری‌های روزمره و حرفه‌ای ضروری هستند. با استفاده از اپلیکیشن سیگما، شما می‌توانید اصول آمار و احتمال را به روشی ساده و کاربردی بیاموزید.",
  تابع‌ها:
    "تابع‌ها یکی از اصلی‌ترین موضوعات ریاضی هستند که پایه‌ای برای حسابان، جبر و بسیاری از علوم دیگر محسوب می‌شوند. این مبحث به بررسی ارتباط بین متغیرها می‌پردازد و درک آن برای تحلیل مسائل پیچیده‌تر ضروری است. در اپلیکیشن سیگما، شما می‌توانید مفهوم تابع‌ها را از پایه تا پیشرفته به بهترین شکل یاد بگیرید و از کاربردهای آن در دانشگاه و زندگی روزمره بهره ببرید.",
};

export const records = [
  {
    subject: "مباحث تاریخ (سخت)",
    correct: 24,
    incorrect: 6,
    score: 145,
    date: "1402/04/06",
    time: "21:23",
  },
  {
    subject: "مباحث حد و پیوستگی (متوسط)",
    correct: 16,
    incorrect: 14,
    score: 78,
    date: "1402/04/06",
    time: "21:23",
  },
  {
    subject: "مباحث ماتریکس (سخت)",
    correct: 18,
    incorrect: 12,
    score: 114,
    date: "1402/04/11",
    time: "13:12",
  },
  {
    subject: "مباحث بردار ها (آسان)",
    correct: 25,
    incorrect: 5,
    score: 146,
    date: "1402/04/20",
    time: "21:23",
  },
];
