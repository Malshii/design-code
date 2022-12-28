// This file is used to set the global style of the app
import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
    body {
    background: ${themes.light.backgroundColor};
    }

    @media (prefers-color-scheme: dark) {
    background: ${themes.dark.backgroundColor};
    }

`