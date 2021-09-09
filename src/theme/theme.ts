// globalのテーマ　全体に効かせる
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // ここら辺はテンプレかな
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});

export default theme;
