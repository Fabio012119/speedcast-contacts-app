import { User } from "../schemas/userSchema";

export type ContactItemProps = {
  user: User;
  openModal: (user: User) => void;
};

export type ModalProps = {
  user: User;
  closeModal: () => void;
};

export type modalInfoProps = {
  infos: string[];
  label: string;
};

export type ContactInfoItemProps = {
  label: string;
  value: string;
};

export type modalAnimationClassProps = {
  isVisible: boolean;
  isClosing: boolean;
};

export type FetchUserProps = {
  setUsers: (users: User[]) => void;
  setError: (error: string) => void;
};
