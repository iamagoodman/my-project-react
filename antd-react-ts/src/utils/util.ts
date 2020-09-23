import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export function isNotEmpty(str?: string | number): boolean {
  return str !== undefined && str !== null && !/^[\s\n]*$/g.test(String(str));
}