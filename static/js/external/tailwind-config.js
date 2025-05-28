tailwind.config = {
  theme: {
    colors: {
      background: "#222426",
      foreground: "#3b3c40",
      "border-default": "#292a2b",
      "confirm-green": "#2FA71B",
      "confirm-green-hover": "#258016",
      "confirm-green-active": "#1C6110",
      "cancel-red": "#BD342B",
      "cancel-red-hover": "#9E2720",
      "cancel-red-active": "#7A231D",
      black: "#000000",
      white: "#eeeeee",
      interactable: "#949494",
      "interactable-hover": "#737373",
      "operation-selected": "#04c8e0",
      "operation-hover": "#017d8c",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
