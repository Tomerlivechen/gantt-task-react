import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth,locale }) => {
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
          &nbsp; {locale === "he" ? "ערוץ מדיה" : "Channel Type"}
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
          &nbsp;{locale === "he" ? "סוג קמפיין" : "Campaign Type"}
          
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
          &nbsp;{locale === "he" ? "תאריך עלייה" : "Start Date"}  
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
          &nbsp;{locale === "he" ? "תאריך ירידה" : "End Date"}  
        </div>
      </div>
    </div>
  );
};