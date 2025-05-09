import antfu from "@antfu/eslint-config"

export default antfu(
	{
		formatters: true,
		stylistic: { indent: "tab", quotes: "backtick" },
		rules: {
			"style/comma-dangle": [ "error", "never" ],
			"style/array-bracket-spacing": [ "error", "always" ],
			"unicorn/prefer-node-protocol": "off",
			"unicorn/throw-new-error": "off",
			"jsonc/array-bracket-spacing": [ "error", "always" ],
			"unicorn/new-for-builtins": "off",
			eqeqeq: "off",
			"style/quote-props": [ "error", "as-needed" ],
			"style/brace-style": [ "error", "1tbs" ],
			"antfu/curly": "off",
			"style/operator-linebreak": [ "error", "after", { overrides: { ":": "before" } } ],
			"style/arrow-parens": [ "error", "as-needed" ],
			"style/new-parens": [ "error", "never" ],
			"antfu/consistent-list-newline": "off",
			"antfu/top-level-function": "off",
			"no-cond-assign": [ "error", "except-parens" ],
			"style/multiline-ternary": "off",
			"antfu/no-top-level-await": "off",
			"node/prefer-global/process": [ "error", "always" ],
			"ts/consistent-type-definitions": [ "error", "type" ],
			"unicorn/prefer-number-properties": "off",
			"style/indent": [ "error", "tab", { SwitchCase: 1, ignoredNodes: [ "ConditionalExpression" ] } ],
			"style/indent-binary-ops": "off",
			"yaml/flow-mapping-curly-spacing": [ "error", "always" ],
			"yaml/flow-sequence-bracket-spacing": [ "error", "always" ],
			"yaml/quotes": [ "error", { prefer: "double" } ],
			"yaml/indent": [ "error", 2, { indentBlockSequences: false } ],
			"style/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "multiline-const", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-const" },
				{ blankLine: "always", prev: "multiline-export", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-export" },
				{ blankLine: "always", prev: "multiline-expression", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-expression" },
				{ blankLine: "always", prev: "multiline-let", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-let" },
				{ blankLine: "always", prev: "block-like", next: "*" },
				{ blankLine: "always", prev: "*", next: "block-like" },
				{ blankLine: "always", prev: "do", next: "*" },
				{ blankLine: "always", prev: "*", next: "do" },
				{ blankLine: "always", prev: "export", next: "*" },
				{ blankLine: "always", prev: "*", next: "export" },
				{ blankLine: "always", prev: "for", next: "*" },
				{ blankLine: "always", prev: "*", next: "for" },
				{ blankLine: "always", prev: "function", next: "*" },
				{ blankLine: "always", prev: "*", next: "function" },
				{ blankLine: "always", prev: "if", next: "*" },
				{ blankLine: "always", prev: "*", next: "if" },
				{ blankLine: "always", prev: "let", next: "*" },
				{ blankLine: "always", prev: "*", next: "let" },
				{ blankLine: "always", prev: "const", next: "*" },
				{ blankLine: "always", prev: "*", next: "const" },
				{ blankLine: "always", prev: "import", next: "*" },
				{ blankLine: "always", prev: "*", next: "import" },
				{ blankLine: "never", prev: "singleline-const", next: "singleline-const" },
				{ blankLine: "never", prev: "singleline-let", next: "singleline-let" },
				{ blankLine: "never", prev: "singleline-let", next: "singleline-const" },
				{ blankLine: "never", prev: "singleline-const", next: "singleline-let" },
				{ blankLine: "never", prev: "singleline-export", next: "singleline-export" },
				{ blankLine: "never", prev: "import", next: "import" },
				{ blankLine: "any", prev: "case", next: "case" }
			]
		},
		languageOptions: { parserOptions: { ecmaVersion: "latest" } }
	},
	{
		files: [ "**/*.js" ],
		rules: {
			"style/quotes": [ "error", "double" ]
		}
	}
)
