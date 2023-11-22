import React, { FC } from "react";
import { FaChevronDown } from "react-icons/fa6";
import * as RadixAccordion from "@radix-ui/react-accordion";
import classNames from "classnames";

type AccordionItemProps = {
  title: string | React.JSX.Element;
  value: string;
  content: React.JSX.Element | React.JSX.Element[];
};

export type AccordionCommonProps = {
  items: AccordionItemProps[];
  classNames?: {
    wrapper?: string;
    item?: string;
    trigger?: string;
    content?: string;
  };
};

export type AccordionProps =
  | (AccordionCommonProps & {
      type: "single";
      value?: string;
      onValueChange?: (value: string) => void;
    })
  | (AccordionCommonProps & {
      type: "multiple";
      value?: string[];
      onValueChange?: (value: string[]) => void;
    });

const Accordion: FC<AccordionProps> = ({
  type,
  value,
  items,
  classNames,
  onValueChange,
}) => (
  <RadixAccordion.Root
    className={classNames?.wrapper || ""}
    type={type}
    onValueChange={onValueChange as any}
    value={value as any}
    collapsible
  >
    {items.map((item, index) => (
      <AccordionItem
        value={item.value}
        key={item.value}
        className={classNames?.item}
      >
        <AccordionTrigger className={classNames?.trigger}>
          {item.title}
        </AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </RadixAccordion.Root>
);

const AccordionItem = React.forwardRef<any, any>(function AccordionItem(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <RadixAccordion.Item
      className={classNames(
        "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </RadixAccordion.Item>
  );
});

const AccordionTrigger = React.forwardRef<any, any>(function AccordionTrigger(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className={classNames(
          "group flex flex-1 cursor-pointer items-center justify-between outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <FaChevronDown className="text-gray-10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

const AccordionContent = React.forwardRef<any, any>(function AccordionContent(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <RadixAccordion.Content
      className={classNames(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </RadixAccordion.Content>
  );
});

export default Accordion;
