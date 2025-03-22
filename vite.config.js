import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                utils: resolve(__dirname, 'utils.js'),
                main: resolve(__dirname, 'index.html'),
                counter: resolve(__dirname, 'counter/index.html'),
                bml_maker: resolve(__dirname, 'bml_maker/index.html'),
                data_uri_maker: resolve(__dirname, 'data_uri_maker/index.html'),
                bm_collect: resolve(__dirname, 'bm_collect/index.html'),
                lorem: resolve(__dirname, 'lorem/index.html'),
                blank: resolve(__dirname, 'blank/index.html'),
            },
        },
    },
});