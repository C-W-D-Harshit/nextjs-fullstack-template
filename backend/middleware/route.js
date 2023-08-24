exports.frontendRouteController = (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  const userRole = req.cookies.role || "user";

  if ((req.path === "/auth/login" || req.path === "/auth/signup") && token) {
    return res.redirect("/");
  }

  if (req.path.startsWith("/admin") && userRole !== "admin") {
    return res.redirect("/auth/login");
  }

  next();
};
