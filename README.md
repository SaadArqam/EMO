# EMO - The Living AI Bot Website

A modern, interactive website showcasing EMO, the living AI bot. Built with React, Vite, and Tailwind CSS, featuring smooth animations and interactive elements.

## 🚀 Features

- Interactive AI bot showcase
- Smooth animations using GSAP
- Audio player integration
- Responsive navigation
- Modern UI/UX design
- Dynamic content loading

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- React Icons
- React Use

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn (v1.22 or higher)
- Git

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd emo
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Install required libraries:

   ```bash
   npm install react react-dom @vitejs/plugin-react vite
   npm install tailwindcss postcss autoprefixer
   npm install gsap @gsap/react
   npm install react-icons
   npm install react-use
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Vercel will automatically detect the project and deploy it

Alternatively, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel
```

## 📁 Project Structure

```
emo/
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx  # Navigation component
│   │   ├── Button.jsx  # Reusable button component
│   │   └── ...        # Other components
│   ├── assets/         # Static assets
│   │   ├── images/     # Image files
│   │   └── audio/      # Audio files
│   └── ...
├── public/             # Public assets
├── dist/               # Production build
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Project dependencies
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`. Additional styling features include:

- Custom animations with GSAP
- Responsive design with Tailwind CSS
- Custom font implementations

## 🔧 Configuration

- Vite configuration: `vite.config.js`
- Vercel deployment: `vercel.json`
- Tailwind CSS: `tailwind.config.js`
- GSAP animations: Configured in components

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Before contributing, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Contact

For any questions or suggestions, please open an issue in the repository or contact the maintainers.

## 🔍 Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check Node.js version compatibility
3. Clear npm/yarn cache if needed
4. Verify all environment variables are set correctly

## 🌟 Features in Development

- Enhanced AI interaction capabilities
- Advanced animation sequences
- Improved audio integration
