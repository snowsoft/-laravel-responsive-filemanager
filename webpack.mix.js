var mix = require("laravel-mix");

mix.options({ processCssUrls: false });

mix.less("src/assets/less/style.less", "resources/tmp/css/style.css");
mix.less(
    "node_modules/bootstrap-lightbox/less/bootstrap-lightbox.less",
    "resources/tmp/css/lib.css"
);

mix.styles(
    [
        "node_modules/bootstrap/docs/assets/css/bootstrap.css",
        "node_modules/bootstrap/docs/assets/css/bootstrap-responsive.css",
        "node_modules/bootstrap-modal/css/bootstrap-modal.css",
        "node_modules/jquery-contextmenu/dist/jquery.contextMenu.css",
        "node_modules/tui-color-picker/dist/tui-color-picker.css",
        "node_modules/tui-image-editor/dist/tui-image-editor.css",
        "resources/tmp/css/lib.css",
        "resources/tmp/css/style.css"
    ],
    "resources/filemanager/css/style.css"
);

mix.styles(
    "src/assets/less/rtl-style.less",
    "resources/filemanager/css/rtl-style.css"
);

mix.scripts(
    [
        "node_modules/bootstrap/js/bootstrap-transition.js",
        "node_modules/bootstrap/js/bootstrap-affix.js",
        "node_modules/bootstrap/js/bootstrap-dropdown.js",
        "node_modules/bootstrap/js/bootstrap-alert.js",
        "node_modules/bootstrap/js/bootstrap-button.js",
        "node_modules/bootstrap/js/bootstrap-collapse.js",
        "node_modules/bootstrap/js/bootstrap-dropdown.js",
        "node_modules/bootstrap/js/bootstrap-modal.js",
        "node_modules/bootstrap/js/bootstrap-tooltip.js",
        "node_modules/bootstrap/js/bootstrap-popover.js",
        "node_modules/bootstrap/js/bootstrap-scrollspy.js",
        "node_modules/bootstrap/js/bootstrap-tab.js",
        "node_modules/bootstrap/js/bootstrap-typeahead.js",
        "node_modules/bootstrap-lightbox/js/bootstrap-lightbox.js",
        "node_modules/jquery-contextmenu/dist/jquery.contextMenu.js",
        "node_modules/vanilla-lazyload/dist/lazyload.js",
        "node_modules/jquery-scrollstop/jquery.scrollstop.js",
        "node_modules/bootbox.js/bootbox.js",
        "node_modules/jquery-touchswipe/jquery.touchSwipe.js",
        "node_modules/bootstrap-modal/js/bootstrap-modalmanager.js",
        "node_modules/bootstrap-modal/js/bootstrap-modal.js",
        "node_modules/clipboard/dist/clipboard.js",
        "node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js"
    ],
    "resources/filemanager/js/plugins.js"
);

mix.scripts(
    [
        "node_modules/fabric/dist/fabric.js",
        "node_modules/tui-code-snippet/dist/tui-code-snippet.js",
        "node_modules/tui-color-picker/dist/tui-color-picker.js",
        "node_modules/tui-image-editor/dist/tui-image-editor.js"
    ],
    "resources/filemanager/js/tui-image-editor.js"
);

mix.copy('node_modules/blueimp-file-upload/js', 'resources/filemanager/js/');
mix.copy('node_modules/blueimp-file-upload/css', 'resources/filemanager/css/');

mix.scripts(
    'src/assets/js/include.js',
    'resources/filemanager/js/include.js'
);

mix.scripts(
    'src/assets/js/plugin.js',
    'resources/filemanager/plugin.min.js'
);

mix.scripts(
    'src/assets/js/responsivefilemanager_plugin.js',
    'resources/tinymce/plugins/responsivefilemanager/plugin.min.js'
);

mix.scripts(
    'src/assets/js/modernizr.custom.js',
    'resources/filemanager/js/modernizr.custom.js'
);

mix.scripts(
    'src/assets/js/load_more.js',
    'resources/filemanager/js/load_more.js'
);
