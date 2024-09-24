export interface HeaderInputSearchInterface {
  placeholder?: string;
  onSearch: (value: string) => void;
  results?: string[] | undefined;
  onSelectResult?: (result: string) => void;
}
