var src  = './src';
var dest = './public';

module.exports = {
  browserSync: {
    proxy: 'localhost:3000',
    files: [dest + "/**"],
    port: 7000
  },
  scripts: {
    src: src + '/scripts/**/*.js'
  },
  markup: {
    src: src + '/markup/**/*.jade',
    dest: dest
  },
  styles: {
    src: src + '/styles/*.scss',
    dest: dest + '/assets/css'
  }
};