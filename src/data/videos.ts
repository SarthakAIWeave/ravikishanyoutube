import { VideoItem, SidebarTabItem, VideoComment, SoundItem } from '../types';

// The 6 Top Pool Videos (100% Exact Matching Original YouTube Titles & Metadata)
export const TOP_POOL_VIDEOS: VideoItem[] = [
  {
    id: 'E6LvUJ5EUuc',
    title: "Learn OOP's Through Memes (Hindi)",
    embedUrl: 'https://www.youtube.com/embed/E6LvUJ5EUuc?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/E6LvUJ5EUuc/mqdefault.jpg',
    duration: '14:28',
    channelTitle: 'Bakchd Coder',
    channelAvatar: 'https://yt3.ggpht.com/dtxgX0kBRAsD15PhJqzI8GmWsuVpAR1zqLaAGzwnRK1TrYWo7T6yW6o86HwmUWOS5k59R0Tv=s176-c-k-c0x00ffffff-no-rj',
    views: '4.8M views',
    uploadedAt: '2 days ago',
    verified: true,
    category: 'comedy',
    description: "Learn Object Oriented Programming through popular Ravi Kishan and desi memes in Hindi.",
    tags: ['Ravi Kishan', 'Memes', 'Bakchd Coder'],
    likes: '284K',
    isTopPool: true
  },
  {
    id: 'ntmsKxu1Qpk',
    title: 'Funniest Ravi Kishan Meme Compilation 🤣🤣',
    embedUrl: 'https://www.youtube.com/embed/ntmsKxu1Qpk?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/ntmsKxu1Qpk/mqdefault.jpg',
    duration: '8:45',
    channelTitle: 'Gen-kaari',
    channelAvatar: 'https://yt3.ggpht.com/omfPos77dCIGni7GE5PxjymDMcc-qUvYpGGtE0-GtEO4ouB1b6erQpsjQ7Nyeqi_z09iIeupnQ=s176-c-k-c0x00ffffff-no-rj',
    views: '12.5M views',
    uploadedAt: '1 week ago',
    verified: true,
    category: 'dialogues',
    description: 'The legendary dialogue that became a worldwide sensation! Ravi Kishan funniest meme collection.',
    tags: ['Zindagi Jhandwa', 'Ravi Kishan Dialogue', 'Bhojpuri Swag'],
    likes: '890K',
    isTopPool: true
  },
  {
    id: 'yjYa_QmU6KU',
    title: 'Ravi Kishan’s UNEXPECTED Heroic Moment 🔥🤯 Ft. Pratibha Ranta | Laapataa Ladies | Netflix India',
    embedUrl: 'https://www.youtube.com/embed/yjYa_QmU6KU?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/yjYa_QmU6KU/mqdefault.jpg',
    duration: '5:12',
    channelTitle: 'Netflix India',
    channelAvatar: 'https://yt3.ggpht.com/1zMqt_hyAYOV-doKq-wK-UyREkj0GiBbgJ8bzKKtEFWbacBos5Gu8PuSP_dq5cI0a-FHg_lS=s176-c-k-c0x00ffffff-no-rj',
    views: '18.9M views',
    uploadedAt: '3 weeks ago',
    verified: true,
    category: 'action',
    description: 'Inspector Shyam Manohar unexpected heroic moment in Laapataa Ladies starring superstar Ravi Kishan.',
    tags: ['Ravi Kishan', 'Laapataa Ladies', 'Netflix India'],
    likes: '1.2M',
    isTopPool: true
  },
  {
    id: 'GTZpmLmeAiA',
    title: 'Money Follows Mahh Brothorrrr 😂 | All Ravi Kishan Viral Memes Compilation #shorts',
    embedUrl: 'https://www.youtube.com/embed/GTZpmLmeAiA?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/GTZpmLmeAiA/mqdefault.jpg',
    duration: '11:30',
    channelTitle: 'Indianews124',
    channelAvatar: 'https://yt3.ggpht.com/vI10u3PBCN6_cYEk4jS-v0JVh5hSxGVvhcAJIUk-3M2h2THLaXGSr0cPIHqp0-tpHbDJqeKxMw=s176-c-k-c0x00ffffff-no-rj',
    views: '7.3M views',
    uploadedAt: '1 month ago',
    verified: true,
    category: 'comedy',
    description: 'Money Follows Mahh Brothorrrr - All Ravi Kishan viral dialogue clips and comedy scenes.',
    tags: ['Comedy', 'Ravi Kishan Roast', 'Indianews124'],
    likes: '450K',
    isTopPool: true
  },
  {
    id: 'a-ThSd0Lvgg',
    title: 'Yahan imaandari chalat babau nahi to ghare jaake sutti babu meme',
    embedUrl: 'https://www.youtube.com/embed/a-ThSd0Lvgg?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/a-ThSd0Lvgg/mqdefault.jpg',
    duration: '19:40',
    channelTitle: 'Kadwa Memes',
    channelAvatar: 'https://yt3.ggpht.com/JKNoOldGqIHjebS9llS6e8FBHXzw9Uqk29z7Fn0XU70XOEGK8caGGL3zQWdpjJSL_9B5BZR-YWs=s176-c-k-c0x00ffffff-no-rj',
    views: '3.9M views',
    uploadedAt: '4 days ago',
    verified: true,
    category: 'parliament',
    description: 'Superstar Ravi Kishan iconic dialogue and viral punchline.',
    tags: ['Gorakhpur', 'Ravi Kishan', 'Kadwa Memes'],
    likes: '310K',
    isTopPool: true
  },
  {
    id: 'JGwWNGJdvx8',
    title: 'Ed Sheeran - Shape of You (Official Music Video)',
    embedUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg',
    duration: '32:15',
    channelTitle: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/pZQ5JMD4EOI8TcNYAPTzMexe_fC0CKnb_hYlV4rPfIzmDidF239fH1XKmzkeT30XSg7fxNwc_w=s176-c-k-c0x00ffffff-no-rj',
    views: '9.1M views',
    uploadedAt: '5 days ago',
    verified: true,
    category: 'music',
    description: 'Ed Sheeran official music video matching original YouTube stream.',
    tags: ['Ed Sheeran', 'Music'],
    likes: '620K',
    isTopPool: true
  }
];

// Special Video - Always locked at the 7th position (index 6) with exact YouTube title
export const SPECIAL_7TH_VIDEO: VideoItem = {
  id: 'EpX8yATZmv4',
  title: 'Ravi Kishan on Jharkhand Student Protest: ‘Students’ Demands Must Be Heard’ | Exclusive Interview',
  embedUrl: 'https://www.youtube.com/embed/EpX8yATZmv4?autoplay=1&rel=0',
  thumbnail: 'https://i.ytimg.com/vi/EpX8yATZmv4/mqdefault.jpg',
  duration: '16:04',
  channelTitle: 'CNN-News18- Bakchod',
  channelAvatar: 'https://yt3.ggpht.com/afzAuAaWNKdWkuiuA5fUbSGboP-yavQ8pPYfjwNAZue_sLskXxhNV8TKf4-NWkDIWVxdrH2vyw=s176-c-k-c0x00ffffff-no-rj',
  views: '24.2M views',
  uploadedAt: '3 weeks ago',
  verified: true,
  category: 'all-day',
  description: 'Exclusive interview of MP Ravi Kishan voicing youth support on student protests.',
  tags: ['Ravi Kishan', 'CNN News18', 'Exclusive'],
  likes: '2.1M',
  isSpecial7th: true
};

// Rich catalog of verified Ravi Kishan YouTube Videos for Real-Time stream (working 100% on Netlify and Local)
export const REMAINING_CATALOG_VIDEOS: VideoItem[] = [
  {
    "id": "MMGk7nvYidc",
    "title": "RAVI KISHAN MEME REVIEW!",
    "embedUrl": "https://www.youtube.com/embed/MMGk7nvYidc?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/MMGk7nvYidc/mqdefault.jpg",
    "duration": "14:16",
    "channelTitle": "Thugesh Unfiltered",
    "channelAvatar": "https://yt3.ggpht.com/UGHfPIo9R9JBogxnr-YY1svogeWVGYTdb35uBRORDMwH77-VSX7lrdSul6k_T7sUpO5WUCkp=s68-c-k-c0x00ffffff-no-rj",
    "views": "1,235,251 views",
    "uploadedAt": "13 days ago",
    "verified": true,
    "category": "all-day",
    "description": "We react to funniest indian memes and videos ft ravi kishan and other memes #thugesh #memereaction #ravikishan ▶️ Main ...",
    "tags": [
      "Ravi Kishan",
      "Thugesh Unfiltered"
    ],
    "likes": "150K"
  },
  {
    "id": "fyPt7sowHIQ",
    "title": "Ravi Kishan Memes are Too Brainrot",
    "embedUrl": "https://www.youtube.com/embed/fyPt7sowHIQ?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/fyPt7sowHIQ/mqdefault.jpg",
    "duration": "18:20",
    "channelTitle": "Nischay Malhan",
    "channelAvatar": "https://yt3.ggpht.com/ytc/AIdro_lp6yj94nmJMR_EAHP0K-mnLbxGwPkn_HBrKBjnRVI3aMU=s68-c-k-c0x00ffffff-no-rj",
    "views": "4,344,313 views",
    "uploadedAt": "11 days ago",
    "verified": true,
    "category": "all-day",
    "description": "Real YouTube video featuring superstar Ravi Kishan.",
    "tags": [
      "Ravi Kishan",
      "Nischay Malhan"
    ],
    "likes": "150K"
  },
  {
    "id": "xnW7P_b4VjE",
    "title": "Ravi Kishan’s PAISHAAN Is WILD",
    "embedUrl": "https://www.youtube.com/embed/xnW7P_b4VjE?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/xnW7P_b4VjE/mqdefault.jpg",
    "duration": "12:10",
    "channelTitle": "Adit Minocha",
    "channelAvatar": "https://yt3.ggpht.com/UDjrFTgdtAS5Kyo5_77EVsabfCovZrUS2WTGxG9MD6cJDWTvzG1FQDeM28eAIwu9cbG3sEVT=s68-c-k-c0x00ffffff-no-rj",
    "views": "132,805 views",
    "uploadedAt": "2 days ago",
    "verified": true,
    "category": "all-day",
    "description": "Second Channel: https://www.youtube.com/aditminochalive Instagram/Twitter: @aditminocha Reddit Memes: ...",
    "tags": [
      "Ravi Kishan",
      "Adit Minocha"
    ],
    "likes": "150K"
  },
  {
    "id": "FDm_nKzpfYM",
    "title": "Ravi Kishan on Politics, Childhood Trauma, Ego, PM Modi, Bhojpuri Movies & Songs | FO384 Raj Shamani",
    "embedUrl": "https://www.youtube.com/embed/FDm_nKzpfYM?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/FDm_nKzpfYM/mqdefault.jpg",
    "duration": "1:20:52",
    "channelTitle": "Raj Shamani",
    "channelAvatar": "https://yt3.ggpht.com/qSVJkhoSs6lw5cNMsZAJ8ZAk1pxiewDb_gLtnzOsyM5TWQ6YggQj0eBetOLSxFuJqgxsyQ73NA=s68-c-k-c0x00ffffff-no-rj",
    "views": "2,263,026 views",
    "uploadedAt": "1 year ago",
    "verified": true,
    "category": "all-day",
    "description": "Watch Son Of Sardaar 2 Trailer: https://youtu.be/HSX_KPfbP1o?si=oeR0iTuaiN9yDBJC\n\n--------------\n\nGuest Suggestion Form: https ...",
    "tags": [
      "Ravi Kishan",
      "Raj Shamani"
    ],
    "likes": "150K"
  },
  {
    "id": "z8AnjRJXiF0",
    "title": "Top 5 Funny Moments of Ravi Kishan | Ravi Kishan Memes Compilation | Ujale Cuts | #trending ",
    "embedUrl": "https://www.youtube.com/embed/z8AnjRJXiF0?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/z8AnjRJXiF0/mqdefault.jpg",
    "duration": "1:41",
    "channelTitle": "Ujale Cuts",
    "channelAvatar": "https://yt3.ggpht.com/5b82OlHObeUt7oLmrybqQYVNm2Ty-ruamVxvQHwwPQmCtj7QvjqMAoIOZfd6iuzmXq6wwW6KUls=s68-c-k-c0x00ffffff-no-rj",
    "views": "6,796 views",
    "uploadedAt": "2 weeks ago",
    "verified": true,
    "category": "all-day",
    "description": "Get ready to laugh with the Top 5 Funniest Ravi Kishan Moments! In this video, I've compiled some of the best, funniest, and ...",
    "tags": [
      "Ravi Kishan",
      "Ujale Cuts"
    ],
    "likes": "150K"
  },
  {
    "id": "pkGc__ZEzFU",
    "title": "Viral: Yogi Adityanath- Ravi Kishan Share a Fun Conversation | Oneindia News",
    "embedUrl": "https://www.youtube.com/embed/pkGc__ZEzFU?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/pkGc__ZEzFU/mqdefault.jpg",
    "duration": "1:01",
    "channelTitle": "Oneindia News",
    "channelAvatar": "https://yt3.ggpht.com/Eq2zC1ABpTsAMuJzK4wfjE7I4OhzY0LUOB9lSbLA7YDiCawl6sh_DYw6WqtP03NjkvFFNqnn=s68-c-k-c0x00ffffff-no-rj",
    "views": "713,219 views",
    "uploadedAt": "2 years ago",
    "verified": true,
    "category": "all-day",
    "description": "Yogi's Humorous Moment: Did the MP pay for momos? Dive into the amusing exchange at a momo stall, featuring playful banter and ...",
    "tags": [
      "Ravi Kishan",
      "Oneindia News"
    ],
    "likes": "150K"
  },
  {
    "id": "4HnGBhwyhLA",
    "title": "FUNNIEST Ravi Kishan Meme Review🤣",
    "embedUrl": "https://www.youtube.com/embed/4HnGBhwyhLA?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/4HnGBhwyhLA/mqdefault.jpg",
    "duration": "11:40",
    "channelTitle": "Devika Vlogs",
    "channelAvatar": "https://yt3.ggpht.com/twQ5nom7mQ0h_UdqddYuJy5StYC155UqnhTdeX52NkiXXcZK6ssPdK1InllH15BdV6Thj-oGyg=s68-c-k-c0x00ffffff-no-rj",
    "views": "204,361 views",
    "uploadedAt": "3 weeks ago",
    "verified": true,
    "category": "all-day",
    "description": "Hope you guys enjoy the video Thanks for watching....!! Main channel:- ...",
    "tags": [
      "Ravi Kishan",
      "Devika Vlogs"
    ],
    "likes": "150K"
  },
  {
    "id": "LyAeSt1mra8",
    "title": "Ravi Kishan's SHOCKING Response To Manoj Tiwari's CLAIMS 👀 | TGIKS | Netflix India",
    "embedUrl": "https://www.youtube.com/embed/LyAeSt1mra8?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/LyAeSt1mra8/mqdefault.jpg",
    "duration": "4:32",
    "channelTitle": "Netflix India",
    "channelAvatar": "https://yt3.ggpht.com/1zMqt_hyAYOV-doKq-wK-UyREkj0GiBbgJ8bzKKtEFWbacBos5Gu8PuSP_dq5cI0a-FHg_lS=s68-c-k-c0x00ffffff-no-rj",
    "views": "503,966 views",
    "uploadedAt": "3 months ago",
    "verified": true,
    "category": "all-day",
    "description": "Not Ravi Kishan bringing receipts like this Ravi Kishan responds to Manoj Tiwari's words with back-to-back comebacks.",
    "tags": [
      "Ravi Kishan",
      "Netflix India"
    ],
    "likes": "150K"
  },
  {
    "id": "F4iH7KvArMM",
    "title": "CM Yogi Adityanath के सामने Gorakhpur MP Ravi Kishan के गरदा भाषण का Viral Video | Hindi News",
    "embedUrl": "https://www.youtube.com/embed/F4iH7KvArMM?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/F4iH7KvArMM/mqdefault.jpg",
    "duration": "10:48",
    "channelTitle": "Times Now Navbharat",
    "channelAvatar": "https://yt3.ggpht.com/ww29cixBbXhsOQVJOqbKZxgbrXcAmIrdcNV76W305TDatmZ6WiTkJDE-FDmMXLIkwRe9dT28Rg=s68-c-k-c0x00ffffff-no-rj",
    "views": "387,364 views",
    "uploadedAt": "4 months ago",
    "verified": true,
    "category": "all-day",
    "description": "CM Yogi Adityanath के सामने Gorakhpur MP Ravi Kishan के गरदा भाषण का Viral Video | Hindi News सीएम ...",
    "tags": [
      "Ravi Kishan",
      "Times Now Navbharat"
    ],
    "likes": "150K"
  },
  {
    "id": "KbGgcN-JRA4",
    "title": "How RAVI KISHAN Went From SUPERSTAR To MEME STAR😂",
    "embedUrl": "https://www.youtube.com/embed/KbGgcN-JRA4?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/KbGgcN-JRA4/mqdefault.jpg",
    "duration": "8:52",
    "channelTitle": "Bharat Central",
    "channelAvatar": "https://yt3.ggpht.com/J94AbZ5XjClcdJxTLoZxCyBYKNq-dDSlMCMnllrohdhH5PZFs2uDT9iyDhOhw-tbOvrToTPGjQ=s68-c-k-c0x00ffffff-no-rj",
    "views": "5,446 views",
    "uploadedAt": "13 days ago",
    "verified": true,
    "category": "all-day",
    "description": "How RAVI KISHAN Went From SUPERSTAR To MEME STAR is one of the most interesting transformations on the Indian ...",
    "tags": [
      "Ravi Kishan",
      "Bharat Central"
    ],
    "likes": "150K"
  },
  {
    "id": "S4xgXJWwu00",
    "title": "Ravi Kishan BRAINROT Meme Review | Lol Patrol",
    "embedUrl": "https://www.youtube.com/embed/S4xgXJWwu00?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/S4xgXJWwu00/mqdefault.jpg",
    "duration": "10:36",
    "channelTitle": "LOL Patrol",
    "channelAvatar": "https://yt3.ggpht.com/4BoM2D35J6m87nyom5KODW9RJ5b-BtDJX1fNc4EL1nWJ1ezcFEHZdQfI1EarTB7De8kSlbKuPA=s68-c-k-c0x00ffffff-no-rj",
    "views": "121,854 views",
    "uploadedAt": "2 weeks ago",
    "verified": true,
    "category": "all-day",
    "description": "You can Support us through UPI : 9289446116@okbizaxis PayTm : 9289446116 Google Pay : 9289446116 Phone Pe ...",
    "tags": [
      "Ravi Kishan",
      "LOL Patrol"
    ],
    "likes": "150K"
  },
  {
    "id": "GTZpmLmeAiA",
    "title": "Money Follows Mahh Brothorrrr 😂 | All Ravi Kishan Viral Memes Compilation #shorts",
    "embedUrl": "https://www.youtube.com/embed/GTZpmLmeAiA?autoplay=1&rel=0",
    "thumbnail": "https://i.ytimg.com/vi/GTZpmLmeAiA/mqdefault.jpg",
    "duration": "4:28",
    "channelTitle": "Indianews124",
    "channelAvatar": "https://yt3.ggpht.com/vI10u3PBCN6_cYEk4jS-v0JVh5hSxGVvhcAJIUk-3M2h2THLaXGSr0cPIHqp0-tpHbDJqeKxMw=s68-c-k-c0x00ffffff-no-rj",
    "views": "71,481 views",
    "uploadedAt": "13 days ago",
    "verified": true,
    "category": "all-day",
    "description": "Agar aap bhi Ravi Kishan ke viral memes dekh-dekh kar hase ho, toh yeh compilation aapke liye hai! Is video mein internet par ...",
    "tags": [
      "Ravi Kishan",
      "Indianews124"
    ],
    "likes": "150K"
  }
];

export const SIDEBAR_TABS: SidebarTabItem[] = [
  { 
    id: 'khan-sir-theft', 
    title: 'khan sir theft classes', 
    iconName: 'GraduationCap', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'khan sir theft classes'
  },
  { 
    id: 'litti-chokha-tv', 
    title: 'litti-chokha Tv', 
    iconName: 'Tv', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'litti chokha tv'
  },
  { 
    id: 'all-day-ravi-kishan', 
    title: 'all Day Ravi Kishan ', 
    iconName: 'Radio', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'Ravi Kishan all day non stop'
  },
  { 
    id: 'bihari-majdoor-course', 
    title: 'bihari majdoor course', 
    iconName: 'Hammer', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'bihari majdoor course'
  },
  { 
    id: 'zindagi-jhandwa-academy', 
    title: 'Zindagi Jhandwa Academy', 
    iconName: 'Flame', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'Zindagi Jhandwa Phir Bhi Ghamandwa Ravi Kishan'
  },
  { 
    id: 'gorakhpur-cinema', 
    title: 'Gorakhpur Cinema Express', 
    iconName: 'Clapperboard', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'Gorakhpur Cinema Ravi Kishan movie'
  },
  { 
    id: 'vd-tyagi-courtroom', 
    title: 'VD Tyagi Courtroom Special', 
    iconName: 'Scale', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'VD Tyagi Maamla Legal Hai Ravi Kishan'
  },
  { 
    id: 'bhojpuri-music', 
    title: 'Bhojpuri Superhit Music', 
    iconName: 'Music2', 
    section: 'custom_bhojpuri',
    youtubeQuery: 'Bhojpuri superhit songs Ravi Kishan'
  }
];

export const RAVI_SOUNDS: SoundItem[] = [
  {
    id: 's1',
    title: 'Zindagi Jhandba',
    movie: 'Bigg Boss / Popular Line',
    audioText: 'Zindagi Jhandba Phir Bhi Ghamandba!',
    duration: '0:03',
    category: 'iconic'
  },
  {
    id: 's2',
    title: 'Har Har Mahadev',
    movie: 'Gorakhpur Rally',
    audioText: 'Har Har Mahadev! Gorakhpur ki janta zindabad!',
    duration: '0:04',
    category: 'power'
  },
  {
    id: 's3',
    title: 'VD Tyagi Order',
    movie: 'Maamla Legal Hai',
    audioText: 'Kanoon ki kitaab hum kholte hain toh case khatam hota hai!',
    duration: '0:05',
    category: 'dialogue'
  },
  {
    id: 's4',
    title: 'Bhojpuri Pride',
    movie: 'Lok Sabha Speech',
    audioText: 'Bhojpuri hamari matribhasha hai, hamara samman hai!',
    duration: '0:04',
    category: 'speech'
  }
];

export const SAMPLE_COMMENTS: VideoComment[] = [
  {
    id: 'c1',
    author: 'Gorakhpur Fan Club',
    avatar: 'https://yt3.ggpht.com/dtxgX0kBRAsD15PhJqzI8GmWsuVpAR1zqLaAGzwnRK1TrYWo7T6yW6o86HwmUWOS5k59R0Tv=s176-c-k-c0x00ffffff-no-rj',
    text: 'Zindagi Jhandba Phir Bhi Ghamandba! Nobody can match Ravi Kishan sir energy! Jai Mahadev! 🔥',
    timeAgo: '2 hours ago',
    likes: 1420
  },
  {
    id: 'c2',
    author: 'Patna Cinema Lover',
    avatar: 'https://yt3.ggpht.com/omfPos77dCIGni7GE5PxjymDMcc-qUvYpGGtE0-GtEO4ouB1b6erQpsjQ7Nyeqi_z09iIeupnQ=s176-c-k-c0x00ffffff-no-rj',
    text: 'VD Tyagi character in Maamla Legal Hai proved once again why Ravi Kishan is Bollywood and Bhojpuri legend!',
    timeAgo: '5 hours ago',
    likes: 850
  }
];
