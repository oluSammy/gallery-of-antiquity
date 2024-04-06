"use client";

import React, { use, useState } from "react";
import DialogComponent from "../Modal/Modal";
import Switch from "../Switch/Switch";
import { useMutation } from "react-query";
import useApiClient from "@/hooks/useApiClient";
import { useAppDispatch } from "@/redux/hooks";
import { openNotificationWithMessage } from "@/redux/Notification";

interface Props {
  updateUrl: string;
  name: string;
  type: "enable" | "disable";
  enableTitle?: string;
  disableTitle?: string;
  title?: string;
}

const ActiveDialog = (props: Props) => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [checked, setChecked] = useState(
    props.type === "enable" ? false : true
  );

  const apiClient = useApiClient();
  const dispatch = useAppDispatch();

  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      try {
        await apiClient.put(props.updateUrl, {
          active: props.type === "enable" ? true : false,
        });

        dispatch(
          openNotificationWithMessage({
            type: "success",
            title: "Done",
            description: `${props.title} ${
              props.type === "enable" ? "enabled" : "disabled"
            }`,
          })
        );

        setChecked(!checked);
      } catch (error) {
        dispatch(
          openNotificationWithMessage({
            type: "error",
            title: "Error",
            description: `Unable to ${
              props.type === "enable" ? "enable" : "disable"
            } ${props.title}`,
          })
        );
      }
    },
  });

  return (
    <div>
      <DialogComponent
        open={isFeedbackModalOpen}
        setOpen={setIsFeedbackModalOpen}
        content={
          <ActiveModal
            closeModal={() => setIsFeedbackModalOpen(false)}
            updateUrl={props.updateUrl}
            type={props.type}
            name={props.name}
            enableTitle={props.enableTitle}
            disableTitle={props.disableTitle}
            title={props.title}
          />
        }
        onCancel={() => {}}
        onConfirm={mutate}
        confirmText={props.type === "enable" ? "Enable" : "Disable"}
        cancelText={"Cancel"}
        classNames="w-[95vw] lg:w-[45vw]"
        loading={isLoading}
      />
      <Switch
        onClick={() => setIsFeedbackModalOpen(true)}
        checked={checked}
        onChange={() => {}}
      />
    </div>
  );
};

interface FeedbackModalProps {
  updateUrl: string;
  closeModal: () => void;
  type: "enable" | "disable";
  name: string;
  enableTitle?: string;
  disableTitle?: string;
  title?: string;
}

const ActiveModal = (props: FeedbackModalProps) => {
  const {
    enableTitle = "All Products under this category will become visible to the customers.",
    disableTitle = "All Products under this category will no longer be visible to the customers.",
    title = "Category -",
  } = props;
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-bold text-center text-[#737373] text-xl">
          {props.type === "enable" ? "Enable" : "Disable"} {title}
          <span className="text-[#FA0303]">{props.name}</span> ?
        </h1>
      </div>
      <p className="text-[#737373] text-lg text-justify">
        {props.type === "enable" ? enableTitle : disableTitle}
      </p>
    </div>
  );
};

export default ActiveDialog;
