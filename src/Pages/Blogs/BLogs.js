import React from 'react';

const BLogs = () => {
    return (
        <section className='bg-base-300 p-4'>
            <h2 className='text-3xl font-bold text-secondary text-center uppercase '> question and answer </h2>
            <div class="flex mt-6 justify-center">
                <div class="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10' >
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
                    <div className="card-body ">
                        <h2 className="card-title uppercase ">Question No : 01 : How will you improve the performance of a React Application? </h2>
                        <p className="italic text-xl">Answer : </p>
                        <p> A lot of methods, used to optimize the performance of React, have been substituted by simpler techniques and commands. Now, developers can accomplish a lot of things with just a single method. Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged. Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where we can still speed up our React application. Some of important techniques for improving performance of React app are as follows: 
                        </p>
                        <ul>
                            <li>* Keeping component state local where necessary</li>
                            <li>* Memoizing React components to prevent unnecessary re-renders</li>
                            <li>* Code-splitting in React using dynamic import()</li>
                            <li>* Windowing or list virtualization in React applications</li>
                            <li>* Lazy loading images in React</li>
                        </ul>   
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
                    <div className="card-body ">
                        <h2 className="card-title uppercase ">Question No : 02 : What are the different ways to manage a state in a React application? </h2>
                        <p className="italic text-xl">Answer : </p>
                        <p> When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps: 
                        </p>
                        <ul>
                            <li>* Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</li>
                            <li>* Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Sometimes state we think should be local might become global.</li>
                            <li>* Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</li>
                            <li>* URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.</li>
                        </ul>   
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
                    <div className="card-body ">
                        <h2 className="card-title uppercase ">Question No : 03 : How does prototypical inheritance work? </h2>
                        <p className="italic text-xl">Answer : </p>
                        <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’. In programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance. JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance. In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage. ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method. The Object.create() method creates a new object and uses an existing object as a prototype of the new object. Inheritance allows an object to use the properties and methods of another object without duplicating the code. JavaScript uses the prototypal inheritance.
                        </p>   
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
                    <div className="card-body ">
                        <h2 className="card-title uppercase ">Question No : 04 : Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts. </h2>
                        <p className="italic text-xl">Answer : </p>
                        <p>  Never mutate state directly, always call setState. Everybody says don’t do it. Mutating state directly can lead to odd bugs, and components that are hard to optimize. As we may already know, a common way to tune a React component for performance is to make it “pure,” which causes it to only re-render when its props change (instead of every time its parent re-renders). One should never update the state directly because of the following reasons:
                        </p>
                        <ul>
                            <li>* If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                            <li>* When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>* You will lose control of the state across all components.</li>
                        </ul>   
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
                    <div className="card-body ">
                        <h2 className="card-title uppercase ">Question No : 05 : What is a unit test? Why should write unit tests? </h2>
                        <p className="italic text-xl">Answer : </p>
                        <p> Software testing is a detailed procedure that requires many steps. It is an essential part of the software development process and is done so that only the best product reaches the end-user. Unit testing is a method that is used to test programs and applications to see if they function according to the clients’ specifications. If any problems persist, they should ideally be taken care of earlier on so that they don’t show up when the final version is sent out to clients. Software unit testing mainly involves checking individual modules for errors.  
                        </p>
                        <ul>
                            <li>* Developers looking to learn what functionality is provided by a unit and how to use it can look at the unit tests to gain a basic understanding of the unit API.</li>
                            <li>* Due to the modular nature of the unit testing, we can test parts of the project without waiting for others to be completed.</li>
                            <li>* Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly </li>
                            <li>* Truth is Unit testing increase the speed of development.</li>
                        </ul>   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BLogs;