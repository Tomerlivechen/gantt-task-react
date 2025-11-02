import React, { useRef, useEffect, useState } from "react";
import { Task } from "../../types/public-types";
import { BarTask } from "../../types/bar-task";
import styles from "./tooltip.module.css";

export type TooltipProps = {
  task: BarTask;
  arrowIndent: number;
  rtl: boolean;
  svgContainerHeight: number;
  svgContainerWidth: number;
  svgWidth: number;
  headerHeight: number;
  taskListWidth: number;
  scrollX: number;
  scrollY: number;
  fontSize: string;
  fontFamily: string;
  mouse: { x: number; y: number };
  TooltipContent: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
  }>;
};

export const Tooltip: React.FC<TooltipProps> = ({
  task,
  rtl,
  svgContainerHeight,
  svgContainerWidth,
  scrollX,
  scrollY,
  arrowIndent,
  fontSize,
  fontFamily,
  headerHeight,
  taskListWidth,
  TooltipContent,
  mouse,
}) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [relatedX, setRelatedX] = useState(0);
  const [relatedY, setRelatedY] = useState(0);

  useEffect(() => {
    if (tooltipRef.current && mouse) {
      const tooltipHeight = tooltipRef.current.offsetHeight * 1.1;
      const tooltipWidth = tooltipRef.current.offsetWidth * 1.1;

      // Position tooltip near the mouse
      let newX = mouse.x + 12;
      let newY = mouse.y + 12;

      // Prevent overflow horizontally
      if (newX + tooltipWidth > svgContainerWidth + taskListWidth) {
        newX = svgContainerWidth + taskListWidth - tooltipWidth - 5;
      }

      // Prevent overflow vertically
      if (newY + tooltipHeight > svgContainerHeight) {
        newY = svgContainerHeight - tooltipHeight - 5;
      }

      setRelatedX(newX);
      setRelatedY(newY);
    }
  }, [mouse, svgContainerWidth, svgContainerHeight, taskListWidth]);

  return (
    <div
      ref={tooltipRef}
      className={
        relatedX
          ? styles.tooltipDetailsContainer
          : styles.tooltipDetailsContainerHidden
      }
      style={{ left: relatedX, top: relatedY, position: "absolute" }}
    >
      <TooltipContent task={task} fontSize={fontSize} fontFamily={fontFamily} />
    </div>
  );
};

export const StandardTooltipContent: React.FC<{
  task: Task;
  fontSize: string;
  fontFamily: string;
}> = ({ task, fontSize, fontFamily }) => {
  const style = { fontSize, fontFamily };
  const DayInMS = 86400000;

  return (
    <div className={styles.tooltipDefaultContainer} style={style}>
      <b style={{ fontSize: fontSize + 6 }}>
        {`${task.name}: ${task.start.getDate()}-${
          task.start.getMonth() + 1
        }-${task.start.getFullYear()} - ${
          new Date(task.end.getTime() - DayInMS).getDate()
        }-${new Date(task.end.getTime() - DayInMS).getMonth() + 1}-${
          new Date(task.end.getTime() - DayInMS).getFullYear()
        }`}
      </b>

      {task.end.getTime() - task.start.getTime() !== 0 && (
        <p className={styles.tooltipDefaultContainerParagraph}>
          {`Duration: ${~~((task.end.getTime() - task.start.getTime()) / DayInMS)} day(s)`}
        </p>
      )}

      {!!task.progress && (
        <p className={styles.tooltipDefaultContainerParagraph}>
          {`Progress: ${task.progress} %`}
        </p>
      )}
    </div>
  );
};
