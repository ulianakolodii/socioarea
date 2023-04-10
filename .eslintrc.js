module.exports = {
	globals: {
		NodeJS: true,
		$fetch: true,
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:vue/vue3-recommended",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
	],
	rules: {
		"@typescript-eslint/explicit-member-accessibility": "off",
		"@typescript-eslint/no-object-literal-type-assertion": "off",
		"@typescript-eslint/no-explicit-any": "error",
		"func-style": ["error", "expression"],
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "error",
		"unicorn/prefer-node-protocol": "error",
		"no-console": "off",
		"vue/multi-word-component-names": "off",
		"vue/one-component-per-file": "off",
		"vue/require-default-prop": "off",
		"vue/no-multiple-template-root": "off",
		"vue/attribute-hyphenation": "off",
		"vue/custom-event-name-casing": [
			"error",
			"camelCase",
			{
				ignores: [],
			},
		],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "always",
					normal: "always",
					component: "always",
				},
				svg: "always",
				math: "always",
			},
		],
		"vue/component-tags-order": [
			"error",
			{
				order: ["script", "template", "style"],
			},
		],
		"vue/attributes-order": [
			"error",
			{
				order: [
					"DEFINITION",
					"LIST_RENDERING",
					"CONDITIONALS",
					"RENDER_MODIFIERS",
					"GLOBAL",
					["UNIQUE", "SLOT"],
					"TWO_WAY_BINDING",
					"OTHER_DIRECTIVES",
					"OTHER_ATTR",
					"EVENTS",
					"CONTENT",
				],
				alphabetical: false,
			},
		],
		"no-redeclare": "off",
		"arrow-body-style": ["error", "as-needed"],
		semi: ["error", "always"],
		"import/no-restricted-paths": [
			"error",
			{
				zones: [
					{
						from: "packages/nuxt/src/!(core)/**/*",
						target: "packages/nuxt/src/core",
						message: "core should not directly import from modules.",
					},
					{
						from: "packages/nuxt/src/!(app)/**/*",
						target: "packages/nuxt/src/app",
						message: "app should not directly import from modules.",
					},
					{
						from: "packages/nitro",
						target: "packages/!(nitro)/**/*",
						message: "nitro should not directly import other packages.",
					},
				],
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		indent: ["error", "tab"],
		"import/order": [
			"error",
			{
				"newlines-between": "always",
				groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["builtin"],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		"no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
		curly: ["error", "all"],
		"prefer-template": "error",
	},
};
