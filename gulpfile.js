const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify= require('gulp-uglify');
const obsfucate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilarSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./build/styles'))
}

function comprimirJs(){
    return gulp.src('./source/js/*')
        .pipe(uglify())
        .pipe(obsfucate())
        .pipe(gulp.dest('./build/js'))
}

function comprimirImg(){
    return gulp.src('./source/images/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 70, progressive: true}),
            imagemin.optipng({optimizationLevel: 2}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./build/images'))
}



exports.default = gulp.series(compilarSass, comprimirJs, comprimirImg)