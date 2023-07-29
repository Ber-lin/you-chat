export const BlhxProxyConfig = {
  "/api-blhx": {
    target: "http://192.168.0.100",
    rewrite: (path: string) => {
      const p = path.replace("/api-blhx", "");
      console.log(`${path} => http://192.168.0.100${p}`);
      return p;
    },
  },
};
