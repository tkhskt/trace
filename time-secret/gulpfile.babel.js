import gulp from 'gulp';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

// 出力先

// FIXME gulp.taskのタスク定義のやり方は古いらしい

// 圧縮前と圧縮後のディレクトリを定義

const srcDir = 'src';
const dstDir = './dist/assets';

gulp.task('copy', () => {
  return gulp
    .src(srcDir + '/index.html')
    .pipe(plumber())
    .pipe(gulp.dest(dstDir))
    .pipe(browserSync.stream());
});

// sassをコンパイルしてcss圧縮
gulp.task('sass', () => {
  return gulp
    .src('./src/assets/sass/*.sass', {
      sourcemaps: true,
    })
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' })) // 圧縮
    .pipe(
      postcss([
        autoprefixer({
          cascade: false,
        }),
      ])
    )
    .pipe(
      gulp.dest(dstDir + '/css', {
        sourcemaps: true,
      })
    )
    .pipe(browserSync.stream());
});

// いろんな拡張子を圧縮するためのオプション
const imageminOption = [
  pngquant({ speed: 1 }),
  imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256,
  }),
  imagemin.optipng(),
  imagemin.svgo(),
];

// 画像圧縮
gulp.task('imagemin', () => {
  const srcGlob = srcDir + '/assets/img/*.+(jpg|jpeg|png|gif|svg)'; // 元画像
  const dstGlob = dstDir + '/img'; // 圧縮先
  return gulp.src(srcGlob).pipe(plumber()).pipe(imagemin(imageminOption)).pipe(gulp.dest(dstGlob));
});

gulp.task('webpack', () => {
  return gulpWebpack(webpackConfig, webpack)
    .pipe(plumber())
    .pipe(gulp.dest(dstDir + '/js'));
});

gulp.task('watch', () => {
  gulp.watch('./src/assets/sass/*.sass', gulp.task('sass'));
  gulp.watch('./src/index.html').on('change', browserSync.reload);
  done();
});

gulp.task('serve', () => {
  browserSync.init({
    server: dstDir,
  });
});

// webpack追加
gulp.task(
  'default',
  gulp.series('copy', 'sass', 'imagemin', 'webpack', 'serve', 'watch', function (done) {
    done();
  })
);
