const blogSchema = require("../models/blog");
const userSchema = require("../models/user");

const blogCreate = async (req, res) => {
  try {
    const newblog = new blogSchema({
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.filename : "",
      userId: req.user.id,
    });
    newblog
      .save()
      .then(() =>
        res
          .status(201)
          .json({ message: "Blog Uploaded Successfully", isSuccess: true })
      )
      .catch((error) => {
        res.send({ error, isSuccess: false });
      });
  } catch (error) {
    res.json({ message: error.message, isSuccess: false });
  }
};

const getAllblog = async (req, res) => {
  try {
    const { page = 1 } = req.body;
    var perPage = req.body.perPage ? req.body.perPage : 25;
    const data = await blogSchema
      .find(req.body)
      .populate("userId", "id name email")
      .skip(perPage * page - perPage)
      .limit(perPage)
      .sort({ _id: -1 });
    const count = await blogSchema.find(req.body).count();
    res.status(201).send({
      message: "List of blogs",
      data,
      current: page,
      totalCount: count,
      pages: Math.ceil(count / perPage),
      isSuccess: true,
    });
  } catch (error) {
    res.send({ error, isSuccess: false });
  }
};

const getAllAuthor = async (req, res) => {
  try {
    const { page = 1 } = req.body;
    var perPage = req.body.perPage ? req.body.perPage : 25;
    const data = await userSchema
      .find(req.body)
      // .populate("userId", "id name email")
      .skip(perPage * page - perPage)
      .limit(perPage)
      .sort({ _id: -1 });
    const count = await userSchema.find(req.body).count();
    res.status(201).send({
      message: "List of Author",
      data,
      current: page,
      totalCount: count,
      pages: Math.ceil(count / perPage),
      isSuccess: true,
    });
  } catch (error) {
    res.send({ error, isSuccess: false });
  }
};

const blogById = async (req, res) => {
  try {
    const _id = req.query.id;
    console.log('object :>> ', req.query);
    const getBlog = await blogSchema
      .findById(_id)
      .populate("userId", "id name email");
    if (!getBlog) {
      res.send({ messgae: "Invalid blog Id", isSuccess: false });
    } else {
      res.send({ data: getBlog, isSuccess: true });
    }
  } catch (error) {
    res.send({ messgae: "Invalid blog Id", isSuccess: false });
  }
};

const blogUpdate = async (req, res) => {
  try {
    const _id = req.body.id;
    const { content, title } = req.body;
    const blogUpdate = await blogSchema.findByIdAndUpdate(
      _id,
      { title, content },
      {
        new: true,
        runValidators: true,
      }
    );
    if (blogUpdate == null) {
      res.send({ message: "Invalid blog Id", isSuccess: false });
    } else {
      res.send({ data: blogUpdate, isSuccess: true });
    }
  } catch (error) {
    res.send({ error, isSuccess: false });
  }
};
const getUserBlog = async (req, res) => {
  try {
    const userId = req.params.id;

    const userBlog = await blogSchema.find({ userId });
    const userdetails = await userSchema.findById(userId);
    res.send({ data: { userdetails, userBlog }, isSuccess: true });
  } catch (error) {
    res.send({ error: "No Blog Found", isSuccess: false });
  }
};

const blogDelete = async (req, res) => {
  try {
    const _id = req.query.id;
    console.log('_id :>> ', _id);
    let blogId = await blogSchema.findByIdAndDelete(_id);
    if (blogId) {
      res.send({ message: "Blog Deleted SuccessFully", isSuccess: true });
    } else {
      res.send({ error: "Blog Id is not correct", isSuccess: false });
    }
  } catch (error) {
    res.send({ error: "Blog Id is not correct", isSuccess: false });
  }
};

module.exports = {
  blogCreate,
  blogById,
  blogUpdate,
  blogDelete,
  getAllblog,
  getAllAuthor,
  getUserBlog,
};
