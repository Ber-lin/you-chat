export const BlhxProxyConfig = {
  "/blhx-api": {
    target: "http://192.168.0.100",
    rewrite: (path: string) => {
      const p = path.replace("/blhx-api", "");
      console.log(`${path} => http://192.168.0.100${p}`);
      return p;
    },
  },
};
export const BaseProxyConfig = {
  "/api": {
    target: "http://192.168.0.100",
    rewrite: (path: string) => {
      const p = path.replace("/api", "");
      console.log(`${path} => http://192.168.0.100${p}`);
      return p;
    },
  },
};
