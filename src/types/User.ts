export interface User {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  phone: string
  login: {
    uuid: string
  }
  picture: {
    thumbnail: string
  }
}