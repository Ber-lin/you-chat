var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";
import WindiCSS from "vite-plugin-windicss";
import { BlhxProxyConfig } from "./config/proxy.config";
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var command = _a.command, mode = _a.mode;
    return {
        server: {
            host: "0.0.0.0",
            port: 8000,
            proxy: __assign({}, BlhxProxyConfig),
        },
        plugins: [
            react(),
            ViteAliases({
                prefix: "@/",
            }),
            WindiCSS(),
            createHtmlPlugin({
                inject: {
                    data: {
                        icon: '光的化身.jpg',
                        title: 'You-Chat'
                    }
                }
            }),
        ],
    };
});
