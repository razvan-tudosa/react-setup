
export const getCoolStatus = () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ cool: true })
    }, 1000)
  })

  return p
}
