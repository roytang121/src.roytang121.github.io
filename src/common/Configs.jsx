const commonConfig = {
  blog_root: 'public/blogs'
}

export default {
  prod: {
    ...commonConfig
  },
  dev: {
    ...commonConfig
  }
}
