interface ErrorInt {
  reason: string;
  type: string;
}

export interface ErrorArrayInt extends Array<ErrorInt> {}
