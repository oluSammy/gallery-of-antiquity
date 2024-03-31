/* eslint-disable react/no-unescaped-entities */
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";

type Props = {
  contents: {
    triggerId: string;
    content: React.ReactNode;
    triggerTitle: React.ReactNode;
    onClick?: () => void;
  }[];
};

const TabComponent = (props: Props) => {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="border-b-2 border-[#C6C2DE] mb-6" aria-label="">
        {props.contents.map((trigger) => (
          <Tabs.Trigger
            className="mr-8 TabsTrigger pb-4 cursor-pointer text-lg font-normal text-[#6E6893]"
            key={trigger.triggerId}
            value={trigger.triggerId}
            onClick={trigger.onClick}
          >
            {trigger.triggerTitle}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {props.contents.map((content) => (
        <Tabs.Content
          className="TabsContent"
          key={content.triggerId}
          value={content.triggerId}
        >
          {content.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabComponent;
