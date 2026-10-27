// 分類顯示順序以這個陣列為準。工具依 category 分組，遊戲依 author 分組。
const categories = [
  {
    id: "Tools",
    name: "工具"
  },
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
  }
];

// 新增遊戲時，只要依照相同格式把新資料加進這個陣列即可。
// category 必須對應上方某個分類的 id。
const games = [
  {
    name: "水母記憶遊戲",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/jellyfish-memory/",
    image: ""
  },
  {
    name: "消失的格子",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/The-disappearing-grid/",
    image: ""
  },
  {
    name: "數字瞬間記憶",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/jellyfish-memory/",
    image: ""
  },
  {
    name: "色彩敏感度測試",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/color-sensitivity-test/",
    image: ""
  },
    {
    name: "顏色排序遊戲",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/Color-Sorting-Game/",
    image: ""
  },
  {
    name: "1秒鐘到底有多長",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/time-test-game/",
    image: ""
  },
  {
    name: "Stroop 顏色衝突",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/stroop-game/",
    image: ""
  },
  {
    name: "一刀切",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/one-cut-game/",
    image: ""
  },
  {
    name: "數之背包",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/back/",
    image: ""
  },
  {
    name: "藍點倉庫 · BLUE DOT WAREHOUSE",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/BLUE-DOT-WAREHOUSE/",
    image: ""
  },
  {
    name: "水母下樓梯",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/jellyfish-going-down-the-stairs/",
    image: ""
  },
  {
    name: "甜甜菜菜子可可飲｜集章活動",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/Stamp-Rally-cocoa/",
    image: ""
  },
  {
    name: "Blackjack 21 點",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/blackjack-game/",
    image: ""
  },
  {
    name: "水母打磚塊",
    author: "Shark",
    description: "",
    url: "https://sharkwang0903.github.io/block-breaker/",
    image: ""
  },
  {
    name: "任務績效填寫系統",
    category: "Tools",
    description: "作者：Shark",
    url: "https://sharkwang0903.github.io/task-performance-report/",
    image: ""
  },
  {
    name: "每日會議紀錄線上版",
    category: "Tools",
    description: "作者：Shark",
    url: "https://sharkwang0903.github.io/meeting_minutes/",
    image: ""
  },
  {
    name: "012S Jelly World 水母世界",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-world/",
    image: ""
  },
    {
    name: "Jelly Rescue 小水母救援任務",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-rescue/",
    image: ""
  },
    {
    name: "水母養成所 Jelly Lab",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/jelly-lab-mvp/",
    image: ""
  },
    {
    name: "水母破陣",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-breakers/",
    image: ""
  },
    {
    name: "Jelly Sudoku 水母數獨",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-sudoku/",
    image: ""
  },
    {
    name: "Jelly Untangle 水母解結",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-untangle/",
    image: ""
  },
    {
    name: "Jelly Color Test 色彩辨識測驗",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-color-test/",
    image: ""
  },
    {
    name: "每日幸運拉霸",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-slot-game/",
    image: ""
  },
    {
    name: "Jelly Chain 連鎖實驗室",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-jelly-chain-game/",
    image: ""
  },
  {
    name: "012S 配對所",
    author: "Albert",
    description: "",
    url: "https://alberthuang-012s.github.io/012s-card-game/",
    image: ""
  },
  {
    name: "DDM 精華戰：精華合成",
    author: "Roger",
    description: "",
    url: "https://rogersong-012s.github.io/ddm-essence-boss-battle-game/",
    image: ""
  },
  {
    name: "我被色記了",
    author: "Roger",
    description: "",
    url: "https://rogersong-012s.github.io/hue-set-me-up/",
    image: ""
  },
  {
    name: "提燈生存遊戲",
    author: "Henry",
    description: "",
    url: "https://henrysun-code.github.io/Lantern-Survival-Game/",
    image: ""
  }, 
  {
    name: "反應速度測試",
    author: "Henry",
    description: "",
    url: "https://henrysun-code.github.io/reaction-speed-test/",
    image: ""
  },
  {
    name: "免費長輩圖與水母祝福圖庫",
    category: "Tools",
    description: "作者：Frank",
    url: "https://frankchu-012s.github.io/easy-pic-preview/hi/cards/",
    image: ""
  }
];
