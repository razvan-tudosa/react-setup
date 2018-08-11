export const makeActionCreator = (type, ...argNames) => (...args) => {
  const payload = {}

  argNames.forEach((name, ix) => {
    payload[name] = args[ix]
  })

  return ({ type, payload })
}
