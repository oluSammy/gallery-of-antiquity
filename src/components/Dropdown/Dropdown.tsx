"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./styles.css";

interface Props {
  DropdownContent: React.ReactNode;
  DropdownTrigger: React.ReactNode;
  isActive?: boolean;
}

const Dropdown = (props: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options" className="cursor-pointer ">
          {props.DropdownTrigger}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent"
          sideOffset={5}
          align="start"
        >
          {props.DropdownContent}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;

/**
 <DropdownMenu.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
 */
