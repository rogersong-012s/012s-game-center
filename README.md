# 012S 網頁專案整合站

本網站以本團隊成員 Shark 製作的 [Shark's Game Lab](https://sharkwang0903.github.io/shark-game-lab/) 為模板，整合 012S 團隊的小遊戲、工具與網頁專案。首頁將工具集中在「工具」區，遊戲依作者分組；點選分類按鈕可展開或收合內容，點選卡片則會在新分頁開啟。

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

用瀏覽器開啟專案根目錄中的 `index.html`，即可瀏覽專案。點選「工具」或作者分類按鈕可展開、收合該區內容。修改並儲存檔案後，重新整理頁面即可看到更新。

## 新增或修改遊戲

在 `games.js` 的 `games` 陣列中新增一款遊戲，或修改既有項目：

```js
{
  name: "新遊戲名稱",
  author: "Roger",
  description: "",
  url: "https://example.com/my-game/",
  image: ""
}
```

- `name`：遊戲卡片上的名稱。
- `author`：作者名稱，須與 `categories` 中的作者 `id` 完全相同，包含大小寫。
- `description`：遊戲簡介；沒有簡介時可填空字串 `""`。
- `url`：遊戲網址。
- `image`：預覽圖片路徑；沒有圖片時填空字串 `""`。

遊戲卡片會依照 `games` 陣列的順序排列。新增資料時，請確認每個項目之間有逗號，並將新資料放在陣列的 `[` 和 `]` 之間。儲存後重新整理頁面即可，通常不必修改 `index.html` 或 `script.js`。

## 新增工具

工具放在首頁的「工具」區。新增工具時，將 `category` 設為 `"Tools"`，並在 `description` 寫上作者：

```js
{
  name: "新工具名稱",
  category: "Tools",
  description: "作者：Shark",
  url: "https://example.com/my-tool/",
  image: ""
}
```

## 新增遊戲作者分組

在 `games.js` 的 `categories` 陣列加入作者分組：

```js
{
  id: "NewAuthor",
  name: "NewAuthor 的遊戲"
}
```

分類順序依照 `categories` 陣列排列。新增遊戲時，`author` 必須和作者分組的 `id` 完全相同。

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
- 確認遊戲的 `author` 和分類 `id` 完全相同，或工具的 `category` 設為 `"Tools"`。
- 確認網址正確，檔案已儲存，並重新整理頁面。

**預覽圖片沒有顯示**

- 確認圖片已放在專案中，且 `image` 填寫的是正確的相對路徑。
- 確認路徑、檔名及副檔名的大小寫一致。

## 技術

本專案使用原生 HTML、CSS 和 Vanilla JavaScript，沒有後端或外部套件，也不需要安裝 Node.js、npm 或執行建置指令。
