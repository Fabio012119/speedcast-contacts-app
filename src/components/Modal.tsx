import { useEffect, useState } from "react";
import { User } from "../schemas/userSchema";
import { ModalInfoItem } from "./ModalInfoItem";
import { twMerge } from "tailwind-merge";

type ModalProps = {
  user: User;
  closeModal: () => void;
};

export const Modal = ({ user, closeModal }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const animationClass = `${
    isVisible && !isClosing
      ? "translate-y-0 opacity-100"
      : isClosing
      ? "-translate-y-full opacity-0"
      : "translate-y-full opacity-0"
  }`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={handleClose}
    >
      <div className="fixed inset-0 flex justify-center items-center">
        <div
          className={twMerge(
            "bg-white fixed p-8 shadow-lg w-6/12 smMax:w-[90%] border-b-4 top-[4rem]",
            "border-b-primary-cyan transform transition-all duration-500 ease-in-out",
            animationClass
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 font-black text-[1.3rem] text-neutral-grayish-blue"
            onClick={handleClose}
          >
            ×
          </button>

          <div className="mb-6 lgMax:text-start">
            <h2 className="text-2xl font-bold text-neutral-very-dark-blue ">
              {user.name}
            </h2>
            <p className="text-neutral-grayish-blue">{user.company.name}</p>
          </div>

          <div className="flex flex-row justify-between lgMax:flex-col lgMax:items-start lgMax:text-start lgMax:gap-2">
            <ModalInfoItem infos={[user.username]} label="Username:" />
            <ModalInfoItem
              infos={[
                user.address.street,
                user.address.city,
                user.address.suite,
              ]}
              label="Address:"
            />
            <ModalInfoItem infos={[user.phone]} label="Phone:" />
            <ModalInfoItem infos={[user.email]} label="Email:" />
            <ModalInfoItem infos={[user.website]} label="Website:" />
          </div>
        </div>
      </div>
    </div>
  );
};
