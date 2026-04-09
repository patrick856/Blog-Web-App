import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;      

app.use(bodyParser.urlencoded({ extended: true }));

let blogs = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  res.render("index.ejs", { blogs: blogs });
});

app.get("/blogs/new", (req, res) => {
    res.render("addblog.ejs");
});

app.post("/blogs/new", (req, res) => {
    const { title, content } = req.body;

    const newBlog = {
        id: blogs.length + 1,
        title: title,
        content: content,
        date: new Date().toLocaleDateString()
    };

    blogs.push(newBlog);
    res.redirect("/blogs");
});

app.get("/blogs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(p => p.id === id);

    if (!blog) return res.status(404).send("blog not found");

    res.render("blog.ejs", { blog: blog });
});

app.get("/blogs/:id/edit", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(p => p.id === id);
    
    if (!blog) return res.status(404).send("blog not found");
    
    res.render("editblog.ejs", { blog: blog });
});

app.post("/blogs/:id/edit", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;
    const blog = blogs.find(p => p.id === id);
    
    if (blog) {
        blog.title = title;
        blog.content = content;
    }
    
    res.redirect(`/blogs/${id}`);
});

app.post("/blogs/:id/delete", (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== id);
    res.redirect("/blogs");
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});