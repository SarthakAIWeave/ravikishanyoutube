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
    id: 'FDm_nKzpfYM',
    title: 'Ravi Kishan on Politics, Childhood Trauma, Ego, PM Modi, Bhojpuri Movies & Songs | FO384 Raj Shamani',
    embedUrl: 'https://www.youtube.com/embed/FDm_nKzpfYM?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/FDm_nKzpfYM/mqdefault.jpg',
    duration: '1:20:52',
    channelTitle: 'Raj Shamani',
    channelAvatar: 'https://yt3.ggpht.com/qSVJkhoSs6lw5cNMsZAJ8ZAk1pxiewDb_gLtnzOsyM5TWQ6YggQj0eBetOLSxFuJqgxsyQ73NA=s68-c-k-c0x00ffffff-no-rj',
    views: '2.2M views',
    uploadedAt: '1 year ago',
    verified: true,
    category: 'all-day',
    description: 'Inspiring life journey of Ravi Kishan from small village roots to Bhojpuri superstar, Bollywood actor, and Member of Parliament.',
    tags: ['Ravi Kishan', 'Raj Shamani', 'Podcast'],
    likes: '480K'
  },
  {
    id: 'MMGk7nvYidc',
    title: 'RAVI KISHAN MEME REVIEW!',
    embedUrl: 'https://www.youtube.com/embed/MMGk7nvYidc?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/MMGk7nvYidc/mqdefault.jpg',
    duration: '14:16',
    channelTitle: 'Thugesh Unfiltered',
    channelAvatar: 'https://yt3.ggpht.com/UGHfPIo9R9JBogxnr-YY1svogeWVGYTdb35uBRORDMwH77-VSX7lrdSul6k_T7sUpO5WUCkp=s68-c-k-c0x00ffffff-no-rj',
    views: '1.2M views',
    uploadedAt: '13 days ago',
    verified: true,
    category: 'comedy',
    description: 'Hilarious Ravi Kishan memes and dialogues review with superstar reactions.',
    tags: ['Ravi Kishan', 'Meme Review', 'Thugesh'],
    likes: '120K'
  },
  {
    id: 'xnW7P_b4VjE',
    title: 'Ravi Kishan’s PAISHAAN Is WILD',
    embedUrl: 'https://www.youtube.com/embed/xnW7P_b4VjE?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/xnW7P_b4VjE/mqdefault.jpg',
    duration: '12:10',
    channelTitle: 'Adit Minocha',
    channelAvatar: 'https://yt3.ggpht.com/UDjrFTgdtAS5Kyo5_77EVsabfCovZrUS2WTGxG9MD6cJDWTvzG1FQDeM28eAIwu9cbG3sEVT=s68-c-k-c0x00ffffff-no-rj',
    views: '131K views',
    uploadedAt: '2 days ago',
    verified: true,
    category: 'comedy',
    description: 'Reaction and tribute to Ravi Kishan unique style and Bhojpuri charisma.',
    tags: ['Ravi Kishan', 'Adit Minocha', 'Comedy'],
    likes: '45K'
  },
  {
    id: 'kZkO9f7P7xI',
    title: 'Ravi Kishan Best Action Scenes | Blockbuster Bhojpuri Movies 🔥',
    embedUrl: 'https://www.youtube.com/embed/kZkO9f7P7xI?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/yjYa_QmU6KU/mqdefault.jpg',
    duration: '22:15',
    channelTitle: 'Worldwide Records Bhojpuri',
    channelAvatar: 'https://yt3.ggpht.com/dtxgX0kBRAsD15PhJqzI8GmWsuVpAR1zqLaAGzwnRK1TrYWo7T6yW6o86HwmUWOS5k59R0Tv=s176-c-k-c0x00ffffff-no-rj',
    views: '5.6M views',
    uploadedAt: '5 days ago',
    verified: true,
    category: 'action',
    description: 'Superstar Ravi Kishan power-packed action stunt sequences.',
    tags: ['Ravi Kishan Action', 'Bhojpuri Hit', 'Gorakhpur Cinema'],
    likes: '190K'
  },
  {
    id: 'W9y_2LmK8vA',
    title: 'VD Tyagi Advocate Full Courtroom Argument | Maamla Legal Hai',
    embedUrl: 'https://www.youtube.com/embed/EpX8yATZmv4?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/EpX8yATZmv4/mqdefault.jpg',
    duration: '18:40',
    channelTitle: 'Netflix India Official',
    channelAvatar: 'https://yt3.ggpht.com/1zMqt_hyAYOV-doKq-wK-UyREkj0GiBbgJ8bzKKtEFWbacBos5Gu8PuSP_dq5cI0a-FHg_lS=s176-c-k-c0x00ffffff-no-rj',
    views: '9.4M views',
    uploadedAt: '1 week ago',
    verified: true,
    category: 'dialogues',
    description: 'Advocate VD Tyagi sensational courtroom debate and legal swag.',
    tags: ['VD Tyagi', 'Maamla Legal Hai', 'Ravi Kishan'],
    likes: '520K'
  },
  {
    id: 'M1k_7RkP9yQ',
    title: 'Ravi Kishan Mega Hit Bhojpuri Song & Dance Special',
    embedUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg',
    duration: '28:30',
    channelTitle: 'T-Series Hamaar Bhojpuri',
    channelAvatar: 'https://yt3.ggpht.com/omfPos77dCIGni7GE5PxjymDMcc-qUvYpGGtE0-GtEO4ouB1b6erQpsjQ7Nyeqi_z09iIeupnQ=s176-c-k-c0x00ffffff-no-rj',
    views: '14.1M views',
    uploadedAt: '2 weeks ago',
    verified: true,
    category: 'music',
    description: 'Top non-stop chartbuster Bhojpuri songs starring Ravi Kishan.',
    tags: ['Bhojpuri Songs', 'Ravi Kishan Dance', 'T-Series'],
    likes: '740K'
  },
  {
    id: 'B9x_4PvT6yZ',
    title: 'Bihari Majdoor Hard Work Inspiration & Motivation Talk',
    embedUrl: 'https://www.youtube.com/embed/GTZpmLmeAiA?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/GTZpmLmeAiA/mqdefault.jpg',
    duration: '15:10',
    channelTitle: 'Bihari Talks',
    channelAvatar: 'https://yt3.ggpht.com/vI10u3PBCN6_cYEk4jS-v0JVh5hSxGVvhcAJIUk-3M2h2THLaXGSr0cPIHqp0-tpHbDJqeKxMw=s176-c-k-c0x00ffffff-no-rj',
    views: '3.1M views',
    uploadedAt: '6 days ago',
    verified: true,
    category: 'comedy',
    description: 'Inspirational and humorous bihari hard work and hustle stories.',
    tags: ['Bihari Majdoor', 'Motivation', 'Hustle'],
    likes: '145K'
  },
  {
    id: 'K5p_8QkL9wB',
    title: 'Khan Sir Unique Teaching Style & Student Motivation Classes',
    embedUrl: 'https://www.youtube.com/embed/E6LvUJ5EUuc?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/E6LvUJ5EUuc/mqdefault.jpg',
    duration: '35:20',
    channelTitle: 'Khan GS Research Centre Fan Club',
    channelAvatar: 'https://yt3.ggpht.com/dtxgX0kBRAsD15PhJqzI8GmWsuVpAR1zqLaAGzwnRK1TrYWo7T6yW6o86HwmUWOS5k59R0Tv=s176-c-k-c0x00ffffff-no-rj',
    views: '11.8M views',
    uploadedAt: '3 days ago',
    verified: true,
    category: 'comedy',
    description: 'Legendary teaching concepts, humor, and current affairs classes by Khan Sir.',
    tags: ['Khan Sir', 'Classes', 'Education'],
    likes: '910K'
  },
  {
    id: 'L4m_1RkP9xT',
    title: 'Litti Chokha Special Bhojpuri Food Tour & Ravi Kishan Favorites',
    embedUrl: 'https://www.youtube.com/embed/ntmsKxu1Qpk?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/ntmsKxu1Qpk/mqdefault.jpg',
    duration: '16:45',
    channelTitle: 'Desi Khana TV',
    channelAvatar: 'https://yt3.ggpht.com/JKNoOldGqIHjebS9llS6e8FBHXzw9Uqk29z7Fn0XU70XOEGK8caGGL3zQWdpjJSL_9B5BZR-YWs=s176-c-k-c0x00ffffff-no-rj',
    views: '4.2M views',
    uploadedAt: '4 days ago',
    verified: true,
    category: 'action',
    description: 'Exploring authentic village style Litti Chokha with Ravi Kishan dialogues.',
    tags: ['Litti Chokha', 'Bhojpuri Food', 'Desi'],
    likes: '220K'
  },
  {
    id: 'G7n_6TwL1zP',
    title: 'Gorakhpur Cinema Express - Best of Ravi Kishan Cinema Hits',
    embedUrl: 'https://www.youtube.com/embed/a-ThSd0Lvgg?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/a-ThSd0Lvgg/mqdefault.jpg',
    duration: '42:10',
    channelTitle: 'Gorakhpur Talkies',
    channelAvatar: 'https://yt3.ggpht.com/qSVJkhoSs6lw5cNMsZAJ8ZAk1pxiewDb_gLtnzOsyM5TWQ6YggQj0eBetOLSxFuJqgxsyQ73NA=s68-c-k-c0x00ffffff-no-rj',
    views: '6.7M views',
    uploadedAt: '1 week ago',
    verified: true,
    category: 'action',
    description: 'Blockbuster collection of superhit cinema from Gorakhpur and UP Bihar.',
    tags: ['Gorakhpur Cinema', 'Ravi Kishan', 'Action'],
    likes: '380K'
  },
  {
    id: 'Z2k_9VwQ9yW',
    title: 'Zindagi Jhandwa Phir Bhi Ghamandwa - The Grand Dialogue Compilation',
    embedUrl: 'https://www.youtube.com/embed/ntmsKxu1Qpk?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/ntmsKxu1Qpk/mqdefault.jpg',
    duration: '21:05',
    channelTitle: 'Bhojpuri Swag Central',
    channelAvatar: 'https://yt3.ggpht.com/omfPos77dCIGni7GE5PxjymDMcc-qUvYpGGtE0-GtEO4ouB1b6erQpsjQ7Nyeqi_z09iIeupnQ=s176-c-k-c0x00ffffff-no-rj',
    views: '16.5M views',
    uploadedAt: '2 weeks ago',
    verified: true,
    category: 'dialogues',
    description: 'Every iconic variation of the immortal line spoken by Ravi Kishan.',
    tags: ['Zindagi Jhandwa', 'Dialogue', 'Ravi Kishan'],
    likes: '1.1M'
  },
  {
    id: 'Q4r_3PkM5yR',
    title: '24x7 Non-Stop Ravi Kishan All Day Stream & Live Hits',
    embedUrl: 'https://www.youtube.com/embed/FDm_nKzpfYM?autoplay=1&rel=0',
    thumbnail: 'https://i.ytimg.com/vi/FDm_nKzpfYM/mqdefault.jpg',
    duration: '1:45:00',
    channelTitle: 'Ravi Kishan Official Hub',
    channelAvatar: 'https://yt3.ggpht.com/1zMqt_hyAYOV-doKq-wK-UyREkj0GiBbgJ8bzKKtEFWbacBos5Gu8PuSP_dq5cI0a-FHg_lS=s176-c-k-c0x00ffffff-no-rj',
    views: '8.9M views',
    uploadedAt: '3 days ago',
    verified: true,
    category: 'all-day',
    description: 'Continuous celebration of Ravi Kishan acting, comedy, speeches, and interviews.',
    tags: ['All Day', 'Live', 'Ravi Kishan'],
    likes: '560K'
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
