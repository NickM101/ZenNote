module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@styles": "./src/config/theme",
        "@icons": "./src/assets/svg",
        "@images": "./src/assets/images",
        "@auth": "./src/screens/auth",
        "@components": "./src/components"
      },
      extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],
    }]
  ]
};
