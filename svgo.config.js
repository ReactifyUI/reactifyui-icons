module.exports = {
  multipass: true,
  plugins: [
    { name: "removeDimensions", active: true },
    { name: "removeComments", active: true },
    { name: "removeTitle", active: false },
    { name: "removeDesc", active: false },
    { name: "convertColors", params: { currentColor: true } },
    { name: "cleanupIDs", active: true }
  ]
}
