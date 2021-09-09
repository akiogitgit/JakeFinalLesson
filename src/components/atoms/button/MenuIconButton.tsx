import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void; // 引数返り値なし
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="めにゅ"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      d={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
