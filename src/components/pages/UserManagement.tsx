import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUsers, selectedUser } = useSelectUsers();
  const { loginUser } = useLoginUser(); //まじで謎
  //console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickBody = useCallback(
    (id: number) => {
      onSelectUsers({ id, users, onOpen });
    },
    // useCallback だから、ここが[]だと、ずっと同じデータになる
    [users, onSelectUsers, onOpen]
  );

  //レスポンシブは、 base がスマホ　md がタブレット
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} ml={{ base: "20%", sm: 0 }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickBody}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isAdmin={loginUser?.isAdmin}
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});

// Wrap はその要素が一定の間隔を持ち、Flexみたいになる
// Stack は項目毎に一定の間隔を開ける

// ~ ~overly ~content ~body
