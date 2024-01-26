import React, { useState } from "react";
import styles from "./css/NestedListCompImpl.module.css";
import NestedListComponent from "../components/NestedListComponent/NestedListComponent";

interface NestedListCompImplProps {}

const NestedListCompImpl: React.FC<NestedListCompImplProps> = (props) => {
  const { containerStyle } = styles;
  const data: any = [
    {
      name: "Applications",
      children: [
        {
          name: "Adam",
          children: [{ name: "Movies" }, { name: "Music" }],
        },
        {
          name: "Ghost",
          children: [{ name: "Stories" }, { name: "Books" }],
        },
      ],
    },
    {
      name: "libaray",
      children: [
        {
          name: "Shared",
          children: [{ name: "Coding" }, { name: "Reading" }],
        },
        {
          name: "Personal",
          children: [{ name: "Games" }, { name: "Vidoes" }],
        },
      ],
    },
    {
      name: "System",
      children: [
        {
          name: "Sub 2-1",
          children: [{ name: "Sub 2-1-1" }, { name: "Sub 2-1-2" }],
        },
        {
          name: "Sub 2-2",
          children: [{ name: "Sub 2-2-1" }, { name: "Sub 2-2-2" }],
        },
      ],
    },
    {
      name: "Users",
      children: [
        {
          name: "Sub 2-1",
          children: [{ name: "Sub 2-1-1" }, { name: "Sub 2-1-2" }],
        },
        {
          name: "Sub 2-2",
          children: [{ name: "Sub 2-2-1" }, { name: "Sub 2-2-2" }],
        },
      ],
    },
  ];
  return (
    <div className={containerStyle}>
      <NestedListComponent data={data} />
    </div>
  );
};

export default NestedListCompImpl;
