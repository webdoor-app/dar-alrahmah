import React from "react";
import { useNavigate } from "react-router-dom";

// Import main project images
import img01 from "../assets/img/galary/01.jpg";
import img04 from "../assets/img/galary/04.png";
import img02 from "../assets/img/galary/02.png";
import img05 from "../assets/img/galary/05.png";
import img07 from "../assets/img/galary/07.jpg";
import img03 from "../assets/img/galary/03.png";
import img06 from "../assets/img/galary/06.png";
import img08 from "../assets/img/galary/08.jpg";
import img09 from "../assets/img/galary/09.jpg";
import img010 from "../assets/img/galary/010.jpg";
import img4 from "../assets/img/galary/4.png";
import img012 from "../assets/img/galary/012.jpg";
import img011 from "../assets/img/galary/011.jpg";

// Import detail images for each project
import project1Img1 from "../assets/img/galary/project1-img1.jpg";
import project1Img2 from "../assets/img/galary/project1-img2.jpg";
import project1Img3 from "../assets/img/galary/project1-img3.jpg";
import project1Img4 from "../assets/img/galary/project1-img4.jpg";
import project1Img5 from "../assets/img/galary/project1-img5.jpg";

import project2Img1 from "../assets/img/galary/project2-img1.png";
import project2Img2 from "../assets/img/galary/project2-img2.png";
import project2Img3 from "../assets/img/galary/project2-img3.png";

import project5Img1 from "../assets/img/galary/project5-img-1.png";
import project5Img2 from "../assets/img/galary/project5-img-2.png";
import project5Img3 from "../assets/img/galary/project5-img-3.png";
import project5Img4 from "../assets/img/galary/project5-img-4.png";
import project5Img5 from "../assets/img/galary/project5-img-5.jpg";
import project5Img6 from "../assets/img/galary/project5-img-6.jpg";
import project5Img7 from "../assets/img/galary/project5-img-7.jpg";

import project8Img1 from "../assets/img/galary/project8-img1.png";
import project8Img2 from "../assets/img/galary/project8-img2.png";
import project8Img3 from "../assets/img/galary/project8-img3.png";
import project8Img4 from "../assets/img/galary/project8-img4.jpg";

import project10Img1 from "../assets/img/galary/project10-img1.jpg";
import project10Img2 from "../assets/img/galary/project10-img2.jpg";
import project10Img3 from "../assets/img/galary/project10-img3.jpg";
import project10Img4 from "../assets/img/galary/project10-img4.jpg";
import project10Img5 from "../assets/img/galary/project10-img5.jpg";

import project3Img1 from "../assets/img/galary/project3-img1.png";
import project3Img2 from "../assets/img/galary/project3-img2.png";
import project3Img3 from "../assets/img/galary/project3-img3.png";
import project3Img4 from "../assets/img/galary/project3-img4.jpg";
import project3Img5 from "../assets/img/galary/project3-img5.png";
import project3Img6 from "../assets/img/galary/project3-img6.png";

import project6Img1 from "../assets/img/galary/project6-img1.png";
import project6Img2 from "../assets/img/galary/project6-img2.png";
import project6Img3 from "../assets/img/galary/project6-img3.jpg";
import project6Img4 from "../assets/img/galary/project6-img4.jpg";
import project6Img5 from "../assets/img/galary/project6-img5.jpg";
import project6Img6 from "../assets/img/galary/project6-img6.png";
import project6Img7 from "../assets/img/galary/project6-img7.jpg";
import project6Img8 from "../assets/img/galary/project6-img8.jpg";

import project7Img1 from "../assets/img/galary/project7-img1.jpg";
import project7Img2 from "../assets/img/galary/project7-img2.jpg";
import project7Img3 from "../assets/img/galary/project7-img3.jpg";
import project7Img4 from "../assets/img/galary/project7-img4.jpg";

import project9Img1 from "../assets/img/galary/project9-img1.jpg";
import project9Img2 from "../assets/img/galary/project9-img2.jpg";
import project9Img3 from "../assets/img/galary/project9-img3.jpg";

import project11Img1 from "../assets/img/galary/project11-img1.jpg";
import project11Img2 from "../assets/img/galary/project11-img2.jpg";
import project11Img3 from "../assets/img/galary/project11-img3.jpg";
import project11Img4 from "../assets/img/galary/project11-img4.jpg";
import project11Img5 from "../assets/img/galary/project11-img5.jpg";
import project11Img6 from "../assets/img/galary/project11-img6.jpg";

import project4Img1 from "../assets/img/galary/project4-img1.jpg";
import project4Img2 from "../assets/img/galary/project4-img2.jpg";
import project4Img3 from "../assets/img/galary/project4-img3.jpg";
import project4Img4 from "../assets/img/galary/project4-img4.jpg";

import project12Img1 from "../assets/img/galary/project12-img1.jpg";
import project12Img2 from "../assets/img/galary/project12-img2.jpg";
import project12Img3 from "../assets/img/galary/project12-img3.png";
import project12Img4 from "../assets/img/galary/project12-img4.png";
import project12Img5 from "../assets/img/galary/project12-img5.jpg";
import project12Img6 from "../assets/img/galary/project12-img6.jpg";

import project8Img1_2 from "../assets/img/galary/project8-img1.jpg";
import project8Img2_2 from "../assets/img/galary/project8-img2.jpg";
import project8Img3_2 from "../assets/img/galary/project8-img3.jpg";

// Import partner logos
import logo3 from "../assets/img/logos/logo3.svg";
import logo7 from "../assets/img/logos/logo7.svg";
import logo8 from "../assets/img/logos/logo8.png";
import logo9 from "../assets/img/logos/logo9.png";
import logo10 from "../assets/img/logos/logo10.png";

// more button icon
import more from "../assets/img/MoreIcon.svg";

export const projects = [
  {
    id: 1,
    image: img01,
    title: " ادارة الحشود ",
    description: " مكة المكرمة",
    date: "1300 م٢",
    categories: [" خدمات هندسية", " تصميم وتخطيط حركة الحشود"],
    detailImages: [
      project1Img1,
      project1Img2,
      project1Img3,
      project1Img4,
      project1Img5,
    ],
    fullDescription:
      "تقديم الخدمات الاستشارية (الدراسات والخدمات والتصاميم والتحليل والدعم الفني) من خلال فريق عمل متخصص في مجال إدارة الحشود حيث تم إعداد ومتابعة تنفيذ خطط إدارة الحشود وبرامج تفويج مجموعات الحجاج في جميع المشاعر المقدسة،والتي تشمل على مراحل التحضير الأولية والتجهيز وإدارة موسمي حج 1440هـ و 1441هـ.يهدف المشروع إلى تحقيق هدف استراتيجي هام من خلال المساهمة في دعم استراتيجية وأهداف الهيئة الملكية لمدينة مكة المكرمة من خلال تأسيس ضوابط وآليات عمل (تصميم وتخطيـط - تطــوير –إشراف و متابعــة ومراقبــة - تشغيل) لإدارة حركة الحشود والنقل بالمشاعر المقدسة.",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo3,
    statistics: "المشروع في ارقام:",
    budget: ["أكثر من 7000 موظف", "تنظيم و ادارة 9 محطات قطار"],
  },
  {
    id: 2,
    image: img04,
    title: " مبنى اداري سراكو",
    description: " الدمام",
    date: "3600 م",
    categories: ["تصميم معماري"],
    detailImages: [project2Img1, project2Img2, project2Img3],
    fullDescription:
      "مبنــى ســراكو – هــو أول مشــروع مــن نوعــه يقــام فــي مدينــة الدمــام,مبنـى إداري تجـاري مسـتقل، وكانـت الفكـرة الاساسية لأقامة هـذا المشـروع وتخطيطــه هــي احتيــاج العديــد مــن الشــركات المتوســطة والكبيــرة لامتــاك مقــر خــاص بالشــركة يحمــل اســمها ويضــم جميــع موظفــي الشــركة ويجمــع كافــة الأنشطة والادارات والاقسام الخاصـة بهـا، ممـا يسـاهم بشـكل أساسـي فـي خلـق صــورة ذهنيــة عــن حجــم الشــركة، وكذلــك لمــا لــه مــن فائــدة اســتثمارية تعــود عليهـم ) ضمـن الاصول الثابتـة للشـركة والتـي تتزايـد قيمتهـا مـع الوقـت ( ولحريـة وســهولة التقســيم الداخلــي وتوزيــع الانشطة والادارات. المشــروع يقــع فــي قلــب الدمــام ويتوســط أكبــر التجمعــات التجاريــة والادارية والتعليميــة بالدمــام، ويســهل الوصــول إليــه مــن كافــة المحــاور الرئيســة المحيطــة بالدمــام. يمتــاز موقــع المشــروع بارتفــاع المســتوى الاجتماعي والمالــي فــي المنطقــة المحيطـة بـه، حيـث أكبـر وأفخـم التجمعـات السـكنية الراقيـة والمشـروعات الكبـرى، إضافـة إلـى وجـود كافـة الخدمـات الاساسية والترفيهيـة والسـياحية حـول الموقـع.",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: ["اكثر من 100مكتب إداري", "15 محل تجاري", "عدد مستفيد 1800"],
  },
  {
    id: 3,
    image: img02,
    title: " مركز الترحيب",
    description: " المدينة المنورة",
    date: "30000 م",
    categories: [" الخبرة النوعية", "تصميم الواجهات التاريخية "],
    detailImages: [
      project5Img1,
      project5Img2,
      project5Img3,
      project5Img4,
      project5Img5,
      project5Img6,
      project5Img7,
    ],
    fullDescription:
      " يتكــون المبنــى مــن مجموعــة أقســام تظهــر روعــة الاسلام عــن طريــق لوحــات بانوراميــة، وتــم دراســة حركــة الــزوار لجــذب المشــاهد بشــكل انسـيابي لاسـتكمال جميـع الاقسام، والقسـم الاول يـروي مكانـة يثـرب قبـل الاسلام فــي جزيــرة العــرب، والقســم الثانــي يركــز علــى الميــراث النبــوي وجهـاد الصحابـة فـي نشـر الاسلام الصحيـح، والقسـم الثالـث يعـرض أسـاليب نشـر الوعـي الاسلامي الصحيـح فـي العالـم، وتضمـن المركـز قاعـات عـرض وصالونـات واسـتراحات ومحـلات هدايـا وسـاحات أنشـطة، كمـا تضمـن المركـز خدمـات تقنيـة المعلومـات والصيانـة وغـرف الكهربـاء، وتـم تسـهيل حركـة الزائــر ليتمتــع بالرؤيــة المميــزة لاقسـام المعـرض.",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: ["تصميم ثلاث اقسام مختلفة للزوار", "تصميم اكثر من 8 مناطق خدمات مختلفة"],
  },
  {
    id: 4,
    image: img05,
    title: " وادي عرنه",
    description: " مكة المكرمة",
    date: "9 م",
    categories: [" الخبرة النوعية   ", "تطوير مرافق ضيوف الرحمن "],
    detailImages: [project8Img1, project8Img2, project8Img3, project8Img4],
    fullDescription:
      "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع",
    location: " ",
    area: "9 م",
    completionDate: "2023",
    partner: logo3,
    statistics: "المشروع في ارقام:",
    budget: [
      "نواع مختلفة من المباني الخدمية",
      "+ 5 انواع مختلفة من المباني المخصصة للترفيه",
      "3 مناطق استثمارية لاستقبال الزوار",
    ],
  },
  {
    id: 5,
    image: img07,
    title: " تشغيل وصيانة التشجير للشوارع والحدائق",
    description: " مكة المكرمة",
    date: "1300 م٢",
    categories: [
      "التصميم والاشراف للمشاريع ",
      " تشغيل وصيانة",
      "الخدمات الهندسية",
    ],
    detailImages: [
      project10Img1,
      project10Img2,
      project10Img3,
      project10Img4,
      project10Img5,
    ],
    fullDescription:
      "يهدف المشروع إلى تقديم خدمات استشارية للإشراف على مشروعات تشغيل وصيانة التشجير للشوارع والحدائق العامة بمكة المكرمة؛ بما يحافظ على مكانتها، ويرتقي بالمستوى الحضاري اللائق بها",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: [
      "عمل المشروع في 5 نطاقات في منطقة مكة المكرمة",
      "الاشراف على أكثر 200 ألف شجرة",
      "الاشراف على أكثر من 160 بئر",
      "تهيئة أكثر من 1,500,000 متر مربع من المسطحات الخضراء",
      "إضافة 5000 عنصر معماري يضفي لمسة جمالية",
      "انشاء أكثر من 8 حدائق جديدة",
      "الاشراف على مساحة تتجاوز 350كم2",
      "الاشراف على أكثر من 100 شارع رئيسي",
    ],
  },
  {
    id: 6,
    image: img03,
    title: " مجمعات الخدمات الحكومية",
    description: " الجموم",
    date: "50000 م٢",
    categories: ["تصميم عمراني", " تصميم معماري"],
    detailImages: [
      project3Img1,
      project3Img2,
      project3Img3,
      project3Img4,
      project3Img5,
      project3Img6,
    ],
    fullDescription:
      "يهـدف المشـروع إلى تحسـين أسـلوب إدارة التنمية العمرانيــة بمنطقــة مكــة المكرمــة، مــن خلال تحقيــق المركزيــة فــي توزيــع وإقامــة مراكــز الخدمـات الحكوميـة، فـي صـورة مجمعـات خدميـة موحــدة بمراكــز التنميــة القرويــة بمحافظــة الجمـوم، والبالـغ عددهـا ( 8 مراكـز قرويـة )، بحيـث تبلـغ مسـاحة المجمـع الواحـد نحـو (50 الف متـر مربــع) ، ليحــوي كل مجمــع بداخلــه مبنــي للامارة، ومبنــى للبلديــة، و مراكــز للشــرطة، والدفــاع المدنــي، والمــرور، وفــروع للجــوازات، والاحوال المدنيــة، والمحكمــة الشــرعية، إلــى جانــب مركــز صحــي، ومــدارس ثانويــة بنيــن وبنــات، ومســجد جامـع، ومكتـب للتوعيـة والارشاد ، ومكتبـة عامـة، وقاعــة مؤتمــرات، وجمعيــة زراعيــة، وأنشــطة حرفيــة ونســائية، بالاضافة إلــى مبنــى أنشــطة اســتثمارية إداريــة تجاريــة مكتبيــة.",
    location: "المدينة المنورة",
    area: "50000 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: [
      "30 دراسة بيئية و مرورية",
      "يخدم 7 مناطق رئيسية",
      "+ 7 الاف مستفيد",
      "+ 30 الف مسطحات مبينة",
    ],
  },
  {
    id: 7,
    image: img06,
    title: " مشروع استشاري للجنة التنفيذية",
    description: " مكة المكرمة",
    date: "70 م",
    categories: ["التخطيط الحضري", "التوجيه الإستراتيجي للمناطق"],
    detailImages: [
      project6Img1,
      project6Img2,
      project6Img3,
      project6Img4,
      project6Img5,
      project6Img6,
      project6Img7,
      project6Img8,
    ],
    fullDescription:
      "يهدف المشروع إلى تطوير المخطط الحضري والبنية التحتية لجميع منطقة مكة المكرمة من خلال تقديم خدمات هندسية استشارية للجنة التنفيذية للمخططات الخاصة والاستثمارية. يشمل المشروع اعتماد وتقييم أكثر من 60 مخططًا بمساحة تتجاوز 70 كم2، ومتابعة تنفيذ مشاريع الطرق والشوارع، ودراسة واعتماد التصاميم الهندسية، وإعداد التقارير الفنية اللازمة. كما يساهم المشروع في تحسين كفاءة الإجراءات وسرعة إنجاز المعاملات، من خلال إنشاء قاعدة بيانات متكاملة وتطبيق أحدث التقنيات في مجال نظم المعلومات الجغرافية",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: [
      "اعتماد والإشراف على اكثر من 60 مخطط خاص واستثماري من التصاميم التنفيذية و التقارير الفنية",
      "أعمال الرفع المساحي",
      "تدقيق واعتماد التصاميم",
      "متابعة تنفيذ مشاريع الطرق والشوارع",
    ],
  },
  {
    id: 8,
    image: img08,
    title: " روضة أطفال نوذجية",
    description: " مكة المكرمة",
    date: "1500 م٢",
    categories: [" تصميم عمراني  ", "تصميم معماري "],
    detailImages: [project7Img1, project7Img2, project7Img3, project7Img4],
    fullDescription:
      "روضة كهاتين – هي روضة اطفال نموذجية تقع بمدينة مكة المكرمة صممت علي معايير عالية حيث تم مراعاة الشكل و الوظيفة داخل و خارج المبني من حيث الخامات المستخدمة و الالوان المتنوعة لجذب انظار الاطفال و مستخدمين المبنى",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo10,
    statistics: "المشروع في ارقام:",
    budget: ["290 طالب"],
  },
  {
    id: 9,
    image: img09,
    title: " دار المدينة ",
    description: " المدينة المنورة",
    date: "611 م",
    categories: [" تصميم عمراني  ", "تصميم معماري "],
    detailImages: [project9Img1, project9Img2, project9Img3],
    fullDescription:
      "دار المدينة – هو مبني سكني – اداري – تجاري يقع بالمدينة المنورة بالمملكة العربية السعودية , تم تصميم المبني علي الطراز الحديث بحيث يتماشي الشكل العام للمبني مع تنوع استخداماته , كما تم استخدام المسطحات الزجاجية الكبيرة نسبيا في واجاهات المبني لتضيف له الاتصال البصري و الاضاءة الطبيعية و الرحابة في الاستخدام و التصميم .",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: ["55 عدد المستفيدين", "عدد الشقق", "عدد الأدوار"],
  },
  {
    id: 10,
    image: img010,
    title: " عمارة سكنية",
    description: " مكة المكرمة",
    date: "750 م",
    categories: ["تصميم عمراني", "تصميم معماري"],
    detailImages: [
      project11Img1,
      project11Img2,
      project11Img3,
      project11Img4,
      project11Img5,
      project11Img6,
    ],
    fullDescription:
      "عمارة حي ام الكتاد – هو مبني سكني خاص يقع بمدينة مكة المكرمة حي الملك فهد , تم تصميم المبني علي الطراز الحديث بحيث تم استخدام كتل معمارة متداخلة في تصميم المبني كما تم استخدام خامات ذات جمالية بصرية و استدامة في التصميم الخارجي للمبني .",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: ["فرد 50"],
  },
  {
    id: 11,
    image: img4,
    title: " جامع العباس",
    description: " مكة المكرمة",
    date: "920 م",
    categories: ["تصميم عمراني", "تصميم معماري"],
    detailImages: [project4Img1, project4Img2, project4Img3, project4Img4],
    fullDescription:
      "جامع العباس هو مسجد جامع يقع بحي التنعيم بمكة المكرمة – تم تصميمه علي الطراز الاسلامي الحديث حيث تم تبسيط المفردات المعمارية الاسلامية و استخدامها في واجهات المسجد بالكامل",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo8,
    statistics: "المشروع في ارقام:",
    budget: ["650 مصلي"],
  },
  {
    id: 12,
    image: img012,
    title: " مسجد قباء",
    description: " المدينة المنورة",
    date: "5100 م",
    categories: [
      "الخبرة النوعية ",
      "تطوير مرافق ضيوف الرحمن ",
      "الاشراف والتنفيذ ",
    ],
    detailImages: [
      project12Img1,
      project12Img2,
      project12Img3,
      project12Img4,
      project12Img5,
      project12Img6,
    ],
    fullDescription:
      "استهدف المشروع إعادة تأهيل حالة مسجد قباء والمباني المرافقة له، وتأهيل الأنظمة الحالية الخاصة به، من خلال تقييم الوضع الراهن وعمل المقترحات والتوصيات اللازمة، وإعداد التصميمات والمخططات الخاصة بعملية التطوير، ومن ثم الرسومات التفصيلية ومستندات الطرح اللازمة للتنفيذ",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo7,
    statistics: "المشروع في ارقام:",
    budget: [
      "+50تقرير فني ونوعي",
      "+150 مخطط مساحي (AS built)",
      "+30 زيارة ميدانية لتقييم الوضع القائم للمسجد",
      "+ 50 مخطط هندسي للحلول المقترحة والمعتمدة",
      "+ 20 اجتماع مع الجهات ذات العلاقة بالمسجد",
      "3 ورش عمل",
      "+ 50 اجتماع دوري مع شركاء الأعمال والشركات المنفذة",
    ],
  },
  {
    id: 13,
    image: img011,
    title: " مجمع الطوارئ",
    description: " مكة المكرمة بالمشاعر المقدسة ",
    date: "260000 م",
    categories: [" الخبرة النوعية", " تطوير مرافق ضيوف الرحمن"],
    detailImages: [project8Img1_2, project8Img2_2, project8Img3_2],
    fullDescription:
      "يقع مشروع مجمع الطوارئ بمنطقة المشاعر المقدسة – مكة المكرمة حيث يعتبر مشروع مجمع الطوارئ من المشروعات الهامة والاستراتيجية؛ حيث يشتمل على ثلاث مناطق رئيسية لإدارة الازمات وقت الطوارئ وتشغل مساحة المجمع نحو 185 ألف م 2 حيث تم عمل : دراسات الوضع الراهن للمشروع. دراسات المخطط العام وبدائل الفكرة التصميمية للمخطط. إعداد التصميمات المعمارية والإنشائيةإعداد الرسومات التنفيذية للمخطط العام والمباني وإعداد كراسات الطرح على المقاولين.",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",
    partner: logo9,
    statistics: "المشروع في ارقام:",
    budget: [
      "+ 16 مبني خدمي",
      "5 الاف ثلاجة موتى",
      "+ 200 موظف",
      "+ 50 مكتب اداري",
      "3000 مقبرة",
      "+ 15 الاف مستفيد مباشر",
    ],
  },
];
function MasonaryGrid({
  limit,
  showMoreButton = false,
  selectedProjectIds = [],
  isProjectPage = false,
}) {
  const navigate = useNavigate();

  const projectsWithIds = projects.map((project, index) => ({
    ...project,
    id: index + 1,
  }));

  const filteredProjects =
    selectedProjectIds.length > 0
      ? projectsWithIds.filter((project) =>
          selectedProjectIds.includes(project.id)
        )
      : projectsWithIds;

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const handleSeeMore = () => {
    navigate("/projects");
  };

  const handleProjectClick = (projectId) => {
    if (isProjectPage) {
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <div className="masonry-grid">
    {displayedProjects.map((project, index) => (
      <div
        key={project.id}
        className={`masonry-item cursor-pointer relative group mb-4 rounded-1xl md:rounded-2xl h-fit font-camel overflow-hidden z-10   ${
          showMoreButton && index === displayedProjects.length - 1
            ? "md:rounded-bl-none rounded-bl-none "
            : ""
        }`}
        onClick={() => handleProjectClick(project.id)}
      >
        <div className="card-content border border-accent  rounded-xl md:rounded-2xl 2xl:border-none  overflow-hidden ">
          <div className="relative -z-30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover "
              loading="lazy"
            />
            <div className="absolute inset-0 rounded- bg-black/30 transition-opacity duration-300 group-hover:bg-black/40 " />
            <div className="absolute inset-0 p-2 md:px-5 sm:p- flex flex-col rounded- justify-between text-accent ">
              <div className="text-content text-right">
                <h1 className="text-sm  sm:text-lg md:text-xl xl:text-[47.12px] md:leading-[60px] h-fit md:mt- text-wrap font-bold mb-1">
                  {project.title}
                </h1>
                <p className="text-xs sm:text-base opacity-90  line-clamp-2 md:mb-2">
                  {project.description}
                </p>
                <p className="text-xs sm:text-base">{project.date}</p>
              </div>
              <div className="categories flex  flex-wrap gap-2 mt-auto  justify-start">
                {project.categories.map((category, catIndex) => (
                  <button
                    key={catIndex}
                    className="px-2 py-1 px text-[8px] text-wrap sm:text-sm md:text-base bg-transparent md:text-nowrap border border-accent rounded-md md:rounded-lg hover:bg-[#6a4a2d] transition-all backdrop-blur-2"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {showMoreButton && index === displayedProjects.length - 1 && (
          <div className="relative   flex  rounded-bl-none items-end justify-end ">
            <div className="btn-header">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSeeMore();
                }}
                className=" px-8 py- sm:px-6 sm:py-3 bg-accent absolute left-0 bottom-0 flex items- pt-3 md:pt-4 justify-center items-start gap-1 text-black h-auto sm:h-28 w-20 sm:w-36 md:w-36 lg:w-40 xl:w-48 md:rounded-tr-[2rem] rounded-2xl rounded-bl-none transition-all font-semibold"
              >
                <img src={more} alt="" className="w-8 sm:w-10 z-40" />
                <span className="md:text-xl lg:text-2xl text-primary text-sm text-wrap">
                  تصفــــــح المزيــــد
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
  );
}

export default MasonaryGrid;