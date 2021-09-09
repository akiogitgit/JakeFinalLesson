import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();

  // 初期値から判断できるから、型をつけなくてもいい
  const [userId, setUserId] = useState<string>("");
  //型付け　えぐ　暗記しましょう
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => login(userId);

  //as 葉本当のタグのやつ
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            onChange={(e) => onChangeValue(e)}
            value={userId}
          />
          <PrimaryButton
            loading={loading}
            disabled={userId === ""}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

// my は margin のy座標
// つまり　mx px py　とかも同じ

// Stack は囲った中を　等間隔にする
