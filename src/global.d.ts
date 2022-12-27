declare type AnyArray = any[]
declare type AnyObj = {
  [P in keyof any]: any
} & Object