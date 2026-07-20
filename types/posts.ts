export interface user {
  id: string
  name: string
  username: string
  email: string
  company: { name: string }
}

export interface oneUser {
  company: { name: string }
}

export interface post {
  id: string
  title: string
  body: string
  user: user
}

export interface GetPostData {
  user: oneUser
}

export interface GetPostVariables {
  id: string
}

export interface pagesInfo {
  first: {
    page: number
    limit: number
  }
  prev: {
    page: number
    limit: number
  }
  next: {
    page: number
    limit: number
  }
  last: {
    page: number
    limit: number
  }
}
export interface postsProps {
  posts: {
    data: post[]
    links: pagesInfo
  }
}
