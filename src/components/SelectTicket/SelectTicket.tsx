import { formatNumber } from "@/utils/formatnumber";
import React from "react";

interface Props {
  value: number;
  setValue: (_: number) => void;
  price: number;
  alias?: string;
  isFree?: boolean;
  selectable?: boolean;
  name: string;
  active?: boolean;
  isProduct?: boolean;
}

const btnClassName =
  "flex items-center justify-center h-5 w-5 rounded-full border cursor-pointer";

const SelectTicket = ({ isProduct = false, ...props }: Props) => {
  return (
    <div className="border-b pb-3 flex justify-between items-center my-6">
      <div>
        <p className="text-black font-bold text-2xl inline-block mr-3">
          {props.name}
        </p>
        {props.alias && (
          <span className="text-[#777777] font-light  ">({props.alias})</span>
        )}
      </div>
      <div
        className={`flex items-center sans ${props.active ? "" : "opacity-40"}`}
      >
        <p className="mr-2 text-[#474848] font-medium">
          {props.price === 0 ? (
            !isProduct ? (
              "Free"
            ) : (
              ""
            )
          ) : (
            <span>&#x20A6; {formatNumber(props.price)}</span>
          )}
        </p>
        <div className="flex items-center justify-center">
          <button
            className={`flex items-center justify-center h-5 w-5 rounded-full border  cursor-pointer ${
              props.active ? "" : "cursor-not-allowed"
            }`}
            style={{ border: "0.5px solid #B4B4B4", color: "#B4B4B4" }}
            onClick={() => {
              if (props.value > 0 && props.active) {
                props.setValue(props.value - 1);
              }
            }}
          >
            -
          </button>
          <input
            className={`mx-3 w-12 rounded-md px-2 py-1 text-center ${
              props.active ? "" : "cursor-not-allowed"
            }`}
            style={{ border: "0.5px solid #B4B4B4", color: "#B4B4B4" }}
            type="number"
            value={props.value}
            min={0}
            onChange={(e) => {
              if (props.active) {
                props.setValue(parseInt(e.target.value));
              }
            }}
          />
          <button
            className={`${btnClassName} ${
              props.active ? "" : "cursor-not-allowed"
            }`}
            style={{ border: "0.5px solid #B4B4B4", color: "#B4B4B4" }}
            onClick={() => {
              if (props.active) {
                props.setValue(props.value + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTicket;
