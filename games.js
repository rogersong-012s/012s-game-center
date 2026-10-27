// 分類顯示順序以這個陣列為準。
// id 是程式使用的代號；name 是網站上顯示的分類名稱。
const categories = [
  { 
    id: "Albert",
    name: "Albert 的遊戲"
  },
  {
    id: "Shark",
    name: "Shark 的遊戲"
  },
  {
    id: "Roger",
    name: "Roger 的遊戲"
  },
  {
    id: "Henry",
    name: 'Henry 的遊戲'
  },
  {
    id: "Frank",
    name: "Frank 的遊戲"
  }
];

// 新增遊戲時，只要依照相同格式把新資料加進這個陣列即可。
// category 必須對應上方某個分類的 id。
const games = [
  {
    name: "水母記憶遊戲",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/jellyfish-memory/",
    image: ""
  },
  {
    name: "消失的格子",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/The-disappearing-grid/",
    image: ""
  },
  {
    name: "數字瞬間記憶",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/jellyfish-memory/",
    image: ""
  },
  {
    name: "色彩敏感度測試",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/color-sensitivity-test/",
    image: ""
  },
    {
    name: "顏色排序遊戲",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/Color-Sorting-Game/",
    image: ""
  },
  {
    name: "1秒鐘到底有多長",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/time-test-game/",
    image: ""
  },
  {
    name: "Stroop 顏色衝突",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/stroop-game/",
    image: ""
  },
  {
    name: "一刀切",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/one-cut-game/",
    image: ""
  },
  {
    name: "數之背包",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/back/",
    image: ""
  },
  {
    name: "藍點倉庫 · BLUE DOT WAREHOUSE",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/BLUE-DOT-WAREHOUSE/",
    image: ""
  },
  {
    name: "水母下樓梯",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/jellyfish-going-down-the-stairs/",
    image: ""
  },
  {
    name: "甜甜菜菜子可可飲｜集章活動",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/Stamp-Rally-cocoa/",
    image: ""
  },
  {
    name: "Blackjack 21 點",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/blackjack-game/",
    image: ""
  },
  {
    name: "水母打磚塊",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/block-breaker/",
    image: ""
  },
  {
    name: "任務績效填寫系統",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/task-performance-report/",
    image: ""
  },
  {
    name: "每日會議紀錄線上版",
    category: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/meeting_minutes/",
    image: ""
  },
  {
    name: "012S Jelly World 水母世界",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-world/",
    image: ""
  },
    {
    name: "Jelly Rescue 小水母救援任務",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-rescue/",
    image: ""
  },
    {
    name: "水母養成所 Jelly Lab",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/jelly-lab-mvp/",
    image: ""
  },
    {
    name: "水母破陣",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-breakers/",
    image: ""
  },
    {
    name: "Jelly Sudoku 水母數獨",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-sudoku/",
    image: ""
  },
    {
    name: "Jelly Untangle 水母解結",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-untangle/",
    image: ""
  },
    {
    name: "Jelly Color Test 色彩辨識測驗",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-color-test/",
    image: ""
  },
    {
    name: "每日幸運拉霸",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-slot-game/",
    image: ""
  },
    {
    name: "Jelly Chain 連鎖實驗室",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-chain-game/",
    image: ""
  },
  {
    name: "012S 配對所",
    category: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-card-game/",
    image: ""
  },
  {
    name: "DDM 精華戰：精華合成",
    category: "Roger",
    description: "",
    url: "https://rogersong-012s.github.io/ddm-essence-boss-battle-game/",
    image: ""
  },
  {
    name: "我被色記了",
    category: "Roger",
    description: "",
    url: "https://rogersong-012s.github.io/hue-set-me-up/",
    image: ""
  },
  {
    name: "提燈生存遊戲",
    category: "Henry",
    description: "",
    url: "https://henrysun-code.github.io/Lantern-Survival-Game/",
    image: ""
  }, 
  {
    name: "反應速度測試",
    category: "Henry",
    description: "",
    url: "https://henrysun-code.github.io/reaction-speed-test/",
    image: ""
  },
  {
    name: "免費長輩圖與水母祝福圖庫",
    category: "Frank",
    description: "",
    url: "https://frankchu-012s.github.io/easy-pic-preview/hi/cards/",
    image: ""
  }
];
