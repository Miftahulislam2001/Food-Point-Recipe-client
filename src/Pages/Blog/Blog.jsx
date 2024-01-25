import React from "react";
import { Margin, usePDF } from "react-to-pdf";


const Blog = () => {
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM },
  });

  return (
    <div className="max-w-[1240px] mx-auto mb-24">
      <h1 className="text-center text-4xl font-semibold mt-6">
        Answer to the some{" "}
        <span className="text-[#900000] font-extrabold">Question ?</span>
      </h1>
      <button
       onClick={toPDF}
        className="bg-[#900000] block mx-auto mt-5 px-4 py-2 rounded text-white w-[150px]"
      >
        Download Pdf
      </button>
      <div ref={targetRef} className=" grid md:grid-cols-2 gap-8  mt-24">
        <div className="border p-5 rounded shadow-md">
          <h3 className="text-2xl font-extrabold text-[#900000] mb-8">
            1. Tell us the differences between uncontrolled and controlled
            components ?
          </h3>
          <p className="text-justify text-gray-500">
            In software engineering, uncontrolled and controlled components are
            two distinct categories of software elements. Uncontrolled
            components are those that are not directly managed by the
            application's code and are instead managed by the browser or other
            external factors. Examples of uncontrolled components include form
            inputs, radio buttons, and checkboxes. Since these components are
            not managed by the application, they do not have their own state and
            rely on the browser to maintain their values. Controlled components,
            on the other hand, are managed by the application's code and have
            their own state. Examples of controlled components include text
            inputs, dropdown menus, and date pickers. Since they are controlled
            by the application's code, they can be used to implement more
            complex behavior, such as validation or conditional rendering. The
            key difference between uncontrolled and controlled components is
            that controlled components are more flexible and allow for more
            complex behavior to be implemented, while uncontrolled components
            are simpler and rely on external factors for their state.
          </p>
        </div>
        <div className="border p-5 rounded shadow-md">
          <h3 className="text-2xl font-extrabold text-[#900000] mb-8">
            2. How to validate React props using PropTypes ?
          </h3>
          <p className="text-justify text-gray-500 bottom-0">
            PropTypes is a package in React that allows developers to validate
            the data types of props passed to a component. It helps prevent
            errors and ensures that the expected data types are being passed. To
            use PropTypes, developers can define the PropTypes for a component
            using the propTypes property, which is a key-value map where the
            keys are the prop names and the values are the PropTypes. The
            isRequired flag can be used to indicate that a prop is required. By
            using PropTypes, developers can make their code more reliable and
            prevent bugs.
          </p>
        </div>
        <div className="border p-5 rounded shadow-md">
          <h3 className="text-2xl font-extrabold text-[#900000] mb-8">
            3. Tell us the difference between nodejs and express js. ?
          </h3>
          <p className="text-justify text-gray-500 bottom-0">
            Node.js and Express.js are both web development technologies, but
            they serve different purposes. Node.js is a runtime environment for
            executing JavaScript code outside of a web browser. It allows
            developers to build server-side applications using JavaScript and
            provides an event-driven, non-blocking I/O model that makes it
            highly scalable. Express.js, on the other hand, is a web application
            framework for Node.js that provides a set of features and tools for
            building web applications. It simplifies the process of building web
            applications by providing a robust set of middleware functions,
            routing methods, and other features that help developers build web
            servers and APIs. In summary, Node.js is the runtime environment for
            executing JavaScript code outside of a web browser, while Express.js
            is a web application framework for Node.js that provides a set of
            features and tools for building web applications.
          </p>
        </div>
        <div className="border p-5 rounded shadow-md">
          <h3 className="text-2xl font-extrabold text-[#900000] mb-8">
            4. What is a custom hook, and why will you create a custom hook ?
          </h3>
          <p className="text-justify text-gray-500 bottom-0">
            In React, a custom hook is a JavaScript function that allows you to
            reuse logic across multiple components. Custom hooks allow
            developers to abstract away complex logic and provide a simple
            interface for components to consume. Custom hooks are created by
            defining a function that uses one or more built-in hooks or other
            custom hooks and returns a new function that can be used in a
            component. By convention, custom hooks start with the word "use".
            Custom hooks can be used for a variety of purposes, such as managing
            state, handling API requests, or implementing animations. They
            provide a reusable way to encapsulate complex logic and allow
            developers to build more modular and maintainable code. Developers
            may create a custom hook to improve code reusability, to keep
            components simple and focused on their specific responsibilities,
            and to avoid code duplication. Additionally, custom hooks can
            improve code organization and make it easier to maintain and test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
