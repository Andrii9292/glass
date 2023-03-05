'use strict';

const gulp = require('gulp');
const { src, dest, series, parallel, watch } = require('gulp');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const del = require('del');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');
const webp = require('gulp-webp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

const project_folder = 'dist';
const source_folder = 'src';

const path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/',
        img: project_folder + '/images/',
        js: project_folder + '/js/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/**/style.sass',
        img: source_folder + '/images/*.*',
        js: source_folder + '/js/*.js',
        fonts: source_folder + '/fonts/*.ttf',
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/**/*.sass',
        img: source_folder + '/images/*.*',
        js: source_folder + '/js/*.js',
    },
    clean: './' + project_folder + '/'
}

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
    });
}

function clean() {
    return del(path.clean);
}

function html() {
    return src('src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'))
        .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 5 versions'], cascade: true }))
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js() {
    return src(path.src.js)
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function images() {
    return src(path.src.img)
        .pipe(webp({ quality: 70 }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream());
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream());
}

function watchFiles() {
    watch(path.watch.html, html);
    watch(path.watch.css, css);
    watch(path.watch.js, js);
    watch(path.watch.img, images);
}

const build = series(clean, parallel(js, css, html, images, fonts));
const dev = series(build, parallel(watchFiles, browserSync));

exports.build = build;
exports.dev = dev;
exports.default = dev;
