import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='question1' >
                <h2>How React Works?</h2>
                <p>Answer: React কে কাজ করানোর জন্য ২ প্যাকেজ প্রয়োজন হয় । ১. React 2. React Dom . React Package এর কাজ হল component নিয়ে । যা শুধু মাত্র write করা যায় । এটি html এ কনভার্ট করে এবং ব্রাউজারে দেখানোর কাজ করে React dom . যা  app.js এর মধ্যে app component return করে jsx তারপর Reactdom.render index.html এর root element কে খুঁজে বের করে এবং app component add করবে । app এর একেকটা building block কে component বলা হয় । component এর মধ্যে  markup js থাকে । একটি component এর মধ্যে আরো component থাকতে পারে । সবাই jsx return করবে । Reaxt সবসময় একটা virtual dom এ সব কাজ কপি করে রাখে । কাজ শেষে চেক করে দেখে real dom এর সাথে virtual dom এর কোথায় পরিবর্তন হয়েছে তখন শুধু সেটাকেই দেখাই । এ কাজ কে বলা হয় reconciliation . </p>
            </div>
            <div className="question2">
                <h2>Props vs state</h2>
                <div className='question2Ans' >
                    <div>
                        <h3>Props</h3>
                        <p>
                            ১।  Read Only . <br />
                            ২। পরিবর্তন করা যায় না <br />
                            ৩। এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে ডাটা আরগুমেন্ট হিশেবে পাঠানো যায় । <br />
                            ৪। চাইল্ড থেকে অ্যাক্সেস করা যায় । <br />
                            ৫। component কে Reuse করার সুযোগ দেয়  । 
                        </p>
                    </div>
                    <div>
                        <h3>State</h3>
                        <p>
                            ১। asynchronous ভাবে পরিবর্তন করা যায় । <br />
                            ২। পরিবর্তন করা যায় । <br />
                            ৩। কম্পোনেন্ট সম্পর্কে তথ্য ধারন করে । <br />
                            ৪। চাইল্ড থেকে অ্যাক্সেস করা যায় না । <br />
                            ৫। component কে Reuse করার সুযোগ দেয় না । 
                        </p>
                    </div>
                </div>
            </div>
            <div className="question3">
                <h2>How useState works</h2>
                <p>
                    State  এ মুলত Data জমা রাখা হয় । তবে সেটা dynamic storage or database. যা component এর ভেতরের data store করে । useState হল react এর একটা hook . একটা useState একটা value এবং একটা function return করে । যা ইন্ডিভিজুয়াল variable এ জমা রাখা হয় । কোনো সময় যদি state পরিবর্তন হয় তাহলে যে component এ useState ব্যবহার করা হয়েছে তা re rendarএর জন্য flaged হয়ে যায় । এবং শেষে virtual dom এর সাথে তুলনা করে যা পরিবর্তন করা হয়েছে শুধু তা দেখায় । এভাবে react দ্রত কাজ করে । 
                </p>
            </div>
        </div>
    );
};

export default Question;