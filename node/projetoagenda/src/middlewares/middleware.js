exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Esté é o valor da variável local";
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkSrfError = (err, req, res, next) => {
  if (err) {
    return res.render("404");
  }

  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
