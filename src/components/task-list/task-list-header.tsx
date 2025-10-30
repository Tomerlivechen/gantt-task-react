import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2,
        }}
      >
        {/* Name */}
        <div
          className={styles.ganttTable_HeaderItem}
          style={{ minWidth: rowWidth }}
        >
          &nbsp;Name
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{ height: headerHeight * 0.5, marginTop: headerHeight * 0.2 }}
        />

        {/* Prop (NEW) */}
        <div
          className={styles.ganttTable_HeaderItem}
          style={{ minWidth: rowWidth }}
        >
          &nbsp;Prop
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{ height: headerHeight * 0.5, marginTop: headerHeight * 0.25 }}
        />

        {/* From */}
        <div
          className={styles.ganttTable_HeaderItem}
          style={{ minWidth: rowWidth }}
        >
          &nbsp;From
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{ height: headerHeight * 0.5, marginTop: headerHeight * 0.25 }}
        />

        {/* To */}
        <div
          className={styles.ganttTable_HeaderItem}
          style={{ minWidth: rowWidth }}
        >
          &nbsp;To
        </div>
      </div>
    </div>
  );
};