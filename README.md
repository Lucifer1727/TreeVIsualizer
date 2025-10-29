# 🌳 JSON Tree Visualizer

An interactive web application that transforms JSON data into beautiful, color-coded tree visualizations. Built with React, TypeScript, and Tailwind CSS.

![JSON Tree Visualizer](https://img.shields.io/badge/React-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **Interactive Tree Visualization**: Explore nested JSON structures with collapsible nodes
- **Color-Coded Display**: Different colors for different data types (strings, numbers, booleans, objects, arrays)
- **Real-Time Parsing**: Instant visualization as you input JSON data
- **Resizable Panels**: Adjust the space between JSON input and tree visualization by dragging the divider
- **Dark Mode Support**: Toggle between light, dark, and system theme preferences
- **Search Functionality**: Quickly find specific keys or values within your JSON
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Clear error messages for invalid JSON syntax

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheVinaySagar/jello-view.git
cd jello-view
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. Start the development server:
```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🛠️ Technology Stack

This project is built with modern web technologies:

- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and state management
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

## 📦 Project Structure

```
jello-view/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── JSONInput.tsx        # JSON input component
│   │   └── TreeVisualization.tsx # Tree rendering component
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Main application page
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx         # Root application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Project dependencies
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Components

### JSONInput
Handles JSON input with validation and error handling. Features include:
- Textarea for JSON input
- Real-time validation
- Error messages for invalid JSON
- Generate button to trigger visualization

### TreeVisualization
Renders the JSON data as an interactive tree structure:
- Collapsible/expandable nodes
- Color-coded data types
- Nested object and array support
- Hover effects and animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy automatically
- **Any Static Hosting**: Upload the `dist` folder contents

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vinay Sagar**
- GitHub: [@TheVinaySagar](https://github.com/TheVinaySagar)

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons from [Lucide](https://lucide.dev/)
- Inspired by various JSON visualization tools

## 📸 Screenshots

_Add screenshots of your application here_

## 🔮 Future Enhancements

- [ ] Export tree visualization as PNG/SVG
- [ ] JSON formatting and beautification
- [ ] Support for large JSON files with virtualization
- [ ] JSON path expression evaluation
- [ ] Comparison view for two JSON objects
- [ ] History of parsed JSON documents

---

Made with ❤️ using React and TypeScript

