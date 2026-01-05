<h1 align="center">CoinPulse</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Lightweight_Charts-FF5733?style=for-the-badge&logo=chart.js&logoColor=white" alt="Lightweight Charts">
</p>

---

## 🚀 Overview

**CoinPulse** is a cutting-edge cryptocurrency screener application with a built-in high-frequency terminal and dashboard. It provides real-time data, advanced charting, and seamless navigation for crypto enthusiasts and traders.

---

## 📂 Folder Structure

```plaintext
.
├── app/
│   ├── coins/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── CandlestickChart.tsx
│   ├── CoinHeader.tsx
│   ├── Converter.tsx
│   ├── DataTable.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
├── hooks/
│   ├── useCoinGeckoWebSocket.ts
├── lib/
│   ├── coingecko.actions.ts
│   ├── utils.ts
├── public/
├── constants.ts
├── type.d.ts
├── README.md
```

---

## ✨ Key Features

- **Real-Time Data**: Stay updated with live cryptocurrency prices and market trends.
- **Advanced Charting**: Interactive candlestick charts powered by Lightweight Charts.
- **Pagination Support**: Navigate through large datasets with ease.
- **Responsive Design**: Optimized for all devices using TailwindCSS.
- **WebSocket Integration**: Real-time updates via CoinGecko WebSocket API.
- **Customizable Themes**: Dark mode and light mode support.

---

## 🏁 Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/coinpulse.git
   cd coinpulse
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file and add the required API keys:
   ```env
   NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key
   NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://your_websocket_url
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🌟 Thanks & Support

Thank you for using **CoinPulse**! If you find this project helpful, please consider giving it a ⭐ on [GitHub](https://github.com/baosetsuna123?tab=repositories). Your support is greatly appreciated!
