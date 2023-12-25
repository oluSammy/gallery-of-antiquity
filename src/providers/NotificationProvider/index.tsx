"use client";

import { closeNotificationWithMessage } from "@/redux/Notification";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useRef } from "react";
import * as Toast from "@radix-ui/react-toast";
import { IoMdClose } from "react-icons/io";

import styles from "./styles.module.css";

const NotificationProvider = () => {
  const timerRef = useRef<any>(0);

  const { open, description, title, type } = useAppSelector(
    (state) => state.notification
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => {
        dispatch(closeNotificationWithMessage());
      }, 5000);
    }
    return () => clearTimeout(timerRef.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className={`${styles.ToastRoot} ${styles[`ToastRoot--${type}`]}`}
        open={open}
      >
        <div className="flex flex-col">
          <Toast.Title className={styles.ToastTitle}>{title}</Toast.Title>

          <Toast.Description asChild className={styles.ToastDescription}>
            <p>{description}</p>
          </Toast.Description>
        </div>
        <Toast.Action
          className="ToastClose ml-auto cursor-pointer"
          asChild
          altText="Close"
          aria-label="close"
          onClick={() => dispatch(closeNotificationWithMessage())}
        >
          <IoMdClose className={styles.ToastClose} />
          {/* <FontAwesomeIcon icon={faTimes} className={styles.ToastClose} /> */}
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles.ToastViewport} />
    </Toast.Provider>
  );
};

export default NotificationProvider;
