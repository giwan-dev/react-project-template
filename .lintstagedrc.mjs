export default {
  "*.@(js|jsx|ts|tsx|mjs|cjs)": ["eslint", "prettier --list-different"],
  "*.!(js|jsx|ts|tsx|mjs|cjs)": "prettier --list-different",
};
