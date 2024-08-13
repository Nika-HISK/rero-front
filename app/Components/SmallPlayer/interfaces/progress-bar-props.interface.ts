export interface ProgressBarPropsInterface {
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressRef: React.RefObject<HTMLInputElement>;
}
