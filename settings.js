module.exports = {
  paths: {
    base: 'S_G08_U01_05',
    jsFolder: 'js',
    cssFolder: 'css'
  },
  content: [
    { template: 'intro.hbs' },
    { template: 'goals.hbs' },
    { template: 'content.hbs', size: 15 },
    { template: 'summary.hbs' },
    { template: 'tasks.hbs' }
  ]
};