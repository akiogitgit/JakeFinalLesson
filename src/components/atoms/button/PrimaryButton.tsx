import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  // 上で？　があるやつはデフォルトを指定できる
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8, transition: "0.3s" }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
