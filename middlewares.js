import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
 res.locals.siteName = "heTube";
 res.locals.routes = routes;
 next();
};