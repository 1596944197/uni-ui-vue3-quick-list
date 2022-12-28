export type IconStatus = 'noMore' | 'loading'

export type DomainsType = (Partial<{
  disabled: boolean,
  subTitle: string
  checked: boolean
  showCheckbox: boolean
}> & {
  key: string,
  title: string,
} & {
    [P in keyof any]: any
  })[]