import runApp from "gourmet-react-router";
import routes from "./routes";
import data from "./data";

export default function() {
  return runApp({
    routes: routes,
    contextProps: {
      data: data
    }
  });
}
