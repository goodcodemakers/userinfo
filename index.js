const express = require("express");
const app = express();
const ejs = require("ejs");
const { sequelize, Userinfo, Op } = require("./database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(function () {
  console.log("연결완료");
});

app.set("view engine", "ejs");
app.use(express.static("public"));

//홈
app.get("/", async function (req, res) {
  const user = await Userinfo.findAll({
    order: [["id", "DESC"]],
  });
  //   console.log(JSON.stringify(uesr, null, 2));
  res.render("pages/index.ejs", { user });
});

app.post("/create", async function (req, res) {
  let name = req.body.name;
  let age = req.body.age;
  let sex = req.body.sex;
  let contact = req.body.contact;
  await Userinfo.create({ name: name, age: age, sex: sex, contact: contact });
  res.redirect("/");
});
app.post("/delete/:id", async function (req, res) {
  await Userinfo.destroy({
    where: {
      id: req.params.id,
    },
  });
});
app.post("/search", async function (req, res) {
  const wordSplit = req.body.search;
  const user = await Userinfo.findAll({
    where: { name: { [Op.like]: "%" + wordSplit + "%" } },
    order: [["id", "DESC"]],
  });
  console.log(wordSplit);
  res.render("pages/search.ejs", { user });
});

//포트연결
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
