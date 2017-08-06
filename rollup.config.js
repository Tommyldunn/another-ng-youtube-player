export default {
    entry: './dist/modules/another-ng-youtube-player.es5.js',
    dest: './dist/bundles/another-ng-youtube-player.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.ngYoutubePlayer',
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx'
    },
    onwarn: () => { return }
}
