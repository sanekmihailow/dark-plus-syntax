module.exports = [
    {
        scope: [
            "comment.block.documentation.js",
            "comment.block",
            // "comment.block.js",
            // "comment.block.ts",
            // "meta.tag.ts",
            "comment.line.triple-slash.directive.ts",
            "comment.block.documentation.ts",
            "comment.line.shebang.js",
            // "punctuation.definition.comment.js"
        ],
        settings: { "foreground": "#608b4e", },
    },
    {
        scope: "punctuation.definition.comment.js",
        settings: { "foreground": "#404040", },
    },
    {
        scope: [
            "comment.line.double-slash.js",
        ],
        settings: { "foreground": "#505050", },
    },
    {
        scope: [
            "variable.language.this",
            // "variable.language.this.js",
            // "variable.language.this.jsx",
            // "variable.language.this.ts",
            // "variable.language.this.tsx",
        ],
        settings: {
            "foreground": "#569cd6",
            "fontStyle": "italic",
        },
    },
    {
        scope: [
            "constant.character.escape.js",
        ],
        settings: { "foreground": "#d7ba7d", },
    },
    {
        scope: [
            "keyword.other.template.begin.js",
            "keyword.other.template.end.js",
            "punctuation.definition.string.template.begin.js",
            "punctuation.definition.string.template.begin.ts",
            "punctuation.definition.string.template.end.js",
            "punctuation.definition.string.template.end.ts",
        ],
        settings: { "foreground": "#ce9178", },
    },
    {
        scope: [
            "punctuation.separator.key-value.js",
            "punctuation.separator.key-value.ts",
            "punctuation.definition.block.js",
            "punctuation.definition.block.ts",
            "punctuation.separator.comma.js",
            "punctuation.separator.comma.ts",
            "punctuation.separator.parameter",
            "punctuation.definition.parameters.begin",
            "punctuation.definition.parameters.end",
            "meta.brace.square.js",
            "entity.quasi.element.js",
            "comment.block.documentation.js keyword.operator.accessor.js",
        ],
        settings: { "foreground": "#d4d4d4", },
    },
    {
        scope: [
            "new.expr.js",
            "meta.arrow.js",
            "variable.language.super.js",
            "variable.language.super.jsx",
            "variable.language.super.ts",
            "variable.language.super.tsx",
            "keyword.operator.new.js",
            "storage.type.function.arrow.js",
            "keyword.operator.spread",
            "keyword.operator.module.all.js",
            "keyword.control.as.ts",
            "keyword.control.as.tsx",
            "keyword.operator.optional.ts",
            "comment.line.triple-slash.directive.ts",
            "punctuation.definition.tag.directive.ts",
            "meta.brace.angle.ts",
            "meta.brace.angle.tsx",
            "punctuation.definition.typeparameters.begin.ts",
            "punctuation.definition.typeparameters.end.ts",
        ],
        settings: { "foreground": "#569cd6", },
    },
    {
        name: "JavaScript string interpolation ${}",
        scope: [
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.end.js",
            "punctuation.definition.template-expression.begin.ts",
            "punctuation.definition.template-expression.end.ts",
            "punctuation.definition.template-expression.begin.tsx",
            "punctuation.definition.template-expression.end.tsx",
            "punctuation.quasi.element.end.js",
            "punctuation.quasi.element.begin.js",
            "punctuation.section.embedded.coffee",
        ],
        settings: { "foreground": "#569cd6", },
    },
    {
        scope: [
            "meta.template.expression.js",
            "meta.template.expression.ts",
            "meta.brace.round.ts",
            "meta.brace.round.js",
        ],
        settings: { "foreground": "#d4d4d4", },
    },
    {
        scope: [
            "meta.function-call.method.with-arguments.js",
            "variable.function.js",
            "keyword.control.require.ts",
        ],
        settings: { "foreground": "#dcdcaa", },
    },
    {
        scope: [
            "keyword.operator.js",
            "punctuation.accessor.js",
            "punctuation.accessor.ts",
            "keyword.operator.typeof.js",
            "keyword.operator.logical.js",
            "keyword.operator.in.js",
            "keyword.operator.arithmetic.js",
            "keyword.operator.assignment.js",
            "keyword.operator.comparison.js",
            "keyword.operator.relational.js",
            "keyword.operator.expression.of.js",
            "keyword.operator.expression.of.ts",
            "keyword.operator.expression.in.js",
            "keyword.operator.expression.in.ts",
        ],
        settings: { "foreground": "#c586c0", },
    },
    {
        scope: [
            "meta.object-literal.key",
            "string.unquoted.js",
            "string.unquoted.label.js",
            "meta.property.object.js",
            "constant.other.object.key.js",
            "constant.other.object.key string.quoted.double",
            "meta.object-literal.key string.quoted.single",
            "meta.object-literal.key string.quoted.double",
            "string.quoted.single meta.object-literal.key ",
            "string.quoted.double meta.object-literal.key ",
        ],
        settings: { "foreground": "#9cdcfe", },
    },
    {
        scope: [
            "punctuation.decorator.js",
            "punctuation.decorator.ts",
            "support.type.object.module.js",
            "support.type.object.module.js.jsx",
            // "keyword.control.module.reference.js",
            "support.type.object.module keyword.operator.accessor",
            "keyword.operator.type.annotation.ts",
            "keyword.operator.type.annotation.tsx",
            "punctuation.type.flowtype",
            "support.variable.object.node",
            "support.variable.dom",
        ],
        settings: { "foreground": "#4ec9b0",},
    },
    {
        scope: [
            "support.type.primitive.ts",
            "support.type.primitive.tsx",
        ],
        settings: {
            "foreground": "#4ec9b0",
            // "fontStyle": "italic",
        },
    },
    // =========================================================================
    // JSX
    // =========================================================================
    {
        scope: [
            "punctuation.section.embedded.begin.jsx",
            "punctuation.section.embedded.end.jsx",
            "punctuation.section.embedded.begin.tsx",
            "punctuation.section.embedded.end.tsx",
        ],
        settings: {
            "foreground": "#4ec9b0",
            // "fontStyle": "italic",
        },
    },
];
