const target = "http://192.168.0.100:3000";
export const BlhxProxyConfig = {
  "/blhx-api": {
    target,
    rewrite: (path: string) => {
      const p = path.replace("/blhx-api", "");
      console.log(`${path} => ${target}${p}`);
      return p;
    },
  },
};
export const BaseProxyConfig = {
  "/api1": {
    target,
    rewrite: (path: string) => {
      const p = path.replace("/api1", "");
      console.log(`${path} => ${target}${p}`);
      return p;
    },
  },
  "/userAvatar": {
    target: "http://192.168.0.100:3000",
    rewrite: (path: string) => {
      const p = path;
      console.log(`${path} => ${target}${p}`);
      return p;
    },
  },
};
