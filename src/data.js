const image_path = '/assets/';
const aws_path = 'https://jills-portfolio.s3.amazonaws.com/';

export const ABOUT = {
    name: "Jill Hoenig",
    title: "Web Engineer",
    summary: "Web development as ",
    list: ['art.', 'connection.', 'play.', 'inspiration.', 'expression.'],
    bio: [
        "I'm Jill—Web engineer. 10 years agency experience.",
        "My journey started with Java, followed by C, and has led to a career focused on frontend. But my background in object-oriented/low-level programming and steady stream of backend-heavy side projects allows me to bridge the two worlds.",
        "I've built award-winning websites for major agencies and helped SMEs grow with polished, high-performance sites.",
        "I lived through the dawn of the internet, and it captures my imagination to this day",
        "Web development is an art, and it's my favorite kind."
    ]
}
export const CONTACT = {
    email: 'jho3292@gmail.com',
    socials: [
        'https://medium.com/@jillii',
        'https://github.com/jillii',
        'https://stackoverflow.com/users/5161457/jillian-hoenig',
        'https://www.linkedin.com/in/jillianhoenig/'
    ]
}
export const WORK = [
    {
        slug: "quorum",
        title: "Quorum Federal Credit Union",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress', 'SEO'],
        link: 'https://www.quorumfcu.org/',
        image: image_path + 'quorum-homepage.png',
        body: `<p>QFCU aimed to adopt a younger, more modern tone, which required a full overhaul. I took the opportunity to enhance the site's backend architecture for improved functionality and scalability.</p>
        <img loading="lazy" src="${image_path}projects/quorum-term-savings-hero.png" alt="quorum term savings hero" />
        <p>My goal was to streamline user experience—turn repetitive, manual data entry into seamless automations. Previously, populating the Rates page involved uploading an XML file with all the rates to the backend. This process was clunky and overly complicated—just updating a single rate required generating a new XML. To solve this, I created a custom data type for rates, allowing them to be updated directly in the dashboard.</p>
        <img loading="lazy" src="${image_path}projects/quorum-rate-backend.png" alt="rate backend"/>
        <p>Website updates should be quick and painless.</p>
        <p>In collaboration with the design team, I improved the Rates page user experience by creating clear, well-styled rates tables.</p>
        <img loading="lazy" src="${image_path}projects/quorum-rate-table.png" alt="quorum rates table" />
        <p>And yes, they are easy to edit!</p>`
    },
    {
        slug: 'beamable',
        title: "Beamable",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress', 'Keyframe Animations', 'Leadership', 'Code Review'],
        link: 'https://beamable.com/',
        image: aws_path + 'beamable.mp4',
        body: `<p>The website I created for Beamable, a game development platform, was one of my favorite projects. With a fun, future-forward product, they needed a website to match.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/beamable-homepage-hero-animation.mp4" alt="beamable homepage hero animation" autoplay loop muted></video>
        <p>With a little imagination and a lot of CSS (684 lines of keyframe animations SCSS, to be exact), I turned a beautiful design into a playful, animated dreamworld.</p>
        <p>Interactive elements made exploring the site feel like gameplay.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/beamable-blog.mp4" alt="beamable blog hero" autoplay loop muted></video>
        <p>The animations were deliberately subtle, with slight delay offsets to add a sense of intrigue.</p> 
        <video playsinline webkit-playsinline src="${image_path}projects/beamable-customers-hero.mp4" alt="beamable customers hero" autoplay loop muted></video>
        <p>This project is a testament to what creativity and passion can do to elevate a site. Web development isn't just a job for me—it's a chance to build something extraordinary.</p>`
    },
    {
        slug: "cybernetix-playbook",
        title: "Cybernetix Ventures",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress'],
        link: 'https://theroboticsplaybook.com/',
        image: aws_path + 'cybernetixplaybook.mp4',
        body: `<p>I had a lot of fun building this website. The client wanted it to look and behave like a book. Far from your standard site.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/cybernetix-welcome.mp4" autoplay loop muted></video>
        <p>The project was initially pitched to another dev team, who estimated it would take 230-280 hours. I completed it 1/8 of that time, about 32 hours. Sometimes all you need is a strong foundation to give you the flexibility to tackle curveballs.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/cybernetix-product-development.mp4" autoplay loop muted></video>
        <p>There's no WordPress plugin or JavaScript library to satisfy this ask. The behavior is simple JavaScript, and the appearance is just CSS.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/cybernetix-verticle.mp4" autoplay loop muted></video>
        <p>Websites can look and behave however you want. Anything is possible—all you need is a vision, and a developer who loves a "non-standard" request.</p>`
    },
    {
        slug: "companyon",
        title: "Companyon Ventures",
        tech: ['Leadership', 'PHP', 'JavaScript', 'SCSS', 'WordPress', 'Code Review'],
        link: 'https://companyon.vc/',
        image: image_path + 'companyon.png',
        body: `<p>This was the first website I built as a Tech Lead, created for a B2B tech startup-focused venture capital firm.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/companyon-homepage-hero.mp4" autoplay loop muted></video>
        <p>The team was small—just myself and a junior developer—but that didn't change my commitment to being the best lead I could be. This project was the ideal educational tool: small in scope, yet the unique design presented some interesting coding challenges.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/companyon-color-change-svgs.mp4" autoplay loop muted></video>
        <p>This design required us to really dig into SVG code. SVGs may look like normal images, but they're actually just code, and can be manipulated as such. We were extending their functionality beyond what either of us knew was possible. It was a valuable learning experience for the whole team.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/companyon-pixel-buttons.mp4" autoplay loop muted></video>
        <p>I’ve had my share of awful mentors—people who were unavailable and disengaged. My goal was to be the opposite of that.</p>
        <img loading="lazy" src="${image_path}projects/companyon-blog-hero.png" alt="companyon blog post hero"/>
        <p>I aimed to inspire and share my excitement for code. I framed all my instructions and advice with “But there could be a better way...” to encourage experimentation.</p>
        <img loading="lazy" src="${image_path}projects/companyon-recent-posts.png" alt="companyon recent posts"/>
        <p>I set a high standard from the start. I held the team to the same level I hold myself.</p>
        <p>The client loved the final product, and that’s when we truly became a team.</p>`
    },
    {
        slug: "allstacks-roi-calculator",
        title: "Allstacks ROI Calculator",
        tech: ['JavaScript', 'Hubl'],
        link: 'https://www.allstacks.com/roi-calculator',
        image: aws_path + 'allstacks.mp4',
        body: `<p>Every so often, a client will ask for a calculator.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/allstacks-roi-calc-savings.mp4" autoplay muted loop></video>
        <p>I love building calculators—they're the perfect union of user experience, logic, and math.</p>
        <p>But this one had a twist... the result could be NEGATIVE.</p>
        <p>That was the reality—there were edge cases where customers wouldn't save money with Allstacks' product. I flagged it to my manager, and together, we developed a UX for negative results.</p>
        <img loading="lazy" src="${image_path}projects/allstacks-roi-calc-negative-savings.png" alt="allstacks roi calculator showing negative savings" />
        <p>If the result was negative, the user should be told explicitely that the product was not a fit. Otherwise, they would be scratching their heads, trying to make sense of negative savings.</p>
        <video playsinline webkit-playsinline src="${image_path}allstacks.mp4" autoplay loop muted></video>
        <p>The edge cases were rare but possible. The final calculator accounted for every scenario and delivered clear, precise responses.</p>`
    },
    {
        slug: "travel-tech-titans",
        title: "Travel Tech Titans",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress'],
        image: image_path + 'traveltechtitans.png',
        body: `<p>The design I recieved for this site was beautiful, intricate, and complex.</p>
        <img loading="lazy" src="${image_path}projects/ttt-hero.png" alt="travel tech titans hero"/>
        <p>The designer specifically asked for subtle movement of the translucent backsplash. Movement that was almost undiscernible, but distictly present in one's line of vision. The design was careful yet ambitious—and almost impossible to code.</p>
        <img loading="lazy" src="${image_path}projects/ttt-blurb.png" alt="travel tech titans blurb"/>
        <p>But nothing is truly impossible in web development. Over the year I've learned little tricks to satisfy designs, while keeping the code clean and readable.</p>
        <p>One of my favorite tricks is this one for making HTML tables responsive. No, there are not two tables—just one with the ability to cleanly break down on mobile.</p>
        <img loading="lazy" src="${image_path}projects/ttt-mid-stage.png" alt="travel tech titans mid stage table"/>
        <p>This trick utilizies HTML attributes hidden in the table cells. On mobile, the attributes' values are prepended to each table row using CSS.</p>
        <img loading="lazy" src="${image_path}projects/ttt-mid-stage-tablet.png" alt="travel tech titans mid stage table on tablet"/>
        <p>Simple, clean, readable—an elegant code solution to match an elegant design.</p>
        `
    },
    {
        slug: "design-statements",
        title: 'Design Statements LLC',
        tech: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'UI/UX Design'],
        link: 'http://designstatements-llc.com/',
        image: aws_path + 'designstatements.mp4',
        body: `<p>The website of a design agency needs a great design. Nothing less than a pure reflection of its own work.</p>
        <img loading="lazy" src="${image_path}projects/design-statements-homepage.png" alt="design statements' homepage"/>
        <p>The Design Statements website design was inspired by paint chips commonly used by designers. The "chips" would open into sliders of images of homes re-imagined by Design Statements.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/design-statements-chips.mp4" alt="design statements chips" autoplay muted loop></video>
        <p>It was eye-catching, yet tastful, like the interior designs it represented.</p>
        <video playsinline webkit-playsinline src="${image_path}designstatements.mp4" alt="design statements footer" autoplay muted loop></video>
        <p>The client couldn't have been happier—this digital home for her work was truly representative of her elevated style.</p>
        `
    },
    {
        slug: "hyperloop",
        title: "Hyperloop",
        tech: ['GitHub Pages', 'CSS', 'JavaScript', 'Keyframe Animations'],
        link: 'https://companyon.vc/',
        image: aws_path + 'hyperloop.mp4',
        body: `<p>Listen, I think we should normalize bursts of confetti on company websites.</p>
        <video playsinline webkit-playsinline src="${image_path}hyperloop.mp4" autoplay loop muted></video>
        <p>The client let us run with this one, and as you can see, we did.</p>
        <p>The animations were purely CSS / JS, and a little creativity. Each confetti burst is actually a series of images rushing past the eye.</p>
        <img loading="lazy" src="${image_path}projects/web_heart_animation.png" alt="heart animation"/>
        <p>CSS brings it to life. The event is so fast, that the confetti appears to fly out of the active dot.</p>
        <p>All user-interactivity should be this extra.</p>
        `
    }
]
export const PROJECTS = [
    {
        slug: "expletive",
        title: '!@#$%',
        tech: ['JavaScript', 'CSS', 'Jekyll', 'Liquid', 'Keyframe Animations', 'UI/UX Design'],
        link: 'https://expletive.plumbing/',
        image: aws_path + 'expletiveplumbing.mp4',
        body: `<p>This is the official website of my IDM projects !@#$%.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/expletive-music.mp4" autoplay loop muted></video>
        <p>The design is a reflection of my sound—sparse, alien, glittery, and cute.</p>
        <p>This site runs the gamut on keyframe animations. It's where I came up with a little trick I wrote about <a href="https://medium.com/@jillii/traveling-through-space-with-pure-css-1b113c58ec1b" target="_blank">here</a>.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/expletive-stars.mp4" autoplay loop muted></video>
        <p>This site is built using a framework called Jekyll. I chose Jekyll for this site, because there's essentially no database—all data is stored in a YML file. That's why it's so fast :)</p>
        <p>It utilizes JavaScript for filtering, as well as the media player, which I built from scratch.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/expletive-filter.mp4" autoplay loop muted></video>
        <p>And it's filled with easter eggs.</p>
        <p>Keep those eyes open!</p>
        <video playsinline webkit-playsinline src="${image_path}projects/expletive-button.mp4" autoplay loop muted></video>
        `
    },
    {
        slug: "playlists-with-friends",
        title: 'Playlists With Friends (WIP)',
        tech: ['JavaScript', 'Ruby', 'Rails', 'CSS', 'APIs', 'Turbo', 'Dokku', 'UI/UX Design'],
        link: 'https://playlistswithfriends.app/',
        image: aws_path + 'playlistswithfriends.mp4',
        body: `<p>Sometimes you need to create a web app simply because you want it to exist.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/playlistswithfriends-home.mp4" autoplay muted loop></video>
        <p>The internet is full of similar apps, but none that had everything I wanted them to. And they never look good...</p>
        <p>Playlists With Friends is a web app where users can create playlists by adding tracks to them using the YouTube Search API. Once a playlist is created, its owner can add, remove, reorder, and listen to its tracks.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/playlistswithfriends-addvideo.mp4" autoplay muted loop></video>
        <p>Playlists also have a special feature where users can invite friends on the site to "collab". This gives the invited user access to add new tracks and tags to the playlist. The user will recieve a notification about the invite, and the playlist will appear in the "Collabs" section on their account page.</p>
        <img loading="lazy" src="${image_path}projects/playlistswithfriends-collabs.png" alt="playlists with friends collab section"/>
        <p>This felt like a Rails site. I've been using Rails to build sites for a long time. It's the first framework I was exposed to as a young web developer back in 2015, and it's still my favorite to this day. Mostly, I've been looking for an excuse to build with it.</p>
        <p>This site is a work in progress, but slated to be complete by this year. Stay tuned.</p>
        `
    },
    {
        slug: "guess-the-phrase",
        title: 'Guess The Phrase',
        tech: ['JavaScript', 'React', 'CSS', 'UI/UX Design', 'GitHub Pages'],
        link: 'https://jillii.github.io/guess-the-phrase/',
        image: aws_path + 'guessthephrase.mp4',
        body: `<p>I built this app to play in my spare time.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/guessthephrase-1.mp4" autoplay loop mutes></video>
        <p>If you were a 90s child like I was, you probably remember watching <i>a lot</i> of Wheel Of Fortune with your parents. I designed this app to behave like the Wheel Of Fortune board—revealing one correctly guessed letter at a time. </p>
        <p>I developed a point system based on how many letters there are, and how quickly you're able to make a guess. JavaScript handles all the calculations.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/guessthephrase-lose.mp4" autoplay loop mutes></video>
        <p>I created the app, but I still lose all the time. But every once in a while, I get to see the little congratulatory animation I built...</p>
        <video playsinline webkit-playsinline src="${image_path}projects/guessthephrase-win.mp4" autoplay loop mutes></video>
        `
    },
    {
        slug: "cake-factory",
        title: 'Cake Factory Official',
        tech: ['JavaScript', 'CSS', 'Jekyll', 'Liquid', 'Firebase', 'GitHub Pages', 'DO Ant Media Server', 'UI/UX Design'],
        link: 'https://cakefactory.party/',
        image: aws_path + 'cakefactory.mp4',
        body: `<p>Cake Factory is a rave-organizing collective dedicated to bringing the raw energy of basement shows to the rave scene.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/cake-factory-nav.mp4" autoplay loop muted></video>
        <p>I wanted the design of the website to be understated and playful, like the collective.</p>
        <p>The site was primary informational, until 2020. During COVID all raves and parties came to a screaching halt. But people still wanted to connect, maybe even dance a little in their own homes. So I built out a "Stream" section of the website, complete with a live sream, as well as a live chat with little heart + cake reacts.</p>
        <img loading="lazy" src="${image_path}projects/cake-factory-stream.png" alt="w00dy performing cake factory internet edition" />
        <p>Cake Factory continued shows through COVID.</p>
        <video playsinline webkit-playsinline src="${image_path}projects/cake-factory-ambient.mp4" autoplay loop muted></video>
        <p>Technology often makes us feel alienated from one another, but in this case—it was just the opposite.</p>
        <p>It was hardly a substitute for an actual show, but at least it brought the community back together. And everyone had a front row seat, and could communicate without having to yell over the din :).</p>

        `
    }
]
