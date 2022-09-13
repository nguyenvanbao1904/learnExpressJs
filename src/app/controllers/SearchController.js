class SearchController {
  // get search
  index(req, res) {
    res.render("search");
  }
  // get search :slug
  show(req, res) {
    res.send("new detail");
  }
}

export default new SearchController();
