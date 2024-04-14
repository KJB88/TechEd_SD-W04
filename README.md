<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 04 Assessment :mortar_board:</h1>
  <p>
    <a href="http://www.LinkedIn.com/in/kevin-barr1988">LinkedIn</a> |
    <a href="http://kjb88.github.io">Website</a> |
    <a href="mailto:kevinbarr.business@gmail.com">Email</a> |
    <a href="https://github.com/KJB88">Github</a>
  </p>
<p>
  Repository for coursework for TechEd Software Development Bootcamp - Week 04.
</p>
</div>
<section>
  <h2>Project Outline</h2>
  <p>Develop a front-end page for a Guest Book and a persistent back-end to handle POST requests and populate the website with user content. The front-end must be usable on different devices (mobile responsive) and have implementation to handle common accessibility concerns.</p>
  <ul>
    <li><b>Static Site (Client):</b> <a href="https://teched-sd-w04-client.onrender.com"/>https://teched-sd-w04-client.onrender.com</li>
    <li><b>Web Service (Server):</b> <a href="https://teched-sd-w04.onrender.com"/>https://teched-sd-w04.onrender.com</li>
  </ul>
  <p><b>All requirements and stretch goals are complete. No specific difficulties.</b></p>
</section>
<section>
  <h2>User Stories</h2>
  <h3>As a User...</h3>
  <ul>
    <li>I want to visit the website and read information on my phone or computer.</li>
    <li>I want to be able to leave a message in the guestbook.</li>
    <li>I want to be able to see the messages that have been left in the guestbook.</li>
  </ul>
</section>
<section>
<h2>Requirements</h2>
<ul>
<li><b>'90s Kid</b>: Have a mobile-responsive, accessible and functional website for users to view messages in the Guest Book.</li>
  <ul>
    <li>Get a shiny form on the go so the user can share their 'interesting' stories about that thing no one cares about.</li>
    <li>Get that page showing all those messages! (Yes, even the messages from Tim.)</li>
    <li>Style it so that users can enjoy the flame wars from their handheld and/or desktop (mmm, multi-tasking).</li>
  </ul>
  <br>
<li><b>Trolling the Forums</b>: Allow users to leave a message in the Guest Book for others to read.</li>
  <ul>
    <li>API POST route those definitely not-mean comments from the input form.</li>
    <li>Setup and whack that data into a database. <em>*laughs maniacally in SQL*</em></li>
    <li>API GET route all those lovely, completely civil and polite messages from the DB.</li>
  </ul>
</ul>
</section>
<section>
<h2>Stretch Goals</h2>
<ul>
<li><b>Damage Control</b>: Give the user the option to <b>delete</b> a message, preferably their own!</li>
<li><b>Dopamine Hit</b>: Allow the user to <b>like</b> a message, which will increment a <b>like counter</b> on the message.</li>
</ul>
</section>
<section>
<h2>Project Structure</h2>
  <h3>Client</h3>
  <ul>
    <li><b>HTML</b>: Index.html is in the /client folder.</li>
    <li><b>CSS</b>: CSS files are in client/assets/css folder. They are appropriately labeled after the HTML block that they affect (header, main, footer) and if they're reusable (common) or affect the whole document (core).</li>
    <li><b>JS</b>: JS files are in the client/assets/js folder. This excludes app.js which sits in /client. helper.js, bouncingRainbowText.js and wordLibs.js are basically for aesthetics. app.js, networkHandler.js and elementFactory.js do all the heavy lifting.</li>
  </ul>
  <h3>Server</h3>
  <ul>
    <li><b>JS</b>: JS files are in the server/assets/js folder. This excludes server.js and seed.js which sit in /server. seed.js is only run to seed the database. It is not run by a live service. server.js handles the initial receipt of a request, which is passed to the appropriate handler (getHandler.js, postHandler.js, delHandler.js, putHandler.js). These handlers will then send the relevant information to the dbHandler.js which will perform any database transactions, returning the new state of the messages table for repopulation on the client. This is passed to the client as the response.</li>
  </ul>
  <h3>Database</h3>
  <ul>
    <li><b>JS</b>: dbHandler.js and seed.js contain database access, mutation and seeding.</li>
    <li><b>DB</b>: guestbook.db can be found in /server.</li>
  </ul>
  <h3>Other</h3>
  <ul>
    <li><b>IMGs</b>: Image files for the client are found in /public due to the requirements of vite builds.</li>
  </ul>
</section>
<section>
<h2>Implementation (of Requirements)</h2>
  <h3>90's Fan Page (Client)</h3>
  <h4>Accessible Insanity for All</h4>
  <p>While the webpage may make you question your sanity, it definitely won't make you question it's responsivity and accessibility. Verified with no accessibility problems via WAVE. Responsive design that collapses for handheld screens and stretches for larger screens. My CSS files are organised into targeted areas and reusables (header, main, footer, core, common). Index.html uses comments and appropriate structural blocks (section, div, etc) that contain aria-labels.</p>
  <h4>It's a terrible day to have eyes</h4>
  <p>Have you seen some of the content on these forums? Oof. You can now see messages stored on the remote, submit your own messages via the form and interact with messages via delete and like.</p>
  <h3>This badboy can hold so much TIM <em>*slaps SQlite database*</em> (Server)</h3>
  <h4>POST: Packaging not included</h4>
  <p>Users can send their profanities across to my server, where it will be handled via POST routing and inserted into the database. We give it a bath first, though. It's pure filth.</p>
  <h4>"We don't need a database, we have Excel." - Companies everywhere, all the time.</h4>
  <p>The database is set up and handles queries via pre-programmed .prepare()'s. These are stashed in variables and .run() when needed. Wait, did I forget to comment out DROP TABLES? I'm sure it'll be fine.</p>
  <h4>Why can't I hold all these Messages?!</h4>
  <p>Well, you did it. You made me have a conversation with myself to seed the database. I hope you're happy. The server can handle GET routing to grab all messages in the DB and send them back to the client, where the response is processed appropriately and the message log front-end is populated with the new data.</p>
</section>
<section>
  <h2>Implementation (of Stretch Goals)</h2>
  <h3>If only it was this easy to delete other people's posts</h3>
  <p>They say anything you put on the Internet, stays on the Internet. Users can now delete a message. The DELETE request will be sent with a payload of the id of the message. The server will DELETE route these through to the database handler which will remove the message record with that id.
  </p>
    <h3>VALIDATE ME, INTERNET STRANGERS</h3>
  <p> I never seem to get any likes on social media. It's weird, because my mum says I'm special! Users can now like messages on the front-end and these will be passed as a PUT request to the server. The likes counter is incremented in the database. The correct message record is found by the id that is passed through in the PUT request.
  </p>
</section>
<section>
  <h2>Honorary Mentions</h2>
  <h3>Layers. Software has LAYERS, Donkey!</h3>
  <p>I like when my codebase is nice and clean. So I separated my logic into responsibilty .js files. Each have names that give an idea as to their purpose. getHandler.js, postHandler.js, dbHandler.js. It's not very creative, but it works!</p>
  <h3>A bit of Boing</h3>
  <p>I added animations during the mobile responsivity state change as well as the optional collapsing of the header. I toned them down a lot because if I had my way, it'd be like writing a message on jelly.The collapsible animation is done in JS animation. The mobile responsivity change is done by CSS transition. Just to keep things interesting.</p>
  <h3></h3>
</section>
