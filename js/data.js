export const S3=Math.sqrt(3)/2;
// ═══ DATA ═══
export const seph=[
  {id:1, name:'Kether',   hebrew:'כתר',  english:'Crown',        x:0,  y:4,  color:0xFFFFFF,planet:'Primum Mobile',archangel:'Metatron',  godName:'Eheieh',          desc:'Pure divine will — the point of origin from which all existence flows.'},
  {id:2, name:'Chokmah',  hebrew:'חכמה', english:'Wisdom',        x:S3, y:3,  color:0xAABBDD,planet:'Uranus',       archangel:'Raziel',   godName:'Yah',             desc:'Active masculine force — the first flash of creative insight.'},
  {id:3, name:'Binah',    hebrew:'בינה', english:'Understanding',  x:-S3,y:3,  color:0x4444AA,planet:'Saturn',       archangel:'Tzaphkiel',godName:'YHVH Elohim',     desc:'Receptive feminine force — the womb that gives form to wisdom.'},
  {id:4, name:'Chesed',   hebrew:'חסד',  english:'Mercy',          x:S3, y:2,  color:0x2266FF,planet:'Jupiter',      archangel:'Tzadkiel', godName:'El',              desc:'Expansive love and benevolence. Grace and abundance.'},
  {id:5, name:'Geburah',  hebrew:'גבורה',english:'Severity',       x:-S3,y:2,  color:0xFF2400,planet:'Mars',         archangel:'Khamael',  godName:'Elohim Gibor',    desc:'Disciplined strength and judgment. Necessary restriction.'},
  {id:6, name:'Tiphareth',hebrew:'תפארת',english:'Beauty',         x:0,  y:2,  color:0xFFD700,planet:'Sun',          archangel:'Raphael',  godName:'YHVH Eloah',      desc:'The heart of the Tree — perfect balance. The solar center.'},
  {id:7, name:'Netzach',  hebrew:'נצח',  english:'Victory',        x:S3, y:1,  color:0x50C878,planet:'Venus',        archangel:'Haniel',   godName:'YHVH Tzabaoth',   desc:'The force of nature, desire, emotion, and artistic inspiration.'},
  {id:8, name:'Hod',      hebrew:'הוד',  english:'Splendor',       x:-S3,y:1,  color:0xFF8C00,planet:'Mercury',      archangel:'Michael',  godName:'Elohim Tzabaoth', desc:'Intellect, communication, and rational thought.'},
  {id:9, name:'Yesod',    hebrew:'יסוד', english:'Foundation',     x:0,  y:.5, color:0x9955FF,planet:'Moon',         archangel:'Gabriel',  godName:'Shaddai El Chai', desc:'The astral foundation — the lunar mirror.'},
  {id:10,name:'Malkuth',  hebrew:'מלכות',english:'Kingdom',        x:0,  y:0,  color:0xCCAA33,planet:'Earth',        archangel:'Sandalphon',godName:'Adonai ha-Aretz',desc:'The physical world — where all divine forces manifest.'},
];
// Qliphoth positions match their sephiroth mirrors (same pillar layout, not mirrored)
export const qlip=[
  {id:1, name:'Thaumiel',    english:'Twin Gods',           x:0,  y:-4,  color:0x332255,demonRuler:'Satan/Moloch',     desc:'Duality and division — the splitting of divine unity.'},
  {id:2, name:'Ghogiel',     english:'The Hinderers',       x:S3, y:-3,  color:0x223366,demonRuler:'Beelzebub',        desc:'Obstruction — lies masquerading as truth.'},
  {id:3, name:'Satariel',    english:'The Concealers',      x:-S3,y:-3,  color:0x442211,demonRuler:'Lucifuge Rofocale',desc:'Concealment — matter divorced from wisdom.'},
  {id:4, name:"Gha'agsheklah",english:'The Devourers',      x:S3, y:-2,  color:0x112266,demonRuler:'Astaroth',         desc:'Devouring love — mercy perverted into greed.'},
  {id:5, name:'Golachab',    english:'The Burners',         x:-S3,y:-2,  color:0x881111,demonRuler:'Asmodeus',         desc:'Unbridled wrath — volcanic uncontrolled anger.'},
  {id:6, name:'Thagirion',   english:'The Disputers',       x:0,  y:-2,  color:0x554400,demonRuler:'Belphegor',        desc:'The Black Sun radiating death instead of life.'},
  {id:7, name:"A'arab Zaraq",english:'Ravens of Dispersion',x:S3, y:-1,  color:0x226633,demonRuler:'Baal',             desc:'Uncontrolled passion — hollow conquest.'},
  {id:8, name:'Samael',      english:'Poison of God',       x:-S3,y:-1,  color:0x885522,demonRuler:'Adrammelech',      desc:'Intellectual poison — barren logic and deception.'},
  {id:9, name:'Gamaliel',    english:'The Obscene Ones',    x:0,  y:-.5, color:0x331155,demonRuler:'Lilith',           desc:'Pollution of astral imagination — dark dreams.'},
  {id:10,name:'Lilith',      english:'The Whisperers',      x:0,  y:0,   color:0x332211,demonRuler:'Naamah',           desc:'Material world as prison rather than temple.'},
];
// 22 Paths with Hebrew letters, meanings, and Tarot
export const pathData=[
  {c:[1,2], hebrew:'א',letter:'Aleph',  meaning:'Ox',       tarot:'The Fool',         attribution:'Air'},
  {c:[1,3], hebrew:'ב',letter:'Beth',   meaning:'House',    tarot:'The Magician',     attribution:'Mercury'},
  {c:[1,6], hebrew:'ג',letter:'Gimel',  meaning:'Camel',    tarot:'High Priestess',   attribution:'Moon'},
  {c:[2,3], hebrew:'ד',letter:'Daleth', meaning:'Door',     tarot:'The Empress',      attribution:'Venus'},
  {c:[2,6], hebrew:'ה',letter:'Heh',    meaning:'Window',   tarot:'The Emperor',      attribution:'Aries'},
  {c:[2,4], hebrew:'ו',letter:'Vav',    meaning:'Nail',     tarot:'Hierophant',       attribution:'Taurus'},
  {c:[3,6], hebrew:'ז',letter:'Zayin',  meaning:'Sword',    tarot:'The Lovers',       attribution:'Gemini'},
  {c:[3,5], hebrew:'ח',letter:'Cheth',  meaning:'Fence',    tarot:'The Chariot',      attribution:'Cancer'},
  {c:[4,5], hebrew:'ט',letter:'Teth',   meaning:'Serpent',  tarot:'Strength',         attribution:'Leo'},
  {c:[4,6], hebrew:'י',letter:'Yod',    meaning:'Hand',     tarot:'The Hermit',       attribution:'Virgo'},
  {c:[4,7], hebrew:'כ',letter:'Kaph',   meaning:'Palm',     tarot:'Wheel of Fortune', attribution:'Jupiter'},
  {c:[5,6], hebrew:'ל',letter:'Lamed',  meaning:'Ox Goad',  tarot:'Justice',          attribution:'Libra'},
  {c:[5,8], hebrew:'מ',letter:'Mem',    meaning:'Water',    tarot:'Hanged Man',       attribution:'Water'},
  {c:[6,7], hebrew:'נ',letter:'Nun',    meaning:'Fish',     tarot:'Death',            attribution:'Scorpio'},
  {c:[6,9], hebrew:'ס',letter:'Samekh', meaning:'Prop',     tarot:'Temperance',       attribution:'Sagittarius'},
  {c:[6,8], hebrew:'ע',letter:'Ayin',   meaning:'Eye',      tarot:'The Devil',        attribution:'Capricorn'},
  {c:[7,8], hebrew:'פ',letter:'Peh',    meaning:'Mouth',    tarot:'The Tower',        attribution:'Mars'},
  {c:[7,9], hebrew:'צ',letter:'Tzaddi', meaning:'Fishhook', tarot:'The Star',         attribution:'Aquarius'},
  {c:[7,10],hebrew:'ק',letter:'Qoph',   meaning:'Back of Head',tarot:'The Moon',      attribution:'Pisces'},
  {c:[8,9], hebrew:'ר',letter:'Resh',   meaning:'Head',     tarot:'The Sun',          attribution:'Sun'},
  {c:[8,10],hebrew:'ש',letter:'Shin',   meaning:'Tooth',    tarot:'Judgement',        attribution:'Fire'},
  {c:[9,10],hebrew:'ת',letter:'Tav',    meaning:'Cross',    tarot:'The World',        attribution:'Saturn'},
];
export const paths=pathData.map(p=>p.c);
export const flashSeq=[1,2,3,4,5,6,7,8,9,10]; // Lightning Flash order
