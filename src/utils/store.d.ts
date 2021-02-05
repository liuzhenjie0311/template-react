interface Store {
  num: any
}
interface Action {
  type: string
  data?: any
}

export {
  Store,
  Action
}