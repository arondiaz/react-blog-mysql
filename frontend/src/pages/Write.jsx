import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useRef } from "react";

const Write = () => {
  const first = useRef(null);
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Insert title" />

        <div ref={first} className="editor-container">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input type="file" id="file" name="" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h2>Category</h2>
          <div className="cat">
            <input type="radio" name="category" value="code" id="code" />
            <label htmlFor="code">Code</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="tech" id="tech" />
            <label htmlFor="tech">Tech</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="docs" id="docs" />
            <label htmlFor="docs">Docs</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="work" id="work" />
            <label htmlFor="work">Work</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
