import React from 'react';

const Blogs = () => {
    return (
        <div >
            <div>
                <section class="px-4 lg:px-17">
                    <h1 class="font-bold text-center my-6  leading-[54px] text-[45px]">FreeQuently Ask Questions?</h1>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 py-8">
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title font-bold">
                                    What is an access token and refresh token? How do they work and where should we store them on the client-side?

                                </h2>
                                <div className='ml-3 p-4'>
                                    <p>An access token is a piece of data that is used to access a protected resource. It is usually issued by an authorization server after a user has successfully authenticated and authorized an application. The access token is sent to the client-side application which can then use it to securely access the protected resource.</p>
                                    <p> A refresh token is a longer-lived token that is used to get a new access token after the current access token has expired. It is also issued by an authorization server and is stored on the client-side application.</p>
                                    <p>The access token is used to access the resource and the refresh token is used to obtain a new access token when the existing one has expired.</p>
                                    <p>The access token and refresh token should be stored securely on the client-side application. It is recommended to store them in the applications local storage or session storage.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">
                                Compare SQL and NoSQL databases?

                                </h2>
                                <p>SQL databases are relational databases that store data in tables with columns and rows. SQL databases use Structured Query Language (SQL) for defining and manipulating data. NoSQL databases are non-relational databases that store data in document-oriented or key-value stores. NoSQL databases use JavaScript Object Notation (JSON) for defining and manipulating data.</p>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">
                                What is express js? What is Nest JS?

                                </h2>
                                <p>Express JS : Express JS is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.</p>
                                <p>Nest JS : Nest JS is a framework for building efficient, scalable Node.js server-side applications. It uses modern JavaScript, is built with TypeScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.</p>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">
                                What is MongoDB aggregate and how does it work?

                                </h2>
                                <p>MongoDB Aggregation is a process of transforming data from a single or multiple documents and returning computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. Aggregation operations can take an array of documents as an input and output a single value. Common aggregation operations include counting the number of documents in a collection, finding the sum or average of a field, or returning the maximum or minimum value of a field.</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;