module.exports = {
    env: { browser: true },
    extends: ["react"],
    rules: {
        "no-use-before-define": "off",
        "comma-dangle": [
            "warn",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline",
            },
        ],
        "quotes": ["warn", "double"],
    },
};
