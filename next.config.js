module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }Maintainers of the repository can add the "hacktoberfest" topic to their repository if they wish to participate.

    return config
  }cvv
}
