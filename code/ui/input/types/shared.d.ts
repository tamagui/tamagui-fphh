import type { SizeVariantSpreadFunction } from '@tamagui/core';
export declare const defaultStyles: {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusVisibleStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
    };
    readonly tabIndex: 0;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
} | {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusVisibleStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
    };
    readonly focusable: boolean;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
};
export declare const inputSizeVariant: SizeVariantSpreadFunction<any>;
export declare const textAreaSizeVariant: SizeVariantSpreadFunction<any>;
export declare const INPUT_NAME = "Input";
export declare const styledBody: ({
    name: string;
    tag: string;
    variants: {
        readonly unstyled: {
            readonly false: {
                readonly borderColor: "$borderColor";
                readonly backgroundColor: "$background";
                readonly minWidth: 0;
                readonly hoverStyle: {
                    readonly borderColor: "$borderColorHover";
                };
                readonly focusStyle: {
                    readonly borderColor: "$borderColorFocus";
                };
                readonly focusVisibleStyle: {
                    readonly outlineColor: "$outlineColor";
                    readonly outlineWidth: 2;
                    readonly outlineStyle: "solid";
                };
                readonly tabIndex: 0;
                readonly size: "$true";
                readonly fontFamily: "$body";
                readonly borderWidth: 1;
                readonly outlineWidth: 0;
                readonly color: "$color";
            } | {
                readonly borderColor: "$borderColor";
                readonly backgroundColor: "$background";
                readonly minWidth: 0;
                readonly hoverStyle: {
                    readonly borderColor: "$borderColorHover";
                };
                readonly focusStyle: {
                    readonly borderColor: "$borderColorFocus";
                };
                readonly focusVisibleStyle: {
                    readonly outlineColor: "$outlineColor";
                    readonly outlineWidth: 2;
                    readonly outlineStyle: "solid";
                };
                readonly focusable: boolean;
                readonly size: "$true";
                readonly fontFamily: "$body";
                readonly borderWidth: 1;
                readonly outlineWidth: 0;
                readonly color: "$color";
            };
        };
        readonly size: {
            readonly '...size': SizeVariantSpreadFunction<any>;
        };
        readonly disabled: {
            readonly true: {};
        };
    };
    defaultVariants: {
        unstyled: boolean;
    };
    isInput?: undefined;
    accept?: undefined;
    validStyles?: undefined;
} | {
    isInput: boolean;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
    validStyles: {
        whiteSpace?: boolean | undefined;
        wordWrap?: boolean | undefined;
        textOverflow?: boolean | undefined;
        textDecorationDistance?: boolean | undefined;
        cursor?: boolean | undefined;
        WebkitLineClamp: boolean;
        WebkitBoxOrient?: boolean | undefined;
        textShadowOffset: boolean;
        textShadowRadius: boolean;
        userSelect: boolean;
        selectable: boolean;
        verticalAlign: boolean;
        color: boolean;
        textDecorationColor: boolean;
        textShadowColor: boolean;
        textAlign: boolean;
        textDecorationLine: boolean;
        textDecorationStyle: boolean;
        fontFamily: boolean;
        fontSize: boolean;
        fontStyle: boolean;
        fontWeight: boolean;
        letterSpacing: boolean;
        lineHeight: boolean;
        textTransform: boolean;
        elevationAndroid?: boolean | undefined;
        backdropFilter?: boolean | undefined;
        background?: boolean | undefined;
        backgroundAttachment?: boolean | undefined;
        backgroundBlendMode?: boolean | undefined;
        backgroundClip?: boolean | undefined;
        backgroundColor: boolean;
        backgroundImage?: boolean | undefined;
        backgroundOrigin?: boolean | undefined;
        backgroundPosition?: boolean | undefined;
        backgroundRepeat?: boolean | undefined;
        backgroundSize?: boolean | undefined;
        borderBottomStyle?: boolean | undefined;
        borderImage?: boolean | undefined;
        borderLeftStyle?: boolean | undefined;
        borderRightStyle?: boolean | undefined;
        borderTopStyle?: boolean | undefined;
        boxShadow?: boolean | undefined;
        boxSizing?: boolean | undefined;
        caretColor?: boolean | undefined;
        clipPath?: boolean | undefined;
        contain?: boolean | undefined;
        containerType?: boolean | undefined;
        content?: boolean | undefined;
        filter?: boolean | undefined;
        float?: boolean | undefined;
        mask?: boolean | undefined;
        maskBorder?: boolean | undefined;
        maskBorderMode?: boolean | undefined;
        maskBorderOutset?: boolean | undefined;
        maskBorderRepeat?: boolean | undefined;
        maskBorderSlice?: boolean | undefined;
        maskBorderSource?: boolean | undefined;
        maskBorderWidth?: boolean | undefined;
        maskClip?: boolean | undefined;
        maskComposite?: boolean | undefined;
        maskImage?: boolean | undefined;
        maskMode?: boolean | undefined;
        maskOrigin?: boolean | undefined;
        maskPosition?: boolean | undefined;
        maskRepeat?: boolean | undefined;
        maskSize?: boolean | undefined;
        maskType?: boolean | undefined;
        mixBlendMode?: boolean | undefined;
        objectFit?: boolean | undefined;
        objectPosition?: boolean | undefined;
        outlineOffset?: boolean | undefined;
        outlineStyle?: boolean | undefined;
        outlineWidth?: boolean | undefined;
        overflowBlock?: boolean | undefined;
        overflowInline?: boolean | undefined;
        overflowX?: boolean | undefined;
        overflowY?: boolean | undefined;
        pointerEvents?: boolean | undefined;
        scrollbarWidth?: boolean | undefined;
        textEmphasis?: boolean | undefined;
        touchAction?: boolean | undefined;
        transformStyle?: boolean | undefined;
        animationIterationCount: boolean;
        aspectRatio: boolean;
        borderImageOutset: boolean;
        borderImageSlice: boolean;
        borderImageWidth: boolean;
        columnCount: boolean;
        flex: boolean;
        flexGrow: boolean;
        flexOrder: boolean;
        flexPositive: boolean;
        flexShrink: boolean;
        flexNegative: boolean;
        gridRow: boolean;
        gridRowEnd: boolean;
        gridRowGap: boolean;
        gridRowStart: boolean;
        gridColumn: boolean;
        gridColumnEnd: boolean;
        gridColumnGap: boolean;
        gridColumnStart: boolean;
        gridTemplateColumns: boolean;
        gridTemplateAreas: boolean;
        lineClamp: boolean;
        opacity: boolean;
        order: boolean;
        orphans: boolean;
        tabSize: boolean;
        widows: boolean;
        zIndex: boolean;
        zoom: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        scaleZ: boolean;
        shadowOpacity: boolean;
        x: boolean;
        y: boolean;
        perspective: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
        borderRadius: boolean;
        borderTopLeftRadius: boolean;
        borderTopRightRadius: boolean;
        borderBottomLeftRadius: boolean;
        borderBottomRightRadius: boolean;
        borderStartStartRadius: boolean;
        borderStartEndRadius: boolean;
        borderEndStartRadius: boolean;
        borderEndEndRadius: boolean;
        width: boolean;
        height: boolean;
        minWidth: boolean;
        minHeight: boolean;
        maxWidth: boolean;
        maxHeight: boolean;
        blockSize: boolean;
        minBlockSize: boolean;
        maxBlockSize: boolean;
        inlineSize: boolean;
        minInlineSize: boolean;
        maxInlineSize: boolean;
        outlineColor?: boolean | undefined;
        borderColor: boolean;
        borderBlockStartColor: boolean;
        borderBlockEndColor: boolean;
        borderBlockColor: boolean;
        borderBottomColor: boolean;
        borderInlineColor: boolean;
        borderInlineStartColor: boolean;
        borderInlineEndColor: boolean;
        borderTopColor: boolean;
        borderLeftColor: boolean;
        borderRightColor: boolean;
        borderEndColor: boolean;
        borderStartColor: boolean;
        shadowColor: boolean;
        backfaceVisibility: boolean;
        borderBottomEndRadius: boolean;
        borderBottomStartRadius: boolean;
        borderBottomWidth: boolean;
        borderLeftWidth: boolean;
        borderRightWidth: boolean;
        borderBlockWidth: boolean;
        borderBlockEndWidth: boolean;
        borderBlockStartWidth: boolean;
        borderInlineWidth: boolean;
        borderInlineEndWidth: boolean;
        borderInlineStartWidth: boolean;
        borderStyle: boolean;
        borderBlockStyle: boolean;
        borderBlockEndStyle: boolean;
        borderBlockStartStyle: boolean;
        borderInlineStyle: boolean;
        borderInlineEndStyle: boolean;
        borderInlineStartStyle: boolean;
        borderTopEndRadius: boolean;
        borderTopStartRadius: boolean;
        borderTopWidth: boolean;
        borderWidth: boolean;
        transform: boolean;
        transformOrigin: boolean;
        alignContent: boolean;
        alignItems: boolean;
        alignSelf: boolean;
        borderEndWidth: boolean;
        borderStartWidth: boolean;
        bottom: boolean;
        display: boolean;
        end: boolean;
        flexBasis: boolean;
        flexDirection: boolean;
        flexWrap: boolean;
        gap: boolean;
        columnGap: boolean;
        rowGap: boolean;
        justifyContent: boolean;
        left: boolean;
        margin: boolean;
        marginBlock: boolean;
        marginBlockEnd: boolean;
        marginBlockStart: boolean;
        marginInline: boolean;
        marginInlineStart: boolean;
        marginInlineEnd: boolean;
        marginBottom: boolean;
        marginEnd: boolean;
        marginHorizontal: boolean;
        marginLeft: boolean;
        marginRight: boolean;
        marginStart: boolean;
        marginTop: boolean;
        marginVertical: boolean;
        overflow: boolean;
        padding: boolean;
        paddingBottom: boolean;
        paddingInline: boolean;
        paddingBlock: boolean;
        paddingBlockStart: boolean;
        paddingInlineEnd: boolean;
        paddingInlineStart: boolean;
        paddingEnd: boolean;
        paddingHorizontal: boolean;
        paddingLeft: boolean;
        paddingRight: boolean;
        paddingStart: boolean;
        paddingTop: boolean;
        paddingVertical: boolean;
        position: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        inset: boolean;
        insetBlock: boolean;
        insetBlockEnd: boolean;
        insetBlockStart: boolean;
        insetInline: boolean;
        insetInlineEnd: boolean;
        insetInlineStart: boolean;
        direction: boolean;
        shadowOffset: boolean;
        shadowRadius: boolean;
        focusVisibleStyle?: boolean | undefined;
        enterStyle: boolean;
        exitStyle: boolean;
        hoverStyle: boolean;
        pressStyle: boolean;
        focusStyle: boolean;
        disabledStyle: boolean;
    };
    name?: undefined;
    tag?: undefined;
    variants?: undefined;
    defaultVariants?: undefined;
})[];
//# sourceMappingURL=shared.d.ts.map