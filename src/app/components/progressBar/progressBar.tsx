import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import styles from "./progressBar.module.css";

type ProgressBarProps = {
  max: number;
  value: number;
  step: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function ProgressBar({ max, value, step, onChange }: ProgressBarProps) {
  return (
    <input
      className={styles.bar__playerProgress}
      type="range"
      min="0"
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
  );
}
