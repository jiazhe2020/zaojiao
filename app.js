/* ====== 小派早教工作台 - 数据与逻辑 ====== */

/* ====== 每周主题系统 ====== */
const THEMES = [
  {key:'color',name:'颜色认知周',icon:'🎨',desc:'认识红黄蓝绿等基础颜色，生活中的颜色指认与配对',cls:'color'},
  {key:'fruit',name:'水果认知周',icon:'🍎',desc:'认识常见水果的名称、颜色、味道，动手剥切体验',cls:'fruit'},
  {key:'animal',name:'动物认知周',icon:'🐰',desc:'认识常见动物及叫声，模仿动物动作',cls:'animal'},
  {key:'body',name:'五官身体周',icon:'👀',desc:'认识眼睛鼻子嘴巴等五官和身体部位',cls:'body'},
  {key:'daily',name:'日常物品周',icon:'🥄',desc:'认识碗勺杯鞋等生活中常见物品',cls:'daily'},
  {key:'housework',name:'家务动手周',icon:'🧹',desc:'参与简单家务，擦扫洗叠，体验生活技能',cls:'housework'},
  {key:'nature',name:'自然探索周',icon:'🌿',desc:'探索树叶石头花朵，感受自然的触感与色彩',cls:'nature'}
];

/* ====== 精细动作游戏库（按主题，每主题6个，每日选3个轮换） ====== */
const FINE_ACTIVITIES = {
  color:[
    {name:'红豆绿豆分拣',desc:'红豆绿豆混合放托盘，宝宝用手指捏取分开，放入两个小碗',tag:'捏取·分类'},
    {name:'彩色夹子配对',desc:'准备不同颜色晾衣夹，让宝宝捏开夹到对应颜色的纸板上',tag:'捏取·配对'},
    {name:'彩色纸团分类',desc:'彩色皱纹纸揉成小团，按颜色分到不同碗里',tag:'揉捏·分类'},
    {name:'彩色毛球投瓶',desc:'不同颜色毛球投入透明瓶口，边投边说颜色',tag:'投入·颜色'},
    {name:'彩色吸管穿线',desc:'剪短的彩色吸管用粗鞋带穿起来，做成彩色项链',tag:'串穿·手眼'},
    {name:'颜色圆片分类',desc:'彩色不织布圆片散放，让宝宝按颜色放到对应色卡上',tag:'分类·配对'}
  ],
  fruit:[
    {name:'剥香蕉皮',desc:'给宝宝半根香蕉，让他自己从顶部剥开皮吃',tag:'剥皮·自主'},
    {name:'橘子瓣分拣',desc:'剥好的橘子瓣，让宝宝一瓣一瓣放到小碗里',tag:'捏取·转移'},
    {name:'葡萄一颗颗摘',desc:'从葡萄串上摘下一颗颗葡萄放进碗里，锻炼指尖力量',tag:'摘取·捏取'},
    {name:'苹果块转移',desc:'切好的苹果块放一盘，宝宝用勺子舀到另一盘',tag:'舀取·转移'},
    {name:'蓝豆挑葡萄干',desc:'碗里放葡萄干和大黄豆，让宝宝挑出葡萄干',tag:'捏取·分类'},
    {name:'水果印章画',desc:'苹果对半切开，蘸可食用颜料印在纸上',tag:'拓印·创意'}
  ],
  animal:[
    {name:'动物模型分类',desc:'动物模型混放，让宝宝把大的放一堆小的放一堆',tag:'分类·大小'},
    {name:'喂动物吃豆',desc:'用勺子舀豆子倒进动物模型张开嘴的容器里',tag:'舀取·喂食'},
    {name:'动物脚印画',desc:'动物模型底部蘸颜料在纸上印脚印',tag:'拓印·创意'},
    {name:'动物窝搭建',desc:'用纸盒和碎纸条给动物模型搭窝',tag:'搭建·空间'},
    {name:'动物配对',desc:'两套相同动物模型，让宝宝找一样的放一起',tag:'配对·认知'},
    {name:'动物喂食夹子',desc:'用夹子夹毛球喂给动物模型，锻炼捏力',tag:'夹取·喂食'}
  ],
  body:[
    {name:'镜子贴贴纸',desc:'对着镜子，在宝宝脸上贴圆点贴纸，说五官名称',tag:'贴取·认知'},
    {name:'捏面团五官',desc:'面团揉圆压扁，用手指戳洞当眼睛嘴巴',tag:'揉捏·创意'},
    {name:'五官图配对',desc:'画一张大脸，让宝宝把五官贴纸贴到对应位置',tag:'粘贴·配对'},
    {name:'手印画',desc:'手掌蘸颜料印在纸上，说说手指头',tag:'拓印·认知'},
    {name:'贴眼睛鼻子',desc:'纸盘画脸，宝宝把毛球粘上当眼睛鼻子',tag:'粘贴·精细'},
    {name:'身体贴纸寻宝',desc:'贴纸贴在宝宝手背膝盖等部位，让他撕下来',tag:'撕取·认知'}
  ],
  daily:[
    {name:'袜子配对',desc:'洗干净的不同颜色袜子，让宝宝找一样的一双',tag:'配对·分类'},
    {name:'叠小毛巾',desc:'方形小毛巾，教宝宝对折再对折',tag:'折叠·双手'},
    {name:'瓶盖拧转',desc:'各种大小塑料瓶，让宝宝拧上拧下瓶盖',tag:'拧转·手腕'},
    {name:'勺子舀豆',desc:'一碗豆子，宝宝用勺子舀到另一个碗里',tag:'舀取·平衡'},
    {name:'钥匙串环',desc:'大圆环和钥匙，让宝宝把钥匙串到环上',tag:'串穿·手眼'},
    {name:'杯子叠高',desc:'塑料杯让宝宝一个一个叠起来',tag:'叠放·平衡'}
  ],
  housework:[
    {name:'擦桌子',desc:'给一块小抹布，让宝宝擦桌面',tag:'擦拭·生活'},
    {name:'扫豆子',desc:'撒几颗豆子在地上，小扫帚扫到一起',tag:'清扫·协调'},
    {name:'洗菜',desc:'水盆里放蔬菜，让宝宝搓洗',tag:'搓洗·感官'},
    {name:'叠衣服',desc:'简单衣物教宝宝对折',tag:'折叠·生活'},
    {name:'擦窗户',desc:'喷壶喷水，抹布擦玻璃',tag:'擦拭·协调'},
    {name:'分类洗衣',desc:'深色浅色衣物分到两个篮子',tag:'分类·生活'}
  ],
  nature:[
    {name:'树叶分类',desc:'捡不同形状颜色的树叶，按大小或颜色分开',tag:'分类·自然'},
    {name:'石头转移',desc:'小石头用勺子从一个碗转到另一个',tag:'舀取·转移'},
    {name:'花瓣撕贴',desc:'花瓣撕碎贴在纸上做画',tag:'撕贴·创意'},
    {name:'松果收集',desc:'户外捡松果放进篮子，边捡边数',tag:'捡取·收纳'},
    {name:'沙子倒倒',desc:'杯子装沙子倒到另一个杯子里',tag:'倒取·感官'},
    {name:'树枝穿叶',desc:'捡到的树枝穿树叶，串成自然项链',tag:'串穿·自然'}
  ]
};

/* ====== 语言启蒙话术库（按主题，每主题6组） ====== */
const LANG_SPEECH = {
  color:[
    {cn:'这是红色的，红红的苹果',scene:'拿红色物品时说'},
    {cn:'蓝色，天是蓝色的',scene:'指窗外天空时说'},
    {cn:'黄色，太阳黄黄的',scene:'看到黄色物品时说'},
    {cn:'找找家里红色的东西',scene:'引导宝宝观察'},
    {cn:'这个是绿色，不一样',scene:'对比两种颜色时说'},
    {cn:'把红色的给妈妈',scene:'发出简单指令'}
  ],
  fruit:[
    {cn:'这是苹果，红红的苹果',scene:'拿苹果时说'},
    {cn:'吃香蕉啦，剥开皮',scene:'吃水果时说'},
    {cn:'啊呜一口，真甜',scene:'宝宝吃水果时说'},
    {cn:'橘子圆圆的，剥开',scene:'剥橘子时说'},
    {cn:'葡萄一颗一颗的',scene:'吃葡萄时说'},
    {cn:'宝宝想吃哪个？',scene:'让宝宝选择'}
  ],
  animal:[
    {cn:'狗狗，汪汪汪',scene:'看到狗或模型时说'},
    {cn:'猫猫，喵喵喵',scene:'模仿猫叫'},
    {cn:'鸭鸭，嘎嘎嘎',scene:'看到鸭子时说'},
    {cn:'小鸟，叽叽叽，飞走了',scene:'看到鸟时说'},
    {cn:'鱼鱼游游游',scene:'看鱼缸时说'},
    {cn:'牛牛，哞——',scene:'看绘本时说'}
  ],
  body:[
    {cn:'这是眼睛，看妈妈',scene:'指宝宝眼睛时说'},
    {cn:'这是鼻子，闻闻',scene:'指鼻子时说'},
    {cn:'这是嘴巴，啊——',scene:'张嘴时说'},
    {cn:'这是耳朵，听',scene:'指耳朵时说'},
    {cn:'摸摸头，摸摸手',scene:'互动时说'},
    {cn:'拍拍肚子，饱啦',scene:'吃完饭时说'}
  ],
  daily:[
    {cn:'这是碗，吃饭用碗',scene:'吃饭时说'},
    {cn:'这是鞋子，穿上',scene:'穿鞋时说'},
    {cn:'这是杯子，喝水',scene:'喝水时说'},
    {cn:'这是毛巾，擦擦',scene:'擦手时说'},
    {cn:'拿好勺子，舀舀',scene:'吃饭时说'},
    {cn:'这是帽子，戴戴好',scene:'出门时说'}
  ],
  housework:[
    {cn:'擦擦桌子，干净啦',scene:'擦桌子时说'},
    {cn:'扫扫地，扫扫',scene:'扫地时说'},
    {cn:'洗洗菜，搓搓',scene:'洗菜时说'},
    {cn:'叠衣服，折一下',scene:'叠衣服时说'},
    {cn:'收玩具，放这里',scene:'收纳时说'},
    {cn:'宝宝真棒，帮妈妈',scene:'鼓励时说'}
  ],
  nature:[
    {cn:'树叶，绿色的',scene:'捡树叶时说'},
    {cn:'石头，硬硬的',scene:'摸石头时说'},
    {cn:'花花，香香的',scene:'闻花时说'},
    {cn:'沙子，软软的',scene:'玩沙时说'},
    {cn:'水，哗哗哗',scene:'倒水时说'},
    {cn:'风，呼呼吹',scene:'感受风时说'}
  ]
};

/* ====== 认知启蒙引导（按主题，每主题6个） ====== */
const COG_GUIDE = {
  color:[
    {name:'颜色指认',desc:'拿红色物品说"红色"，再让宝宝在几个物品中找红色'},
    {name:'颜色配对',desc:'同色物品放一起，说"一样的颜色"'},
    {name:'颜色找物',desc:'说"把红色的给妈妈"，看宝宝能否找对'},
    {name:'颜色对比',desc:'红球蓝球放一起，说"不一样"'},
    {name:'颜色命名',desc:'生活中随时命名颜色："黄色的香蕉""绿色的叶子"'},
    {name:'颜色猜猜',desc:'把彩色积木藏布下，猜是什么颜色'}
  ],
  fruit:[
    {name:'水果命名',desc:'拿水果说名称，让宝宝指认'},
    {name:'大小对比',desc:'大苹果小苹果放一起，说"大""小"'},
    {name:'多少概念',desc:'一堆葡萄和一颗葡萄对比，说"多""少"'},
    {name:'里外概念',desc:'剥开橘子看里面，说"里面""外面"'},
    {name:'水果分类',desc:'按颜色或大小把水果分到不同碗'},
    {name:'水果找物',desc:'说"把苹果给妈妈"，看宝宝能否找对'}
  ],
  animal:[
    {name:'动物命名',desc:'拿模型说名称，让宝宝指认'},
    {name:'动物叫声',desc:'模仿动物叫声，让宝宝猜是哪个动物'},
    {name:'动物大小',desc:'大象大、小兔小，对比说"大""小"'},
    {name:'动物分类',desc:'会飞的、会游的、会跑的分开放'},
    {name:'动物配对',desc:'相同动物模型放一起'},
    {name:'动物动作',desc:'模仿动物动作，学小鸟飞学兔子跳'}
  ],
  body:[
    {name:'五官指认',desc:'指着宝宝五官说名称，再让他指你的'},
    {name:'指令游戏',desc:'说"摸摸鼻子""摸摸耳朵"，看宝宝能否做到'},
    {name:'镜子游戏',desc:'对镜子指五官说名称'},
    {name:'身体部位',desc:'指手脚肚子等部位说名称'},
    {name:'动作模仿',desc:'做眨眼张嘴伸舌等动作让宝宝模仿'},
    {name:'画五官',desc:'纸上画圆脸，让宝宝贴五官贴纸'}
  ],
  daily:[
    {name:'物品命名',desc:'拿日常用品说名称'},
    {name:'物品用途',desc:'演示用途："杯子喝水""梳子梳头"'},
    {name:'里外概念',desc:'东西放碗里面、拿出来放外面'},
    {name:'多少概念',desc:'一碗豆子和几颗豆子对比'},
    {name:'配对概念',desc:'相同的物品放一起'},
    {name:'找物游戏',desc:'说"把杯子给妈妈"，看宝宝能否找到'}
  ],
  housework:[
    {name:'动作命名',desc:'做家务时说动词："擦、扫、洗、叠"'},
    {name:'顺序概念',desc:'说"先擦桌子，再收碗"'},
    {name:'干净脏',desc:'擦前后对比说"干净了"'},
    {name:'分类收纳',desc:'衣服放这篮，玩具放那篮'},
    {name:'多少概念',desc:'多扫一点、少扫一点'},
    {name:'因果关系',desc:'擦了就干净了，洗了就湿了'}
  ],
  nature:[
    {name:'自然物命名',desc:'树叶、石头、花，拿起来说名称'},
    {name:'大小概念',desc:'大石头小石头对比'},
    {name:'多少概念',desc:'一把树叶和一片树叶'},
    {name:'软硬',desc:'摸树叶说"软"，摸石头说"硬"'},
    {name:'颜色',desc:'说"绿叶""红花"'},
    {name:'声音',desc:'听风声水声鸟叫，说"听到了什么"'}
  ]
};

/* ====== 大运动+感统（爬行期，每主题4个） ====== */
const GROSS_ACTIVITIES = {
  color:[
    {name:'追彩色球爬行',desc:'滚不同颜色的球，让宝宝追着爬',tag:'爬行·追视'},
    {name:'爬向彩色垫',desc:'不同颜色垫子放不同位置，说"爬到红色的"',tag:'爬行·指令'},
    {name:'扶站够颜色卡',desc:'颜色卡贴在沙发扶手处，扶站够取',tag:'扶站·伸手'},
    {name:'彩色隧道爬',desc:'纸箱隧道内壁贴彩色纸，爬过说颜色',tag:'爬行·感官'}
  ],
  fruit:[
    {name:'爬去拿水果',desc:'水果放远处，鼓励宝宝爬过去拿',tag:'爬行·目标'},
    {name:'爬行运水果',desc:'宝宝手拿水果爬回来放进碗里',tag:'爬行·负重'},
    {name:'扶站够水果',desc:'水果放矮桌边，扶着站伸手够',tag:'扶站·平衡'},
    {name:'水果隧道',desc:'纸箱隧道贴水果图，爬过说水果名',tag:'爬行·认知'}
  ],
  animal:[
    {name:'模仿动物爬',desc:'学乌龟慢慢爬、学螃蟹横着爬',tag:'爬行·模仿'},
    {name:'追动物模型',desc:'滑动动物模型，让宝宝追爬',tag:'爬行·追视'},
    {name:'动物隧道',desc:'纸箱隧道贴动物图，爬过学叫声',tag:'爬行·认知'},
    {name:'扶站喂动物',desc:'扶着桌站，把豆子喂给桌上的动物模型',tag:'扶站·精细'}
  ],
  body:[
    {name:'爬到镜子前',desc:'大镜放远处，爬过去看自己摸五官',tag:'爬行·认知'},
    {name:'摸五官爬行',desc:'不同位置贴五官图，爬过去摸',tag:'爬行·指令'},
    {name:'扶站照镜子',desc:'扶着站对镜子做动作',tag:'扶站·认知'},
    {name:'全身运动',desc:'说"摸摸头"宝宝弯腰摸，"举手"举手',tag:'指令·协调'}
  ],
  daily:[
    {name:'爬行运物',desc:'把物品从这里爬着运到那里',tag:'爬行·负重'},
    {name:'爬过障碍',desc:'靠垫枕头做障碍，爬越过去',tag:'爬行·协调'},
    {name:'扶站玩物',desc:'扶着矮桌站，玩桌上物品',tag:'扶站·平衡'},
    {name:'推箱学走',desc:'推稳固纸箱练习扶走',tag:'扶走·力量'}
  ],
  housework:[
    {name:'爬着推抹布',desc:'给块布，宝宝爬着推着擦地',tag:'爬行·上肢'},
    {name:'爬去收玩具',desc:'爬着把玩具一个个收进篮子',tag:'爬行·收纳'},
    {name:'扶站递物',desc:'扶着桌站，把东西递给妈妈',tag:'扶站·社交'},
    {name:'搬运小物',desc:'把轻物从这搬到那，往返多次',tag:'爬行·耐力'}
  ],
  nature:[
    {name:'草地爬行',desc:'户外草地上自由爬行',tag:'爬行·感官'},
    {name:'爬着捡树叶',desc:'一边爬一边捡树叶放篮',tag:'爬行·精细'},
    {name:'扶站看自然',desc:'阳台扶着站看外面树和鸟',tag:'扶站·感官'},
    {name:'沙地爬行',desc:'沙坑或沙滩上爬行体验',tag:'爬行·触感'}
  ]
};

/* ====== 英文启蒙数据 ====== */
const ENG_DATA = {
  colors:[
    {en:'Red',cn:'红色',example:'Red apple'},
    {en:'Blue',cn:'蓝色',example:'Blue sky'},
    {en:'Yellow',cn:'黄色',example:'Yellow sun'},
    {en:'Green',cn:'绿色',example:'Green leaf'},
    {en:'Orange',cn:'橙色',example:'Orange carrot'},
    {en:'Purple',cn:'紫色',example:'Purple grape'},
    {en:'Pink',cn:'粉色',example:'Pink flower'},
    {en:'Brown',cn:'棕色',example:'Brown bear'}
  ],
  words:[
    {en:'Apple',cn:'苹果'},{en:'Banana',cn:'香蕉'},{en:'Water',cn:'水'},
    {en:'Milk',cn:'牛奶'},{en:'Ball',cn:'球'},{en:'Dog',cn:'狗'},
    {en:'Cat',cn:'猫'},{en:'Car',cn:'车'},{en:'Mom',cn:'妈妈'},{en:'Dad',cn:'爸爸'}
  ],
  phrases:[
    {en:'Good morning!',cn:'早上好'},
    {en:'I love you.',cn:'我爱你'},
    {en:'Thank you.',cn:'谢谢'},
    {en:"Let's go!",cn:'走吧'},
    {en:'Good job!',cn:'真棒'},
    {en:'Time to eat.',cn:'吃饭了'},
    {en:'Wash hands.',cn:'洗手'},
    {en:'Here you go.',cn:'给你'},
    {en:'Where is it?',cn:'在哪里'},
    {en:'Sweet dreams.',cn:'好梦'}
  ],
  songs:[
    {name:'Baby Shark',desc:'家庭成员认知，配合手势动作',when:'随时'},
    {name:'Twinkle Twinkle Little Star',desc:'睡前安抚，小手做星星闪烁',when:'睡前'},
    {name:'Wheels on the Bus',desc:'出行场景，模仿公交车各种声音',when:'坐车时'},
    {name:'Old MacDonald',desc:'动物叫声认知，模仿农场动物',when:'动物主题周'},
    {name:'Head Shoulders Knees and Toes',desc:'五官认知，配合身体动作',when:'五官主题周'},
    {name:"If You're Happy",desc:'情绪表达，拍手跺脚动作',when:'随时'}
  ],
  oral:[
    {en:'Time to wake up!',cn:'该起床啦'},
    {en:"Let's eat!",cn:'吃饭啦'},
    {en:'Drink some water.',cn:'喝点水'},
    {en:"Let's play!",cn:'一起玩吧'},
    {en:'Be careful!',cn:'小心点'},
    {en:'Give me a hug.',cn:'抱一下'},
    {en:"Let's read a book.",cn:'看书吧'},
    {en:'Time for bed.',cn:'该睡觉了'}
  ],
  tpr:[
    {en:'Stand up',cn:'站起来',action:'扶站时说，配合起立动作'},
    {en:'Sit down',cn:'坐下',action:'说并做坐下动作'},
    {en:'Clap hands',cn:'拍拍手',action:'拍手示范让宝宝模仿'},
    {en:'Wave bye-bye',cn:'挥手再见',action:'挥手示范'},
    {en:'Shake shake',cn:'摇一摇',action:'摇晃身体或手'},
    {en:'Touch your nose',cn:'摸鼻子',action:'摸自己鼻子示范'}
  ]
};

/* ====== 发育观察记录（五大类，爬行期→扶站期） ====== */
const OBSERVE_ITEMS = [
  {cat:'大运动',icon:'🏃',items:[
    '独自爬行自如，能自由变换方向',
    '手膝爬行协调，速度均匀稳定',
    '扶物站立稳定（沙发、矮桌边）',
    '扶物蹲下捡物再站起',
    '扶物横向移步（巡游）',
    '独站片刻（2-3秒不扶）'
  ]},
  {cat:'精细动作',icon:'✋',items:[
    '拇指食指准确捏取小物（葡萄干大小）',
    '主动将物品放入容器中',
    '从容器中取出物品',
    '尝试拧转瓶盖',
    '叠放2块方积木',
    '用整个手掌抓握蜡笔涂画'
  ]},
  {cat:'语言',icon:'🗣️',items:[
    '有所指地叫"爸爸""妈妈"',
    '听懂简单指令（"给我""过来"）',
    '会说3-5个有意义的词',
    '摇头或摆手表示"不"',
    '能指认1-2个身体部位',
    '用手指指点表达需求'
  ]},
  {cat:'认知',icon:'🧠',items:[
    '寻找完全藏起的物品',
    '知道物品用途（杯子喝水、梳子梳头）',
    '模仿推拉玩具车',
    '尝试用棍子够远处物品',
    '区分大和小',
    '理解简单因果关系（按按钮出声）'
  ]},
  {cat:'社交情感',icon:'😊',items:[
    '对镜中自己微笑或做动作',
    '会挥手"再见"',
    '喂玩具或大人吃东西（假装游戏）',
    '察觉他人情绪变化',
    '主动递东西给大人',
    '对陌生人表现出认生'
  ]}
];

/* ====== 活动库（6领域 × 7主题） ====== */
const ACTIVITY_LIBRARY = [
  // 精细动作
  {domain:'精细动作',theme:'color',name:'红豆绿豆分拣',desc:'混合豆子用手指捏取分开'},
  {domain:'精细动作',theme:'fruit',name:'剥香蕉皮',desc:'半根香蕉自己剥皮'},
  {domain:'精细动作',theme:'animal',name:'动物模型分类',desc:'大的小的大分两堆'},
  {domain:'精细动作',theme:'body',name:'镜子贴贴纸',desc:'对镜在脸上贴圆点贴纸'},
  {domain:'精细动作',theme:'daily',name:'袜子配对',desc:'不同袜子找配对'},
  {domain:'精细动作',theme:'housework',name:'擦桌子',desc:'小抹布擦桌面'},
  {domain:'精细动作',theme:'nature',name:'树叶分类',desc:'不同树叶按大小分'},
  // 大运动
  {domain:'大运动',theme:'color',name:'追彩色球爬行',desc:'滚球让宝宝追爬'},
  {domain:'大运动',theme:'fruit',name:'爬行运水果',desc:'手拿水果爬回碗里'},
  {domain:'大运动',theme:'animal',name:'模仿动物爬',desc:'学乌龟螃蟹爬行'},
  {domain:'大运动',theme:'body',name:'爬到镜子前',desc:'爬到镜前摸五官'},
  {domain:'大运动',theme:'daily',name:'爬过障碍',desc:'靠垫枕头做障碍'},
  {domain:'大运动',theme:'housework',name:'爬着收玩具',desc:'爬着收玩具进篮'},
  {domain:'大运动',theme:'nature',name:'草地爬行',desc:'户外草地自由爬'},
  // 语言认知
  {domain:'语言认知',theme:'color',name:'颜色命名指认',desc:'拿物品说颜色名称'},
  {domain:'语言认知',theme:'fruit',name:'水果命名',desc:'拿水果说名称让指认'},
  {domain:'语言认知',theme:'animal',name:'动物叫声',desc:'模仿叫声让猜动物'},
  {domain:'语言认知',theme:'body',name:'五官指认',desc:'指五官说名称'},
  {domain:'语言认知',theme:'daily',name:'物品命名',desc:'拿用品说名称'},
  {domain:'语言认知',theme:'housework',name:'动作命名',desc:'做家务说动词'},
  {domain:'语言认知',theme:'nature',name:'自然物命名',desc:'拿自然物说名称'},
  // 感官探索
  {domain:'感官探索',theme:'color',name:'彩色感官瓶',desc:'瓶子加水油色素摇看'},
  {domain:'感官探索',theme:'fruit',name:'水果触感',desc:'摸不同水果感受质感'},
  {domain:'感官探索',theme:'animal',name:'动物声音听辨',desc:'播放动物声音猜'},
  {domain:'感官探索',theme:'body',name:'不同味道体验',desc:'尝酸甜咸说感受'},
  {domain:'感官探索',theme:'daily',name:'材质触摸',desc:'摸不同布料说软硬'},
  {domain:'感官探索',theme:'housework',name:'水温体验',desc:'摸冷水和温水'},
  {domain:'感官探索',theme:'nature',name:'沙水感官盆',desc:'沙水盆自由探索'},
  // 生活技能
  {domain:'生活技能',theme:'color',name:'按色分类收纳',desc:'按颜色收玩具'},
  {domain:'生活技能',theme:'fruit',name:'自己剥水果',desc:'自己剥香蕉橘子'},
  {domain:'生活技能',theme:'animal',name:'喂动物模型',desc:'用勺喂豆给动物'},
  {domain:'生活技能',theme:'body',name:'自己擦脸',desc:'给毛巾自己擦'},
  {domain:'生活技能',theme:'daily',name:'自己穿袜',desc:'尝试自己穿袜子'},
  {domain:'生活技能',theme:'housework',name:'帮忙擦桌',desc:'参与擦桌家务'},
  {domain:'生活技能',theme:'nature',name:'捡拾收纳',desc:'捡松果树叶收篮'},
  // 艺术创意
  {domain:'艺术创意',theme:'color',name:'手指画',desc:'手指蘸颜料涂画'},
  {domain:'艺术创意',theme:'fruit',name:'水果印章',desc:'水果切半蘸颜料印'},
  {domain:'艺术创意',theme:'animal',name:'脚印画',desc:'模型蘸颜料印脚印'},
  {domain:'艺术创意',theme:'body',name:'自画像涂鸦',desc:'对镜画自己'},
  {domain:'艺术创意',theme:'daily',name:'纸盒改造',desc:'纸盒涂鸦做房子'},
  {domain:'艺术创意',theme:'housework',name:'抹布画',desc:'抹布蘸颜料拖画'},
  {domain:'艺术创意',theme:'nature',name:'树叶贴画',desc:'树叶贴纸上做画'}
];

/* ====== 教具清单 ====== */
const TOOLS = {
  household:[
    {name:'碗碟杯子',desc:'各种大小的塑料碗、碟、杯子'},
    {name:'勺子筷子',desc:'不锈钢婴儿勺、粗短筷子'},
    {name:'晾衣夹',desc:'不同颜色木质晾衣夹'},
    {name:'毛巾袜子',desc:'小毛巾、干净袜子'},
    {name:'纸箱',desc:'各种大小快递纸箱'},
    {name:'瓶盖',desc:'各种大小塑料瓶连盖'},
    {name:'镜子',desc:'安全防碎大镜子'},
    {name:'扫帚抹布',desc:'小号儿童扫帚、小抹布'}
  ],
  food:[
    {name:'各种水果',desc:'苹果香蕉橘子葡萄等'},
    {name:'豆类',desc:'红豆绿豆黄豆（监督下）'},
    {name:'面团',desc:'面粉加水自制安全面团'},
    {name:'面条',desc:'煮熟的短面条'},
    {name:'鸡蛋',desc:'煮熟的整个鸡蛋'},
    {name:'酸奶',desc:'可做手指画颜料'}
  ],
  advanced:[
    {name:'大孔木珠',desc:'配粗鞋带，串珠练习'},
    {name:'不织布',desc:'剪圆片做分类配对'},
    {name:'皱纹纸',desc:'揉团撕贴多用途'},
    {name:'可水洗颜料',desc:'儿童安全手指画颜料'},
    {name:'感官盆',desc:'浅口大盆装沙水豆'},
    {name:'爬行隧道',desc:'可折叠儿童隧道'},
    {name:'软靠垫',desc:'枕头靠垫做障碍'}
  ],
  diy:[
    {name:'纸箱隧道',desc:'大纸箱两头打通，贴彩色内壁'},
    {name:'感官瓶',desc:'空瓶加米豆亮片，拧紧封口'},
    {name:'插孔盒',desc:'鞋盒盖打孔，吸管插入'},
    {name:'配对蛋',desc:'塑料蛋壳两半涂同色配对'},
    {name:'忙碌板',desc:'木板钉各种锁扣开关旋钮'},
    {name:'颜色分类盘',desc:'蛋盒涂色，彩色圆片分类'}
  ]
};

/* ====== 空间布置 ====== */
const SPACES = [
  {name:'运动区',icon:'🤸',color:'gross',items:[
    '爬行垫/地垫（至少1.5m×2m）',
    '软靠垫、枕头（做爬行障碍）',
    '爬行隧道（纸箱或折叠隧道）',
    '矮桌或沙发边（扶站辅助）',
    '彩色球几个（追爬用）'
  ],checklist:[
    '地面平整无异物无滑',
    '家具边角安装防撞条',
    '固定所有不稳定家具',
    '远离暖气电源插座',
    '垫子防滑不移动'
  ]},
  {name:'操作区',icon:'✋',color:'fine',items:[
    '矮桌小椅（高度25-30cm）',
    '小托盘（分装活动材料）',
    '小碗小勺（真实餐具）',
    '工作垫（桌面保护）',
    '小篮子（装活动材料）'
  ],checklist:[
    '桌椅高度宝宝坐脚能着地',
    '材料安全无毒无小零件',
    '小物件直径大于3cm',
    '刀具剪刀远离操作区',
    '光线充足不刺眼'
  ]},
  {name:'感官区',icon:'🌊',color:'eng',items:[
    '感官盆（浅口大盆）',
    '不同材质布料（棉毛丝绸）',
    '沙水盘（阳台或户外）',
    '感官瓶（自制）',
    '自然材料（树叶石头松果）'
  ],checklist:[
    '材料不可吞咽入口',
    '液体温度适宜不烫',
    '活动全程有大人看护',
    '玩后及时清洁收纳',
    '感官盆用后擦干'
  ]},
  {name:'阅读角',icon:'📖',color:'cog',items:[
    '面朝外绘本架（展示封面）',
    '软坐垫或小靠枕',
    '布书/纸板书（耐撕咬）',
    '触感书/翻翻书',
    '柔和阅读灯'
  ],checklist:[
    '书架稳固不会倒',
    '书籍适龄（0-2岁纸板书）',
    '阅读区光线充足柔和',
    '定期清洁绘本',
    '书架高度宝宝可够到'
  ]},
  {name:'收纳区',icon:'📦',color:'lang',items:[
    '开放式低矮收纳柜',
    '标签/图片标记',
    '编织篮子分类',
    '布袋收纳软物',
    '固定收纳位置'
  ],checklist:[
    '收纳柜固定在墙上防倒',
    '高度不超过宝宝身高加一臂',
    '无尖锐边角',
    '篮子无毛刺无铁丝外露',
    '每样物品有固定位置'
  ]}
];

/* ====== 养育原则 ====== */
const PRINCIPLES = [
  {title:'不打断不干预',desc:'宝宝专注玩耍、操作物品时，全程不打断、不提问、不干预，保护超长专注状态'},
  {title:'实物优于玩具',desc:'优先真实食材和实物操作，优于玩具教学。生活物品就是最好的教具'},
  {title:'融入日常',desc:'所有早教融入日常，不专门坐教、不上课式学习。吃饭穿衣做家务都是早教'},
  {title:'极简不费妈',desc:'所有任务极简、低成本、随手可做、不费妈。不需要准备复杂材料'},
  {title:'尊重宝宝节奏',desc:'尊重宝宝节奏，不强迫展示、不攀比、不超前。每个宝宝有自己的发展时间表'}
];

/* ====== 严格禁止 ====== */
const BANS = [
  {icon:'🚫',text:'禁止闪卡灌输'},
  {icon:'🚫',text:'禁止识字超前学'},
  {icon:'📱',text:'禁止屏幕早教'},
  {icon:'🔇',text:'禁止机械跟读'},
  {icon:'😰',text:'禁止压力训练'},
  {icon:'🧩',text:'禁止复杂早教任务'}
];

/* ====== 辅食菜单（7天 × 三餐两点 + 购买清单） ====== */
/* 依据《中国婴幼儿喂养指南(2022)》7~24月龄 + 协和儿科营养建议 */
/* 每日标准：谷薯50-100g 肉禽鱼50-75g 蛋1个 蔬菜50-150g 水果50-100g 奶400-600ml 油10-15g */
/* 每周补铁2次（肝脏/红肉） 每周鱼虾2-3次 绿叶菜占蔬菜半数以上 */

/* ====== 辅食食谱数据库 ====== */
const RECIPE_DB = {
  '南瓜小米粥':{
    ingredients:['南瓜50g','小米30g','清水适量'],
    steps:['南瓜去皮去籽，切小丁','小米淘洗干净','锅中加水烧开，放入小米','加入南瓜丁，小火煮20分钟','用勺背将南瓜压碎，搅拌均匀'],
    tip:'南瓜自带甜味，无需加糖；小米提前泡15分钟更软烂',
    img:'assets/food-pumpkin-porridge.jpg',emoji:'🎃'
  },
  '山药小米粥':{
    ingredients:['山药30g','小米25g','清水适量'],
    steps:['山药去皮切小丁（戴手套防过敏）','小米淘洗干净','锅中加水烧开下小米','加入山药丁小火煮25分钟','煮至软烂搅拌匀'],
    tip:'山药健脾胃助消化；处理山药务必戴手套防痒',
    img:null,emoji:'🥔'
  },
  '鸡蛋羹':{
    ingredients:['鸡蛋1个','温水60ml'],
    steps:['鸡蛋打散，加温水搅匀','过筛去气泡，盖保鲜膜','锅中水烧开，放入蛋液','中小火蒸10分钟，关火焖2分钟'],
    tip:'水蛋比例1:1.5最嫩；过筛后蛋羹无气孔更滑嫩',
    img:'assets/food-egg-custard.jpg',emoji:'🥚'
  },
  '番茄牛肉末':{
    ingredients:['牛里脊30g','番茄半个','洋葱少许'],
    steps:['牛肉切小块用料理机打成末','番茄去皮切丁，洋葱切碎','锅中少许油炒散牛肉末','加洋葱炒软，加番茄丁炒出汁','加少量水煮3分钟收汁'],
    tip:'牛肉富含铁和锌；番茄维C促进铁吸收',
    img:null,emoji:'🍅'
  },
  '蒜蓉西兰花':{
    ingredients:['西兰花40g','植物油少许'],
    steps:['西兰花盐水浸泡10分钟','掰小朵焯水1分钟捞出','锅中少许油，蒜末爆香','放入西兰花翻炒','加少量水焖1分钟，切碎末'],
    tip:'只取花朵部分；深色蔬菜营养密度高',
    img:null,emoji:'🥦'
  },
  '青菜鸡丝面':{
    ingredients:['婴儿面条30g','鸡胸肉20g','青菜2棵'],
    steps:['鸡胸肉冷水下锅煮熟，撕成细丝','青菜焯水切碎','锅中水开下面条煮软','加入鸡丝和青菜碎','再煮2分钟出锅'],
    tip:'鸡肉撕越细越好；面条剪短方便宝宝咀嚼',
    img:null,emoji:'🍜'
  },
  '清蒸鳕鱼':{
    ingredients:['鳕鱼50g','姜1片','葱少许'],
    steps:['鳕鱼解冻，用姜水浸泡10分钟去腥','盘中放姜片，鳕鱼放上面','水开后上锅蒸8分钟','撒上葱丝，淋少许热油','检查无刺后压碎'],
    tip:'鳕鱼富含DHA促进大脑发育；务必检查无刺',
    img:null,emoji:'🐠'
  },
  '菠菜碎':{
    ingredients:['菠菜3棵'],
    steps:['菠菜洗净，先焯水去草酸','捞出过凉水保持翠绿','上锅蒸3分钟','用刀切碎末'],
    tip:'菠菜必须焯水去草酸，否则影响钙吸收',
    img:null,emoji:'🥬'
  },
  '豆腐羹':{
    ingredients:['嫩豆腐50g','淀粉3g','葱花少许'],
    steps:['豆腐切小丁','锅中加水烧开放入豆腐','小火煮3分钟','水淀粉勾薄芡','撒葱花出锅'],
    tip:'豆腐含优质植物蛋白和钙；嫩豆腐口感更适合宝宝',
    img:null,emoji:'🍲'
  },
  '小馄饨':{
    ingredients:['馄饨皮8张','猪肉馅25g','青菜2棵'],
    steps:['猪肉馅加少许水搅至上劲','青菜焯水切碎挤水拌入肉馅','馄饨皮切四半，包入少量馅','锅中水开下馄饨','煮至浮起再煮1分钟'],
    tip:'皮切小方便宝宝入口；馅料不要太多',
    img:null,emoji:'🥟'
  },
  '紫菜蛋花汤':{
    ingredients:['紫菜少许','鸡蛋1个','清水300ml'],
    steps:['紫菜撕碎用清水泡软','鸡蛋打散备用','锅中水烧开下紫菜','淋入蛋液，用筷子划散','煮30秒即可出锅'],
    tip:'紫菜含碘丰富；蛋液淋入后不要搅太多保持蛋花完整',
    img:null,emoji:'🍵'
  },
  '香蕉松饼':{
    ingredients:['香蕉半根','鸡蛋1个','面粉30g'],
    steps:['香蕉用叉子压成泥','加入鸡蛋搅匀','筛入面粉拌至无颗粒','平底锅小火，舀一勺面糊','煎至表面冒泡翻面，再煎1分钟'],
    tip:'不加油小火慢煎；香蕉甜度足够不用加糖',
    img:'assets/food-banana-pancake.jpg',emoji:'🥞'
  },
  '燕麦粥':{
    ingredients:['即食燕麦片30g','牛奶100ml','清水100ml'],
    steps:['清水烧开倒入燕麦片','小火煮3分钟至浓稠','倒入牛奶搅拌均匀','微温即可食用'],
    tip:'燕麦富含膳食纤维防便秘；牛奶最后放保留营养',
    img:null,emoji:'🥣'
  },
  '鸡肉丸子':{
    ingredients:['鸡胸肉40g','蛋清半个','淀粉5g'],
    steps:['鸡胸肉去筋膜切小块','料理机打成泥','加蛋清淀粉搅上劲','温水下丸子，煮浮起捞出','可多做些分装冷冻'],
    tip:'搅入少许葱姜水去腥；冷冻保存随吃随取',
    img:null,emoji:'🍗'
  },
  '炒小白菜':{
    ingredients:['小白菜40g','植物油少许','蒜末少许'],
    steps:['小白菜洗净焯水','捞出切碎末','锅中少许油蒜末爆香','下小白菜碎快炒','加几滴水炒匀出锅'],
    tip:'绿叶菜每日不可少；快炒保留维生素',
    img:null,emoji:'🥬'
  },
  '番茄鸡蛋面疙瘩':{
    ingredients:['面粉40g','番茄半个','鸡蛋1个','青菜1棵'],
    steps:['面粉加少许水用筷子搅成小疙瘩','番茄去皮切丁，青菜切碎','鸡蛋打散','锅中油炒番茄出汁，加水烧开','下面疙瘩煮3分钟，淋蛋液，撒青菜碎'],
    tip:'疙瘩搅小一些方便宝宝咀嚼；番茄提供维C',
    img:null,emoji:'🍲'
  },
  '蔬菜鸡蛋饼':{
    ingredients:['鸡蛋1个','面粉25g','胡萝卜/西兰花少许'],
    steps:['蔬菜焯水切碎末','鸡蛋打散加面粉搅匀','加入蔬菜碎拌匀','平底锅小火摊成小饼','两面煎至金黄'],
    tip:'蔬菜可随主题替换；饼要薄方便宝宝咬',
    img:'assets/food-veg-egg-pancake.jpg',emoji:'🥞'
  },
  '炖牛肉胡萝卜':{
    ingredients:['牛里脊40g','胡萝卜半根','姜1片'],
    steps:['牛肉切小块焯水去血沫','胡萝卜切小丁','锅中放牛肉姜片加水炖1小时','加入胡萝卜再炖20分钟','肉烂后用勺压碎'],
    tip:'牛肉铁含量高；可一次多炖些分装冷冻',
    img:null,emoji:'🥩'
  },
  '炒油麦菜碎':{
    ingredients:['油麦菜40g','植物油少许'],
    steps:['油麦菜洗净','焯水1分钟捞出','切成碎末','锅中少许油快炒出锅'],
    tip:'油麦菜含钙量较高；深绿叶菜每日必备',
    img:null,emoji:'🥬'
  },
  '虾仁蒸蛋':{
    ingredients:['鲜虾2只','鸡蛋1个','温水60ml'],
    steps:['鲜虾去壳去虾线切小段','鸡蛋打散加温水过筛','虾仁铺在蛋液表面','盖保鲜膜上锅蒸10分钟','焖2分钟出锅'],
    tip:'虾线务必去净；蛋液过筛蒸出来更滑嫩',
    img:null,emoji:'🦐'
  },
  '玉米粥':{
    ingredients:['玉米糁30g','清水适量'],
    steps:['玉米糁淘洗一遍','锅中水烧开缓慢倒入玉米糁','边倒边搅防止结块','小火煮15分钟至浓稠','搅均即可'],
    tip:'玉米含叶黄素护眼；边倒边搅是关键',
    img:null,emoji:'🌽'
  },
  '鸡蛋卷':{
    ingredients:['鸡蛋1个','面粉10g','牛奶15ml'],
    steps:['鸡蛋打散加面粉牛奶搅匀','平底锅小火刷薄油','倒入蛋液摊圆饼','半凝固时从一端卷起','切段晾凉'],
    tip:'小火慢煎蛋卷才嫩；可加蔬菜碎增加营养',
    img:null,emoji:'🍳'
  },
  '炒卷心菜碎':{
    ingredients:['卷心菜40g','植物油少许'],
    steps:['卷心菜取嫩叶洗净','焯水1分钟捞出','切碎末','锅中少许油快炒出锅'],
    tip:'卷心菜含维C和维K；切碎方便宝宝咀嚼',
    img:null,emoji:'🥬'
  },
  '蔬菜瘦肉粥':{
    ingredients:['大米30g','猪瘦肉20g','胡萝卜/青菜少许'],
    steps:['大米淘洗加水煮粥','瘦肉切末用姜水泡去腥','胡萝卜切碎，青菜焯水切碎','粥煮至八成熟下肉末和胡萝卜','出锅前加青菜碎再煮2分钟'],
    tip:'瘦肉补铁补蛋白；粥底先煮烂再加料',
    img:null,emoji:'🍚'
  },
  '三文鱼':{
    ingredients:['三文鱼40g','柠檬2片'],
    steps:['三文鱼检查无刺','柠檬片挤汁淋在鱼上腌5分钟','平底锅小火少油煎','一面煎3分钟翻面','煎至两面金黄，用叉子压碎检查'],
    tip:'富含Omega-3促进大脑发育；煎熟透再给宝宝吃',
    img:null,emoji:'🍣'
  },
  '猪肝泥':{
    ingredients:['猪肝30g','姜2片','柠檬少许'],
    steps:['猪肝切薄片用柠檬水泡15分钟去腥','冷水下锅加姜片煮出血水','捞出洗净重新加水煮30分钟','料理机打成细腻泥状','可分装冷冻'],
    tip:'猪肝补铁每周1-2次；泡柠檬水去腥效果好',
    img:null,emoji:'🫘'
  },
  '小水饺':{
    ingredients:['饺子皮5张','猪肉馅20g','白菜少许'],
    steps:['白菜焯水切碎挤水','与肉馅拌匀','饺子皮切半，包入少量馅','捏紧边缘','水开下饺子，煮浮起再煮2分钟'],
    tip:'皮切小方便宝宝入口；馅少皮薄易煮透',
    img:null,emoji:'🥟'
  },
  '清蒸鲈鱼':{
    ingredients:['鲈鱼50g','姜1片','葱少许'],
    steps:['鲈鱼取无刺鱼腩部分','姜水浸泡10分钟去腥','盘中放姜片，鱼放上面','水开上锅蒸8分钟','去刺压碎，淋少许蒸鱼豉油'],
    tip:'鲈鱼刺少DHA高；务必仔细检查无刺',
    img:null,emoji:'🐟'
  },
  '什锦炒饭':{
    ingredients:['软米饭50g','鸡蛋半个','胡萝卜10g','豌豆10g','瘦肉末15g'],
    steps:['胡萝卜焯水切小丁，豌豆煮软','鸡蛋打散炒碎盛出','锅中少许油炒散肉末','加胡萝卜豌豆翻炒','下米饭和蛋碎炒匀'],
    tip:'豌豆务必煮软；食材切小丁方便宝宝咀嚼',
    img:null,emoji:'🍚'
  },
  '南瓜泥':{
    ingredients:['南瓜50g'],
    steps:['南瓜去皮去籽切小块','上锅蒸15分钟','用勺背或料理机压成泥'],
    tip:'选老南瓜更甜更面；可冷冻保存',
    img:null,emoji:'🎃'
  },
  '胡萝卜泥':{
    ingredients:['胡萝卜半根'],
    steps:['胡萝卜去皮切薄片','上锅蒸15分钟至软烂','加少许温水用料理机打成泥','或用勺背压成泥'],
    tip:'胡萝卜过油营养更易吸收；可拌入粥或面中',
    img:null,emoji:'🥕'
  },
  '鱼肉丸子':{
    ingredients:['龙利鱼50g','蛋清半个','淀粉5g'],
    steps:['龙利鱼去刺切小块','料理机打成鱼泥','加蛋清和淀粉顺一个方向搅上劲','锅中温水，用勺挖丸子下锅','煮至浮起再煮2分钟捞出'],
    tip:'搅上劲丸子才Q弹；水温不要沸腾以免散开',
    img:'assets/food-fish-balls.jpg',emoji:'🐟'
  },
  '番茄肉末豆腐':{
    ingredients:['番茄半个','猪肉馅25g','嫩豆腐40g'],
    steps:['番茄顶部划十字，开水烫后去皮切丁','豆腐切小丁焯水备用','锅中少许油，炒散肉末变色','加入番茄丁炒出汁','加豆腐丁和少量水，煮3分钟'],
    tip:'番茄去皮更易消化；豆腐焯水去豆腥味',
    img:'assets/food-tomato-tofu.jpg',emoji:'🍅'
  },
  '芦笋碎':{
    ingredients:['芦笋3根'],
    steps:['芦笋取嫩尖部分洗净','焯水1分钟捞出','上锅蒸3分钟','切成碎末'],
    tip:'只取嫩尖部分；芦笋富含叶酸和膳食纤维',
    img:null,emoji:'🌿'
  },
  '番茄汤':{
    ingredients:['番茄半个','清水200ml','淀粉少许'],
    steps:['番茄去皮切丁','锅中少许油炒番茄出汁','加清水烧开','小火煮3分钟','水淀粉勾薄芡'],
    tip:'番茄汤开胃助消化；去皮更容易消化',
    img:null,emoji:'🍅'
  },
  '萝卜汤':{
    ingredients:['白萝卜30g','清水200ml'],
    steps:['白萝卜去皮切薄片','锅中加水放入萝卜片','大火烧开转小火煮10分钟','煮至萝卜透明软烂'],
    tip:'白萝卜助消化化痰；秋冬季节适合',
    img:null,emoji:'🥕'
  },
  '番茄炒鸡蛋':{
    ingredients:['番茄半个','鸡蛋1个','植物油少许'],
    steps:['番茄去皮切小丁','鸡蛋打散','锅中少许油，蛋液炒碎盛出','再加少许油炒番茄出汁','倒回蛋碎翻炒均匀'],
    tip:'经典搭配，番茄维C促进铁吸收；炒碎方便宝宝咀嚼',
    img:null,emoji:'🍅'
  },
  '肉末蒸豆腐':{
    ingredients:['嫩豆腐50g','猪肉馅20g','酱油少许'],
    steps:['豆腐切小丁铺盘底','肉末加少许酱油拌匀铺在豆腐上','上锅蒸8分钟','出锅淋少许香油'],
    tip:'豆腐含钙丰富；肉末提供蛋白质和铁',
    img:null,emoji:'🍲'
  },
  '西兰花炒虾仁':{
    ingredients:['西兰花30g','鲜虾3只','植物油少许'],
    steps:['西兰花掰小朵焯水','鲜虾去壳去虾线切小段','锅中少许油炒虾仁变色','加西兰花翻炒','加几滴水焖1分钟，切碎'],
    tip:'虾仁补钙补蛋白；西兰花维C丰富',
    img:null,emoji:'🦐'
  },
  '肉末炒茄子':{
    ingredients:['嫩茄子30g','猪肉馅20g','蒜末少许'],
    steps:['茄子去皮切小丁','锅中少许油炒散肉末','加蒜末爆香','下茄子丁翻炒','加少量水焖3分钟至软烂'],
    tip:'茄子去皮更软烂；焖煮要到位方便宝宝咀嚼',
    img:null,emoji:'🍆'
  },
  '鸡丁炒黄瓜':{
    ingredients:['鸡胸肉25g','黄瓜半根','植物油少许'],
    steps:['鸡胸肉切小丁用姜水泡去腥','黄瓜去瓤切小丁','锅中少许油炒鸡丁变色','加黄瓜丁翻炒','加少许水焖1分钟'],
    tip:'黄瓜去瓤更易消化；鸡肉提供优质蛋白',
    img:null,emoji:'🥒'
  },
  '碎肉炒土豆':{
    ingredients:['土豆半个','猪肉馅20g','葱花少许'],
    steps:['土豆去皮切小丁，泡水去淀粉','锅中少许油炒散肉末','下土豆丁翻炒','加少量水焖5分钟至软烂','撒葱花出锅'],
    tip:'土豆可作为主食；焖软烂方便宝宝咀嚼',
    img:null,emoji:'🥔'
  },
  '肝泥炒菠菜':{
    ingredients:['猪肝20g','菠菜3棵','姜1片'],
    steps:['猪肝切薄片用柠檬水泡15分钟去腥','冷水下锅加姜片煮熟，料理机打成泥','菠菜焯水去草酸切碎','锅中少许油下肝泥炒散','加菠菜碎翻炒均匀'],
    tip:'补铁黄金搭配；菠菜焯水去草酸不影响钙吸收',
    img:null,emoji:'🥬'
  },
  '肉末炒豆角':{
    ingredients:['嫩豆角30g','猪肉馅20g','蒜末少许'],
    steps:['豆角去筋切小丁','焯水2分钟至半熟','锅中少许油炒散肉末','加蒜末和豆角丁翻炒','加少量水焖3分钟至软烂'],
    tip:'豆角务必彻底炒熟；选嫩豆角纤维更少',
    img:null,emoji:'🫛'
  },
  '鸡丝炒胡萝卜':{
    ingredients:['鸡胸肉25g','胡萝卜半根','植物油少许'],
    steps:['鸡胸肉煮熟撕细丝','胡萝卜去皮切细丝','锅中少许油炒胡萝卜丝','加鸡丝翻炒','加少量水焖1分钟'],
    tip:'胡萝卜过油营养更易吸收；鸡肉撕越细越好',
    img:null,emoji:'🥕'
  },
  '肉末炒冬瓜':{
    ingredients:['冬瓜50g','猪肉馅20g','葱花少许'],
    steps:['冬瓜去皮去瓤切小丁','锅中少许油炒散肉末','下冬瓜丁翻炒','加少量水焖3分钟至透明','撒葱花出锅'],
    tip:'冬瓜水分足易消化；适合夏季清热',
    img:null,emoji:'🎃'
  },
  '番茄鸡肉碎':{
    ingredients:['鸡胸肉30g','番茄半个','洋葱少许'],
    steps:['鸡胸肉切小块料理机打成末','番茄去皮切丁，洋葱切碎','锅中少许油炒散鸡肉末','加洋葱炒软，加番茄丁炒出汁','小火煮2分钟收汁'],
    tip:'番茄酸甜开胃；鸡肉末比整块更易咀嚼',
    img:null,emoji:'🍅'
  },
  '碎肉炒西兰花':{
    ingredients:['西兰花30g','猪肉馅20g','蒜末少许'],
    steps:['西兰花掰小朵焯水1分钟','锅中少许油炒散肉末','加蒜末爆香','下西兰花翻炒','加几滴水焖1分钟，切碎'],
    tip:'西兰花焯水保持翠绿；深色蔬菜营养密度高',
    img:null,emoji:'🥦'
  },
  '肉末炒木耳':{
    ingredients:['干木耳3朵','猪肉馅20g','胡萝卜少许'],
    steps:['木耳提前泡发洗净切碎','胡萝卜切小丁','锅中少许油炒散肉末','加胡萝卜和木耳碎翻炒','加少量水焖2分钟'],
    tip:'木耳补铁补血；务必切碎防止噎',
    img:null,emoji:'🍄'
  },
  '鸡蛋炒虾仁':{
    ingredients:['鲜虾3只','鸡蛋1个','葱花少许'],
    steps:['鲜虾去壳去虾线切小段','鸡蛋打散','锅中少许油炒虾仁变色','倒入蛋液','半凝固时划散，撒葱花'],
    tip:'虾仁补钙补锌；蛋液半凝固时划散更嫩',
    img:null,emoji:'🍳'
  },
  '肉末炒丝瓜':{
    ingredients:['丝瓜30g','猪肉馅20g','蒜末少许'],
    steps:['丝瓜去皮切小丁','锅中少许油炒散肉末','加蒜末爆香','下丝瓜丁翻炒','加少量水焖2分钟至软'],
    tip:'丝瓜水分多口感软；适合宝宝咀嚼',
    img:null,emoji:'🥒'
  },
  '碎肉炒南瓜':{
    ingredients:['南瓜50g','猪肉馅20g','葱花少许'],
    steps:['南瓜去皮切小丁','锅中少许油炒散肉末','下南瓜丁翻炒','加少量水焖5分钟至软烂','撒葱花出锅'],
    tip:'南瓜软糯自带甜味；补β-胡萝卜素',
    img:null,emoji:'🎃'
  },
  '鸡肝炒菠菜':{
    ingredients:['鸡肝20g','菠菜3棵','姜1片'],
    steps:['鸡肝切薄片用柠檬水泡10分钟去腥','冷水加姜片煮熟，切碎','菠菜焯水切碎','锅中少许油下鸡肝碎炒散','加菠菜碎翻炒均匀'],
    tip:'鸡肝比猪肝更嫩；补铁补维生素A',
    img:null,emoji:'🥬'
  },
  '肉末炒莴笋':{
    ingredients:['莴笋30g','猪肉馅20g','蒜末少许'],
    steps:['莴笋去皮切小丁','锅中少许油炒散肉末','加蒜末爆香','下莴笋丁翻炒','加少量水焖2分钟'],
    tip:'莴笋含钾丰富；口感脆嫩宝宝易接受',
    img:null,emoji:'🥬'
  }
};

const FOOD_MENU = [
  {day:'周一',meals:[
    {type:'早餐',dishes:['山药小米粥','鸡蛋羹','圣女果几颗']},
    {type:'加餐',dishes:['苹果块']},
    {type:'午餐',dishes:['软米饭','番茄炒鸡蛋','碎肉炒西兰花','冬瓜汤']},
    {type:'加餐',dishes:['无糖酸奶']},
    {type:'晚餐',dishes:['软米饭','鸡丁炒黄瓜','炒小白菜']}
  ],nutrition:'今日炒菜3道。补铁：鸡蛋+西兰花。绿叶菜：小白菜。主食含杂粮：小米。',
   shopping:'山药、小米、鸡蛋、圣女果、苹果、大米、番茄、西兰花、猪肉馅、冬瓜、鸡胸肉、黄瓜、小白菜、无糖酸奶'},
  {day:'周二',meals:[
    {type:'早餐',dishes:['南瓜发糕','牛奶','蓝莓']},
    {type:'加餐',dishes:['香蕉块']},
    {type:'午餐',dishes:['杂粮软饭','西兰花炒虾仁','肉末蒸豆腐','菠菜碎']},
    {type:'加餐',dishes:['蒸南瓜块']},
    {type:'晚餐',dishes:['软米饭','肉末炒茄子','炒卷心菜碎']}
  ],nutrition:'今日炒菜3道。补钙：虾仁+豆腐。补脑：虾仁。绿叶菜：菠菜+卷心菜。',
   shopping:'南瓜、面粉、牛奶、蓝莓、香蕉、大米、小米、西兰花、鲜虾、嫩豆腐、菠菜、茄子、猪肉馅、卷心菜'},
  {day:'周三',meals:[
    {type:'早餐',dishes:['燕麦粥','香蕉松饼','煮鸡蛋']},
    {type:'加餐',dishes:['梨块']},
    {type:'午餐',dishes:['软饭','番茄鸡肉碎','碎肉炒土豆','炒油麦菜碎']},
    {type:'加餐',dishes:['无糖酸奶']},
    {type:'晚餐',dishes:['软米饭','鸡蛋炒虾仁','炒小白菜']}
  ],nutrition:'今日炒菜4道。补蛋白：鸡蛋+鸡肉+虾仁。膳食纤维：土豆+油麦菜。绿叶菜：油麦菜+小白菜。',
   shopping:'燕麦、牛奶、香蕉、鸡蛋、面粉、梨、大米、鸡胸肉、番茄、洋葱、土豆、猪肉馅、油麦菜、鲜虾、小白菜、无糖酸奶'},
  {day:'周四',meals:[
    {type:'早餐',dishes:['蔬菜鸡蛋饼','豆浆','苹果块']},
    {type:'加餐',dishes:['橙子瓣']},
    {type:'午餐',dishes:['软米饭','碎肉炒南瓜','鸡丝炒胡萝卜','炒卷心菜碎']},
    {type:'加餐',dishes:['蒸红薯块']},
    {type:'晚餐',dishes:['软米饭','肉末炒冬瓜','蒜蓉西兰花']}
  ],nutrition:'今日炒菜5道。补铁：胡萝卜维A。补维C：橙子+西兰花。绿叶菜：卷心菜+西兰花。',
   shopping:'面粉、鸡蛋、胡萝卜、西兰花、黄豆、苹果、橙子、大米、南瓜、猪肉馅、鸡胸肉、卷心菜、冬瓜、红薯'},
  {day:'周五',meals:[
    {type:'早餐',dishes:['紫薯馒头','牛奶','草莓']},
    {type:'加餐',dishes:['猕猴桃块']},
    {type:'午餐',dishes:['软米饭','肝泥炒菠菜','番茄炒鸡蛋','碎肉炒莴笋']},
    {type:'加餐',dishes:['无糖酸奶']},
    {type:'晚餐',dishes:['软米饭','肉末炒木耳','炒小白菜']}
  ],nutrition:'今日炒菜5道。补铁重点：猪肝+木耳（每周1次肝类）。维C：猕猴桃促铁吸收。绿叶菜：菠菜+小白菜。',
   shopping:'紫薯、面粉、牛奶、草莓、猕猴桃、大米、猪肝、菠菜、番茄、鸡蛋、莴笋、猪肉馅、干木耳、胡萝卜、小白菜、无糖酸奶'},
  {day:'周六',meals:[
    {type:'早餐',dishes:['玉米粥','鸡蛋卷','小番茄']},
    {type:'加餐',dishes:['火龙果块']},
    {type:'午餐',dishes:['什锦炒饭','鸡蛋炒虾仁','炒油麦菜碎','萝卜汤']},
    {type:'加餐',dishes:['无糖酸奶']},
    {type:'晚餐',dishes:['软米饭','肉末炒丝瓜','碎肉炒西兰花']}
  ],nutrition:'今日炒菜5道。补钙：虾仁+奶。膳食纤维：油麦菜+丝瓜。绿叶菜：油麦菜+西兰花。',
   shopping:'玉米糁、鸡蛋、牛奶、小番茄、火龙果、大米、胡萝卜、豌豆、猪瘦肉、鲜虾、油麦菜、白萝卜、丝瓜、猪肉馅、西兰花、无糖酸奶'},
  {day:'周日',meals:[
    {type:'早餐',dishes:['全麦面包','牛奶','苹果泥']},
    {type:'加餐',dishes:['香蕉半根']},
    {type:'午餐',dishes:['什锦炒饭','清蒸鲈鱼','肉末炒豆角','番茄汤']},
    {type:'加餐',dishes:['无糖酸奶']},
    {type:'晚餐',dishes:['软米饭','番茄炒鸡蛋','鸡丁炒黄瓜']}
  ],nutrition:'今日炒菜4道。均衡日：鱼+蛋+肉+蔬菜+杂粮。补脑：鲈鱼DHA。绿叶菜：炒饭豌豆+豆角。',
   shopping:'全麦面包、牛奶、苹果、香蕉、大米、鸡蛋、胡萝卜、豌豆、猪瘦肉、鲈鱼、嫩豆角、猪肉馅、番茄、鸡胸肉、黄瓜、无糖酸奶'}
];

/* ====== 工具函数 ====== */
function getDayKey(){
  var d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function getDaySeed(){
  var d=new Date();
  return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
}
function getISOWeek(date){
  var d=new Date(date);d.setHours(0,0,0,0);
  d.setDate(d.getDate()+4-(d.getDay()||7));
  var ys=new Date(d.getFullYear(),0,1);
  return Math.ceil(((d-ys)/86400000+1)/7);
}
function getCurrentThemeIndex(){return (getISOWeek(new Date())-1)%7;}
function getCurrentTheme(){return THEMES[getCurrentThemeIndex()];}
function pickItems(arr,count,seed){
  var indices=arr.map(function(_,i){return i;});
  var result=[],s=seed;
  for(var i=0;i<count&&indices.length>0;i++){
    s=(s*9301+49297)%233280;
    var idx=Math.floor(s/233280*indices.length);
    result.push(arr[indices[idx]]);
    indices.splice(idx,1);
  }
  return result;
}
function speak(text,lang){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(text);
  u.lang=lang||'en-US';u.rate=lang&&lang.indexOf('zh')===0?0.9:0.7;u.pitch=1.2;
  speechSynthesis.speak(u);
  var btns=document.querySelectorAll('[data-speak]');
  btns.forEach(function(b){
    if(b.dataset.speak===text){
      b.classList.add('playing');
      setTimeout(function(){b.classList.remove('playing');},2000);
    }
  });
}
function saveCheck(key,checked){
  var dk=getDayKey();
  var data=JSON.parse(localStorage.getItem('xp_checks')||'{}');
  if(!data[dk])data[dk]={};
  data[dk][key]=checked;
  localStorage.setItem('xp_checks',JSON.stringify(data));
}
function loadCheck(key){
  var dk=getDayKey();
  var data=JSON.parse(localStorage.getItem('xp_checks')||'{}');
  return data[dk]&&data[dk][key];
}
function saveObserve(cat,idx,checked){
  var data=JSON.parse(localStorage.getItem('xp_observe')||'{}');
  if(!data[cat])data[cat]={};
  data[cat][idx]=checked;
  localStorage.setItem('xp_observe',JSON.stringify(data));
}
function loadObserve(cat,idx){
  var data=JSON.parse(localStorage.getItem('xp_observe')||'{}');
  return data[cat]&&data[cat][idx];
}
function escapeAttr(s){return String(s).replace(/'/g,'\\\'').replace(/"/g,'&quot;');}

/* ====== 今日工作台渲染 ====== */
function renderModuleHTML(modKey,icon,title,sub,items,colorClass,type){
  var body='';
  items.forEach(function(item,i){
    if(type==='speech'){
      body+='<div class="speech-box">'+
        '<div class="speech-text"><div class="cn">'+item.cn+'</div>'+
        '<div class="en" style="font-style:normal;color:var(--text3)">'+item.scene+'</div></div>'+
        '<button class="speech-play" data-speak="'+escapeAttr(item.cn)+'" data-lang="zh-CN">🔊</button></div>';
    }else if(type==='english'){
      var ex=item.example?' · '+item.example:'';
      body+='<div class="task-item"><div class="task-num">'+(i+1)+'</div>'+
        '<div class="task-content"><div class="task-name">'+item.en+'</div>'+
        '<div class="task-desc">'+item.cn+ex+'</div></div>'+
        '<button class="play-btn" data-speak="'+escapeAttr(item.en)+'" data-lang="en-US"><span class="play-icon">▶</span>播放</button></div>';
    }else{
      body+='<div class="task-item"><div class="task-num">'+(i+1)+'</div>'+
        '<div class="task-content"><div class="task-name">'+item.name+'</div>'+
        '<div class="task-desc">'+item.desc+'</div>'+
        (item.tag?'<span class="task-tag">'+item.tag+'</span>':'')+'</div></div>';
    }
  });
  var checkKey='today_'+modKey;
  var checked=loadCheck(checkKey);
  return '<div class="module module-'+colorClass+'" data-module="'+modKey+'">'+
    '<div class="module-header" data-toggle>'+
    '<span class="module-icon">'+icon+'</span>'+
    '<div class="module-title"><h2>'+title+'</h2><span class="module-sub">'+sub+'</span></div>'+
    '<label class="module-check'+(checked?' checked':'')+'" data-check="'+checkKey+'"><span class="check-mark">✓</span></label>'+
    '<span class="module-toggle">▼</span></div>'+
    '<div class="module-body">'+body+'</div></div>';
}
function renderObserveReminder(){
  var theme=getCurrentTheme();
  var tips=[
    '小派专注玩耍时请全程不打断、不提问，保护他的超长专注状态',
    '优先用真实食材和家居物品，生活物品就是最好的教具',
    '所有早教融入日常，不专门坐教、不上课式学习',
    '尊重小派的节奏，不强迫展示、不攀比、不超前',
    '任务极简低成本，随手可做不费妈，享受亲子时光'
  ];
  var tip=tips[getDaySeed()%tips.length];
  return '<div class="module module-observe">'+
    '<div class="module-header" data-toggle>'+
    '<span class="module-icon">📋</span>'+
    '<div class="module-title"><h2>发育观察重点 & 养育提醒</h2><span class="module-sub">本周关注 · 每周1-2次</span></div>'+
    '<span class="module-toggle">▼</span></div>'+
    '<div class="module-body">'+
    '<div class="notice-box"><div class="notice-title">'+theme.icon+' 本周主题：'+theme.name+'</div>'+
    '<div class="notice-text">'+theme.desc+'</div></div>'+
    '<div class="task-item"><div class="task-num">1</div><div class="task-content">'+
    '<div class="task-name">大运动观察</div>'+
    '<div class="task-desc">小派处于爬行期→扶站期，重点观察是否开始扶物站立、横向移步</div></div></div>'+
    '<div class="task-item"><div class="task-num">2</div><div class="task-content">'+
    '<div class="task-name">精细动作观察</div>'+
    '<div class="task-desc">观察拇指食指捏取是否更准确，是否能叠2块积木，是否主动放物入容器</div></div></div>'+
    '<div class="task-item"><div class="task-num">3</div><div class="task-content">'+
    '<div class="task-name">语言观察</div>'+
    '<div class="task-desc">听懂几个指令？会叫几个称呼？有无新词出现？是否用手指表达需求？</div></div></div>'+
    '<div class="task-item"><div class="task-num">4</div><div class="task-content">'+
    '<div class="task-name">今日养育提醒</div>'+
    '<div class="task-desc">'+tip+'</div></div></div>'+
    '</div></div>';
}
function renderToday(){
  var theme=getCurrentTheme(),seed=getDaySeed();
  var d=new Date();var wd=['日','一','二','三','四','五','六'];
  document.getElementById('todayDate').textContent=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日 · 星期'+wd[d.getDay()];
  var tb=document.getElementById('todayTheme');
  tb.className='theme-badge '+theme.cls;
  tb.innerHTML=theme.icon+' 本周主题：'+theme.name;

  var fineItems=pickItems(FINE_ACTIVITIES[theme.key],3,seed);
  var langItems=pickItems(LANG_SPEECH[theme.key],3,seed+1);
  var cogItems=pickItems(COG_GUIDE[theme.key],3,seed+2);
  var engPool=ENG_DATA.colors.concat(ENG_DATA.words);
  var engItems=pickItems(engPool,3,seed+3);
  var grossItems=pickItems(GROSS_ACTIVITIES[theme.key],3,seed+4);

  document.getElementById('todayModules').innerHTML=
    renderModuleHTML('fine','✋','精细动作 & 专注力','手眼协调·耐心·精细控制',fineItems,'fine')+
    renderModuleHTML('lang','💬','语言启蒙','听懂指令·模仿发音·扩充词汇',langItems,'lang','speech')+
    renderModuleHTML('cog','🧩','基础认知启蒙','实物指认·场景教学·游戏输入',cogItems,'cog')+
    renderModuleHTML('eng','🎵','英文启蒙','磨耳朵·画面对应·无压力',engItems,'eng','english')+
    renderModuleHTML('gross','🤸','大运动 + 感统','肢体协调·本体感·胆量',grossItems,'gross')+
    renderObserveReminder();
}

/* ====== 主题周渲染 ====== */
function renderThemeWeek(){
  var curIdx=getCurrentThemeIndex();
  var html='';
  THEMES.forEach(function(t,i){
    html+='<div class="theme-week-card'+(i===curIdx?' current':'')+'">'+
      '<div class="theme-week-header">'+
      '<span style="font-size:22px">'+t.icon+'</span>'+
      '<span class="theme-week-name">'+t.name+'</span>'+
      (i===curIdx?'<span class="theme-week-badge">本周</span>':'')+
      '</div><div class="theme-week-desc">'+t.desc+'</div></div>';
  });
  html+='<div class="notice-box"><div class="notice-title">轮换规则</div>'+
    '<div class="notice-text">每周自动切换一个主题，7周完成一轮循环。每天的内容从本周主题中自动选取，同一天内容固定，次日自动更新。简单重复、巩固记忆，符合低龄宝宝记忆规律。</div></div>';
  document.getElementById('themeList').innerHTML=html;
}

/* ====== 活动库渲染 ====== */
var libDomain='all',libTheme='all';
function renderLibrary(){
  var domains=['全部','精细动作','大运动','语言认知','感官探索','生活技能','艺术创意'];
  var dh='';
  domains.forEach(function(d){
    dh+='<span class="chip'+(libDomain===d?' active':'')+'" data-domain="'+d+'">'+d+'</span>';
  });
  document.getElementById('domainFilter').innerHTML=dh;
  var th='<span class="chip'+(libTheme==='all'?' active':'')+'" data-theme="all">全部</span>';
  THEMES.forEach(function(t){
    th+='<span class="chip'+(libTheme===t.key?' active':'')+'" data-theme="'+t.key+'">'+t.name.replace('认知周','').replace('动手周','').replace('探索周','').replace('身体周','').replace('物品周','')+'</span>';
  });
  document.getElementById('themeFilter').innerHTML=th;
  var filtered=ACTIVITY_LIBRARY.filter(function(a){
    return(libDomain==='all'||a.domain===libDomain)&&(libTheme==='all'||a.theme===libTheme);
  });
  var themeMap={};
  THEMES.forEach(function(t){themeMap[t.key]=t.icon+' '+t.name.replace('周','');});
  var ah='';
  filtered.forEach(function(a){
    ah+='<div class="act-card"><div class="act-name">'+a.name+'</div>'+
      '<div class="act-desc">'+a.desc+'</div>'+
      '<div class="act-tags"><span class="act-tag domain">'+a.domain+'</span>'+
      '<span class="act-tag theme">'+themeMap[a.theme]+'</span></div></div>';
  });
  if(!filtered.length)ah='<div style="text-align:center;padding:40px;color:var(--text3)">暂无匹配活动</div>';
  document.getElementById('activityList').innerHTML=ah;
}

/* ====== 发育观察渲染 ====== */
function renderObserve(){
  var html='';
  OBSERVE_ITEMS.forEach(function(cat){
    var checkedCount=cat.items.filter(function(_,i){return loadObserve(cat.cat,i);}).length;
    html+='<div class="observe-card"><div class="observe-cat-header" data-toggle>'+
      '<span class="cat-icon">'+cat.icon+'</span>'+cat.cat+
      '<span class="cat-count">'+checkedCount+'/'+cat.items.length+'</span></div>'+
      '<div class="observe-items">';
    cat.items.forEach(function(item,i){
      var ck=loadObserve(cat.cat,i);
      html+='<div class="observe-item">'+
        '<div class="observe-check'+(ck?' checked':'')+'" data-obs="'+cat.cat+'" data-idx="'+i+'"><span class="chk">✓</span></div>'+
        '<span class="obs-text">'+item+'</span></div>';
    });
    html+='</div></div>';
  });
  document.getElementById('observeList').innerHTML=html;
}

/* ====== 英文启蒙渲染 ====== */
function renderEnglish(){
  var h='';
  h+='<div class="eng-section"><div class="eng-section-title">🎨 8大基础颜色</div>';
  ENG_DATA.colors.forEach(function(c){
    h+='<div class="eng-card"><div class="eng-row"><div><div class="eng-word">'+c.en+
      '</div><div class="eng-meaning">'+c.cn+' · '+c.example+'</div></div>'+
      '<button class="play-btn" data-speak="'+escapeAttr(c.en)+'" data-lang="en-US"><span class="play-icon">▶</span>播放</button></div></div>';
  });
  h+='</div>';
  h+='<div class="eng-section"><div class="eng-section-title">📦 日常单词</div>';
  h+='<div class="tool-list">';
  ENG_DATA.words.forEach(function(w){
    h+='<div class="eng-card" style="margin:0"><div class="eng-row"><div><div class="eng-word" style="font-size:14px">'+w.en+
      '</div><div class="eng-meaning">'+w.cn+'</div></div>'+
      '<button class="play-btn" data-speak="'+escapeAttr(w.en)+'" data-lang="en-US" style="padding:4px 8px;font-size:11px">▶</button></div></div>';
  });
  h+='</div></div>';
  h+='<div class="eng-section"><div class="eng-section-title">💬 超短句</div>';
  ENG_DATA.phrases.forEach(function(p){
    h+='<div class="eng-card"><div class="eng-row"><div><div class="eng-word" style="font-size:15px">'+p.en+
      '</div><div class="eng-meaning">'+p.cn+'</div></div>'+
      '<button class="play-btn" data-speak="'+escapeAttr(p.en)+'" data-lang="en-US"><span class="play-icon">▶</span>播放</button></div></div>';
  });
  h+='</div>';
  h+='<div class="eng-section"><div class="eng-section-title">🎵 SSS儿歌推荐</div>';
  ENG_DATA.songs.forEach(function(s){
    h+='<div class="act-card"><div class="act-name">'+s.name+'</div>'+
      '<div class="act-desc">'+s.desc+'</div>'+
      '<span class="task-tag" style="background:var(--eng-bg);color:var(--eng)">推荐时机：'+s.when+'</span></div>';
  });
  h+='</div>';
  h+='<div class="eng-section"><div class="eng-section-title">👩‍👦 亲子口语</div>';
  ENG_DATA.oral.forEach(function(o){
    h+='<div class="speech-box" style="background:var(--eng-bg)"><div class="speech-text"><div class="cn">'+o.en+
      '</div><div class="en" style="font-style:normal;color:var(--text2)">'+o.cn+'</div></div>'+
      '<button class="speech-play" data-speak="'+escapeAttr(o.en)+'" data-lang="en-US" style="background:var(--eng)">🔊</button></div>';
  });
  h+='</div>';
  h+='<div class="eng-section"><div class="eng-section-title">🏃 TPR全身反应教学</div>';
  h+='<div class="notice-box"><div class="notice-title">TPR是什么？</div>'+
    '<div class="notice-text">TPR（Total Physical Response）全身反应法：家长说英文并做动作，宝宝通过模仿动作理解语言。不需要宝宝跟读，只需看和做。</div></div>';
  ENG_DATA.tpr.forEach(function(t){
    h+='<div class="act-card"><div class="act-name">'+t.en+' ('+t.cn+')</div>'+
      '<div class="act-desc">'+t.action+'</div>'+
      '<button class="play-btn" data-speak="'+escapeAttr(t.en)+'" data-lang="en-US" style="margin-top:6px"><span class="play-icon">▶</span>播放跟做</button></div>';
  });
  h+='</div>';
  h+='<div class="notice-box"><div class="notice-title">磨耳朵原则</div>'+
    '<div class="notice-text">只磨耳朵、建立画面对应，不认读、不拼写、无压力。每天播放儿歌10-15分钟即可，不必长时间播放。亲子口语在生活场景中自然使用，不要求宝宝跟读。</div></div>';
  document.getElementById('englishContent').innerHTML=h;
}

/* ====== 教具清单渲染 ====== */
function renderTools(){
  var sections=[
    {key:'household',title:'🏠 家居物品',desc:'家里现成可用'},
    {key:'food',title:'🍎 食物类',desc:'厨房里随手可得'},
    {key:'advanced',title:'💰 低成本可选进阶',desc:'少量购买即可'},
    {key:'diy',title:'✂️ DIY教具',desc:'自己动手制作'}
  ];
  var h='';
  sections.forEach(function(s){
    h+='<div class="tool-section"><div class="tool-section-title">'+s.title+
      '<span style="font-size:11px;color:var(--text3);font-weight:400;margin-left:6px">'+s.desc+'</span></div>'+
      '<div class="tool-list">';
    TOOLS[s.key].forEach(function(t){
      h+='<div class="tool-item"><div class="tool-name">'+t.name+'</div><div class="tool-desc">'+t.desc+'</div></div>';
    });
    h+='</div></div>';
  });
  h+='<div class="notice-box"><div class="notice-title">使用原则</div>'+
    '<div class="notice-text">优先使用家居物品和真实食材，无需专门购买玩具。所有教具与每周主题搭配使用，活动库中的活动会标注所需材料。DIY教具可以和宝宝一起制作，本身就是很好的亲子活动。</div></div>';
  document.getElementById('toolsContent').innerHTML=h;
}

/* ====== 空间布置渲染 ====== */
function renderSpace(){
  var h='<div class="space-grid">';
  SPACES.forEach(function(s){
    h+='<div class="space-card"><div class="space-card-header"><span style="font-size:20px">'+s.icon+
      '</span>'+s.name+'</div><div class="space-card-body">'+
      '<p style="font-weight:600;color:var(--text);margin-bottom:4px">布置物品：</p>';
    s.items.forEach(function(it){h+='<p>• '+it+'</p>';});
    h+='<p style="font-weight:600;color:var(--text);margin:8px 0 4px">安全检查：</p>'+
      '<ul class="space-checklist">';
    s.checklist.forEach(function(c){h+='<li>'+c+'</li>';});
    h+='</ul></div></div>';
  });
  h+='</div>';
  h+='<div class="notice-box"><div class="notice-title">月龄分区建议</div>'+
    '<div class="notice-text"><b>爬行期（当前）：</b>以运动区和感官区为主，操作区材料放在地面托盘上，阅读角铺厚地垫。<br><b>扶站期：</b>增加矮桌操作区，运动区增加扶站辅助物，阅读角绘本架调到站姿高度。<br><b>独走期：</b>扩大运动区范围，增加推拉玩具区，各区域间距适当加大。</div></div>';
  document.getElementById('spaceContent').innerHTML=h;
}

/* ====== 养育原则渲染 ====== */
function renderPrinciples(){
  var h='';
  PRINCIPLES.forEach(function(p,i){
    h+='<div class="principle-card"><div class="principle-num">'+(i+1)+'</div>'+
      '<div class="principle-text"><div class="p-title">'+p.title+'</div><div class="p-desc">'+p.desc+'</div></div></div>';
  });
  document.getElementById('principlesContent').innerHTML=h;
  var bh='';
  BANS.forEach(function(b){
    bh+='<div class="ban-item"><span class="ban-icon">'+b.icon+'</span><span class="ban-text">'+b.text+'</span></div>';
  });
  document.getElementById('banContent').innerHTML=bh;
}

/* ====== 辅食食谱卡片渲染 ====== */
function renderDishCard(dishName){
  var r=RECIPE_DB[dishName];
  if(!r){
    return '<div class="dish-simple"><span class="dish-emoji">🍽️</span><span class="dish-name-simple">'+dishName+'</span></div>';
  }
  var imgHtml=r.img?'<img class="dish-img" src="'+r.img+'" alt="'+dishName+'" onerror="this.style.display=\'none\'">':'';
  var placeholderHtml=!r.img?'<div class="dish-img-placeholder">'+r.emoji+'</div>':'';
  var stepsHtml='';
  r.steps.forEach(function(s,i){
    stepsHtml+='<div class="recipe-step"><span class="step-num">'+(i+1)+'</span><span class="step-text">'+s+'</span></div>';
  });
  var ingHtml='';
  r.ingredients.forEach(function(ing){
    ingHtml+='<span class="ingredient-tag">'+ing+'</span>';
  });
  return '<div class="dish-card collapsed">'+
    '<div class="dish-card-header" data-toggle>'+
    (imgHtml||placeholderHtml)+
    '<div class="dish-info"><div class="dish-name">'+dishName+'</div>'+
    '<div class="dish-ingredients">'+ingHtml+'</div></div>'+
    '<span class="dish-toggle">查看做法 ▼</span></div>'+
    '<div class="dish-card-body">'+
    '<div class="recipe-steps">'+stepsHtml+'</div>'+
    '<div class="recipe-tip">💡 '+r.tip+'</div>'+
    '</div></div>';
}
function getMealTime(type){
  var times={
    '早餐':'07:30','上午加餐':'10:00','午餐':'11:30','下午加餐':'15:00','加餐':'10:00 / 15:00','晚餐':'18:00'
  };
  return times[type]||'';
}
function renderMealCard(meal){
  var t=getMealTime(meal.type);
  var timeHtml=t?'<span class="meal-time">🕐 '+t+'</span>':'';
  var h='<div class="meal-card"><div class="meal-header">'+meal.type+timeHtml+'</div>';
  meal.dishes.forEach(function(d){
    h+=renderDishCard(d);
  });
  h+='</div>';
  return h;
}

/* ====== 辅食菜单渲染 ====== */
function renderFood(){
  var d=new Date();
  var dow=(d.getDay()+6)%7;
  var todayMenu=FOOD_MENU[dow];
  var yMenu=FOOD_MENU[(dow-1+7)%7];
  var wd=['周一','周二','周三','周四','周五','周六','周日'];
  var h='<div class="food-day"><div class="food-day-header">📅 今日菜单 · '+wd[dow]+'</div>';
  if(todayMenu.nutrition){
    h+='<div class="nutrition-box"><div class="nutrition-title">🧬 今日营养说明</div><div class="nutrition-text">'+todayMenu.nutrition+'</div></div>';
  }
  todayMenu.meals.forEach(function(m){
    h+=renderMealCard(m);
  });
  h+='</div>';
  h+='<div class="food-shopping"><div class="food-shopping-title">🛒 今日采购清单（为明天准备）</div>'+
    '<div class="food-shopping-list">'+yMenu.shopping+'</div></div>';
  h+='<div class="notice-box" style="margin-top:12px"><div class="notice-title">🍼 每日奶量提醒</div>'+
    '<div class="notice-text">每日奶量需保证400-600ml（母乳/配方奶/牛奶均可），可安排在早起、上午加餐、午睡后和睡前。维生素D每日补充600IU，配合15分钟户外日晒促进钙吸收。</div></div>';
  h+='<div style="margin-top:16px"><div class="page-title" style="font-size:16px;margin-bottom:10px">📋 辅食食谱大全</div>'+
    '<div class="notice-box" style="margin:0 0 12px"><div class="notice-title">点击任意菜品查看制作方法</div>'+
    '<div class="notice-text">以下收录本周所有辅食的详细做法，含食材用量、分步图解和小贴士。配图菜品有实拍参考，其余用图标标注。</div></div>';
  var rendered={};
  FOOD_MENU.forEach(function(day){
    day.meals.forEach(function(m){
      m.dishes.forEach(function(dish){
        if(RECIPE_DB[dish]&&!rendered[dish]){
          rendered[dish]=true;
          h+=renderDishCard(dish);
        }
      });
    });
  });
  h+='</div>';
  h+='<div style="margin-top:16px"><div class="page-title" style="font-size:16px;margin-bottom:10px">🗓️ 本周完整菜单</div>';
  FOOD_MENU.forEach(function(day){
    h+='<div class="food-day"><div class="food-day-header" style="background:var(--lang-bg);color:var(--lang);font-size:13px">'+day.day+'</div>';
    if(day.nutrition){
      h+='<div style="font-size:11px;color:var(--text2);padding:4px 2px 6px;line-height:1.4">'+day.nutrition+'</div>';
    }
    day.meals.forEach(function(m){
      var mt=getMealTime(m.type);
      var mtHtml=mt?' <span style="color:var(--text3);font-weight:400">🕐 '+mt+'</span>':'';
      h+='<div class="food-meal"><div class="food-meal-title">'+m.type+mtHtml+'</div><div class="food-items" style="font-size:12px">'+m.dishes.join(' + ')+'</div></div>';
    });
    h+='</div>';
  });
  h+='</div>';
  h+='<div class="notice-box"><div class="notice-title">📚 科学辅食原则</div>'+
    '<div class="notice-text">'+
    '<b>依据《中国婴幼儿喂养指南(2022)》7~24月龄 + 协和儿科营养建议</b><br><br>'+
    '<b>每日五类食材定量：</b><br>'+
    '• 谷薯类 50-100g（含杂粮，每周≥2次）<br>'+
    '• 肉禽鱼 50-75g（红肉+鱼虾+禽肉轮换）<br>'+
    '• 鸡蛋 1个/天<br>'+
    '• 蔬菜 50-150g（绿叶菜占半数以上）<br>'+
    '• 水果 50-100g<br>'+
    '• 奶类 400-600ml<br>'+
    '• 植物油 10-15g<br><br>'+
    '<b>关键营养素：</b><br>'+
    '• 铁 7mg/天：每周1-2次动物肝脏，搭配维C果蔬促吸收<br>'+
    '• 钙 600mg/天：奶+豆腐+绿叶菜<br>'+
    '• 维D 600IU/天：每日补充剂+日晒<br>'+
    '• 蛋白质 25g/天：蛋+肉+豆制品<br><br>'+
    '<b>餐次安排：</b>三餐两点（上午10点、下午3点加餐）<br>'+
    '<b>调味规则：</b>少盐少糖，每日钠≤700mg，禁成人餐<br>'+
    '<b>食材原则：</b>软烂易嚼、食材新鲜、每周鱼虾2-3次<br>'+
    '<b>手指食物：</b>鼓励自主进食，食材大小以防噎为准</div></div>';
  document.getElementById('foodContent').innerHTML=h;
}

/* ====== 页面切换 ====== */
function switchPage(pageName){
  document.querySelectorAll('.nav-item').forEach(function(item){
    item.classList.toggle('active',item.dataset.page===pageName);
  });
  document.querySelectorAll('.page').forEach(function(page){
    page.classList.toggle('active',page.id==='page-'+pageName);
  });
  document.getElementById('content').scrollTop=0;
}

/* ====== 事件绑定 ====== */
function bindEvents(){
  // 导航切换
  document.getElementById('navItems').addEventListener('click',function(e){
    var item=e.target.closest('.nav-item');
    if(item)switchPage(item.dataset.page);
  });
  // 全局事件委托
  document.getElementById('content').addEventListener('click',function(e){
    // 模块折叠
    var header=e.target.closest('[data-toggle]');
    if(header&&!e.target.closest('[data-check]')&&!e.target.closest('[data-speak]')){
      header.parentElement.classList.toggle('collapsed');
      return;
    }
    // 模块打勾
    var chk=e.target.closest('[data-check]');
    if(chk){
      e.stopPropagation();
      chk.classList.toggle('checked');
      saveCheck(chk.dataset.check,chk.classList.contains('checked'));
      return;
    }
    // 发育观察打勾
    var obs=e.target.closest('[data-obs]');
    if(obs){
      obs.classList.toggle('checked');
      saveObserve(obs.dataset.obs,parseInt(obs.dataset.idx),obs.classList.contains('checked'));
      // 更新计数
      var card=obs.closest('.observe-card');
      var cat=card.querySelector('.observe-cat-header');
      var count=card.querySelectorAll('.observe-check.checked').length;
      var total=card.querySelectorAll('.observe-check').length;
      cat.querySelector('.cat-count').textContent=count+'/'+total;
      return;
    }
    // 语音播放
    var spk=e.target.closest('[data-speak]');
    if(spk){
      speak(spk.dataset.speak,spk.dataset.lang);
      return;
    }
    // 活动库筛选
    var chip=e.target.closest('.chip');
    if(chip){
      if(chip.dataset.domain){
        libDomain=chip.dataset.domain;
      }else if(chip.dataset.theme){
        libTheme=chip.dataset.theme;
      }
      renderLibrary();
      return;
    }
  });
}

/* ====== 初始化 ====== */
function init(){
  renderToday();
  renderThemeWeek();
  renderLibrary();
  renderObserve();
  renderEnglish();
  renderTools();
  renderSpace();
  renderPrinciples();
  renderFood();
  bindEvents();
  // PWA Service Worker
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  }
}
init();
