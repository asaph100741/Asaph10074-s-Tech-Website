const captions = [
  "Home Screen",
  "Settings Menu",
  "App Drawer",
  "Customization",
  "Performance",
  "Final Look",
  "Classic Notification Center - Light",
  "Classic Notification Center - Dark",
];
let isPreloaded = !1,
  currentImageIndex = 0;
const images = [
    "Images/1.webp",
    "Images/2.webp",
    "Images/3.webp",
    "Images/4.webp",
    "Images/5.webp",
    "Images/6.webp",
    "Images/Screenshot%202026-10-07%20220201.png",
    "Images/Screenshot%202026-10-07%20215530.png",
  ],
  translations = {
    en: {
      buildsWipTitle: "Work in progress",
      buildsWipBody:
        "This list is still being put together. Please check back soon.",
      buildsWipSub: "Not available yet",
      buildsWipFootNote:
        "Note: this section is a work in progress and is not finished yet.",
      title: "Asaph10074's Website",
      siteTitle: "Asaph10074's Website",
      siteMotto: "Tech, Modding & Music",
      aboutMe: "About me",
      aboutText:
        "I'm Asaph10074. In 2026, I'm focusing on Technology and computers.",
      mySkills: "My skills",
      skillAndroid: "Android System Modding",
      skillKotlin: "Multibooting Operating Systems",
      skillUI: "Playing Virtual Machines",
      skillUIDesign: "UI Design",
      skillRoot: "Root & Custom ROM",
      skillWeb: "Web Development",
      phoneCard: "UN1CA Custom rom on Samsung Galaxy A52s",
      musicTitle: "Music Player",
      musicArtist: "Music made with LMMS by:",
      download: "Download",
      youtubeChannel: "YouTube Channel",
      youtube: "YouTube",
      youtubeDesc: "Subscribe for latest videos",
      myChannel: "My channel",
      changelogTitle: "Changelog",
      versionTitle: "Version",
      instagram: "Instagram",
      instagramDesc: "Follow for updates",
      myInstagram: "My Instagram",
      threads: "Threads",
      threadsDesc: "Follow my threads",
      myThreads: "My Threads",
      threadsChannel: "Threads Profile",
      reddit: "Reddit",
      redditDesc: "Join my community",
      myReddit: "My Reddit",
      redditChannel: "Reddit Profile",
      pinterest: "Pinterest",
      pinterestDesc: "See my pins",
      myPinterest: "My Pinterest",
      pinterestChannel: "Pinterest Profile",
      github: "GitHub",
      githubDesc: "View my repositories",
      myGithub: "My GitHub",
      githubChannel: "GitHub Profile",
      x: "X (Twitter)",
      xDesc: "Follow my posts",
      myX: "My X",
      xChannel: "X Profile",
      socialTitle: "Social Media",
      facebook: "Facebook",
      facebookDesc: "Follow my profile",
      myFacebook: "My Facebook",
      scrollTop: "Scroll to top",
      scrollBottom: "Scroll to bottom",
      viewGallery: "View gallery",
      clearSearch: "Clear",
      searchPlaceholder: "Search cards...",
      noResults: "No results found",
      switchLang: "English",
      toastAudioError: "Audio playback error",
      toastPlaybackError: "Playback error",
      toastNoDownload: "Audio file not available for download.",
      toastDownloadStarted: "Download started!",
      toastPlaybackEnded: "Playback ended",
      toastWelcome: "Welcome to Asaph10074's Website!",
      toastBlockedPlayback:
        "Browser blocked playback. Click the play button again.",
      toastPlaybackFailed: "Playback failed: ",
      toastModeEnabled: "mode enabled",
      toastTheme: "Theme : ",
      toastLightTheme: "Light theme enabled",
      toastDarkTheme: "Dark theme enabled",
      toastUnknownError: "Unknown error",
      toastLightThemeTitle: "Light Theme : ",
      toastDarkThemeTitle: "Dark Theme : ",
      toastLightChangedMsg: "The theme was Changed to Light mode",
      toastDarkChangedMsg: "The theme was Changed to Dark mode",
    },
    "zh-TW": {
      buildsWipTitle: "開發中",
      buildsWipBody: "這份清單仍在整理中，敬請稍候再回來查看。",
      buildsWipSub: "尚未開放",
      buildsWipFootNote: "注意：此內容仍在製作中，尚未完成。",
      title: "Asaph10074 的網站",
      siteTitle: "Asaph10074 的網站",
      aboutMe: "關於我",
      aboutText: "我是 Asaph10074。在 2026 年，我正在專注於科技與電腦。",
      mySkills: "我的技能",
      skillAndroid: "Android 系統修改",
      skillKotlin: "多重系統開機",
      skillUI: "執行虛擬機器",
      skillUIDesign: "UI 設計",
      skillRoot: "Root 與自訂 ROM",
      skillWeb: "網頁開發",
      phoneCard: "UN1CA 客製 ROM 於三星 Galaxy A52s",
      musicTitle: "音樂播放器（預覽）",
      musicArtist: "音樂製作：",
      download: "下載",
      youtubeChannel: "YouTube 頻道",
      youtube: "YouTube",
      youtubeDesc: "訂閱以取得最新影片",
      myChannel: "我的頻道",
      changelogTitle: "更新日誌",
      instagram: "Instagram",
      instagramDesc: "關注獲取更新",
      myInstagram: "我的 Instagram",
      threads: "Threads",
      threadsDesc: "關注我的 Threads",
      myThreads: "我的 Threads",
      threadsChannel: "Threads 個人檔案",
      reddit: "Reddit",
      redditDesc: "加入我的社群",
      myReddit: "我的 Reddit",
      redditChannel: "Reddit 個人檔案",
      pinterest: "Pinterest",
      pinterestDesc: "查看我的釘圖",
      myPinterest: "我的 Pinterest",
      pinterestChannel: "Pinterest 個人檔案",
      github: "GitHub",
      githubDesc: "查看我的儲存庫",
      myGithub: "我的 GitHub",
      githubChannel: "GitHub 個人檔案",
      x: "X (Twitter)",
      xDesc: "關注我的貼文",
      myX: "我的 X",
      xChannel: "X 個人檔案",
      socialTitle: "社群媒體",
      facebook: "Facebook",
      facebookDesc: "關注我的主頁",
      myFacebook: "我的 Facebook",
      scrollTop: "回到頂端",
      scrollBottom: "滾動到底部",
      viewGallery: "檢視相簿",
      clearSearch: "清除",
      searchPlaceholder: "搜尋卡片...",
      switchLang: "繁體中文",
      siteMotto: "科技、改機與音樂",
      versionTitle: "版本",
      noResults: "找不到結果",
      toastAudioError: "音訊播放錯誤",
      toastPlaybackError: "播放錯誤",
      toastNoDownload: "音訊檔案無法下載。",
      toastDownloadStarted: "下載已開始！",
      toastPlaybackEnded: "播放已結束",
      toastWelcome: "歡迎來到 Asaph10074 的網站！",
      toastBlockedPlayback: "瀏覽器封鎖了播放。請再次點擊播放按鈕。",
      toastPlaybackFailed: "播放失敗：",
      toastModeEnabled: "模式已啟用",
      toastTheme: "主題：",
      toastLightTheme: "已啟用淺色主題",
      toastDarkTheme: "已啟用深色主題",
      toastUnknownError: "未知錯誤",
      toastLightThemeTitle: "淺色主題：",
      toastDarkThemeTitle: "深色主題：",
      toastLightChangedMsg: "主題已切換為淺色模式",
      toastDarkChangedMsg: "主題已切換為深色模式",
    },
    "zh-CN": {
      buildsWipTitle: "开发中",
      buildsWipBody: "这份清单仍在整理中，敬请稍后再回来查看。",
      buildsWipSub: "尚未开放",
      buildsWipFootNote: "注意：此内容仍在制作中，尚未完成。",
      title: "Asaph10074 的网站",
      siteTitle: "Asaph10074 的网站",
      aboutMe: "关于我",
      aboutText: "我是 Asaph10074。在 2026 年，我正在专注于科技与电脑。",
      mySkills: "我的技能",
      skillAndroid: "Android 系统修改",
      skillKotlin: "多系统启动",
      skillUI: "运行虚拟机",
      skillUIDesign: "UI 设计",
      skillRoot: "Root 与自定义 ROM",
      skillWeb: "网页开发",
      phoneCard: "UN1CA 定制 ROM 于三星 Galaxy A52s",
      musicTitle: "音乐播放器（预览）",
      musicArtist: "音乐制作：",
      download: "下载",
      youtubeChannel: "YouTube 频道",
      youtube: "YouTube",
      youtubeDesc: "订阅以获取最新视频",
      myChannel: "我的频道",
      changelogTitle: "更新日志",
      instagram: "Instagram",
      instagramDesc: "关注获取更新",
      myInstagram: "我的 Instagram",
      threads: "Threads",
      threadsDesc: "关注我的 Threads",
      myThreads: "我的 Threads",
      threadsChannel: "Threads 个人档案",
      reddit: "Reddit",
      redditDesc: "加入我的社区",
      myReddit: "我的 Reddit",
      redditChannel: "Reddit 个人档案",
      pinterest: "Pinterest",
      pinterestDesc: "查看我的图钉",
      myPinterest: "我的 Pinterest",
      pinterestChannel: "Pinterest 个人档案",
      github: "GitHub",
      githubDesc: "查看我的仓库",
      myGithub: "我的 GitHub",
      githubChannel: "GitHub 个人档案",
      x: "X (Twitter)",
      xDesc: "关注我的帖子",
      myX: "我的 X",
      xChannel: "X 个人档案",
      socialTitle: "社交媒体",
      facebook: "Facebook",
      facebookDesc: "关注我的主页",
      myFacebook: "我的 Facebook",
      scrollTop: "回到顶部",
      scrollBottom: "滚动到底部",
      viewGallery: "查看图库",
      clearSearch: "清除",
      searchPlaceholder: "搜索卡片...",
      switchLang: "简体中文",
      siteMotto: "科技、改装与音乐",
      versionTitle: "版本",
      noResults: "未找到结果",
      toastAudioError: "音频播放错误",
      toastPlaybackError: "播放错误",
      toastNoDownload: "音频文件无法下载。",
      toastDownloadStarted: "下载已开始！",
      toastPlaybackEnded: "播放已结束",
      toastWelcome: "欢迎来到 Asaph10074 的网站！",
      toastBlockedPlayback: "浏览器阻止了播放。请再次点击播放按钮。",
      toastPlaybackFailed: "播放失败：",
      toastModeEnabled: "模式已启用",
      toastTheme: "主题：",
      toastLightTheme: "已启用浅色主题",
      toastDarkTheme: "已启用深色主题",
      toastUnknownError: "未知错误",
      toastLightThemeTitle: "浅色主题：",
      toastDarkThemeTitle: "深色主题：",
      toastLightChangedMsg: "主题已切换为浅色模式",
      toastDarkChangedMsg: "主题已切换为深色模式",
    },
    ja: {
      buildsWipTitle: "開発中",
      buildsWipBody:
        "このリストは現在も準備中です。しばらくしてからもう一度ご覧ください。",
      buildsWipSub: "まだ公開されていません",
      buildsWipFootNote:
        "注意：このセクションは開発中で、まだ完成していません。",
      title: "Asaph10074 のウェブサイト",
      siteTitle: "Asaph10074 のウェブサイト",
      aboutMe: "私について",
      aboutText:
        "Asaph10074です。2026年、私はテクノロジーとコンピューターに注力しています。",
      mySkills: "私のスキル",
      skillAndroid: "Android システム改造",
      skillKotlin: "マルチブートオペレーティングシステム",
      skillUI: "バーチャルマシンの実行",
      skillUIDesign: "UIデザイン",
      skillRoot: "Root化 & カスタムROM",
      skillWeb: "ウェブ開発",
      phoneCard: "Samsung Galaxy A52s の UN1CA カスタムROM",
      musicTitle: "ミュージックプレイヤー（プレビュー）",
      musicArtist: "音楽制作：",
      download: "ダウンロード",
      youtubeChannel: "YouTube チャンネル",
      youtube: "YouTube",
      youtubeDesc: "最新動画を購読",
      myChannel: "マイチャンネル",
      changelogTitle: "変更履歴",
      instagram: "Instagram",
      instagramDesc: "アップデートをフォロー",
      myInstagram: "マイ Instagram",
      threads: "Threads",
      threadsDesc: "スレッドをフォロー",
      myThreads: "マイ Threads",
      threadsChannel: "Threads プロフィール",
      reddit: "Reddit",
      redditDesc: "コミュニティに参加",
      myReddit: "マイ Reddit",
      redditChannel: "Reddit プロフィール",
      pinterest: "Pinterest",
      pinterestDesc: "ピンを見る",
      myPinterest: "マイ Pinterest",
      pinterestChannel: "Pinterest プロフィール",
      github: "GitHub",
      githubDesc: "リポジトリを見る",
      myGithub: "マイ GitHub",
      githubChannel: "GitHub プロフィール",
      x: "X (Twitter)",
      xDesc: "投稿をフォロー",
      myX: "マイ X",
      xChannel: "X プロフィール",
      socialTitle: "ソーシャルメディア",
      facebook: "Facebook",
      facebookDesc: "プロフィールをフォロー",
      myFacebook: "マイ Facebook",
      scrollTop: "トップへ戻る",
      scrollBottom: "最下部へ",
      viewGallery: "ギャラリーを見る",
      clearSearch: "クリア",
      searchPlaceholder: "カードを検索...",
      switchLang: "日本語",
      siteMotto: "テクノロジー・モディング・ミュージック",
      versionTitle: "バージョン",
      noResults: "結果が見つかりません",
      toastAudioError: "音声の再生エラー",
      toastPlaybackError: "再生エラー",
      toastNoDownload: "オーディオファイルをダウンロードできません。",
      toastDownloadStarted: "ダウンロードを開始しました！",
      toastPlaybackEnded: "再生が終了しました",
      toastWelcome: "Asaph10074のウェブサイトへようこそ！",
      toastBlockedPlayback:
        "ブラウザが再生をブロックしました。再生ボタンをもう一度クリックしてください。",
      toastPlaybackFailed: "再生に失敗しました：",
      toastModeEnabled: "モードを有効にしました",
      toastTheme: "テーマ：",
      toastLightTheme: "ライトテーマが有効です",
      toastDarkTheme: "ダークテーマが有効です",
      toastUnknownError: "不明なエラー",
      toastLightThemeTitle: "ライトテーマ：",
      toastDarkThemeTitle: "ダークテーマ：",
      toastLightChangedMsg: "テーマがライトモードに変更されました",
      toastDarkChangedMsg: "テーマがダークモードに変更されました",
    },
    ko: {
      buildsWipTitle: "개발 중",
      buildsWipBody:
        "이 목록은 아직 정리 중입니다. 잠시 후 다시 확인해 주세요.",
      buildsWipSub: "아직 공개되지 않았습니다",
      buildsWipFootNote:
        "참고: 이 섹션은 아직 개발 중이며 완료되지 않았습니다.",
      title: "Asaph10074의 웹사이트",
      siteTitle: "Asaph10074의 웹사이트",
      aboutMe: "소개",
      aboutText:
        "저는 Asaph10074입니다. 2026년, 저는 기술과 컴퓨터에 집중하고 있습니다.",
      mySkills: "내 기술",
      skillAndroid: "Android 시스템 모딩",
      skillKotlin: "멀티부팅 운영 체제",
      skillUI: "가상 머신 실행",
      skillUIDesign: "UI 디자인",
      skillRoot: "루팅 & 커스텀 ROM",
      skillWeb: "웹 개발",
      phoneCard: "Samsung Galaxy A52s의 UN1CA 커스텀 ROM",
      musicTitle: "뮤직 플레이어 (미리보기)",
      musicArtist: "음악 제작:",
      download: "다운로드",
      youtubeChannel: "YouTube 채널",
      youtube: "YouTube",
      youtubeDesc: "최신 동영상 구독",
      myChannel: "내 채널",
      changelogTitle: "변경 내역",
      instagram: "Instagram",
      instagramDesc: "업데이트 팔로우",
      myInstagram: "내 Instagram",
      threads: "Threads",
      threadsDesc: "내 스레드 팔로우",
      myThreads: "내 Threads",
      threadsChannel: "Threads 프로필",
      reddit: "Reddit",
      redditDesc: "커뮤니티 참여",
      myReddit: "내 Reddit",
      redditChannel: "Reddit 프로필",
      pinterest: "Pinterest",
      pinterestDesc: "내 핀 보기",
      myPinterest: "내 Pinterest",
      pinterestChannel: "Pinterest 프로필",
      github: "GitHub",
      githubDesc: "저장소 보기",
      myGithub: "내 GitHub",
      githubChannel: "GitHub 프로필",
      x: "X (Twitter)",
      xDesc: "내 게시물 팔로우",
      myX: "내 X",
      xChannel: "X 프로필",
      socialTitle: "소셜 미디어",
      facebook: "Facebook",
      facebookDesc: "내 프로필 팔로우",
      myFacebook: "내 Facebook",
      scrollTop: "맨 위로",
      scrollBottom: "맨 아래로",
      viewGallery: "갤러리 보기",
      clearSearch: "지우기",
      searchPlaceholder: "카드 검색...",
      switchLang: "한국어",
      siteMotto: "테크, 모딩 & 음악",
      versionTitle: "버전",
      noResults: "결과를 찾을 수 없습니다",
      toastAudioError: "오디오 재생 오류",
      toastPlaybackError: "재생 오류",
      toastNoDownload: "오디오 파일을 다운로드할 수 없습니다.",
      toastDownloadStarted: "다운로드를 시작했습니다!",
      toastPlaybackEnded: "재생이 종료되었습니다",
      toastWelcome: "Asaph10074의 웹사이트에 오신 것을 환영합니다!",
      toastBlockedPlayback:
        "브라우저가 재생을 차단했습니다. 재생 버튼을 다시 클릭하세요.",
      toastPlaybackFailed: "재생에 실패했습니다: ",
      toastModeEnabled: "모드가 활성화되었습니다",
      toastTheme: "테마: ",
      toastLightTheme: "라이트 테마가 활성화되었습니다",
      toastDarkTheme: "다크 테마가 활성화되었습니다",
      toastUnknownError: "알 수 없는 오류",
      toastLightThemeTitle: "라이트 테마: ",
      toastDarkThemeTitle: "다크 테마: ",
      toastLightChangedMsg: "테마가 라이트 모드로 변경되었습니다",
      toastDarkChangedMsg: "테마가 다크 모드로 변경되었습니다",
    },
    ar: {
      buildsWipTitle: "قيد العمل",
      buildsWipBody: "هذه القائمة ما زالت قيد الإعداد. يرجى العودة لاحقًا.",
      buildsWipSub: "غير متاح بعد",
      buildsWipFootNote: "ملاحظة: هذا القسم قيد العمل ولم يكتمل بعد.",
      title: "موقع Asaph10074",
      siteTitle: "موقع Asaph10074",
      aboutMe: "عنّي",
      aboutText:
        "أنا Asaph10074. في 2026، أركز على التكنولوجيا وأجهزة الكمبيوتر.",
      mySkills: "مهاراتي",
      skillAndroid: "تعديل نظام Android",
      skillKotlin: "تشغيل أنظمة متعددة",
      skillUI: "تشغيل الأجهزة الافتراضية",
      skillUIDesign: "تصميم الواجهات",
      skillRoot: "الجذر و ROM مخصص",
      skillWeb: "تطوير الويب",
      phoneCard: "UN1CA روم مخصص على Samsung Galaxy A52s",
      musicTitle: "مشغل الموسيقى (معاينة)",
      musicArtist: "الموسيقى من إعداد:",
      download: "تحميل",
      youtubeChannel: "قناة YouTube",
      youtube: "YouTube",
      youtubeDesc: "اشترك لأحدث الفيديوهات",
      myChannel: "قناتي",
      changelogTitle: "سجل التغييرات",
      instagram: "Instagram",
      instagramDesc: "تابع للتحديثات",
      myInstagram: "Instagram الخاص بي",
      threads: "Threads",
      threadsDesc: "تابع منشوراتي",
      myThreads: "Threads الخاص بي",
      threadsChannel: "ملف Threads",
      reddit: "Reddit",
      redditDesc: "انضم لمجتمعي",
      myReddit: "Reddit الخاص بي",
      redditChannel: "ملف Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "شاهد دبابيسي",
      myPinterest: "Pinterest الخاص بي",
      pinterestChannel: "ملف Pinterest",
      github: "GitHub",
      githubDesc: "عرض مستودعاتي",
      myGithub: "GitHub الخاص بي",
      githubChannel: "ملف GitHub",
      x: "X (Twitter)",
      xDesc: "تابع منشوراتي",
      myX: "X الخاص بي",
      xChannel: "ملف X",
      socialTitle: "وسائل التواصل الاجتماعي",
      facebook: "Facebook",
      facebookDesc: "تابع ملفي",
      myFacebook: "Facebook الخاص بي",
      scrollTop: "التمرير للأعلى",
      scrollBottom: "التمرير للأسفل",
      viewGallery: "عرض المعرض",
      clearSearch: "مسح",
      searchPlaceholder: "بحث البطاقات...",
      switchLang: "العربية",
      siteMotto: "تقنية، تعديل وموسيقى",
      versionTitle: "الإصدار",
      noResults: "لم يتم العثور على نتائج",
      toastAudioError: "خطأ في تشغيل الصوت",
      toastPlaybackError: "خطأ في التشغيل",
      toastNoDownload: "الملف الصوتي غير متوفر للتنزيل.",
      toastDownloadStarted: "بدأ التنزيل!",
      toastPlaybackEnded: "انتهى التشغيل",
      toastWelcome: "مرحباً بك في موقع Asaph10074!",
      toastBlockedPlayback: "المتصفح منع التشغيل. اضغط زر التشغيل مرة أخرى.",
      toastPlaybackFailed: "فشل التشغيل: ",
      toastModeEnabled: "تم تفعيل الوضع",
      toastTheme: "الموضوع: ",
      toastLightTheme: "تم تفعيل السمة الفاتحة",
      toastDarkTheme: "تم تفعيل السمة الداكنة",
      toastUnknownError: "خطأ غير معروف",
      toastLightThemeTitle: "السمة الفاتحة: ",
      toastDarkThemeTitle: "السمة الداكنة: ",
      toastLightChangedMsg: "تم تغيير السمة إلى الوضع الفاتح",
      toastDarkChangedMsg: "تم تغيير السمة إلى الوضع الداكن",
    },
    he: {
      buildsWipTitle: "בפיתוח",
      buildsWipBody: "הרשימה עדיין בהכנה. נא לחזור מאוחר יותר.",
      buildsWipSub: "עדיין לא זמין",
      buildsWipFootNote: "הערה: החלק הזה בפיתוח וטרם הושלם.",
      title: "האתר של Asaph10074",
      siteTitle: "האתר של Asaph10074",
      aboutMe: "עליי",
      aboutText: "אני Asaph10074. בשנת 2026, אני מתמקד בטכנולוגיה ומחשבים.",
      mySkills: "הכישורים שלי",
      skillAndroid: "מודינג למערכת Android",
      skillKotlin: "אתחול מערכות הפעלה מרובות",
      skillUI: "הרצת מכונות וירטואליות",
      skillUIDesign: "עיצוב ממשק",
      skillRoot: "Root ו-ROM מותאם",
      skillWeb: "פיתוח אתרים",
      phoneCard: "UN1CA ROM מותאם ב-Samsung Galaxy A52s",
      musicTitle: "נגן מוזיקה (תצוגה מקדימה)",
      musicArtist: "מוזיקה מאת:",
      download: "הורדה",
      youtubeChannel: "ערוץ YouTube",
      youtube: "YouTube",
      youtubeDesc: "הירשם לסרטונים האחרונים",
      myChannel: "הערוץ שלי",
      changelogTitle: "יומן שינויים",
      instagram: "Instagram",
      instagramDesc: "עקוב לעדכונים",
      myInstagram: "Instagram שלי",
      threads: "Threads",
      threadsDesc: "עקוב אחרי השרשורים שלי",
      myThreads: "Threads שלי",
      threadsChannel: "פרופיל Threads",
      reddit: "Reddit",
      redditDesc: "הצטרף לקהילה שלי",
      myReddit: "Reddit שלי",
      redditChannel: "פרופיל Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "ראה את הפינים שלי",
      myPinterest: "Pinterest שלי",
      pinterestChannel: "פרופיל Pinterest",
      github: "GitHub",
      githubDesc: "צפה במאגרים שלי",
      myGithub: "GitHub שלי",
      githubChannel: "פרופיל GitHub",
      x: "X (Twitter)",
      xDesc: "עקוב אחר הפוסטים שלי",
      myX: "X שלי",
      xChannel: "פרופיל X",
      socialTitle: "מדיה חברתית",
      facebook: "Facebook",
      facebookDesc: "עקוב אחר הפרופיל שלי",
      myFacebook: "Facebook שלי",
      scrollTop: "גלול למעלה",
      scrollBottom: "גלול למטה",
      viewGallery: "צפה בגלריה",
      clearSearch: "נקה",
      searchPlaceholder: "חפש כרטיסים...",
      switchLang: "עברית",
      siteMotto: "טכנולוגיה, מודינג ומוזיקה",
      versionTitle: "גרסה",
      noResults: "לא נמצאו תוצאות",
      toastAudioError: "שגיאת השמעת אודיו",
      toastPlaybackError: "שגיאת השמעה",
      toastNoDownload: "קובץ האודיו אינו זמין להורדה.",
      toastDownloadStarted: "ההורדה החלה!",
      toastPlaybackEnded: "ההשמעה הסתיימה",
      toastWelcome: "ברוכים הבאים לאתר של Asaph10074!",
      toastBlockedPlayback: "הדפדפן חסם את ההשמעה. לחצו על לחצן ההשמעה שוב.",
      toastPlaybackFailed: "ההשמעה נכשלה: ",
      toastModeEnabled: "המצב הופעל",
      toastTheme: "ערכת נושא: ",
      toastLightTheme: "ערכת נושא בהירה הופעלה",
      toastDarkTheme: "ערכת נושא כהה הופעלה",
      toastUnknownError: "שגיאה לא ידועה",
      toastLightThemeTitle: "ערכת נושא בהירה: ",
      toastDarkThemeTitle: "ערכת נושא כהה: ",
      toastLightChangedMsg: "ערכת הנושא הוחלפה למצב בהיר",
      toastDarkChangedMsg: "ערכת הנושא הוחלפה למצב כהה",
    },
    hi: {
      buildsWipTitle: "कार्य प्रगति पर है",
      buildsWipBody: "यह सूची अभी तैयार की जा रही है। कृपया जल्द ही वापस आएँ।",
      buildsWipSub: "अभी उपलब्ध नहीं",
      buildsWipFootNote:
        "नोट: यह सेक्शन अभी कार्य प्रगति पर है और पूरा नहीं हुआ है।",
      title: "Asaph10074 की वेबसाइट",
      siteTitle: "Asaph10074 की वेबसाइट",
      aboutMe: "मेरे बारे में",
      aboutText:
        "मैं Asaph10074 हूँ। 2026 में, मैं प्रौद्योगिकी और कंप्यूटर पर ध्यान केंद्रित कर रहा हूँ।",
      mySkills: "मेरे कौशल",
      skillAndroid: "Android सिस्टम मॉडिंग",
      skillKotlin: "मल्टीबूटिंग ऑपरेटिंग सिस्टम",
      skillUI: "वर्चुअल मशीन चलाना",
      skillUIDesign: "यूआई डिज़ाइन",
      skillRoot: "रूट और कस्टम ROM",
      skillWeb: "वेब डेवलपमेंट",
      phoneCard: "Samsung Galaxy A52s पर UN1CA कस्टम ROM",
      musicTitle: "संगीत प्लेयर (पूर्वावलोकन)",
      musicArtist: "संगीत निर्माता:",
      download: "डाउनलोड",
      youtubeChannel: "YouTube चैनल",
      youtube: "YouTube",
      youtubeDesc: "नवीनतम वीडियो के लिए सब्सक्राइब करें",
      myChannel: "मेरा चैनल",
      changelogTitle: "बदलाव लॉग",
      instagram: "Instagram",
      instagramDesc: "अपडेट के लिए फॉलो करें",
      myInstagram: "मेरा Instagram",
      threads: "Threads",
      threadsDesc: "मेरी थ्रेड्स फॉलो करें",
      myThreads: "मेरा Threads",
      threadsChannel: "Threads प्रोफ़ाइल",
      reddit: "Reddit",
      redditDesc: "मेरे समुदाय में शामिल हों",
      myReddit: "मेरा Reddit",
      redditChannel: "Reddit प्रोफ़ाइल",
      pinterest: "Pinterest",
      pinterestDesc: "मेरे पिन देखें",
      myPinterest: "मेरा Pinterest",
      pinterestChannel: "Pinterest प्रोफ़ाइल",
      github: "GitHub",
      githubDesc: "मेरे रिपॉजिटरी देखें",
      myGithub: "मेरा GitHub",
      githubChannel: "GitHub प्रोफ़ाइल",
      x: "X (Twitter)",
      xDesc: "मेरी पोस्ट फॉलो करें",
      myX: "मेरा X",
      xChannel: "X प्रोफ़ाइल",
      socialTitle: "सोशल मीडिया",
      facebook: "Facebook",
      facebookDesc: "मेरी प्रोफ़ाइल फॉलो करें",
      myFacebook: "मेरा Facebook",
      scrollTop: "ऊपर जाएं",
      scrollBottom: "नीचे जाएं",
      viewGallery: "गैलरी देखें",
      clearSearch: "साफ करें",
      searchPlaceholder: "कार्ड खोजें...",
      switchLang: "हिन्दी",
      siteMotto: "तकनीक, मॉडिंग और संगीत",
      versionTitle: "संस्करण",
      noResults: "कोई परिणाम नहीं मिला",
      toastAudioError: "ऑडियो प्लेबैक त्रुटि",
      toastPlaybackError: "प्लेबैक त्रुटि",
      toastNoDownload: "ऑडियो फ़ाइल डाउनलोड के लिए उपलब्ध नहीं है।",
      toastDownloadStarted: "डाउनलोड शुरू!",
      toastPlaybackEnded: "प्लेबैक समाप्त",
      toastWelcome: "Asaph10074 की वेबसाइट में आपका स्वागत है!",
      toastBlockedPlayback:
        "ब्राउज़र ने प्लेबैक रोक दिया। प्ले बटन फिर से दबाएं।",
      toastPlaybackFailed: "प्लेबैक विफल: ",
      toastModeEnabled: "मोड सक्षम",
      toastTheme: "थीम: ",
      toastLightTheme: "लाइट थीम सक्षम हुई",
      toastDarkTheme: "डार्क थीम सक्षम हुई",
      toastUnknownError: "अज्ञात त्रुटि",
      toastLightThemeTitle: "लाइट थीम: ",
      toastDarkThemeTitle: "डार्क थीम: ",
      toastLightChangedMsg: "थीम लाइट मोड में बदल दी गई",
      toastDarkChangedMsg: "थीम डार्क मोड में बदल दी गई",
    },
    gu: {
      buildsWipTitle: "કામ ચાલુ છે",
      buildsWipBody:
        "આ યાદી હજી તૈયાર થઈ રહ્યો છે. કૃપા કરીને થોડી વારમાં પાછા આવો.",
      buildsWipSub: "હજી ઉપલબ્ધ નથી",
      buildsWipFootNote: "નોંધ: આ વિભાગ કામ ચાલુ છે અને હજી પૂર્ણ થયો નથી.",
      title: "Asaph10074 ની વેબસાઇટ",
      siteTitle: "Asaph10074 ની વેબસાઇટ",
      aboutMe: "મારા વિશે",
      aboutText:
        "હું Asaph10074 છું. 2026 માં, હું ટેકનોલોજી અને કમ્પ્યુટર પર ધ્યાન આપી રહ્યો છું.",
      mySkills: "મારી કુશળતા",
      skillAndroid: "Android સિસ્ટમ મોડિંગ",
      skillKotlin: "મલ્ટિબૂટિંગ ઓપરેટિંગ સિસ્ટમ",
      skillUI: "વર્ચ્યુઅલ મશીન ચલાવવું",
      skillUIDesign: "યુઆઈ ડિઝાઈન",
      skillRoot: "રૂટ અને કસ્ટમ ROM",
      skillWeb: "વેબ ડેવલપમેન્ટ",
      phoneCard: "Samsung Galaxy A52s પર UN1CA કસ્ટમ ROM",
      musicTitle: "મ્યુઝિક પ્લેયર (પૂર્વાવલોકન)",
      musicArtist: "સંગીત નિર્માતા:",
      download: "ડાઉનલોડ",
      youtubeChannel: "YouTube ચેનલ",
      youtube: "YouTube",
      youtubeDesc: "નવીનતમ વિડિઓઝ માટે સબ્સ્ક્રાઇબ કરો",
      myChannel: "મારી ચેનલ",
      changelogTitle: "ફેરફાર લોગ",
      instagram: "Instagram",
      instagramDesc: "અપડેટ્સ માટે ફોલો કરો",
      myInstagram: "મારું Instagram",
      threads: "Threads",
      threadsDesc: "મારી થ્રેડ્સ ફોલો કરો",
      myThreads: "મારું Threads",
      threadsChannel: "Threads પ્રોફાઇલ",
      reddit: "Reddit",
      redditDesc: "મારા સમુદાયમાં જોડાઓ",
      myReddit: "મારું Reddit",
      redditChannel: "Reddit પ્રોફાઇલ",
      pinterest: "Pinterest",
      pinterestDesc: "મારા પિન જુઓ",
      myPinterest: "મારું Pinterest",
      pinterestChannel: "Pinterest પ્રોફાઇલ",
      github: "GitHub",
      githubDesc: "મારા રિપોઝિટરી જુઓ",
      myGithub: "મારું GitHub",
      githubChannel: "GitHub પ્રોફાઇલ",
      x: "X (Twitter)",
      xDesc: "મારી પોસ્ટ ફોલો કરો",
      myX: "મારું X",
      xChannel: "X પ્રોફાઇલ",
      socialTitle: "સોશિયલ મીડિયા",
      facebook: "Facebook",
      facebookDesc: "મારી પ્રોફાઇલ ફોલો કરો",
      myFacebook: "મારું Facebook",
      scrollTop: "ઉપર સ્ક્રોલ કરો",
      scrollBottom: "નીચે સ્ક્રોલ કરો",
      viewGallery: "ગેલેરી જુઓ",
      clearSearch: "સાફ કરો",
      searchPlaceholder: "કાર્ડ શોધો...",
      switchLang: "ગુજરાતી",
      siteMotto: "ટેક, મોડિંગ અને સંગીત",
      versionTitle: "આવૃત્તિ",
      noResults: "કોઈ પરિણામ મળ્યું નથી",
      toastAudioError: "ઑડિયો પ્લેબેક ભૂલ",
      toastPlaybackError: "પ્લેબેક ભૂલ",
      toastNoDownload: "ઑડિયો ફાઇલ ડાઉનલોડ માટે ઉપલબ્ધ નથી.",
      toastDownloadStarted: "ડાઉનલોડ શરૂ!",
      toastPlaybackEnded: "પ્લેબેક સમાપ્ત",
      toastWelcome: "Asaph10074 ની વેબસાઇટમાં સ્વાગત છે!",
      toastBlockedPlayback:
        "બ્રાઉઝરે પ્લેબેક અવરોધિત કર્યો. પ્લે બટન ફરી દબાવો.",
      toastPlaybackFailed: "પ્લેબેક નિષ્ફળ: ",
      toastModeEnabled: "મોડ સક્ષમ",
      toastTheme: "થીમ: ",
      toastLightTheme: "લાઇટ થીમ સક્ષમ થઈ",
      toastDarkTheme: "ડાર્ક થીમ સક્ષમ થઈ",
      toastUnknownError: "અજ્ઞાત ભૂલ",
      toastLightThemeTitle: "લાઇટ થીમ: ",
      toastDarkThemeTitle: "ડાર્ક થીમ: ",
      toastLightChangedMsg: "થીમ લાઇટ મોડમાં બદલાઈ ગયું",
      toastDarkChangedMsg: "થીમ ડાર્ક મોડમાં બદલાઈ ગયું",
    },
    ne: {
      buildsWipTitle: "काम भइरहेको छ",
      buildsWipBody: "यो सूची अझै तयार हुँदैछ। कृपया छिट्टै फेरि आउनुहोस्।",
      buildsWipSub: "अझै उपलब्ध छैन",
      buildsWipFootNote: "नोट: यो खण्ड अझै काम भइरहेको छ र पूरा भएको छैन।",
      title: "Asaph10074 को वेबसाइट",
      siteTitle: "Asaph10074 को वेबसाइट",
      aboutMe: "मेरो बारेमा",
      aboutText:
        "म Asaph10074 हुँ। 2026 मा, म प्रविधि र कम्प्युटरमा ध्यान केन्द्रित गर्दैछु।",
      mySkills: "मेरा सीपहरू",
      skillAndroid: "Android प्रणाली मोडिङ",
      skillKotlin: "मल्टीबुटिङ अपरेटिङ सिस्टम",
      skillUI: "भर्चुअल मेसिन चलाउने",
      skillUIDesign: "युआई डिजाइन",
      skillRoot: "रूट र कस्टम ROM",
      skillWeb: "वेब विकास",
      phoneCard: "Samsung Galaxy A52s मा UN1CA कस्टम ROM",
      musicTitle: "संगीत प्लेयर (पूर्वावलोकन)",
      musicArtist: "संगीत निर्माता:",
      download: "डाउनलोड",
      youtubeChannel: "YouTube च्यानल",
      youtube: "YouTube",
      youtubeDesc: "नवीनतम भिडियोको लागि सब्सक्राइब गर्नुहोस्",
      myChannel: "मेरो च्यानल",
      changelogTitle: "परिवर्तन लग",
      instagram: "Instagram",
      instagramDesc: "अपडेटको लागि फलो गर्नुहोस्",
      myInstagram: "मेरो Instagram",
      threads: "Threads",
      threadsDesc: "मेरा थ्रेडहरू फलो गर्नुहोस्",
      myThreads: "मेरो Threads",
      threadsChannel: "Threads प्रोफाइल",
      reddit: "Reddit",
      redditDesc: "मेरो समुदायमा सामेल हुनुहोस्",
      myReddit: "मेरो Reddit",
      redditChannel: "Reddit प्रोफाइल",
      pinterest: "Pinterest",
      pinterestDesc: "मेरा पिनहरू हेर्नुहोस्",
      myPinterest: "मेरो Pinterest",
      pinterestChannel: "Pinterest प्रोफाइल",
      github: "GitHub",
      githubDesc: "मेरा रिपोजिटरीहरू हेर्नुहोस्",
      myGithub: "मेरो GitHub",
      githubChannel: "GitHub प्रोफाइल",
      x: "X (Twitter)",
      xDesc: "मेरा पोस्ट फलो गर्नुहोस्",
      myX: "मेरो X",
      xChannel: "X प्रोफाइल",
      socialTitle: "सामाजिक मिडिया",
      facebook: "Facebook",
      facebookDesc: "मेरो प्रोफाइल फलो गर्नुहोस्",
      myFacebook: "मेरो Facebook",
      scrollTop: "माथि स्क्रॉल गर्नुहोस्",
      scrollBottom: "तल स्क्रोल गर्नुहोस्",
      viewGallery: "ग्यालरी हेर्नुहोस्",
      clearSearch: "सफा गर्नुहोस्",
      searchPlaceholder: "कार्ड खोज्नुहोस्...",
      switchLang: "नेपाली",
      siteMotto: "प्रविधि, मोडिङ र संगीत",
      versionTitle: "संस्करण",
      noResults: "कुनै परिणाम फेला परेन",
      toastAudioError: "अडियो प्लेब्याक त्रुटि",
      toastPlaybackError: "प्लेब्याक त्रुटि",
      toastNoDownload: "अडियो फाइल डाउनलोडको लागि उपलब्ध छैन।",
      toastDownloadStarted: "डाउनलोड सुरु!",
      toastPlaybackEnded: "प्लेब्याक समाप्त",
      toastWelcome: "Asaph10074 को वेबसाइटमा स्वागत छ!",
      toastBlockedPlayback:
        "ब्राउजरले प्लेब्याक रोक्यो। प्ले बटन फेरि थिच्नुहोस्।",
      toastPlaybackFailed: "प्लेब्याक असफल: ",
      toastModeEnabled: "मोड सक्षम",
      toastTheme: "थिम: ",
      toastLightTheme: "लाइट थिम सक्षम भयो",
      toastDarkTheme: "डार्क थिम सक्षम भयो",
      toastUnknownError: "अज्ञात त्रुटि",
      toastLightThemeTitle: "लाइट थिम: ",
      toastDarkThemeTitle: "डार्क थिम: ",
      toastLightChangedMsg: "थिम लाइट मोडमा परिवर्तन भयो",
      toastDarkChangedMsg: "थिम डार्क मोडमा परिवर्तन भयो",
    },
    th: {
      buildsWipTitle: "กำลังพัฒนา",
      buildsWipBody:
        "รายการนี้ยังอยู่ระหว่างการจัดทำ กรุณากลับมาเยือนอีกครั้งเร็ว ๆ นี้",
      buildsWipSub: "ยังไม่พร้อมให้เปิดใช้งาน",
      buildsWipFootNote:
        "หมายเหตุ: ส่วนนี้ยังอยู่ระหว่างการพัฒนาและยังไม่เสร็จสมบูรณ์",
      title: "เว็บไซต์ของ Asaph10074",
      siteTitle: "เว็บไซต์ของ Asaph10074",
      aboutMe: "เกี่ยวกับฉัน",
      aboutText:
        "ฉันคือ Asaph10074 ในปี 2026 ฉันกำลังมุ่งเน้นไปที่เทคโนโลยีและคอมพิวเตอร์",
      mySkills: "ทักษะของฉัน",
      skillAndroid: "การปรับแต่งระบบ Android",
      skillKotlin: "การบูตหลายระบบปฏิบัติการ",
      skillUI: "การใช้งานเครื่องเสมือน",
      skillUIDesign: "ออกแบบ UI",
      skillRoot: "รูทและ ROM แบบกำหนดเอง",
      skillWeb: "การพัฒนาเว็บ",
      phoneCard: "UN1CA ROM แบบกำหนดเองบน Samsung Galaxy A52s",
      musicTitle: "เครื่องเล่นเพลง (ตัวอย่าง)",
      musicArtist: "เพลงโดย:",
      download: "ดาวน์โหลด",
      youtubeChannel: "ช่อง YouTube",
      youtube: "YouTube",
      youtubeDesc: "สมัครสมาชิกเพื่อรับวิดีโอล่าสุด",
      myChannel: "ช่องของฉัน",
      changelogTitle: "บันทึกการเปลี่ยนแปลง",
      instagram: "Instagram",
      instagramDesc: "ติดตามเพื่อรับอัปเดต",
      myInstagram: "Instagram ของฉัน",
      threads: "Threads",
      threadsDesc: "ติดตามเธรดของฉัน",
      myThreads: "Threads ของฉัน",
      threadsChannel: "โปรไฟล์ Threads",
      reddit: "Reddit",
      redditDesc: "เข้าร่วมชุมชนของฉัน",
      myReddit: "Reddit ของฉัน",
      redditChannel: "โปรไฟล์ Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "ดูพินของฉัน",
      myPinterest: "Pinterest ของฉัน",
      pinterestChannel: "โปรไฟล์ Pinterest",
      github: "GitHub",
      githubDesc: "ดูที่เก็บของฉัน",
      myGithub: "GitHub ของฉัน",
      githubChannel: "โปรไฟล์ GitHub",
      x: "X (Twitter)",
      xDesc: "ติดตามโพสต์ของฉัน",
      myX: "X ของฉัน",
      xChannel: "โปรไฟล์ X",
      socialTitle: "โซเชียลมีเดีย",
      facebook: "Facebook",
      facebookDesc: "ติดตามโปรไฟล์ของฉัน",
      myFacebook: "Facebook ของฉัน",
      scrollTop: "เลื่อนขึ้นด้านบน",
      scrollBottom: "เลื่อนลงด้านล่าง",
      viewGallery: "ดูแกลเลอรี",
      clearSearch: "ล้าง",
      searchPlaceholder: "ค้นหาการ์ด...",
      switchLang: "ไทย",
      siteMotto: "เทคโนโลยี โมดดิ้ง และดนตรี",
      versionTitle: "เวอร์ชัน",
      noResults: "ไม่พบผลลัพธ์",
      toastAudioError: "เกิดข้อผิดพลาดในการเล่นเสียง",
      toastPlaybackError: "ข้อผิดพลาดในการเล่น",
      toastNoDownload: "ไฟล์เสียงไม่พร้อมให้ดาวน์โหลด",
      toastDownloadStarted: "เริ่มดาวน์โหลดแล้ว!",
      toastPlaybackEnded: "การเล่นสิ้นสุดลง",
      toastWelcome: "ยินดีต้อนรับสู่เว็บไซต์ของ Asaph10074!",
      toastBlockedPlayback: "เบราว์เซอร์บล็อกการเล่น คลิกปุ่มเล่นอีกครั้ง",
      toastPlaybackFailed: "การเล่นล้มเหลว: ",
      toastModeEnabled: "เปิดใช้งานโหมดแล้ว",
      toastTheme: "ธีม: ",
      toastLightTheme: "เปิดใช้ธีมสว่างแล้ว",
      toastDarkTheme: "เปิดใช้ธีมมืดแล้ว",
      toastUnknownError: "ข้อผิดพลาดที่ไม่ทราบสาเหตุ",
      toastLightThemeTitle: "ธีมสว่าง: ",
      toastDarkThemeTitle: "ธีมมืด: ",
      toastLightChangedMsg: "เปลี่ยนธีมเป็นโหมดสว่างแล้ว",
      toastDarkChangedMsg: "เปลี่ยนธีมเป็นโหมดมืดแล้ว",
    },
    vi: {
      buildsWipTitle: "Đang phát triển",
      buildsWipBody:
        "Danh sách này vẫn đang được hoàn thiện. Vui lòng quay lại sau.",
      buildsWipSub: "Chưa có sẵn",
      buildsWipFootNote:
        "Lưu ý: mục này đang được phát triển và chưa hoàn thành.",
      title: "Trang web của Asaph10074",
      siteTitle: "Trang web của Asaph10074",
      aboutMe: "Về tôi",
      aboutText:
        "Tôi là Asaph10074. Trong năm 2026, tôi đang tập trung vào Công nghệ và máy tính.",
      mySkills: "Kỹ năng của tôi",
      skillAndroid: "Chỉnh sửa hệ thống Android",
      skillKotlin: "Khởi động nhiều hệ điều hành",
      skillUI: "Chạy máy ảo",
      skillUIDesign: "Thiết kế UI",
      skillRoot: "Root & ROM tùy chỉnh",
      skillWeb: "Phát triển Web",
      phoneCard: "UN1CA ROM tùy chỉnh trên Samsung Galaxy A52s",
      musicTitle: "Trình phát nhạc (Xem trước)",
      musicArtist: "Nhạc được tạo bởi:",
      download: "Tải xuống",
      youtubeChannel: "Kênh YouTube",
      youtube: "YouTube",
      youtubeDesc: "Đăng ký để xem video mới nhất",
      myChannel: "Kênh của tôi",
      changelogTitle: "Nhật ký thay đổi",
      instagram: "Instagram",
      instagramDesc: "Theo dõi để cập nhật",
      myInstagram: "Instagram của tôi",
      threads: "Threads",
      threadsDesc: "Theo dõi các thread của tôi",
      myThreads: "Threads của tôi",
      threadsChannel: "Hồ sơ Threads",
      reddit: "Reddit",
      redditDesc: "Tham gia cộng đồng của tôi",
      myReddit: "Reddit của tôi",
      redditChannel: "Hồ sơ Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Xem ghim của tôi",
      myPinterest: "Pinterest của tôi",
      pinterestChannel: "Hồ sơ Pinterest",
      github: "GitHub",
      githubDesc: "Xem kho lưu trữ của tôi",
      myGithub: "GitHub của tôi",
      githubChannel: "Hồ sơ GitHub",
      x: "X (Twitter)",
      xDesc: "Theo dõi bài đăng của tôi",
      myX: "X của tôi",
      xChannel: "Hồ sơ X",
      socialTitle: "Mạng xã hội",
      facebook: "Facebook",
      facebookDesc: "Theo dõi hồ sơ của tôi",
      myFacebook: "Facebook của tôi",
      scrollTop: "Cuộn lên đầu",
      scrollBottom: "Cuộn xuống cuối",
      viewGallery: "Xem thư viện",
      clearSearch: "Xóa",
      searchPlaceholder: "Tìm kiếm thẻ...",
      switchLang: "Tiếng Việt",
      siteMotto: "Công nghệ, Modding và Âm nhạc",
      versionTitle: "Phiên bản",
      noResults: "Không tìm thấy kết quả",
      toastAudioError: "Lỗi phát âm thanh",
      toastPlaybackError: "Lỗi phát lại",
      toastNoDownload: "Tệp âm thanh không có sẵn để tải xuống.",
      toastDownloadStarted: "Đã bắt đầu tải xuống!",
      toastPlaybackEnded: "Đã kết thúc phát lại",
      toastWelcome: "Chào mừng đến với trang web của Asaph10074!",
      toastBlockedPlayback:
        "Trình duyệt đã chặn phát lại. Hãy nhấp lại nút phát.",
      toastPlaybackFailed: "Phát lại thất bại: ",
      toastModeEnabled: "đã bật chế độ",
      toastTheme: "Chủ đề: ",
      toastLightTheme: "Đã bật chế độ sáng",
      toastDarkTheme: "Đã bật chế độ tối",
      toastUnknownError: "Lỗi không xác định",
      toastLightThemeTitle: "Chủ đề sáng: ",
      toastDarkThemeTitle: "Chủ đề tối: ",
      toastLightChangedMsg: "Đã đổi chủ đề sang chế độ sáng",
      toastDarkChangedMsg: "Đã đổi chủ đề sang chế độ tối",
    },
    ru: {
      buildsWipTitle: "В разработке",
      buildsWipBody: "Этот список ещё собирается. Пожалуйста, загляните позже.",
      buildsWipSub: "Пока недоступно",
      buildsWipFootNote:
        "Примечание: этот раздел в разработке и ещё не завершён.",
      title: "Сайт Asaph10074",
      siteTitle: "Сайт Asaph10074",
      aboutMe: "Обо мне",
      aboutText:
        "Я Asaph10074. В 2026 году я сосредоточен на технологиях и компьютерах.",
      mySkills: "Мои навыки",
      skillAndroid: "Модификация системы Android",
      skillKotlin: "Мультизагрузка операционных систем",
      skillUI: "Запуск виртуальных машин",
      skillUIDesign: "UI-дизайн",
      skillRoot: "Root и кастомный ROM",
      skillWeb: "Веб-разработка",
      phoneCard: "UN1CA Custom ROM на Samsung Galaxy A52s",
      musicTitle: "Музыкальный плеер (Предпросмотр)",
      musicArtist: "Музыка создана:",
      download: "Скачать",
      youtubeChannel: "YouTube канал",
      youtube: "YouTube",
      youtubeDesc: "Подпишитесь на новые видео",
      myChannel: "Мой канал",
      changelogTitle: "Список изменений",
      instagram: "Instagram",
      instagramDesc: "Следите за обновлениями",
      myInstagram: "Мой Instagram",
      threads: "Threads",
      threadsDesc: "Следите за моими темами",
      myThreads: "Мои Threads",
      threadsChannel: "Профиль Threads",
      reddit: "Reddit",
      redditDesc: "Присоединяйтесь к сообществу",
      myReddit: "Мой Reddit",
      redditChannel: "Профиль Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Смотрите мои пины",
      myPinterest: "Мой Pinterest",
      pinterestChannel: "Профиль Pinterest",
      github: "GitHub",
      githubDesc: "Посмотреть репозитории",
      myGithub: "Мой GitHub",
      githubChannel: "Профиль GitHub",
      x: "X (Twitter)",
      xDesc: "Читать мои посты",
      myX: "Мой X",
      xChannel: "Профиль X",
      socialTitle: "Социальные сети",
      facebook: "Facebook",
      facebookDesc: "Подписаться на профиль",
      myFacebook: "Мой Facebook",
      scrollTop: "Прокрутить вверх",
      scrollBottom: "Прокрутить вниз",
      viewGallery: "Открыть галерею",
      clearSearch: "Очистить",
      searchPlaceholder: "Поиск карточек...",
      switchLang: "Русский",
      siteMotto: "Технологии, моддинг и музыка",
      versionTitle: "Версия",
      noResults: "Результатов не найдено",
      toastAudioError: "Ошибка воспроизведения аудио",
      toastPlaybackError: "Ошибка воспроизведения",
      toastNoDownload: "Аудиофайл недоступен для загрузки.",
      toastDownloadStarted: "Загрузка началась!",
      toastPlaybackEnded: "Воспроизведение завершено",
      toastWelcome: "Добро пожаловать на сайт Asaph10074!",
      toastBlockedPlayback:
        "Браузер заблокировал воспроизведение. Нажмите кнопку воспроизведения ещё раз.",
      toastPlaybackFailed: "Не удалось воспроизвести: ",
      toastModeEnabled: "режим включён",
      toastTheme: "Тема: ",
      toastLightTheme: "Светлая тема включена",
      toastDarkTheme: "Тёмная тема включена",
      toastUnknownError: "Неизвестная ошибка",
      toastLightThemeTitle: "Светлая тема: ",
      toastDarkThemeTitle: "Тёмная тема: ",
      toastLightChangedMsg: "Тема изменена на светлый режим",
      toastDarkChangedMsg: "Тема изменена на тёмный режим",
    },
    de: {
      buildsWipTitle: "In Arbeit",
      buildsWipBody:
        "Diese Liste wird noch zusammengestellt. Bitte schau später noch einmal vorbei.",
      buildsWipSub: "Noch nicht verfügbar",
      buildsWipFootNote:
        "Hinweis: Dieser Bereich ist in Arbeit und noch nicht fertig.",
      title: "Asaph10074s Website",
      siteTitle: "Asaph10074s Website",
      aboutMe: "Über mich",
      aboutText:
        "Ich bin Asaph10074. Im Jahr 2026 konzentriere ich mich auf Technologie und Computer.",
      mySkills: "Meine Fähigkeiten",
      skillAndroid: "Android-System-Modding",
      skillKotlin: "Multiboot von Betriebssystemen",
      skillUI: "Virtuelle Maschinen ausführen",
      skillUIDesign: "UI-Design",
      skillRoot: "Rooten & Custom-ROM",
      skillWeb: "Webentwicklung",
      phoneCard: "UN1CA Custom ROM auf Samsung Galaxy A52s",
      musicTitle: "Musikplayer (Vorschau)",
      musicArtist: "Musik erstellt von:",
      download: "Herunterladen",
      youtubeChannel: "YouTube-Kanal",
      youtube: "YouTube",
      youtubeDesc: "Abonnieren für neueste Videos",
      myChannel: "Mein Kanal",
      changelogTitle: "Änderungsprotokoll",
      instagram: "Instagram",
      instagramDesc: "Folgen für Updates",
      myInstagram: "Mein Instagram",
      threads: "Threads",
      threadsDesc: "Folge meinen Threads",
      myThreads: "Meine Threads",
      threadsChannel: "Threads-Profil",
      reddit: "Reddit",
      redditDesc: "Tritt meiner Community bei",
      myReddit: "Mein Reddit",
      redditChannel: "Reddit-Profil",
      pinterest: "Pinterest",
      pinterestDesc: "Sieh dir meine Pins an",
      myPinterest: "Mein Pinterest",
      pinterestChannel: "Pinterest-Profil",
      github: "GitHub",
      githubDesc: "Meine Repositories ansehen",
      myGithub: "Mein GitHub",
      githubChannel: "GitHub-Profil",
      x: "X (Twitter)",
      xDesc: "Folge meinen Beiträgen",
      myX: "Mein X",
      xChannel: "X-Profil",
      socialTitle: "Soziale Medien",
      facebook: "Facebook",
      facebookDesc: "Folge meinem Profil",
      myFacebook: "Mein Facebook",
      scrollTop: "Nach oben scrollen",
      scrollBottom: "Nach unten scrollen",
      viewGallery: "Galerie anzeigen",
      clearSearch: "Löschen",
      searchPlaceholder: "Karten durchsuchen...",
      switchLang: "Deutsch",
      siteMotto: "Tech, Modding & Musik",
      versionTitle: "Version",
      noResults: "Keine Ergebnisse gefunden",
      toastAudioError: "Audio-Wiedergabefehler",
      toastPlaybackError: "Wiedergabefehler",
      toastNoDownload: "Die Audiodatei kann nicht heruntergeladen werden.",
      toastDownloadStarted: "Download gestartet!",
      toastPlaybackEnded: "Wiedergabe beendet",
      toastWelcome: "Willkommen auf Asaph10074s Website!",
      toastBlockedPlayback:
        "Der Browser hat die Wiedergabe blockiert. Klicken Sie erneut auf die Wiedergabetaste.",
      toastPlaybackFailed: "Wiedergabe fehlgeschlagen: ",
      toastModeEnabled: "Modus aktiviert",
      toastTheme: "Design: ",
      toastLightTheme: "Helles Design aktiviert",
      toastDarkTheme: "Dunkles Design aktiviert",
      toastUnknownError: "Unbekannter Fehler",
      toastLightThemeTitle: "Helles Design: ",
      toastDarkThemeTitle: "Dunkles Design: ",
      toastLightChangedMsg: "Das Design wurde in den Hellmodus geändert",
      toastDarkChangedMsg: "Das Design wurde in den Dunkelmodus geändert",
    },
    fr: {
      buildsWipTitle: "En cours de développement",
      buildsWipBody: "Cette liste est encore en préparation. Revenez bientôt.",
      buildsWipSub: "Pas encore disponible",
      buildsWipFootNote:
        "Remarque : cette section est en cours et n’est pas encore terminée.",
      title: "Site Web d'Asaph10074",
      siteTitle: "Site Web d'Asaph10074",
      aboutMe: "À propos de moi",
      aboutText:
        "Je suis Asaph10074. En 2026, je me concentre sur la technologie et les ordinateurs.",
      mySkills: "Mes compétences",
      skillAndroid: "Modification du système Android",
      skillKotlin: "Multidémarrage de systèmes d'exploitation",
      skillUI: "Exécution de machines virtuelles",
      skillUIDesign: "Conception UI",
      skillRoot: "Root & ROM personnalisée",
      skillWeb: "Développement Web",
      phoneCard: "UN1CA ROM personnalisée sur Samsung Galaxy A52s",
      musicTitle: "Lecteur de musique (Aperçu)",
      musicArtist: "Musique créée par :",
      download: "Télécharger",
      youtubeChannel: "Chaîne YouTube",
      youtube: "YouTube",
      youtubeDesc: "Abonnez-vous pour les dernières vidéos",
      myChannel: "Ma chaîne",
      changelogTitle: "Journal des modifications",
      instagram: "Instagram",
      instagramDesc: "Suivez pour les mises à jour",
      myInstagram: "Mon Instagram",
      threads: "Threads",
      threadsDesc: "Suivez mes threads",
      myThreads: "Mes Threads",
      threadsChannel: "Profil Threads",
      reddit: "Reddit",
      redditDesc: "Rejoignez ma communauté",
      myReddit: "Mon Reddit",
      redditChannel: "Profil Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Voir mes épingles",
      myPinterest: "Mon Pinterest",
      pinterestChannel: "Profil Pinterest",
      github: "GitHub",
      githubDesc: "Voir mes dépôts",
      myGithub: "Mon GitHub",
      githubChannel: "Profil GitHub",
      x: "X (Twitter)",
      xDesc: "Suivez mes publications",
      myX: "Mon X",
      xChannel: "Profil X",
      socialTitle: "Réseaux sociaux",
      facebook: "Facebook",
      facebookDesc: "Suivez mon profil",
      myFacebook: "Mon Facebook",
      scrollTop: "Défiler vers le haut",
      scrollBottom: "Défiler vers le bas",
      viewGallery: "Voir la galerie",
      clearSearch: "Effacer",
      searchPlaceholder: "Rechercher des cartes...",
      switchLang: "Français",
      siteMotto: "Tech, Modding & Musique",
      versionTitle: "Version",
      noResults: "Aucun résultat trouvé",
      toastAudioError: "Erreur de lecture audio",
      toastPlaybackError: "Erreur de lecture",
      toastNoDownload:
        "Le fichier audio n'est pas disponible au téléchargement.",
      toastDownloadStarted: "Téléchargement démarré !",
      toastPlaybackEnded: "Lecture terminée",
      toastWelcome: "Bienvenue sur le site Web d'Asaph10074!",
      toastBlockedPlayback:
        "Le navigateur a bloqué la lecture. Cliquez à nouveau sur le bouton de lecture.",
      toastPlaybackFailed: "Échec de la lecture : ",
      toastModeEnabled: "mode activé",
      toastTheme: "Thème : ",
      toastLightTheme: "Thème clair activé",
      toastDarkTheme: "Thème sombre activé",
      toastUnknownError: "Erreur inconnue",
      toastLightThemeTitle: "Thème clair : ",
      toastDarkThemeTitle: "Thème sombre : ",
      toastLightChangedMsg: "Le thème a été changé en mode clair",
      toastDarkChangedMsg: "Le thème a été changé en mode sombre",
    },
    it: {
      buildsWipTitle: "In lavorazione",
      buildsWipBody: "Questo elenco è ancora in preparazione. Torna presto.",
      buildsWipSub: "Non ancora disponibile",
      buildsWipFootNote:
        "Nota: questa sezione è in lavorazione e non è ancora completa.",
      title: "Sito web di Asaph10074",
      siteTitle: "Sito web di Asaph10074",
      aboutMe: "Su di me",
      aboutText:
        "Sono Asaph10074. Nel 2026, mi concentro sulla tecnologia e sui computer.",
      mySkills: "Le mie competenze",
      skillAndroid: "Modding del sistema Android",
      skillKotlin: "Multiboot di sistemi operativi",
      skillUI: "Esecuzione di macchine virtuali",
      skillUIDesign: "Design UI",
      skillRoot: "Root & ROM personalizzata",
      skillWeb: "Sviluppo web",
      phoneCard: "UN1CA ROM personalizzata su Samsung Galaxy A52s",
      musicTitle: "Lettore musicale (Anteprima)",
      musicArtist: "Musica creata da:",
      download: "Scarica",
      youtubeChannel: "Canale YouTube",
      youtube: "YouTube",
      youtubeDesc: "Iscriviti per gli ultimi video",
      myChannel: "Il mio canale",
      changelogTitle: "Registro modifiche",
      instagram: "Instagram",
      instagramDesc: "Segui per aggiornamenti",
      myInstagram: "Il mio Instagram",
      threads: "Threads",
      threadsDesc: "Segui i miei thread",
      myThreads: "I miei Threads",
      threadsChannel: "Profilo Threads",
      reddit: "Reddit",
      redditDesc: "Unisciti alla mia community",
      myReddit: "Il mio Reddit",
      redditChannel: "Profilo Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Guarda i miei pin",
      myPinterest: "Il mio Pinterest",
      pinterestChannel: "Profilo Pinterest",
      github: "GitHub",
      githubDesc: "Vedi i miei repository",
      myGithub: "Il mio GitHub",
      githubChannel: "Profilo GitHub",
      x: "X (Twitter)",
      xDesc: "Segui i miei post",
      myX: "Il mio X",
      xChannel: "Profilo X",
      socialTitle: "Social Media",
      facebook: "Facebook",
      facebookDesc: "Segui il mio profilo",
      myFacebook: "Il mio Facebook",
      scrollTop: "Scorri verso l'alto",
      scrollBottom: "Scorri verso il basso",
      viewGallery: "Vedi galleria",
      clearSearch: "Cancella",
      searchPlaceholder: "Cerca carte...",
      switchLang: "Italiano",
      siteMotto: "Tech, Modding e Musica",
      versionTitle: "Versione",
      noResults: "Nessun risultato trovato",
      toastAudioError: "Errore di riproduzione audio",
      toastPlaybackError: "Errore di riproduzione",
      toastNoDownload: "Il file audio non è disponibile per il download.",
      toastDownloadStarted: "Download avviato!",
      toastPlaybackEnded: "Riproduzione terminata",
      toastWelcome: "Benvenuto nel sito di Asaph10074!",
      toastBlockedPlayback:
        "Il browser ha bloccato la riproduzione. Riprova a premere il pulsante di riproduzione.",
      toastPlaybackFailed: "Riproduzione non riuscita: ",
      toastModeEnabled: "modalità attivata",
      toastTheme: "Tema: ",
      toastLightTheme: "Tema chiaro attivato",
      toastDarkTheme: "Tema scuro attivato",
      toastUnknownError: "Errore sconosciuto",
      toastLightThemeTitle: "Tema chiaro: ",
      toastDarkThemeTitle: "Tema scuro: ",
      toastLightChangedMsg: "Il tema è stato cambiato in modalità chiara",
      toastDarkChangedMsg: "Il tema è stato cambiato in modalità scura",
    },
    pt: {
      buildsWipTitle: "Em desenvolvimento",
      buildsWipBody: "Esta lista ainda está sendo montada. Volte em breve.",
      buildsWipSub: "Ainda indisponível",
      buildsWipFootNote:
        "Nota: esta seção está em desenvolvimento e ainda não está concluída.",
      title: "Site do Asaph10074",
      siteTitle: "Site do Asaph10074",
      aboutMe: "Sobre mim",
      aboutText:
        "Sou Asaph10074. Em 2026, estou focado em Tecnologia e computadores.",
      mySkills: "Minhas habilidades",
      skillAndroid: "Modificação do sistema Android",
      skillKotlin: "Multiboot de sistemas operacionais",
      skillUI: "Executar máquinas virtuais",
      skillUIDesign: "Design de UI",
      skillRoot: "Root & ROM personalizada",
      skillWeb: "Desenvolvimento Web",
      phoneCard: "UN1CA ROM personalizada no Samsung Galaxy A52s",
      musicTitle: "Player de Música (Pré-visualização)",
      musicArtist: "Música criada por:",
      download: "Baixar",
      youtubeChannel: "Canal do YouTube",
      youtube: "YouTube",
      youtubeDesc: "Inscreva-se para novos vídeos",
      myChannel: "Meu canal",
      changelogTitle: "Registo de alterações",
      instagram: "Instagram",
      instagramDesc: "Siga para atualizações",
      myInstagram: "Meu Instagram",
      threads: "Threads",
      threadsDesc: "Siga meus threads",
      myThreads: "Meus Threads",
      threadsChannel: "Perfil do Threads",
      reddit: "Reddit",
      redditDesc: "Junte-se à minha comunidade",
      myReddit: "Meu Reddit",
      redditChannel: "Perfil do Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Veja meus pins",
      myPinterest: "Meu Pinterest",
      pinterestChannel: "Perfil do Pinterest",
      github: "GitHub",
      githubDesc: "Veja meus repositórios",
      myGithub: "Meu GitHub",
      githubChannel: "Perfil do GitHub",
      x: "X (Twitter)",
      xDesc: "Siga minhas postagens",
      myX: "Meu X",
      xChannel: "Perfil do X",
      socialTitle: "Redes sociais",
      facebook: "Facebook",
      facebookDesc: "Siga meu perfil",
      myFacebook: "Meu Facebook",
      scrollTop: "Rolar para cima",
      scrollBottom: "Rolar para baixo",
      viewGallery: "Ver galeria",
      clearSearch: "Limpar",
      searchPlaceholder: "Pesquisar cartões...",
      switchLang: "Português",
      siteMotto: "Tecnologia, Modding e Música",
      versionTitle: "Versão",
      noResults: "Nenhum resultado encontrado",
      toastAudioError: "Erro de reprodução de áudio",
      toastPlaybackError: "Erro de reprodução",
      toastNoDownload: "O arquivo de áudio não está disponível para download.",
      toastDownloadStarted: "Download iniciado!",
      toastPlaybackEnded: "Reprodução encerrada",
      toastWelcome: "Bem-vindo ao site do Asaph10074!",
      toastBlockedPlayback:
        "O navegador bloqueou a reprodução. Clique novamente no botão de reprodução.",
      toastPlaybackFailed: "Falha na reprodução: ",
      toastModeEnabled: "modo ativado",
      toastTheme: "Tema: ",
      toastLightTheme: "Tema claro ativado",
      toastDarkTheme: "Tema escuro ativado",
      toastUnknownError: "Erro desconhecido",
      toastLightThemeTitle: "Tema claro: ",
      toastDarkThemeTitle: "Tema escuro: ",
      toastLightChangedMsg: "O tema foi alterado para o modo claro",
      toastDarkChangedMsg: "O tema foi alterado para o modo escuro",
    },
    es: {
      buildsWipTitle: "En desarrollo",
      buildsWipBody: "Esta lista todavía se está preparando. Vuelve pronto.",
      buildsWipSub: "Aún no disponible",
      buildsWipFootNote:
        "Nota: esta sección está en desarrollo y aún no está terminada.",
      title: "Sitio web de Asaph10074",
      siteTitle: "Sitio web de Asaph10074",
      aboutMe: "Sobre mí",
      aboutText:
        "Soy Asaph10074. En 2026, me estoy centrando en Tecnología y computadoras.",
      mySkills: "Mis habilidades",
      skillAndroid: "Modificación del sistema Android",
      skillKotlin: "Multiboot de sistemas operativos",
      skillUI: "Ejecución de máquinas virtuales",
      skillUIDesign: "Diseño UI",
      skillRoot: "Root & ROM personalizada",
      skillWeb: "Desarrollo web",
      phoneCard: "UN1CA ROM personalizada en Samsung Galaxy A52s",
      musicTitle: "Reproductor de música (Vista previa)",
      musicArtist: "Música creada por:",
      download: "Descargar",
      youtubeChannel: "Canal de YouTube",
      youtube: "YouTube",
      youtubeDesc: "Suscríbete para ver los últimos videos",
      myChannel: "Mi canal",
      changelogTitle: "Registro de cambios",
      instagram: "Instagram",
      instagramDesc: "Sigue para actualizaciones",
      myInstagram: "Mi Instagram",
      threads: "Threads",
      threadsDesc: "Sigue mis hilos",
      myThreads: "Mis Threads",
      threadsChannel: "Perfil de Threads",
      reddit: "Reddit",
      redditDesc: "Únete a mi comunidad",
      myReddit: "Mi Reddit",
      redditChannel: "Perfil de Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Ver mis pines",
      myPinterest: "Mi Pinterest",
      pinterestChannel: "Perfil de Pinterest",
      github: "GitHub",
      githubDesc: "Ver mis repositorios",
      myGithub: "Mi GitHub",
      githubChannel: "Perfil de GitHub",
      x: "X (Twitter)",
      xDesc: "Sigue mis publicaciones",
      myX: "Mi X",
      xChannel: "Perfil de X",
      socialTitle: "Redes sociales",
      facebook: "Facebook",
      facebookDesc: "Sigue mi perfil",
      myFacebook: "Mi Facebook",
      scrollTop: "Desplazarse arriba",
      scrollBottom: "Desplazarse abajo",
      viewGallery: "Ver galería",
      clearSearch: "Limpiar",
      searchPlaceholder: "Buscar tarjetas...",
      switchLang: "Español",
      siteMotto: "Tecnología, Modding y Música",
      versionTitle: "Versión",
      noResults: "No se encontraron resultados",
      toastAudioError: "Error de reproducción de audio",
      toastPlaybackError: "Error de reproducción",
      toastNoDownload: "El archivo de audio no está disponible para descargar.",
      toastDownloadStarted: "¡Descarga iniciada!",
      toastPlaybackEnded: "Reproducción finalizada",
      toastWelcome: "¡Bienvenido al sitio web de Asaph10074!",
      toastBlockedPlayback:
        "El navegador bloqueó la reproducción. Haz clic de nuevo en el botón de reproducción.",
      toastPlaybackFailed: "Error en la reproducción: ",
      toastModeEnabled: "modo activado",
      toastTheme: "Tema: ",
      toastLightTheme: "Tema claro activado",
      toastDarkTheme: "Tema oscuro activado",
      toastUnknownError: "Error desconocido",
      toastLightThemeTitle: "Tema claro: ",
      toastDarkThemeTitle: "Tema oscuro: ",
      toastLightChangedMsg: "El tema fue cambiado al modo claro",
      toastDarkChangedMsg: "El tema fue cambiado al modo oscuro",
    },
    nl: {
      buildsWipTitle: "In ontwikkeling",
      buildsWipBody:
        "Deze lijst wordt nog samengesteld. Kom later nog eens kijken.",
      buildsWipSub: "Nog niet beschikbaar",
      buildsWipFootNote:
        "Let op: dit onderdeel is in wording en is nog niet af.",
      title: "De website van Asaph10074",
      siteTitle: "De website van Asaph10074",
      aboutMe: "Over mij",
      aboutText:
        "Ik ben Asaph10074. In 2026 focus ik op Technologie en computers.",
      mySkills: "Mijn vaardigheden",
      skillAndroid: "Android-systeem modden",
      skillKotlin: "Multiboot van besturingssystemen",
      skillUI: "Virtuele machines uitvoeren",
      skillUIDesign: "UI-ontwerp",
      skillRoot: "Rooten & aangepaste ROM",
      skillWeb: "Webontwikkeling",
      phoneCard: "UN1CA aangepaste ROM op Samsung Galaxy A52s",
      musicTitle: "Muziekspeler (Voorbeeld)",
      musicArtist: "Muziek gemaakt door:",
      download: "Downloaden",
      youtubeChannel: "YouTube-kanaal",
      youtube: "YouTube",
      youtubeDesc: "Abonneer voor nieuwste video's",
      myChannel: "Mijn kanaal",
      changelogTitle: "Wijzigingslogboek",
      instagram: "Instagram",
      instagramDesc: "Volg voor updates",
      myInstagram: "Mijn Instagram",
      threads: "Threads",
      threadsDesc: "Volg mijn threads",
      myThreads: "Mijn Threads",
      threadsChannel: "Threads-profiel",
      reddit: "Reddit",
      redditDesc: "Word lid van mijn community",
      myReddit: "Mijn Reddit",
      redditChannel: "Reddit-profiel",
      pinterest: "Pinterest",
      pinterestDesc: "Bekijk mijn pins",
      myPinterest: "Mijn Pinterest",
      pinterestChannel: "Pinterest-profiel",
      github: "GitHub",
      githubDesc: "Bekijk mijn repositories",
      myGithub: "Mijn GitHub",
      githubChannel: "GitHub-profiel",
      x: "X (Twitter)",
      xDesc: "Volg mijn berichten",
      myX: "Mijn X",
      xChannel: "X-profiel",
      socialTitle: "Sociale media",
      facebook: "Facebook",
      facebookDesc: "Volg mijn profiel",
      myFacebook: "Mijn Facebook",
      scrollTop: "Scroll naar boven",
      scrollBottom: "Scroll naar beneden",
      viewGallery: "Bekijk galerij",
      clearSearch: "Wissen",
      searchPlaceholder: "Zoek kaarten...",
      switchLang: "Nederlands",
      siteMotto: "Tech, Modding & Muziek",
      versionTitle: "Versie",
      noResults: "Geen resultaten gevonden",
      toastAudioError: "Audioweergavefout",
      toastPlaybackError: "Weergavefout",
      toastNoDownload: "Het audiobestand is niet beschikbaar om te downloaden.",
      toastDownloadStarted: "Download gestart!",
      toastPlaybackEnded: "Weergave beëindigd",
      toastWelcome: "Welkom op de website van Asaph10074!",
      toastBlockedPlayback:
        "De browser heeft de weergave geblokkeerd. Klik nogmaals op de afspeelknop.",
      toastPlaybackFailed: "Weergave mislukt: ",
      toastModeEnabled: "modus ingeschakeld",
      toastTheme: "Thema: ",
      toastLightTheme: "Licht thema ingeschakeld",
      toastDarkTheme: "Donker thema ingeschakeld",
      toastUnknownError: "Onbekende fout",
      toastLightThemeTitle: "Licht thema: ",
      toastDarkThemeTitle: "Donker thema: ",
      toastLightChangedMsg: "Het thema is gewijzigd naar de lichte modus",
      toastDarkChangedMsg: "Het thema is gewijzigd naar de donkere modus",
    },
    cs: {
      buildsWipTitle: "Probíhá vývoj",
      buildsWipBody:
        "Tento seznam se ještě skládá. Zkontrolujte ho prosím později.",
      buildsWipSub: "Zatím nedostupné",
      buildsWipFootNote:
        "Poznámka: tato sekce je v přípravě a ještě není dokončená.",
      title: "Web Asaph10074",
      siteTitle: "Web Asaph10074",
      aboutMe: "O mně",
      aboutText:
        "Jsem Asaph10074. V roce 2026 se zaměřuji na technologie a počítače.",
      mySkills: "Mé dovednosti",
      skillAndroid: "Úpravy systému Android",
      skillKotlin: "Multiboot operačních systémů",
      skillUI: "Spouštění virtuálních strojů",
      skillUIDesign: "UI design",
      skillRoot: "Rootování a vlastní ROM",
      skillWeb: "Webový vývoj",
      phoneCard: "UN1CA vlastní ROM na Samsung Galaxy A52s",
      musicTitle: "Přehrávač hudby (Náhled)",
      musicArtist: "Hudba vytvořena:",
      download: "Stáhnout",
      youtubeChannel: "YouTube kanál",
      youtube: "YouTube",
      youtubeDesc: "Odebírejte pro nejnovější videa",
      myChannel: "Můj kanál",
      changelogTitle: "Seznam změn",
      instagram: "Instagram",
      instagramDesc: "Sledujte pro aktualizace",
      myInstagram: "Můj Instagram",
      threads: "Threads",
      threadsDesc: "Sledujte má vlákna",
      myThreads: "Mé Threads",
      threadsChannel: "Profil Threads",
      reddit: "Reddit",
      redditDesc: "Připojte se k mé komunitě",
      myReddit: "Můj Reddit",
      redditChannel: "Profil Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Podívejte se na mé piny",
      myPinterest: "Můj Pinterest",
      pinterestChannel: "Profil Pinterest",
      github: "GitHub",
      githubDesc: "Zobrazit mé repozitáře",
      myGithub: "Můj GitHub",
      githubChannel: "Profil GitHub",
      x: "X (Twitter)",
      xDesc: "Sledujte mé příspěvky",
      myX: "Mé X",
      xChannel: "Profil X",
      socialTitle: "Sociální média",
      facebook: "Facebook",
      facebookDesc: "Sledujte můj profil",
      myFacebook: "Můj Facebook",
      scrollTop: "Posunout nahoru",
      scrollBottom: "Posunout dolů",
      viewGallery: "Zobrazit galerii",
      clearSearch: "Vymazat",
      searchPlaceholder: "Hledat karty...",
      switchLang: "Čeština",
      siteMotto: "Technologie, modding a hudba",
      versionTitle: "Verze",
      noResults: "Nebyly nalezeny žádné výsledky",
      toastAudioError: "Chyba přehrávání zvuku",
      toastPlaybackError: "Chyba přehrávání",
      toastNoDownload: "Zvukový soubor není k dispozici ke stažení.",
      toastDownloadStarted: "Stahování zahájeno!",
      toastPlaybackEnded: "Přehrávání ukončeno",
      toastWelcome: "Vítejte na webu Asaph10074!",
      toastBlockedPlayback:
        "Prohlížeč zablokoval přehrávání. Klikněte znovu na tlačítko přehrávání.",
      toastPlaybackFailed: "Přehrávání se nezdařilo: ",
      toastModeEnabled: "režim povolen",
      toastTheme: "Téma: ",
      toastLightTheme: "Světlý motiv povolen",
      toastDarkTheme: "Tmavý motiv povolen",
      toastUnknownError: "Neznámá chyba",
      toastLightThemeTitle: "Světlý motiv: ",
      toastDarkThemeTitle: "Tmavý motiv: ",
      toastLightChangedMsg: "Motiv byl změněn na světlý režim",
      toastDarkChangedMsg: "Motiv byl změněn na tmavý režim",
    },
    el: {
      buildsWipTitle: "Σε ανάπτυξη",
      buildsWipBody:
        "Αυτή η λίστα βρίσκεται ακόμη σε προετοιμασία. Ελέγξτε ξανά αργότερα.",
      buildsWipSub: "Δεν είναι διαθέσιμο ακόμη",
      buildsWipFootNote:
        "Σημείωση: αυτή η ενότητα είναι σε εξέλιξη και δεν έχει ολοκληρωθεί ακόμη.",
      title: "Ιστότοπος Asaph10074",
      siteTitle: "Ιστότοπος Asaph10074",
      aboutMe: "Σχετικά με μένα",
      aboutText:
        "Είμαι ο Asaph10074. Το 2026, επικεντρώνομαι στην Τεχνολογία και τους υπολογιστές.",
      mySkills: "Οι δεξιότητές μου",
      skillAndroid: "Τροποποίηση συστήματος Android",
      skillKotlin: "Πολλαπλή εκκίνηση λειτουργικών συστημάτων",
      skillUI: "Εκτέλεση εικονικών μηχανών",
      skillUIDesign: "Σχεδιασμός UI",
      skillRoot: "Root και Custom ROM",
      skillWeb: "Ανάπτυξη ιστού",
      phoneCard: "UN1CA Custom ROM σε Samsung Galaxy A52s",
      musicTitle: "Πρόγραμμα αναπαραγωγής μουσικής (Προεπισκόπηση)",
      musicArtist: "Μουσική από:",
      download: "Λήψη",
      youtubeChannel: "Κανάλι YouTube",
      youtube: "YouTube",
      youtubeDesc: "Εγγραφείτε για τα πιο πρόσφατα βίντεο",
      myChannel: "Το κανάλι μου",
      changelogTitle: "Αρχείο καταγραφής αλλαγών",
      instagram: "Instagram",
      instagramDesc: "Ακολουθήστε για ενημερώσεις",
      myInstagram: "Το Instagram μου",
      threads: "Threads",
      threadsDesc: "Ακολουθήστε τα νήματά μου",
      myThreads: "Τα Threads μου",
      threadsChannel: "Προφίλ Threads",
      reddit: "Reddit",
      redditDesc: "Γίνετε μέλος της κοινότητάς μου",
      myReddit: "Το Reddit μου",
      redditChannel: "Προφίλ Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Δείτε τους πίνακές μου",
      myPinterest: "Το Pinterest μου",
      pinterestChannel: "Προφίλ Pinterest",
      github: "GitHub",
      githubDesc: "Δείτε τα αποθετήριά μου",
      myGithub: "Το GitHub μου",
      githubChannel: "Προφίλ GitHub",
      x: "X (Twitter)",
      xDesc: "Ακολουθήστε τις αναρτήσεις μου",
      myX: "Το X μου",
      xChannel: "Προφίλ X",
      socialTitle: "Κοινωνικά μέσα",
      facebook: "Facebook",
      facebookDesc: "Ακολουθήστε το προφίλ μου",
      myFacebook: "Το Facebook μου",
      scrollTop: "Κύλιση προς τα πάνω",
      scrollBottom: "Κύλιση προς τα κάτω",
      viewGallery: "Προβολή γκαλερί",
      clearSearch: "Εκκαθάριση",
      searchPlaceholder: "Αναζήτηση καρτών...",
      switchLang: "Ελληνικά",
      siteMotto: "Τεχνολογία, Modding και Μουσική",
      versionTitle: "Έκδοση",
      noResults: "Δεν βρέθηκαν αποτελέσματα",
      toastAudioError: "Σφάλμα αναπαραγωγής ήχου",
      toastPlaybackError: "Σφάλμα αναπαραγωγής",
      toastNoDownload: "Το αρχείο ήχου δεν είναι διαθέσιμο για λήψη.",
      toastDownloadStarted: "Η λήψη ξεκίνησε!",
      toastPlaybackEnded: "Η αναπαραγωγή ολοκληρώθηκε",
      toastWelcome: "Καλώς ήρθατε στον ιστότοπο του Asaph10074!",
      toastBlockedPlayback:
        "Το πρόγραμμα περιήγησης μπλόκαρε την αναπαραγωγή. Κάντε ξανά κλικ στο κουμπί αναπαραγωγής.",
      toastPlaybackFailed: "Η αναπαραγωγή απέτυχε: ",
      toastModeEnabled: "λειτουργία ενεργοποιήθηκε",
      toastTheme: "Θέμα: ",
      toastLightTheme: "Ενεργοποιήθηκε το φωτεινό θέμα",
      toastDarkTheme: "Ενεργοποιήθηκε το σκούρο θέμα",
      toastUnknownError: "Άγνωστο σφάλμα",
      toastLightThemeTitle: "Φωτεινό θέμα: ",
      toastDarkThemeTitle: "Σκοτεινό θέμα: ",
      toastLightChangedMsg: "Το θέμα άλλαξε σε φωτεινή λειτουργία",
      toastDarkChangedMsg: "Το θέμα άλλαξε σε σκοτεινή λειτουργία",
    },
    hu: {
      buildsWipTitle: "Fejlesztés alatt",
      buildsWipBody: "Ez a lista még készül. Nézz vissza később.",
      buildsWipSub: "Még nem elérhető",
      buildsWipFootNote:
        "Megjegyzés: ez a rész fejlesztés alatt áll, még nem kész.",
      title: "Asaph10074 weboldala",
      siteTitle: "Asaph10074 weboldala",
      aboutMe: "Rólam",
      aboutText:
        "Asaph10074 vagyok. 2026-ban a technológiára és a számítógépekre összpontosítok.",
      mySkills: "Készségeim",
      skillAndroid: "Android rendszer módosítása",
      skillKotlin: "Többszörös rendszerindítás",
      skillUI: "Virtuális gépek futtatása",
      skillUIDesign: "UI-tervezés",
      skillRoot: "Root & egyedi ROM",
      skillWeb: "Webfejlesztés",
      phoneCard: "UN1CA egyedi ROM Samsung Galaxy A52s készüléken",
      musicTitle: "Zenelejátszó (Előnézet)",
      musicArtist: "Zene készítője:",
      download: "Letöltés",
      youtubeChannel: "YouTube csatorna",
      youtube: "YouTube",
      youtubeDesc: "Feliratkozás a legújabb videókhoz",
      myChannel: "Csatornám",
      changelogTitle: "Változásnapló",
      instagram: "Instagram",
      instagramDesc: "Kövess a frissítésekért",
      myInstagram: "Instagramom",
      threads: "Threads",
      threadsDesc: "Kövesd a szálaimat",
      myThreads: "Threadseim",
      threadsChannel: "Threads profil",
      reddit: "Reddit",
      redditDesc: "Csatlakozz közösségemhez",
      myReddit: "Redditem",
      redditChannel: "Reddit profil",
      pinterest: "Pinterest",
      pinterestDesc: "Nézd meg a pinjeimet",
      myPinterest: "Pinterestem",
      pinterestChannel: "Pinterest profil",
      github: "GitHub",
      githubDesc: "Tekintsd meg tárolóimat",
      myGithub: "GitHubom",
      githubChannel: "GitHub profil",
      x: "X (Twitter)",
      xDesc: "Kövesd bejegyzéseimet",
      myX: "X-em",
      xChannel: "X profil",
      socialTitle: "Közösségi média",
      facebook: "Facebook",
      facebookDesc: "Kövesd profilomat",
      myFacebook: "Facebookom",
      scrollTop: "Görgetés fel",
      scrollBottom: "Görgetés le",
      viewGallery: "Galéria megtekintése",
      clearSearch: "Törlés",
      searchPlaceholder: "Kártyák keresése...",
      switchLang: "Magyar",
      siteMotto: "Tech, modding és zene",
      versionTitle: "Verzió",
      noResults: "Nem található találat",
      toastAudioError: "Hiba a hang lejátszásakor",
      toastPlaybackError: "Lejátszási hiba",
      toastNoDownload: "A hangfájl nem tölthető le.",
      toastDownloadStarted: "Letöltés megkezdve!",
      toastPlaybackEnded: "A lejátszás véget ért",
      toastWelcome: "Üdvözlünk Asaph10074 weboldalán!",
      toastBlockedPlayback:
        "A böngésző letiltotta a lejátszást. Kattints újra a lejátszás gombra.",
      toastPlaybackFailed: "A lejátszás sikertelen: ",
      toastModeEnabled: "mód engedélyezve",
      toastTheme: "Téma: ",
      toastLightTheme: "Világos téma bekapcsolva",
      toastDarkTheme: "Sötét téma bekapcsolva",
      toastUnknownError: "Ismeretlen hiba",
      toastLightThemeTitle: "Világos téma: ",
      toastDarkThemeTitle: "Sötét téma: ",
      toastLightChangedMsg: "A téma világos módra változott",
      toastDarkChangedMsg: "A téma sötét módra változott",
    },
    id: {
      buildsWipTitle: "Sedang dikembangkan",
      buildsWipBody: "Daftar ini masih disusun. Silakan kembali lagi nanti.",
      buildsWipSub: "Belum tersedia",
      buildsWipFootNote:
        "Catatan: bagian ini sedang dikembangkan dan belum selesai.",
      title: "Situs Web Asaph10074",
      siteTitle: "Situs Web Asaph10074",
      aboutMe: "Tentang saya",
      aboutText:
        "Saya Asaph10074. Pada tahun 2026, saya fokus pada Teknologi dan komputer.",
      mySkills: "Keahlian saya",
      skillAndroid: "Modifikasi Sistem Android",
      skillKotlin: "Multibooting Sistem Operasi",
      skillUI: "Menjalankan Mesin Virtual",
      skillUIDesign: "Desain UI",
      skillRoot: "Root & ROM Kustom",
      skillWeb: "Pengembangan Web",
      phoneCard: "UN1CA ROM Kustom di Samsung Galaxy A52s",
      musicTitle: "Pemutar Musik (Pratinjau)",
      musicArtist: "Musik dibuat oleh:",
      download: "Unduh",
      youtubeChannel: "Saluran YouTube",
      youtube: "YouTube",
      youtubeDesc: "Berlangganan untuk video terbaru",
      myChannel: "Saluran saya",
      changelogTitle: "Catatan Perubahan",
      instagram: "Instagram",
      instagramDesc: "Ikuti untuk pembaruan",
      myInstagram: "Instagram saya",
      threads: "Threads",
      threadsDesc: "Ikuti thread saya",
      myThreads: "Threads saya",
      threadsChannel: "Profil Threads",
      reddit: "Reddit",
      redditDesc: "Bergabung dengan komunitas saya",
      myReddit: "Reddit saya",
      redditChannel: "Profil Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Lihat pin saya",
      myPinterest: "Pinterest saya",
      pinterestChannel: "Profil Pinterest",
      github: "GitHub",
      githubDesc: "Lihat repositori saya",
      myGithub: "GitHub saya",
      githubChannel: "Profil GitHub",
      x: "X (Twitter)",
      xDesc: "Ikuti postingan saya",
      myX: "X saya",
      xChannel: "Profil X",
      socialTitle: "Media Sosial",
      facebook: "Facebook",
      facebookDesc: "Ikuti profil saya",
      myFacebook: "Facebook saya",
      scrollTop: "Gulir ke atas",
      scrollBottom: "Gulir ke bawah",
      viewGallery: "Lihat galeri",
      clearSearch: "Hapus",
      searchPlaceholder: "Cari kartu...",
      switchLang: "Indonesia",
      siteMotto: "Teknologi, Modding & Musik",
      versionTitle: "Versi",
      noResults: "Tidak ada hasil ditemukan",
      toastAudioError: "Kesalahan pemutaran audio",
      toastPlaybackError: "Kesalahan pemutaran",
      toastNoDownload: "File audio tidak tersedia untuk diunduh.",
      toastDownloadStarted: "Unduhan dimulai!",
      toastPlaybackEnded: "Pemutaran selesai",
      toastWelcome: "Selamat datang di situs web Asaph10074!",
      toastBlockedPlayback:
        "Browser memblokir pemutaran. Klik lagi tombol putar.",
      toastPlaybackFailed: "Pemutaran gagal: ",
      toastModeEnabled: "mode diaktifkan",
      toastTheme: "Tema: ",
      toastLightTheme: "Mode terang diaktifkan",
      toastDarkTheme: "Mode gelap diaktifkan",
      toastUnknownError: "Kesalahan tidak diketahui",
      toastLightThemeTitle: "Tema terang: ",
      toastDarkThemeTitle: "Tema gelap: ",
      toastLightChangedMsg: "Tema diubah ke mode terang",
      toastDarkChangedMsg: "Tema diubah ke mode gelap",
    },
    pl: {
      buildsWipTitle: "W trakcie opracowywania",
      buildsWipBody: "Ta lista jest jeszcze tworzona. Zajrzyj tutaj później.",
      buildsWipSub: "Jeszcze niedostępne",
      buildsWipFootNote:
        "Uwaga: ta sekcja jest w trakcie opracowywania i nie jest jeszcze ukończona.",
      title: "Strona Asaph10074",
      siteTitle: "Strona Asaph10074",
      aboutMe: "O mnie",
      aboutText:
        "Jestem Asaph10074. W 2026 roku koncentruję się na technologii i komputerach.",
      mySkills: "Moje umiejętności",
      skillAndroid: "Modyfikacja systemu Android",
      skillKotlin: "Multibooting systemów operacyjnych",
      skillUI: "Uruchamianie maszyn wirtualnych",
      skillUIDesign: "Projektowanie UI",
      skillRoot: "Rootowanie i niestandardowe ROM",
      skillWeb: "Tworzenie stron internetowych",
      phoneCard: "UN1CA niestandardowy ROM na Samsung Galaxy A52s",
      musicTitle: "Odtwarzacz muzyki (Podgląd)",
      musicArtist: "Muzyka stworzona przez:",
      download: "Pobierz",
      youtubeChannel: "Kanał YouTube",
      youtube: "YouTube",
      youtubeDesc: "Subskrybuj po najnowsze filmy",
      myChannel: "Mój kanał",
      changelogTitle: "Dziennik zmian",
      instagram: "Instagram",
      instagramDesc: "Obserwuj po aktualizacje",
      myInstagram: "Mój Instagram",
      threads: "Threads",
      threadsDesc: "Obserwuj moje wątki",
      myThreads: "Moje Threads",
      threadsChannel: "Profil Threads",
      reddit: "Reddit",
      redditDesc: "Dołącz do mojej społeczności",
      myReddit: "Mój Reddit",
      redditChannel: "Profil Reddit",
      pinterest: "Pinterest",
      pinterestDesc: "Zobacz moje piny",
      myPinterest: "Mój Pinterest",
      pinterestChannel: "Profil Pinterest",
      github: "GitHub",
      githubDesc: "Zobacz moje repozytoria",
      myGithub: "Mój GitHub",
      githubChannel: "Profil GitHub",
      x: "X (Twitter)",
      xDesc: "Obserwuj moje posty",
      myX: "Mój X",
      xChannel: "Profil X",
      socialTitle: "Media społecznościowe",
      facebook: "Facebook",
      facebookDesc: "Obserwuj mój profil",
      myFacebook: "Mój Facebook",
      scrollTop: "Przewiń na górę",
      scrollBottom: "Przewiń na dół",
      viewGallery: "Zobacz galerię",
      clearSearch: "Wyczyść",
      searchPlaceholder: "Szukaj kart...",
      switchLang: "Polski",
      siteMotto: "Technologia, modding i muzyka",
      versionTitle: "Wersja",
      noResults: "Nie znaleziono wyników",
      toastAudioError: "Błąd odtwarzania dźwięku",
      toastPlaybackError: "Błąd odtwarzania",
      toastNoDownload: "Plik audio nie jest dostępny do pobrania.",
      toastDownloadStarted: "Pobieranie rozpoczęte!",
      toastPlaybackEnded: "Odtwarzanie zakończone",
      toastWelcome: "Witamy na stronie Asaph10074!",
      toastBlockedPlayback:
        "Przeglądarka zablokowała odtwarzanie. Kliknij ponownie przycisk odtwarzania.",
      toastPlaybackFailed: "Odtwarzanie nie powiodło się: ",
      toastModeEnabled: "tryb włączony",
      toastTheme: "Motyw: ",
      toastLightTheme: "Jasny motyw włączony",
      toastDarkTheme: "Ciemny motyw włączony",
      toastUnknownError: "Nieznany błąd",
      toastLightThemeTitle: "Jasny motyw: ",
      toastDarkThemeTitle: "Ciemny motyw: ",
      toastLightChangedMsg: "Motyw został zmieniony na tryb jasny",
      toastDarkChangedMsg: "Motyw został zmieniony na tryb ciemny",
    },
    sr: {
      buildsWipTitle: "U razvoju",
      buildsWipBody: "Ova lista se još sastavlja. Vratite se kasnije.",
      buildsWipSub: "Još nije dostupno",
      buildsWipFootNote: "Napomena: ovaj deo je u razvoju i još nije završen.",
      title: "Asaph10074-ov sajt",
      siteTitle: "Asaph10074-ov sajt",
      aboutMe: "O meni",
      aboutText:
        "Ja sam Asaph10074. U 2026. godini fokusiram se na tehnologiju i računare.",
      mySkills: "Moje veštine",
      skillAndroid: "Modifikovanje Android sistema",
      skillKotlin: "Multibuting operativnih sistema",
      skillUI: "Pokretanje virtuelnih mašina",
      skillUIDesign: "UI dizajn",
      skillRoot: "Rootovanje i prilagođeni ROM",
      skillWeb: "Web razvoj",
      phoneCard: "UN1CA prilagođeni ROM na Samsung Galaxy A52s",
      musicTitle: "Muzički plejer (Pregled)",
      musicArtist: "Muziku napravio:",
      download: "Preuzmi",
      youtubeChannel: "YouTube kanal",
      youtube: "YouTube",
      youtubeDesc: "Prijavite se za najnovije video snimke",
      myChannel: "Moj kanal",
      changelogTitle: "Dnevnik promena",
      instagram: "Instagram",
      instagramDesc: "Zapratite za ažuriranja",
      myInstagram: "Moj Instagram",
      threads: "Threads",
      threadsDesc: "Pratite moje teme",
      myThreads: "Moji Threads",
      threadsChannel: "Threads profil",
      reddit: "Reddit",
      redditDesc: "Pridružite se mojoj zajednici",
      myReddit: "Moj Reddit",
      redditChannel: "Reddit profil",
      pinterest: "Pinterest",
      pinterestDesc: "Pogledajte moje pinove",
      myPinterest: "Moj Pinterest",
      pinterestChannel: "Pinterest profil",
      github: "GitHub",
      githubDesc: "Pogledajte moje repozitorijume",
      myGithub: "Moj GitHub",
      githubChannel: "GitHub profil",
      x: "X (Twitter)",
      xDesc: "Pratite moje objave",
      myX: "Moj X",
      xChannel: "X profil",
      socialTitle: "Društvene mreže",
      facebook: "Facebook",
      facebookDesc: "Pratite moj profil",
      myFacebook: "Moj Facebook",
      scrollTop: "Pomeri se na vrh",
      scrollBottom: "Pomeri se na dno",
      viewGallery: "Pogledaj galeriju",
      clearSearch: "Obriši",
      searchPlaceholder: "Pretraži kartice...",
      switchLang: "Srpski",
      siteMotto: "Tehnologija, modding i muzika",
      versionTitle: "Verzija",
      noResults: "Nema rezultata",
      toastAudioError: "Greška pri reprodukciji zvuka",
      toastPlaybackError: "Greška pri reprodukciji",
      toastNoDownload: "Audio fajl nije dostupan za preuzimanje.",
      toastDownloadStarted: "Preuzimanje je počelo!",
      toastPlaybackEnded: "Reprodukcija je završena",
      toastWelcome: "Dobrodošli na Asaph10074 sajt!",
      toastBlockedPlayback:
        "Pregledač je blokirao reprodukciju. Kliknite ponovo na dugme za reprodukciju.",
      toastPlaybackFailed: "Reprodukcija nije uspela: ",
      toastModeEnabled: "režim je omogućen",
      toastTheme: "Tema: ",
      toastLightTheme: "Aktiviran svetli način",
      toastDarkTheme: "Aktiviran tamni način",
      toastUnknownError: "Nepoznata greška",
      toastLightThemeTitle: "Светла тема: ",
      toastDarkThemeTitle: "Тамна тема: ",
      toastLightChangedMsg: "Тема је промењена у светли режим",
      toastDarkChangedMsg: "Тема је промењена у тамни режим",
    },
  };
let currentLang = "en";
function t(e) {
  return (translations[currentLang] && translations[currentLang][e]) || "";
}
function applyTranslations(e) {
  ((currentLang = e),
    (document.documentElement.lang = e === "zh-TW" ? "zh-Hant" : e || "en"),
    document.querySelectorAll("[data-i18n]").forEach((o) => {
      const i = o.getAttribute("data-i18n");
      if (translations[e] && translations[e][i]) {
        o.hasAttribute("data-i18n-orig") ||
          o.setAttribute("data-i18n-orig", o.innerHTML);
        const s = o.getAttribute("data-i18n-orig") || "";
        let n = "";
        const r = s.match(/^\s*((<svg\b[^>]*>[\s\S]*?<\/svg>))\s*/);
        if (r) n = r[1] + " ";
        else {
          const c = s.match(
            /^\s*((?:(?:<(i|span|img)\b[^>]*>[\s\S]*?<\/\2>|<(?:i|span|img)\b[^>]*>)\s*)+)/,
          );
          if (c) n = c[1] + " ";
          else {
            const u = s.match(
              /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji})\s*/u,
            );
            u && (n = u[0]);
          }
        }
        o.innerHTML = n + translations[e][i];
      }
    }),
    document.querySelectorAll("[data-i18n-placeholder]").forEach((o) => {
      const i = o.getAttribute("data-i18n-placeholder");
      translations[e] &&
        translations[e][i] &&
        (o.placeholder = translations[e][i]);
    }));
  const a = document.getElementById("lang-switch");
  a &&
    (a.innerHTML =
      '<img class="lang-icon-aero" src="icons/netcenter_7-32.png" alt="" width="20" height="20"><img class="lang-icon-m3" src="icons/language_40dp_000000_FILL0_wght400_GRAD0_opsz40.png" alt="" width="20" height="20">');
}
function initLanguage() {
  const e = localStorage.getItem("lang") || "en";
  applyTranslations(e);
  const a = document.getElementById("lang-popup"),
    o = document.getElementById("lang-switch"),
    i = document.getElementById("lang-popup-close");
  function s(n) {
    document.querySelectorAll(".lang-option").forEach((r) => {
      r.classList.toggle("active", r.getAttribute("data-lang") === n);
    });
  }
  (s(e),
    o &&
      a &&
      o.addEventListener("click", (n) => {
        (n.stopPropagation(),
          a.classList.toggle("open"),
          o.classList.toggle("active", a.classList.contains("open")));
      }),
    document.querySelectorAll(".nav-open-lang").forEach((n) => {
      n.addEventListener("click", (r) => {
        (r.stopPropagation(),
          a &&
            (a.classList.toggle("open"),
            o && o.classList.toggle("active", a.classList.contains("open"))));
      });
    }),
    i &&
      a &&
      i.addEventListener("click", (n) => {
        (n.stopPropagation(),
          a.classList.remove("open"),
          o && o.classList.remove("active"));
      }),
    document.querySelectorAll(".lang-option").forEach((n) => {
      n.addEventListener("click", (r) => {
        r.stopPropagation();
        const c = n.getAttribute("data-lang");
        c &&
          translations[c] &&
          (applyTranslations(c),
          localStorage.setItem("lang", c),
          s(c),
          a && a.classList.remove("open"),
          showToast("" + translations[c].switchLang, "info"));
      });
    }),
    document.addEventListener("click", (n) => {
      a &&
        a.classList.contains("open") &&
        (n.target.closest("#lang-popup") ||
          n.target.closest("#lang-switch") ||
          n.target.closest(".nav-open-lang") ||
          (a.classList.remove("open"), o && o.classList.remove("active")));
    }));
}
const EP_SHOT_START = 6;
const EP_SHOT_COUNT = 2;
let activeImages = images,
  activeCaptions = captions;
function setGalleryScope(e) {
  e
    ? ((activeImages = images.slice(
        EP_SHOT_START,
        EP_SHOT_START + EP_SHOT_COUNT,
      )),
      (activeCaptions = captions.slice(
        EP_SHOT_START,
        EP_SHOT_START + EP_SHOT_COUNT,
      )))
    : ((activeImages = images.slice(0, EP_SHOT_START)),
      (activeCaptions = captions.slice(0, EP_SHOT_START)));
}
function openGalleryItem(e) {
  const a = e.classList.contains("ep-shot"),
    o = parseInt(e.getAttribute("data-index"), 10) || 0;
  (setGalleryScope(a), openModal(a ? o - EP_SHOT_START : o));
}
function preloadImages() {
  isPreloaded ||
    (images.forEach((e) => {
      new Image().src = e;
    }),
    (isPreloaded = !0));
}
function initGallery() {
  (document.querySelectorAll(".gallery-item-enhanced").forEach(function (e) {
    const a = document.createElement("div");
    ((a.className = "gallery-skeleton"), e.appendChild(a));
    const o = e.querySelector("img");
    (o &&
      (o.complete
        ? a.classList.add("loaded")
        : (o.addEventListener("load", function () {
            a.classList.add("loaded");
          }),
          o.addEventListener("error", function () {
            a.classList.add("loaded");
          }))),
      e.setAttribute("tabindex", "0"),
      e.setAttribute("role", "button"),
      e.setAttribute(
        "aria-label",
        "View " + (e.getAttribute("data-caption") || "gallery image"),
      ),
      e.addEventListener("click", function () {
        openGalleryItem(this);
      }),
      e.addEventListener("keydown", function (i) {
        (i.key === "Enter" || i.key === " ") &&
          (i.preventDefault(), openGalleryItem(this));
      }));
  }),
    document.querySelectorAll(".gallery-item").forEach(function (e) {
      const a = document.createElement("div");
      ((a.className = "gallery-skeleton"), e.appendChild(a));
      const o = e.querySelector("img");
      (o &&
        (o.complete
          ? a.classList.add("loaded")
          : (o.addEventListener("load", function () {
              a.classList.add("loaded");
            }),
            o.addEventListener("error", function () {
              a.classList.add("loaded");
            }))),
        e.addEventListener("click", function () {
          (setGalleryScope(!1),
            openModal(parseInt(this.getAttribute("data-index"))));
        }));
    }));
}
function generateThumbnails() {
  const e = document.getElementById("modal-thumbnails");
  e &&
    ((e.innerHTML = ""),
    activeImages.forEach(function (a, o) {
      const i = document.createElement("button");
      ((i.className = "modal-thumb"),
        i.setAttribute("aria-label", "View image " + (o + 1)),
        (i.onclick = function () {
          showImage(o);
        }));
      const s = document.createElement("img");
      ((s.src = a),
        (s.alt = activeCaptions[o] || "Thumbnail " + (o + 1)),
        (s.loading = "lazy"),
        i.appendChild(s),
        e.appendChild(i));
    }),
    updateThumbnails());
}
function updateThumbnails() {
  document.querySelectorAll(".modal-thumb").forEach(function (e, a) {
    e.classList.toggle("active", a === currentImageIndex);
  });
}
function showImage(e) {
  currentImageIndex = (e + activeImages.length) % activeImages.length;
  const a = document.getElementById("modal-img"),
    o = document.getElementById("modal-caption"),
    i = document.getElementById("modal-counter"),
    s = document.querySelector(".modal-image-loading");
  (s && s.classList.add("active"),
    (a.onerror = function () {
      ((this.onerror = null),
        (this.src =
          "data:image/svg+xml," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="#333"/><text x="50%" y="50%" font-family="Arial" fill="#999" font-size="14" text-anchor="middle" dy=".3em">Image not found</text></svg>',
          )),
        o && (o.textContent = "Image not available"),
        s && s.classList.remove("active"));
    }));
  const n = new Image();
  ((n.onload = function () {
    ((a.src = activeImages[currentImageIndex]),
      s && s.classList.remove("active"));
  }),
    (n.onerror = function () {
      (s && s.classList.remove("active"), a.onerror());
    }),
    (n.src = activeImages[currentImageIndex]),
    (a.alt = activeCaptions[currentImageIndex]),
    o && (o.textContent = activeCaptions[currentImageIndex]),
    i && (i.textContent = currentImageIndex + 1 + " / " + activeImages.length));
  const r = document.getElementById("prev-btn"),
    c = document.getElementById("next-btn"),
    u = currentImageIndex === 0,
    b = currentImageIndex === activeImages.length - 1;
  (r && r.classList.toggle("disabled", u),
    c && c.classList.toggle("disabled", b),
    r && r.setAttribute("aria-disabled", u ? "true" : "false"),
    c && c.setAttribute("aria-disabled", b ? "true" : "false"),
    r && (r.disabled = u),
    c && (c.disabled = b),
    updateThumbnails(),
    (a.style.transform = "scale(1)"));
}
function openModal(e) {
  preloadImages();
  const a = e,
    o = document.getElementById("modal-box");
  (document.body.classList.add("modal-open"),
    (o.style.display = "flex"),
    generateThumbnails(),
    showImage(a));
  const i = document.getElementById("lang-switch");
  i && (i.style.display = "none");
  const s = document.getElementById("lang-popup");
  s && s.classList.remove("open");
}
function changeImage(e) {
  showImage(currentImageIndex + e);
}
function closeModal() {
  ((document.getElementById("modal-box").style.display = "none"),
    document.body.classList.remove("modal-open"),
    (document.body.style.overflow = ""));
  const e = document.getElementById("lang-switch");
  e && (e.style.display = "");
  const a = document.getElementById("modal-img");
  a && (a.src = "");
}
function showToast(e, a = "info", o = 3e3, i = !1) {
  const s = document.getElementById("toast-container");
  if (!s) return;
  const n = document.createElement("div");
  ((n.className = "toast toast-" + a),
    i ? (n.innerHTML = e) : (n.textContent = e),
    s.appendChild(n),
    setTimeout(() => {
      (n.classList.add("toast-out"),
        setTimeout(() => {
          n.parentNode && n.parentNode.removeChild(n);
        }, 300));
    }, o));
}
function initMusicPlayer() {
  const e = document.getElementById("music-player-audio"),
    a = document.getElementById("audioPlayPause"),
    o = document.querySelector(".music-card"),
    i = o ? o.querySelector('[role="progressbar"] > div') : null,
    s = o ? o.querySelector(".current-time") : null,
    n = o ? o.querySelector(".total-time") : null,
    r = document.getElementById("volume-slider"),
    c = document.getElementById("download-btn"),
    u = o ? o.querySelector('[role="progressbar"]') : null,
    b = document.getElementById("audioBack"),
    f = document.getElementById("audioForward"),
    m = document.getElementById("audioPlayPauseImage"),
    h = document.getElementById("shuffle-btn"),
    p = document.getElementById("loop-btn"),
    T = document.getElementById("mp-jewel"),
    D = document.getElementById("mp-mode-label"),
    y = document.querySelector(".music-player");
  if (!e || !a) return;
  (a &&
    (a.setAttribute("aria-pressed", "false"),
    a.setAttribute("aria-label", "Play")),
    e.addEventListener("error", (l) => {
      console.error("Audio error:", e.error, "code:", e.error?.code);
      const d =
        {
          1: "MEDIA_ERR_ABORTED - Download was cancelled",
          2: "MEDIA_ERR_NETWORK - Network error while downloading",
          3: "MEDIA_ERR_DECODE - Audio decoding failed",
          4: "MEDIA_ERR_SRC_NOT_SUPPORTED - Song.mp3 not found or format not supported",
        }[e.error?.code] || t("toastUnknownError");
      (console.error("Audio error details:", d),
        (a.disabled = !0),
        (a.style.opacity = "0.5"),
        (a.style.cursor = "not-allowed"),
        (a.title = t("toastPlaybackError") + ": " + d),
        n && (n.textContent = "ERR"),
        s && (s.textContent = "ERR"),
        showToast("" + t("toastAudioError"), "error", 4e3));
    }),
    e.addEventListener("canplay", () => {
      (console.log("Audio can play, duration:", e.duration),
        (a.disabled = !1),
        (a.style.opacity = "1"),
        (a.style.cursor = "pointer"),
        n && (n.textContent = M(e.duration)));
    }),
    a.addEventListener("click", () => {
      if (e.paused) {
        const l = e.play();
        l !== void 0 &&
          l
            .then(() => {
              (a.classList.add("playing"),
                y && y.classList.add("playing"),
                a.setAttribute("aria-pressed", "true"),
                a.setAttribute("aria-label", "Pause"),
                m && (m.src = "/Images/music_player/music_player_pause.png"));
            })
            .catch((d) => {
              (console.error("Playback rejected:", d.name, d.message),
                showToast(
                  "" +
                    (d.name === "NotAllowedError"
                      ? t("toastBlockedPlayback")
                      : t("toastPlaybackFailed") + d.message),
                  "error",
                  4e3,
                ));
            });
      } else
        (e.pause(),
          a.classList.remove("playing"),
          y && y.classList.remove("playing"),
          a.setAttribute("aria-pressed", "false"),
          a.setAttribute("aria-label", "Play"),
          m && (m.src = "/Images/music_player/music_player_play.png"));
    }));
  let k = [
    {
      src: "Music Playlist/Chill%20Tech%20Vibes%202026.mp3",
      title: "The G key beat",
      filename: "Chill Tech Vibes 2026.mp3",
    },
    {
      src: "Music Playlist/The%20G%20key%20Beat%202.0.mp3",
      title: "The G key Beat 2.0",
      filename: "The G key Beat 2.0.mp3",
    },
    {
      src: "Music Playlist/Windows%207%20Remix.mp3",
      title: "Windows 7 Remix",
      filename: "Windows 7 Remix.mp3",
    },
  ];
  fetch("Music Playlist/playlist.json")
    .then((l) => {
      if (!l.ok) throw new Error("HTTP " + l.status);
      return l.json();
    })
    .then((l) => {
      const d = ((l && l.songs) || [])
        .filter((v) => v && v.file)
        .map((v) => ({
          src: "Music Playlist/" + encodeURIComponent(v.file),
          title: v.title || String(v.file).replace(/\.mp3$/i, ""),
          filename: v.file,
        }));
      d.length && ((k = d), C(0, !1));
    })
    .catch((l) => {
      console.warn("playlist.json not loaded, using built-in list:", l.message);
    });
  let g = 0;
  const w = o ? o.querySelector(".now-playing") : null;
  function A(l) {
    l
      ? (a.classList.add("playing"),
        y && y.classList.add("playing"),
        a.setAttribute("aria-pressed", "true"),
        a.setAttribute("aria-label", "Pause"),
        m && (m.src = "/Images/music_player/music_player_pause.png"))
      : (a.classList.remove("playing"),
        y && y.classList.remove("playing"),
        a.setAttribute("aria-pressed", "false"),
        a.setAttribute("aria-label", "Play"),
        m && (m.src = "/Images/music_player/music_player_play.png"));
  }
  function C(l, d) {
    g = ((l % k.length) + k.length) % k.length;
    const v = k[g];
    if (
      ((e.src = v.src),
      w && (w.textContent = v.title),
      i && (i.style.width = "0%"),
      s && (s.textContent = "0:00"),
      n && (n.textContent = "0:00"),
      u && u.setAttribute("aria-valuenow", "0"),
      d)
    ) {
      const S = e.play();
      S !== void 0 && S.then(() => A(!0)).catch(() => A(!1));
    } else A(!1);
  }
  function E(l) {
    C(g + l, !0);
  }
  ((window.__mp = {
    list: () => k.map((l) => ({ title: l.title || "", src: l.src || "" })),
    count: () => k.length,
    index: () => g,
    step: (l) => E(l),
  }),
    b && b.addEventListener("click", () => E(-1)),
    f && f.addEventListener("click", () => E(1)),
    p &&
      p.addEventListener("click", () => {
        ((e.loop = !e.loop),
          p.setAttribute("aria-pressed", e.loop ? "true" : "false"),
          showToast(e.loop ? "Loop on" : "Loop off", "info", 1500));
      }),
    h &&
      h.addEventListener("click", () => {
        const l = h.getAttribute("aria-pressed") !== "true";
        (h.setAttribute("aria-pressed", l ? "true" : "false"),
          showToast(l ? "Shuffle on" : "Shuffle off", "info", 1500));
      }),
    T &&
      T.addEventListener("click", () => {
        T.classList.toggle("cd-off");
      }));
  let L = 0;
  function M(l) {
    return !isFinite(l) || isNaN(l) || l <= 0
      ? "0:00"
      : `${Math.floor(l / 60)}:${Math.floor(l % 60)
          .toString()
          .padStart(2, "0")}`;
  }
  (e.addEventListener("timeupdate", () => {
    const l = performance.now();
    if (!(l - L < 100)) {
      if (((L = l), isFinite(e.duration) && e.duration > 0)) {
        const d = (e.currentTime / e.duration) * 100;
        ((i.style.width = d + "%"),
          u && u.setAttribute("aria-valuenow", Math.round(d)),
          (n.textContent = M(e.duration)),
          D && (D.textContent = "Time Left: " + M(e.duration - e.currentTime)));
      } else
        ((i.style.width = "0%"),
          u && u.setAttribute("aria-valuenow", "0"),
          (n.textContent = "0:00"),
          D && (D.textContent = "Time Left: 0:00"));
      s.textContent = M(e.currentTime);
    }
  }),
    u &&
      u.addEventListener("click", (l) => {
        if (!isFinite(e.duration) || e.duration <= 0) return;
        const d = u.getBoundingClientRect(),
          v = (l.clientX - d.left) / d.width;
        e.currentTime = v * e.duration;
      }),
    u &&
      (u.setAttribute("tabindex", "0"),
      u.addEventListener("keydown", (l) => {
        !isFinite(e.duration) ||
          e.duration <= 0 ||
          (l.key === "ArrowLeft"
            ? ((e.currentTime = Math.max(0, e.currentTime - 5)),
              l.preventDefault())
            : l.key === "ArrowRight" &&
              ((e.currentTime = Math.min(e.duration, e.currentTime + 5)),
              l.preventDefault()));
      })),
    r &&
      ((l) => {
        (l.addEventListener("input", () => {
          ((e.volume = l.value),
            l
              .closest(".volume-control")
              ?.classList.toggle("muted", +l.value == 0));
        }),
          l
            .closest(".volume-control")
            ?.classList.toggle("muted", +e.volume == 0));
      })(r),
    c &&
      (c.addEventListener("click", () => {
        const l = e.currentSrc || e.src;
        if (!l || e.error)
          return void showToast("" + t("toastNoDownload"), "error", 3e3);
        const d = document.createElement("a");
        ((d.href = l),
          (d.download = k[g].filename),
          document.body.appendChild(d),
          d.click(),
          document.body.removeChild(d),
          showToast("" + t("toastDownloadStarted"), "success", 2e3));
      }),
      c.setAttribute("aria-label", "Download audio")),
    e.addEventListener("ended", () => {
      (showToast("" + t("toastPlaybackEnded"), "info", 2e3), C(g + 1, !0));
    }));
  const P = document.querySelectorAll(".music-slide");
  if (P.length > 1) {
    let l = 0;
    setInterval(() => {
      const d = P[l];
      (d.classList.add("exit-left"),
        d.classList.remove("active"),
        (l = (l + 1) % P.length),
        P[l].classList.add("active"),
        setTimeout(() => {
          d.classList.remove("exit-left");
        }, 500));
    }, 5e3);
  }
}
const THEME_LIGHT_KEY = "theme";
function initTheme() {
  (localStorage.getItem("theme") || "dark") === "light"
    ? document.body.classList.add("light-mode")
    : document.body.classList.remove("light-mode");
  const e = document.getElementById("theme-toggle-nav");
  if (e) {
    let o = function (i) {
      const s = document.body.getAttribute("data-theme-style") || "aero",
        n = document.body.getAttribute("data-theme-color") || "blue",
        r = s === "frutiger" ? s + "-" + n : s;
      return r === "expressive"
        ? i
          ? '<img src="icons/dark_mode_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Dark M3'
          : '<img src="icons/light_mode_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Light M3'
        : r === "frutiger-green"
          ? i
            ? '<img src="icons/bq1cs5dru3eh55vko1ocjtl75m-5700faf19a8d83c6a8a5934c47278324.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Dark Frutiger Aero Green'
            : '<img src="icons/2bjr5vsecvqblh5fd2j480ab0m-550eb7eaa67f3705388ce8e86926693d.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Light Frutiger Aero Green'
          : r === "frutiger-blue"
            ? i
              ? '<img src="icons/windows-vista-microsoft-windows-windows-xp-operating-system-windows-vista-png-image-aca2b509794174c0865608d56548010e.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Dark Frutiger Aero Blue'
              : '<img src="icons/Windows_Aqua.webp" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Light Frutiger Aero Blue'
            : r === "skeuo"
              ? i
                ? '<img src="icons/skeuo-dark.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Dark Aero Skeuomorphism'
                : '<img src="icons/skeuo-light.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Light Aero Skeuomorphism'
              : i
                ? '<img src="icons/8sil1tc7h17gm6lqdnvfq7l429-60430741bc79bdf5f082c9779c34a117.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb theme-toggle-icon-orb-dark" width="16" height="16" decoding="async">Dark Aero'
                : '<img src="icons/7ghqebv49qe5r2isc1fto4kd15-609f802a1ab8135d61445277298fac2d.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Light Aero';
    };
    var a = o;
    ((e.innerHTML = o(document.body.classList.contains("light-mode"))),
      e.addEventListener("click", function (i) {
        (i.stopPropagation(), document.body.classList.toggle("light-mode"));
        const s = document.body.classList.contains("light-mode"),
          n = e.querySelector("img");
        ((e.innerHTML = o(s)),
          localStorage.setItem("theme", s ? "light" : "dark"),
          updateProfilePicture(),
          showToast(
            t("toastTheme") +
              (n ? n.outerHTML : "") +
              " " +
              t(s ? "toastLightChangedMsg" : "toastDarkChangedMsg"),
            "info",
            2e3,
            !0,
          ));
      }));
  }
}
function updateProfilePicture() {
  const e = document.getElementById("header-avatar"),
    a = document.getElementById("about-avatar"),
    o = document.body.classList.contains("light-mode")
      ? "Images/My profile picture (Light).webp"
      : "Images/My profile picture (Dark).webp";
  (e && (e.src = o), a && (a.src = o));
}
function initNav() {
  const e = document.getElementById("hamburger-btn"),
    a = document.getElementById("nav-panel");
  e &&
    a &&
    (e.addEventListener("click", function (o) {
      (o.stopPropagation(),
        e.classList.toggle("open"),
        a.classList.toggle("open"));
    }),
    document.addEventListener("click", function (o) {
      o.target.closest(".bottom-nav") ||
        o.target.closest("select") ||
        (e.classList.remove("open"), a.classList.remove("open"));
    }),
    a.querySelectorAll(".nav-panel-btn").forEach(function (o) {
      o.addEventListener("click", function (i) {
        i.stopPropagation();
        const s = this.getAttribute("data-action");
        (s === "scroll-top"
          ? window.scrollTo({ top: 0, behavior: "smooth" })
          : s === "scroll-bottom" &&
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            }),
          closeNav());
      });
    }));
}
function closeNav() {
  const e = document.getElementById("hamburger-btn"),
    a = document.getElementById("nav-panel");
  (e && e.classList.remove("open"), a && a.classList.remove("open"));
}
function initThemeOptions() {
  const e =
      document.body.getAttribute("data-theme-style") ||
      localStorage.getItem("theme-style-v2") ||
      "aero",
    a =
      document.body.getAttribute("data-theme-color") ||
      localStorage.getItem("theme-color-v2") ||
      "blue";
  (document.body.setAttribute("data-theme-style", e),
    document.body.setAttribute("data-theme-color", a),
    loadThemeCSS(e));
  const o = document.querySelector(".dropdown-wrap button.theme-opt");
  if (o) {
    const s = o.closest(".dropdown-wrap");
    let n =
      s.querySelector('[data-value="' + e + "-" + a + '"]') ||
      s.querySelector('[data-value="' + e + '"]') ||
      s.querySelector('[data-value^="' + e + '-"]');
    n &&
      ((o.innerHTML = n.innerHTML),
      o.setAttribute("aria-pressed", "true"),
      s.querySelectorAll("[data-value]").forEach((r) => {
        r.setAttribute("aria-pressed", "false");
      }),
      n.setAttribute("aria-pressed", "true"));
  }
  function i() {
    document.querySelectorAll(".dropdown-wrap.open").forEach(function (s) {
      s.classList.remove("open");
    });
  }
  (document
    .querySelectorAll(".dropdown-wrap button.theme-opt")
    .forEach(function (s) {
      s.addEventListener("click", function (n) {
        n.stopPropagation();
        const r = this.closest(".dropdown-wrap"),
          c = r.classList.contains("open");
        (i(), c || r.classList.add("open"));
      });
    }),
    document
      .querySelectorAll(
        ".dropdown-wrap .dropdown-list [role=menuitem] > button",
      )
      .forEach(function (s) {
        s.addEventListener("click", function (n) {
          n.stopPropagation();
          const r = this.closest(".dropdown-wrap"),
            c = r.querySelector("button.theme-opt"),
            u = this.getAttribute("data-value");
          ((c.innerHTML = this.innerHTML), r.classList.remove("open"));
          var b, f;
          ((function (m) {
            let h, p;
            if (m === "expressive" || m === "skeuo") ((h = m), (p = "blue"));
            else {
              const g = m.indexOf("-");
              g > 0
                ? ((h = m.substring(0, g)), (p = m.substring(g + 1)))
                : ((h = m), (p = "blue"));
            }
            (document.body.setAttribute("data-theme-style", h),
              document.body.setAttribute("data-theme-color", p),
              localStorage.setItem("theme-style-v2", h),
              localStorage.setItem("theme-color-v2", p),
              loadThemeCSS(h));
            const T = document.querySelector(".dropdown-wrap button.theme-opt");
            if (T) {
              const g = T.closest(".dropdown-wrap"),
                w =
                  g.querySelector('[data-value="' + h + "-" + p + '"]') ||
                  g.querySelector('[data-value="' + h + '"]') ||
                  g.querySelector('[data-value^="' + h + '-"]');
              w &&
                ((T.innerHTML = w.innerHTML),
                T.setAttribute("aria-pressed", "true"),
                T.closest(".dropdown-wrap")
                  .querySelectorAll("[data-value]")
                  .forEach((A) => {
                    A.setAttribute("aria-pressed", "false");
                  }),
                w.setAttribute("aria-pressed", "true"));
            }
            const D = document.getElementById("theme-toggle-nav");
            if (D) {
              const g = document.body.classList.contains("light-mode"),
                w = h === "frutiger" ? h + "-" + p : h;
              D.innerHTML =
                w === "expressive"
                  ? g
                    ? '<img src="icons/dark_mode_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Dark M3'
                    : '<img src="icons/light_mode_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Light M3'
                  : w === "frutiger-green"
                    ? g
                      ? '<img src="icons/bq1cs5dru3eh55vko1ocjtl75m-5700faf19a8d83c6a8a5934c47278324.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Dark Frutiger Aero Green'
                      : '<img src="icons/2bjr5vsecvqblh5fd2j480ab0m-550eb7eaa67f3705388ce8e86926693d.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Light Frutiger Aero Green'
                    : w === "frutiger-blue"
                      ? g
                        ? '<img src="icons/windows-vista-microsoft-windows-windows-xp-operating-system-windows-vista-png-image-aca2b509794174c0865608d56548010e.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Dark Frutiger Aero Blue'
                        : '<img src="icons/Windows_Aqua.webp" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Light Frutiger Aero Blue'
                      : w === "skeuo"
                        ? g
                          ? '<img src="icons/skeuo-dark.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Dark Aero Skeuomorphism'
                          : '<img src="icons/skeuo-light.svg" alt="" class="theme-toggle-icon" width="16" height="16" decoding="async">Light Aero Skeuomorphism'
                        : g
                          ? '<img src="icons/8sil1tc7h17gm6lqdnvfq7l429-60430741bc79bdf5f082c9779c34a117.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb theme-toggle-icon-orb-dark" width="16" height="16" decoding="async">Dark Aero'
                          : '<img src="icons/7ghqebv49qe5r2isc1fto4kd15-609f802a1ab8135d61445277298fac2d.png" alt="" class="theme-toggle-icon theme-toggle-icon-orb" width="16" height="16" decoding="async">Light Aero';
            }
            const y =
                {
                  aero: "Aero",
                  "aero-blue": "Aero Blue",
                  "aero-green": "Aero Green",
                  "aero-purple": "Aero Purple",
                  "aero-red": "Aero Red",
                  "aero-orange": "Aero Orange",
                  "aero-yellow": "Google Yellow",
                  "aero-teal": "Aero Teal",
                  "aero-dark-blue":
                    '<img src="icons/m3.svg" alt="" class="toast-icon" width="16" height="16" decoding="async">Dark Blue',
                  "frutiger-blue":
                    '<img src="icons/Blackcomb_7000_orb.webp" alt="" class="toast-icon" width="16" height="16" decoding="async">Frutiger Aero Blue',
                  "frutiger-green":
                    '<img src="icons/Blackcomb_regular.webp" alt="" class="toast-icon" width="16" height="16" decoding="async">Frutiger Aero Green',
                  skeuo:
                    '<img src="icons/aero-skeuo.svg" alt="" class="toast-icon" width="16" height="16" decoding="async">Aero Skeuomorphism',
                  "skeuo-blue": "Skeuomorphism Blue",
                  "skeuo-brown": "Skeuomorphism Brown",
                  "expressive-blue":
                    '<img src="icons/m3.svg" alt="" class="toast-icon" width="16" height="16" decoding="async">Material 3 expressive',
                  "expressive-red": "Material 3 expressive",
                  "expressive-yellow": "Material 3 expressive",
                  "expressive-green": "Material 3 expressive",
                  "expressive-purple": "Material 3 expressive",
                  "expressive-dark-blue":
                    '<img src="icons/m3.svg" alt="" class="toast-icon" width="16" height="16" decoding="async">Material 3 expressive',
                  expressive: "Material 3 Expressive",
                }[m] || m,
              k = (
                m.indexOf("frutiger") === 0
                  ? y
                  : y.replace(
                      /\s+(Blue|Green|Purple|Red|Orange|Yellow|Teal|Brown)$/,
                      "",
                    )
              ).replace(/^<img[^>]*>/, "");
            (showToast(
              t("toastTheme") +
                (h === "aero"
                  ? '<img src="icons/not_found_by_epikboy96_df41by5-pre.webp" alt="" class="toast-icon" width="16" height="16" decoding="async"> '
                  : h === "frutiger"
                    ? '<img src="icons/Blackcomb_7000_orb.webp" alt="" class="toast-icon" width="16" height="16" decoding="async"> '
                    : h === "skeuo"
                      ? '<img src="icons/aero-skeuo.svg" alt="" class="toast-icon" width="16" height="16" decoding="async"> '
                      : '<img src="icons/m3.svg" alt="" class="toast-icon" width="16" height="16" decoding="async"> ') +
                k,
              "info",
              2e3,
              !0,
            ),
              initSkillBars(),
              initWindowsIsoCard());
          })((b = u)),
            closeNav());
        });
      }),
    document.addEventListener("click", function (s) {
      s.target.closest(".dropdown-wrap") || i();
    }));
}
function ensureThemeLink(e, a, o) {
  let i = document.getElementById(e);
  o
    ? (i ||
        ((i = document.createElement("link")),
        (i.id = e),
        (i.rel = "stylesheet"),
        (i.href = a),
        document.head.appendChild(i)),
      i.setAttribute("media", "all"))
    : i && i.setAttribute("media", "none");
}
function loadThemeCSS(e) {
  const a =
    document.getElementById("w7css-theme") ||
    document.querySelector('link[href*="7.css"]');
  (a && a.setAttribute("media", e === "expressive" ? "none" : "all"),
    ensureThemeLink(
      "theme-expressive-css",
      "Styles/theme-expressive.css?v=1e087b67",
      e === "expressive",
    ),
    ensureThemeLink(
      "theme-skeuo-css",
      "Styles/theme-skeuo.css?v=48bb0d7a",
      e === "skeuo",
    ),
    ensureThemeLink(
      "theme-frutiger-css",
      "Styles/theme-frutiger.css?v=25b8225a",
      e === "frutiger",
    ));
}
function initLightboxKeyboardNav() {
  document.addEventListener("keydown", function (e) {
    document.getElementById("modal-box").style.display === "flex" &&
      (e.key === "ArrowLeft"
        ? (e.preventDefault(), changeImage(-1))
        : e.key === "ArrowRight"
          ? (e.preventDefault(), changeImage(1))
          : e.key === "Escape" && closeModal());
  });
}
function initGallerySwipe() {
  const e = document.getElementById("modal-box");
  if (!e) return;
  let a = 0,
    o = 0,
    i = !1;
  (e.addEventListener(
    "touchstart",
    function (b) {
      ((a = b.changedTouches[0].screenX), (i = !0));
    },
    { passive: !0 },
  ),
    e.addEventListener(
      "touchmove",
      function (b) {
        i && (o = b.changedTouches[0].screenX);
      },
      { passive: !0 },
    ),
    e.addEventListener(
      "touchend",
      function (b) {
        if (!i) return;
        i = !1;
        const f = a - o;
        Math.abs(f) > 50 && changeImage(f > 0 ? 1 : -1);
      },
      { passive: !0 },
    ));
  const s = document.querySelector(".gallery-card-enhanced");
  if (!s) return;
  const n = s.querySelector(".image-gallery-enhanced");
  if (!n) return;
  let r = 0,
    c = 0,
    u = !1;
  (n.addEventListener(
    "touchstart",
    function (b) {
      ((r = b.changedTouches[0].screenX), (u = !0));
    },
    { passive: !0 },
  ),
    n.addEventListener(
      "touchmove",
      function (b) {
        u && (c = b.changedTouches[0].screenX);
      },
      { passive: !0 },
    ),
    n.addEventListener(
      "touchend",
      function (b) {
        if (!u) return;
        u = !1;
        const f = r - c;
        if (Math.abs(f) > 80) {
          if (
            Array.from(n.querySelectorAll(".gallery-item-enhanced")).length ===
            0
          )
            return;
          const m = b.changedTouches[0],
            h = document.elementFromPoint(m.clientX, m.clientY),
            p = h ? h.closest(".gallery-item-enhanced") : null;
          if (p) {
            const T = parseInt(p.getAttribute("data-index")),
              D = p.classList.contains("ep-shot"),
              y = D ? EP_SHOT_START : 0;
            setGalleryScope(D);
            let k;
            ((k =
              f > 0
                ? (T - y + 1) % activeImages.length
                : (T - y - 1 + activeImages.length) % activeImages.length),
              openModal(k));
          }
        }
      },
      { passive: !0 },
    ));
}
function initMusicKeyboardShortcuts() {
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    const a = document.getElementById("music-player-audio"),
      o = document.getElementById("audioPlayPause");
    a &&
      o &&
      ((e.key !== " " && e.key !== "Space") || (e.preventDefault(), o.click()));
  });
}
function initSkillBars() {
  requestAnimationFrame(() => {
    document
      .querySelectorAll('.skills-list .win7 [role="progressbar"] > div')
      .forEach((e) => {
        (e.classList.remove("pop"), e.offsetWidth, e.classList.add("pop"));
      });
  });
}
function initWindowsIsoCard() {
  const e = document.getElementById("copy-iso-code-btn"),
    a = document.getElementById("iso-console-code");
  if (
    (a &&
      (a.addEventListener("focus", function () {
        a.select();
      }),
      a.addEventListener("click", function () {
        a.select();
      })),
    e && a)
  ) {
    const o = e.textContent;
    e.addEventListener("click", function () {
      const i = a.value || "",
        s = function () {
          (a.focus(), a.select());
          try {
            document.execCommand("copy");
          } catch {}
        };
      (navigator.clipboard && window.isSecureContext
        ? navigator.clipboard.writeText(i).catch(s)
        : s(),
        (e.textContent = "Copied!"),
        setTimeout(function () {
          e.textContent = o;
        }, 1800));
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  (document
    .querySelectorAll("[data-i18n-orig]")
    .forEach((i) => i.removeAttribute("data-i18n-orig")),
    initLanguage(),
    initThemeOptions(),
    initTheme(),
    initNav(),
    initGallery(),
    initMusicPlayer(),
    initLightboxKeyboardNav(),
    initGallerySwipe(),
    initMusicKeyboardShortcuts(),
    initSkillBars(),
    updateProfilePicture(),
    document.addEventListener("keydown", function (i) {
      i.key === "Escape" && closeModal();
    }),
    setTimeout(function () {
      const i = document.body.getAttribute("data-theme-style");
      showToast(
        (i === "expressive"
          ? '<img src="icons/person_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg" alt="" class="toast-icon toast-icon-welcome-m3" width="16" height="16" decoding="async">'
          : '<img src="icons/imageres_1029.ico" alt="" class="toast-icon" width="16" height="16" decoding="async">') +
          t("toastWelcome"),
        "info",
        3e3,
        !0,
      );
    }, 500));
  let e = window.scrollY,
    a = !1;
  const o = document.querySelector(".site-header");
  o &&
    window.addEventListener(
      "scroll",
      function () {
        a ||
          (requestAnimationFrame(function () {
            const i = window.scrollY;
            (i > e && i > 80
              ? o.classList.add("header-hidden")
              : o.classList.remove("header-hidden"),
              (e = i),
              (a = !1));
          }),
          (a = !0));
      },
      { passive: !0 },
    );
});
