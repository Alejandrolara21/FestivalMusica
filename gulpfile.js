const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat')

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');


// Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

function css() {
    return src("./src/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(),cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest("./build/css"));
}

function mincss() {
    return src("./src/scss/app.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest("./build/css"));
}

function watchArchivo() {
    watch("./src/scss/**/*.scss", css);
    watch("./src/js/**/*", javascript)
}


function imagenes() {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagenes Minificadas' }));
}

function versionWebp() {
    return src('src/img/**/*')
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagenes Webp' }))
}

function javascript() {
    return src('src/js/**/*')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./build/js'))
}

exports.css = css;

exports.mincss = mincss;

exports.watchArchivo = watchArchivo;

exports.imagenes = imagenes;



exports.default = series(css, javascript, imagenes, versionWebp, watchArchivo)