module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/exams/'
      : '/'
  }
// git commit -m 'adding dist subtree'
// git subtree push --prefix dist origin gh-pages