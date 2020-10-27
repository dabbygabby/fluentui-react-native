import { Palette, OfficePalette } from '@fluentui-react-native/theme-types';

export function paletteFromOfficeColors(p: OfficePalette): Palette {
  return {
    background: p.Bkg,
    bodyStandoutBackground: p.Bkg,
    bodyFrameBackground: p.Bkg,
    bodyFrameDivider: p.AccentLight,
    bodyText: p.Text,
    bodyTextChecked: p.TextSelected,
    subText: p.TextSecondary,
    bodyDivider: p.AccentLight,

    disabledBackground: p.BkgCtlSubtleDisabled,
    disabledText: p.TextCtlSubtleDisabled,
    disabledBodyText: p.TextDisabled,
    disabledSubtext: p.TextCtlSubtleDisabled,
    disabledBodySubtext: p.TextDisabled,

    focusBorder: p.StrokeKeyboard,
    variantBorder: p.AccentOutline,
    variantBorderHovered: p.AccentOutline,
    defaultStateBackground: p.Bkg,

    errorText: p.TextError,
    warningText: p.Text,
    errorBackground: p.Bkg,
    blockingBackground: p.Bkg,
    warningBackground: p.Bkg,
    warningHighlight: p.TextError,
    successBackground: p.TextEmphasis,

    inputBorder: p.StrokeCtlSubtle,
    inputBorderHovered: p.StrokeCtlSubtleHover,
    inputBackground: p.BkgCtlSubtle,
    inputBackgroundChecked: p.BkgCtlSubtle,
    inputBackgroundCheckedHovered: p.BkgCtlSubtleHover,
    inputForegroundChecked: p.TextCtlSubtle,
    inputFocusBorderAlt: p.StrokeCtlSubtleKeyboard,
    smallInputBorder: p.StrokeCtlSubtle,
    inputText: p.TextCtlSubtle,
    inputTextHovered: p.TextCtlSubtleHover,
    inputPlaceholderText: p.TextCtlSubtlePlaceholder,

    buttonBackgroundChecked: p.BkgCtlSelected,
    buttonBackgroundHovered: p.BkgCtlHover,
    buttonBackgroundCheckedHovered: p.BkgCtlSelected,
    buttonBackgroundPressed: p.BkgCtlPressed,
    buttonBackgroundDisabled: p.BkgCtlDisabled,
    buttonText: p.TextCtl,
    buttonTextHovered: p.TextCtlHover,
    buttonTextChecked: p.TextCtlSelected,
    buttonTextCheckedHovered: p.TextCtlSelected,
    buttonTextPressed: p.TextCtlPressed,
    buttonTextDisabled: p.TextCtlDisabled,
    buttonBorderDisabled: p.StrokeCtlDisabled,
    buttonBorderFocused: p.StrokeCtlKeyboard,

    primaryButtonBackground: p.BkgCtlEmphasis,
    primaryButtonBackgroundHovered: p.BkgCtlEmphasisHover,
    primaryButtonBackgroundPressed: p.BkgCtlEmphasisPressed,
    primaryButtonBackgroundDisabled: p.BkgCtlEmphasisDisabled,
    primaryButtonBorder: p.StrokeCtlEmphasis,
    primaryButtonBorderFocused: p.StrokeCtlEmphasisKeyboard,
    primaryButtonText: p.TextCtlEmphasis,
    primaryButtonTextHovered: p.TextCtlEmphasisHover,
    primaryButtonTextPressed: p.TextCtlEmphasisPressed,
    primaryButtonTextDisabled: p.TextCtlEmphasisDisabled,

    accentButtonBackground: p.BkgCtlEmphasis,
    accentButtonText: p.TextCtlEmphasis,

    menuBackground: p.Bkg,
    menuDivider: p.AccentLight,
    menuIcon: p.Text,
    menuHeader: p.Text,
    menuItemBackgroundHovered: p.BkgHover,
    menuItemBackgroundPressed: p.BkgPressed,
    menuItemText: p.Text,
    menuItemTextHovered: p.TextHover,

    listBackground: p.Bkg,
    listText: p.Text,
    listItemBackgroundHovered: p.BkgHover,
    listItemBackgroundChecked: p.BkgSelected,
    listItemBackgroundCheckedHovered: p.BkgSelected,

    listHeaderBackgroundHovered: p.BkgHover,
    listHeaderBackgroundPressed: p.BkgPressed,

    actionLink: p.TextActive,
    actionLinkHovered: p.TextActiveHover,
    link: p.TextHyperlink,
    linkHovered: p.TextHyperlinkHover,
    linkPressed: p.TextHyperlinkPressed,

    buttonBackground: p.BkgCtl,
    buttonContent: p.TextCtl,
    buttonBorder: p.StrokeCtl,
    buttonIcon: p.TextCtl,

    buttonHoveredBackground: p.BkgCtlHover,
    buttonHoveredBorder: p.StrokeCtlHover,
    buttonHoveredContent: p.TextCtlHover,
    buttonHoveredIcon: p.TextCtlHover,

    buttonFocusedBackground: p.BkgCtlHover,
    buttonFocusedBorder: p.StrokeCtlKeyboard,
    buttonFocusedContent: p.TextCtlHover,
    buttonFocusedIcon: p.TextCtlHover,

    buttonPressedBackground: p.BkgCtlPressed,
    buttonPressedBorder: p.StrokeCtlPressed,
    buttonPressedContent: p.TextCtlPressed,
    buttonPressedIcon: p.TextCtlPressed,

    buttonDisabledBackground: p.BkgCtlDisabled,
    buttonDisabledBorder: p.StrokeCtlDisabled,
    buttonDisabledContent: p.TextCtlDisabled,
    buttonDisabledIcon: p.TextCtlDisabled,

    ghostBackground: p.Bkg,
    ghostContent: p.TextRest,
    ghostBorder: p.Bkg,
    ghostIcon: p.TextRest,

    ghostHoveredBackground: p.BkgHover,
    ghostHoveredBorder: p.BkgHover,
    ghostHoveredContent: p.TextHover,
    ghostHoveredIcon: p.TextHover,

    ghostFocusedBackground: p.BkgHover,
    ghostFocusedBorder: p.StrokeKeyboard,
    ghostFocusedContent: p.TextHover,
    ghostFocusedIcon: p.TextHover,

    ghostPressedBackground: p.BkgPressed,
    ghostPressedBorder: p.BkgPressed,
    ghostPressedContent: p.TextPressed,
    ghostPressedIcon: p.TextPressed,

    ghostDisabledBackground: p.Bkg,
    ghostDisabledBorder: p.Bkg,
    ghostDisabledContent: p.TextDisabled,
    ghostDisabledIcon: p.TextDisabled,

    brandBackground: p.BkgCtlEmphasis,
    brandContent: p.TextCtlEmphasis,
    brandBorder: p.StrokeCtlEmphasis,
    brandIcon: p.TextCtlEmphasis,

    brandHoveredBackground: p.BkgCtlEmphasisHover,
    brandHoveredBorder: p.StrokeCtlEmphasisHover,
    brandHoveredContent: p.TextCtlEmphasisHover,
    brandHoveredIcon: p.TextCtlEmphasisHover,

    brandFocusedBackground: p.BkgCtlEmphasisHover,
    brandFocusedBorder: p.StrokeCtlEmphasisKeyboard,
    brandFocusedContent: p.TextCtlEmphasisHover,
    brandFocusedIcon: p.TextCtlEmphasisHover,

    brandPressedBackground: p.BkgCtlEmphasisPressed,
    brandPressedBorder: p.StrokeCtlEmphasisPressed,
    brandPressedContent: p.TextCtlEmphasisPressed,
    brandPressedIcon: p.TextCtlEmphasisPressed,

    brandDisabledBackground: p.BkgCtlEmphasisDisabled,
    brandDisabledBorder: p.StrokeCtlEmphasisDisabled,
    brandDisabledContent: p.TextCtlEmphasisDisabled,
    brandDisabledIcon: p.TextCtlEmphasisDisabled,

    buttonCheckedBackground: p.BkgCtlSelected,
    buttonCheckedContent: p.TextCtlSelected,
    buttonCheckedHoveredBackground: p.BkgCtlHover,
    buttonCheckedHoveredContent: p.TextCtlHover,

    // brandCheckedBackground: p.Bkg,
    // brandCheckedContent: ,
    // brandCheckedHoveredBackground: ,
    // brandCheckedHoveredContent: ,

    ghostCheckedBackground: p.BkgSelected,
    ghostCheckedContent: p.TextSelected,
    ghostCheckedHoveredBackground: p.BkgHover,
    ghostCheckedHoveredContent: p.TextHover,
    ghostCheckedHoveredBorder: p.StrokeSelectedHover,

    ghostSecondaryContent: p.TextSecondary,
    ghostFocusedSecondaryContent: p.TextSecondaryHover,
    ghostHoveredSecondaryContent: p.TextSecondaryHover,
    ghostPressedSecondaryContent: p.TextSecondaryPressed,

    // brandSecondaryContent: ,
    // brandFocusedSecondaryContent: ,
    // brandHoveredSecondaryContent: ,
    // brandPressedSecondaryContent: ,

    // buttonDisabledSecondaryContent: p,
    // buttonHoveredSecondaryContent: ,
    // buttonPressedSecondaryContent: ,
  };
}