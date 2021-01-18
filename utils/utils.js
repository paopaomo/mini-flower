const convertArrayToString = (data) => {
  return data.map(item => item.name).join('/')
}

export {
  convertArrayToString
}