import { render } from "preact"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
import App from "./app.tsx"

interface PropsType {
	colorMode?: string
}

const styles = {
	global: (props: PropsType) => ({
		body: {
			color: mode("gray.800", "whiteAlpha.900")(props),
			bg: mode("gray.100", "#101010")(props),
		},
	}),
}
const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
}

const colors = {
	gray: {
		light: "#616161",
		dark: "#1e1e1e",
	},
}
const theme = extendTheme({ config, styles, colors })
render(
	<ChakraProvider theme={theme}>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />

		<App />
	</ChakraProvider>,
	document.getElementById("app")!
)
