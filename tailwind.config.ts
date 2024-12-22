module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Eğer app directory kullanıyorsanız
    "./pages/**/*.{js,ts,jsx,tsx}", // pages directory (eğer kullanıyorsanız)
    "./components/**/*.{js,ts,jsx,tsx}", // components directory
    "./src/**/*.{js,ts,jsx,tsx}", // src içindeki herhangi bir alt dosya
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
