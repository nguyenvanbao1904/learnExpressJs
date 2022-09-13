class SiteController {
  // get home
  index(req, res) {
    res.render("home");
  }
}

export default new SiteController();
