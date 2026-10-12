# 012S 小遊戲中心

012S 小遊戲中心收錄團隊成員製作的瀏覽器小遊戲與互動作品。首頁依製作者分類展示遊戲卡片；選取卡片後，遊戲會在新分頁開啟。

網站以原生 HTML、CSS 和 JavaScript 製作，沒有後端、外部套件或建置流程。遊戲清單與分類集中管理在 `games.js`。

## 在本機開啟

直接用瀏覽器開啟專案根目錄的 `index.html`，即可瀏覽遊戲清單。編輯檔案後重新整理頁面，就能看到更新。

## 專案結構

```text
012s-game-center/
├── index.html   # 網頁骨架、標題與網站描述
├── style.css    # 頁面樣式與桌面、平板、手機版排版
├── games.js     # 遊戲分類與遊戲資料
├── script.js    # 根據資料建立分類區塊與遊戲卡片
├── assets/      # 圖片等網站素材
└── README.md    # 專案說明
```

## 新增或修改遊戲

在 `games.js` 的 `games` 陣列中新增一筆資料，或直接修改既有項目：

```js
{
  name: "新遊戲名稱",
  category: "Roger",
  description: "用一句話介紹這款遊戲。",
  url: "https://example.com/my-game/",
  image: ""
}
```

欄位說明：

- `name`：遊戲卡片顯示的名稱。
- `category`：分類代碼，必須與 `categories` 中某個 `id` 完全一致，包含大小寫。
- `description`：卡片上的簡短介紹；沒有介紹時可留空字串。
- `url`：已部署遊戲的網址，建議使用 HTTPS。
- `image`：預覽圖片路徑；沒有圖片時使用空字串 `""`。

遊戲卡片的顯示順序依 `games` 陣列排列。新增項目時，確認前一筆資料後有逗號，並將新項目放在陣列的 `[` 和 `]` 之間。儲存後重新整理首頁即可，通常不需要修改 `index.html` 或 `script.js`。

## 新增分類

在 `games.js` 的 `categories` 陣列中新增分類：

```js
{
  id: "NewCategory",
  name: "新分類名稱"
}
```

`id` 是遊戲資料使用的代碼，必須唯一；`name` 是首頁顯示的分類名稱。分類顯示順序依 `categories` 陣列排列。新增完成後，遊戲的 `category` 填入相同的 `id` 即可歸入該分類。

## 加入遊戲預覽圖

將圖片放入專案，例如存到 `assets` 資料夾，再把相對路徑填入遊戲資料：

```js
image: "assets/my-game.png"
```

網站會在卡片上方顯示圖片，並以 16:9 比例裁切。空白的 `image` 不會留下圖片空間；如果圖片無法載入，該圖片區塊也會自動隱藏。使用相對路徑可讓圖片在 GitHub Pages 的專案網站中正常顯示。

## GitHub Pages 部署

1. 將專案檔案放在 GitHub repository 的根目錄。
2. 在 repository 的 **Settings → Pages** 選擇從 branch 部署。
3. 選擇部署分支（目前為 `main`）以及根目錄 `/(root)`，然後儲存。
4. 等待 GitHub Pages 部署完成，再使用 Pages 提供的網址開啟網站。

之後更新遊戲資料或網站檔案，將變更推送至部署分支；GitHub Pages 會在推送後重新部署。本站目前使用的視覺範本來自 [Shark's Game Lab](https://sharkwang0903.github.io/shark-game-lab/)。

## 常見問題

**新增的遊戲沒有顯示**

- 確認遊戲資料位於 `games` 陣列內，且物件欄位格式正確。
- 確認相鄰項目之間有逗號，字串使用成對的引號。
- 確認 `category` 與分類 `id` 完全相同，包含大小寫。
- 確認網址有效，並已儲存檔案及重新整理頁面。

**預覽圖片顯示不出來**

- 確認圖片檔案已放入 repository，路徑和檔名大小寫正確。
- 專案網站請使用 `assets/image.png` 這種相對路徑，不要在路徑前加 `/`。

## 技術

本專案使用原生 HTML、CSS 和 Vanilla JavaScript，不需要安裝 Node.js、npm 套件、框架或執行建置指令。
