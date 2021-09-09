import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定し、モーダルを表示するカスタムフック
export const useSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUsers = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null); // ?? は左が　undefind nullの時
    onOpen();
  }, []);

  return { selectedUser, onSelectUsers };
};
