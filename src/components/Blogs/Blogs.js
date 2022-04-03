import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="qus-1">
                <h3>Question 1: what is context Api ??</h3>
                <p>context api is the another better option of props drilling. its so much effective for passing data by grandParent to children.It is so much effective.if you are using context api ,so should install and declare the context api.Then wrap up all children whiche are you wanted passing the data.Besides you calling the context by UseContext in children api.so if anyone want to be serious developer , they have to use context api </p>
            </div>
            <div className="qus-2">
                <h3>Question 2: What is symantic tag??</h3>
                <p> A symantic and non-symantic are both of html code.But a semantic element clearly describes its meaning to both the browser and the developer.On the other hand non-symantic are not clearly describes and browser and developer are not reading this element.such as....
                    symantic tag is :: form, table,header,footer article etc.
                </p>
            </div>
        </div>
    );
};

export default Blogs;