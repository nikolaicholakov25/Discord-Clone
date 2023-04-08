import {
  CreateRoomForm,
  EditProfileAvatar,
  EditProfileBanner,
} from "collections/Forms";
import { EmptyPopup, LoginPopup, SignUpPopup } from "collections/PopupContent";
import React, { RefObject } from "react";

export type TPopups =
  | "login"
  | "signUp"
  | "null"
  | "createRoom"
  | "editProfile"
  | "editBanner";

const popups = {
  null: EmptyPopup,
  login: LoginPopup,
  signUp: SignUpPopup,
  createRoom: CreateRoomForm,
  editProfile: EditProfileAvatar,
  editBanner: EditProfileBanner,
};

interface PopupProps {
  closePopup: (type?: TPopups) => () => void;
  popupType: TPopups;
  ref?: RefObject<HTMLDivElement>;
}

export const Popup: React.FC<PopupProps> = ({
  popupType,
  closePopup,
  ...props
}) => {
  const CurrentPopup = popups[popupType || "null"];

  return (
    <>
      <div
        {...props}
        onClick={closePopup("null")}
        className={
          popupType !== "null"
            ? "z-[110] flex items-center fixed justify-center bg-slate-900 opacity-[0.9]  w-full h-full top-0 left-0"
            : "hidden"
        }
      />
      <div className={"form-container"}>
        <CurrentPopup closePopup={closePopup} />
      </div>
    </>
  );
};
