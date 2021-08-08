const jsonServer = require("json-server");
const queryString = require("query-string");

const data = require("./db.json");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
const uniqueAndSlice = (arr, slice = 10) =>
  arr
    .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i)
    .slice(0, slice);
const lv2 = uniqueAndSlice(
  data.products.map((item) => {
    return {
      name: item.hierarchicalCategories.lvl2?.split(">")[2].trim(),
      level: 2,
    };
  })
);

const lv1 = (name) =>
  uniqueAndSlice(
    data.products
      .filter((item) => {
        const level0 = new RegExp(name);
        return level0.test(
          item.hierarchicalCategories.lvl1?.split(">")[0].trim()
        );
      })
      .map((item) => {
        return {
          name: item.hierarchicalCategories.lvl1,
          level: 1,
          // children:
          //   item.hierarchicalCategories.lvl2?.split(">")[1].trim() ===
          //     item.hierarchicalCategories.lvl1 && lv2,
        };
      })
  );
router.render = (req, res) => {
  const categories = uniqueAndSlice(
    data.products.filter((item) => {
      const level0 = new RegExp(item.hierarchicalCategories.lvl0);
      return level0.test(
        item.hierarchicalCategories.lvl1?.split(">")[0].trim()
      );
    })
  ).map((item) => {
    return {
      name: item.hierarchicalCategories.lvl0,
      level: 0,
      chidren: lv1(item.hierarchicalCategories.lvl0),
    };
  });

  res.jsonp({
    products: res.locals.data,
    categories,
  });
};
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
