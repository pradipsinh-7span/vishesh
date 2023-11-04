interface Columns {
  width?: Record<string, string | number>;
  count?: string;
  divider?: {
    width?: Record<string, string | number>;
    style?: string;
    color?: InfiniteNestedObjects<string, string>;
  };
  gap?: Record<string, string | number>;
}

interface InfiniteNestedObjects<T, U> {
  [x: T]: U | InfiniteNestedObjects<T, U>;
}
