import { log } from "console";
import { ProxyOptions } from "vite";

const globalTarget = "http://localhost:3000";
const globalPrefix = "/v1";

const useProxyFactory = (
  name = "/api",
  target = "",
  prefix = "",
  replace = true
) => {
  return {
    target: `${target}${prefix}`,
    rewrite: (path: string) => {
      const res = path.replace(replace ? name : "", "");
      log(`http: ${path} => ${target}${prefix}${res}`);
      return res;
    },
  };
};

const proxyConfig: Record<string, string | ProxyOptions> = {
  "/api-v1": useProxyFactory("/api-v1", globalTarget, globalPrefix, true),
  "/userAvatar": useProxyFactory("/userAvatar", globalTarget, "", false),
  "/userHeader": useProxyFactory("/userHeader", globalTarget, "", false),
};

log(proxyConfig);
log("Proxy 配置成功");
export { proxyConfig };
