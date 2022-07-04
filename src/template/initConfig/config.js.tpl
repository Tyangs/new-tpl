import newTpl from 'new-tpl';

newTpl({
  page: {
    template: './template/page',
    outDir: '../../src/pages'
  },
  com: {
    template: './template/com',
    outDir: '../../src/components'
  }
})