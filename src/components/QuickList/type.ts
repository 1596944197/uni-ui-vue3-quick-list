export type IconStatus = 'noMore' | 'loading'

export type DomainsType = ({
  key: string,
  disabled: boolean,
  title: string,
  subTitle: string
  checked: boolean
} & AnyObj)[]