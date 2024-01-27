/* eslint-disable react/no-unescaped-entities */
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";

type Props = {
  contents: {
    triggerId: string;
    content: React.ReactNode;
    triggerTitle: React.ReactNode;
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
      {/* <Tabs.Content className="TabsContent" value="tab1">
        <p className="Text">
          Make changes to your account here. Click save when you're done.
        </p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Save changes</button>
        </div>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <p className="Text">
          Change your password here. After saving, you'll be logged out.
        </p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="currentPassword">
            Current password
          </label>
          <input className="Input" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="newPassword">
            New password
          </label>
          <input className="Input" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className="Input" id="confirmPassword" type="password" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Change password</button>
        </div>
      </Tabs.Content> */}
    </Tabs.Root>
  );
};

export default TabComponent;
