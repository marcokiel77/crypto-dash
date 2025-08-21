# Crypto Dash

A modern React application for tracking cryptocurrency prices, market caps, and trends in real-time. Built with React, Vite, and the CoinGecko API.

## 🚀 Features

- Real-time cryptocurrency price tracking
- Detailed coin information and statistics
- Interactive price charts using Chart.js
- Filter coins by name or symbol
- Sort by different metrics (market cap, price, 24h change)
- Customizable display limit
- Responsive design for all devices
- Light/dark theme support

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Router](https://reactrouter.com/) - Navigation and routing
- [Chart.js](https://www.chartjs.org/) - Interactive charts
- [CoinGecko API](https://www.coingecko.com/api/documentation) - Cryptocurrency data
- [React Spinners](https://www.npmjs.com/package/react-spinners) - Loading animations

## 🏁 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crypto-dash.git
```

2. Install dependencies:
```bash
cd crypto-dash
npm install
```

3. Create a `.env` file in the root directory and add your API URLs:
```env
VITE_API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"
VITE_COIN_API_URL="https://api.coingecko.com/api/v3/coins"
```

4. Start the development server:
```bash
npm run dev
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📱 Screenshots

[Add screenshots of your application here]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is part of the [Modern React From The Beginning](https://www.traversymedia.com/modern-react-from-the-beginning) course by Brad Traversy.

## 🙏 Acknowledgments

- [Brad Traversy](https://www.traversymedia.com/) for the excellent React course
- [CoinGecko](https://www.coingecko.com/) for providing the cryptocurrency API