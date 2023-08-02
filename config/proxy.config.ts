export const BlhxProxyConfig = {
  "/blhx-api": {
    target: "http://192.168.0.100:3000",
    rewrite: (path: string) => {
      const p = path.replace("/blhx-api", "");
      console.log(`${path} => http://192.168.0.100${p}`);
      return p;
    },
  },
};
export const BaseProxyConfig = {
  "/api1": {
    target: "http://192.168.0.100:3000",
    rewrite: (path: string) => {
      const p = path.replace("/api1", "");
      console.log(`${path} => http://192.168.0.100${p}`);
      return p;
    },
  },
};
