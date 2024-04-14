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
  <p><b>All requirements and stretch goals are being worked on.</b></p>
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
    <li>HTML: Index.html is in the /client folder.</li>
    <li>CSS: CSS files are in client/assets/css folder.</li>
    <li>JS: JS files are in the client/assets/js folder. This excludes app.js which sits in /client.</li>
  </ul>
  <h3>Server</h3>
  <ul>
    <li>JS: JS files are in the server/assets/js folder. This excludes server.js and seed.js which sit in /server.</li>
  </ul>
  <h3>Database</h3>
  <ul>
    <li>JS: dbHandler.js and seed.js contain database access, mutation and seeding.</li>
    <li>DB: guestbook.db can be found in /server.</li>
  </ul>
  <h3>Other</h3>
  <ul>
    <li>IMGs: Image files for the client are found in /public due to the requirements of vite builds.</li>
  </ul>
</section>
<section>
<h2>Implementation (of Requirements)</h2>
  <h3>TODO</h3>
  <p>TODO</p>
</section>
<section>
  <h2>Implementation (of Stretch Goals)</h2>
  <h3>TODO</h3>
  <p>
TODO
  </p>
</section>
<section>
  <h2>Honorary Mentions</h2>
  <h3>TODO</h3>
  TODO
</section>
