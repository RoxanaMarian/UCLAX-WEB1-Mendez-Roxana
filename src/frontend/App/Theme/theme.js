const breakpoints = {
    medium: 800,
    large: 1200,
};

export const theme = {
    cssMedia: {
        isSmall: `(max-width: ${breakpoints.medium - 1}px)`,
        isMediumAndUp: `(min-width: ${breakpoints.medium}px)`,
        isMedium: `(min-width: ${breakpoints.medium}px) and (max-width: ${
            breakpoints.large - 1
        }px)`,
        isLarge: `(min-width: ${breakpoints.large}px)`,
    },
    fonts: {
        default: "'Helvetica Neue', sans-serif",
        roboto: '"Roboto", sans-serif',
    },
    fontWeights: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
    },
    colors: {
        primary: {
            default: "#1A2442",
            medium: "#3e56a1ff",
            light: "#cfd4e1ff",
            dark: "#1A2442",
        },
        secondary: {
            default: "#cfd4e1ff",
            light: "#5677db",
            dark: "#1A2442",
        },
        messaging: {
            success: { color: "#1A2442", bgColor: "#D4EDDA" },
            error: { color: "#1A2442", bgColor: "#f2d8ffff" },
        },
    },
};
