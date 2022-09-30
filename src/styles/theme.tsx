import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                fontSize: "16px",
                bg: "#212121"
            },
        },
    },
});