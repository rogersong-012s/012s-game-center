# 012S 小遊戲中心

本網站以本團隊成員 Shark 製作的 [Shark's Game Lab](https://sharkwang0903.github.io/shark-game-lab/) 為模板，整理並展示 012S 團隊成員製作的小遊戲與互動作品。首頁依製作者分類呈現遊戲卡片，點選卡片即可在新分頁開啟遊戲。

網站使用原生 HTML、CSS 和 JavaScript 製作。遊戲清單與分類集中在 `games.js`，新增或更新作品時，通常只需要編輯這個檔案。

## 專案檔案

```text
012s-game-center/
├── index.html   # 網頁結構與標題
├── style.css    # 視覺樣式及不同螢幕尺寸的排版
├── games.js     # 分類和遊戲資料
├── script.js    # 根據資料產生分類區塊及遊戲卡片
├── assets/      # 圖片等網站素材
└── README.md    # 專案說明
```

## 在本機瀏覽

用瀏覽器開啟專案根目錄中的 `index.html`，即可查看遊戲清單。修改並儲存檔案後，重新整理頁面即可看到更新。

## 新增或修改遊戲

在 `games.js` 的 `games` 陣列中新增一筆資料，或修改既有項目：

```js
{
  name: "新遊戲名稱",
  category: "Roger",
  description: "用一句話介紹這款遊戲。",
  url: "https://example.com/my-game/",
  image: ""
}
```

- `name`：遊戲卡片上的名稱。
- `category`：分類代碼，須與 `categories` 中某個 `id` 完全相同，包含大小寫。
- `description`：遊戲簡介；沒有簡介時可填空字串 `""`。
- `url`：遊戲網址。
- `image`：預覽圖片路徑；沒有圖片時填空字串 `""`。

遊戲卡片會依照 `games` 陣列的順序排列。新增資料時，請確認每個項目之間有逗號，並將新資料放在陣列的 `[` 和 `]` 之間。儲存後重新整理頁面即可，通常不必修改 `index.html` 或 `script.js`。

## 新增分類

在 `games.js` 的 `categories` 陣列中加入分類：

```js
{
  id: "NewCategory",
  name: "新分類名稱"
}
```

`id` 是程式用來配對遊戲的唯一代碼；`name` 是頁面上顯示的分類名稱。分類順序依照 `categories` 陣列排列。新增分類後，將遊戲資料的 `category` 設為相同的 `id`，遊戲就會出現在該分類。

## 加入預覽圖片

將圖片放進專案的 `assets` 資料夾，再於遊戲資料中填入相對路徑：

```js
image: "assets/my-game.png"
```

圖片會顯示在卡片上方，並裁切成 16:9 比例。若沒有圖片，或指定的圖片無法載入，頁面不會保留空白的圖片區塊。請確認檔名與路徑大小寫相符。

## 常見問題

**新增的遊戲沒有顯示**

- 確認資料放在 `games` 陣列中，且 JavaScript 物件格式正確。
- 確認項目之間有逗號，字串都有成對的引號。
- 確認 `category` 和分類 `id` 完全相同，包含大小寫。
- 確認網址正確，檔案已儲存，並重新整理頁面。

**預覽圖片沒有顯示**

- 確認圖片已放在專案中，且 `image` 填寫的是正確的相對路徑。
- 確認路徑、檔名及副檔名的大小寫一致。

## 技術

本專案使用原生 HTML、CSS 和 Vanilla JavaScript，沒有後端或外部套件，也不需要安裝 Node.js、npm 或執行建置指令。
