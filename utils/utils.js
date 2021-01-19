const convertArrayToNameString = (data) => {
  return data.map(item => item.name).join('/')
}

const convertArrayToInfo = (data) => {
  return data.map(item => {
    return {
      img: item.avatars ? item.avatars.large : '',
      name: item.name
    }
  })
}

export {
  convertArrayToNameString,
  convertArrayToInfo
}