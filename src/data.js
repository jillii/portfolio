const image_path = '/assets/';

export const ABOUT = {
    name: "Jill Hoenig",
    title: "Web Engineer",
    summary: "Web development is a craft.",
    bio: [
        "I'm Jill—web engineer for 9+ years.",
        "The first language I learned to program with was Java. The second was C.",
        "While my professional work focuses heavily towards frontend, my background in object-oriented / low-level programming and continuous stream of backend-heavy side projects allows my to bridge the two worlds.",
        "I have built award-winning websites for large agencies, and helped small companies grow with a polished, high-performing websites.",
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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress'],
        link: 'https://www.quorumfcu.org/',
        image: image_path + 'quorum-homepage.png',
        body: `<p>QFCU wanted to adopt a younger, more modern tone. The project was essential a complete overhaul. I took the opportunity to improve the site's backend architecture.</p>
        <img loading="lazy" src="${image_path}projects/quorum-term-savings-hero.png" alt="quorum term savings hero" />
        <p>My focus was to streamline user experience - turn repetitive, manual data-entry into streamlined automations. Previously, populating the rates page meant uploading an XML file with all the rates to the backend. The page would then render the new rates. This system was clunky and unecessarily complex - a new XML would need to be made to update even a single rate. So, I created a data type for rates, which could be updated in the dashboard.</p>
        <img loading="lazy" src="${image_path}projects/quorum-rate-backend.png" alt="rate backend"/>
        <p>Website updates should be quick and painless. Technology should help, not hurt.</p>
        <p>With help from my friends from design, I elevated the rates page user-experience with clear, well-styled rates tables.</p>
        <img loading="lazy" src="${image_path}projects/quorum-rate-table.png" alt="quorum rates table" />
        <p>And yes, they are easy to edit!</p>`
    },
    {
        slug: 'beamable',
        title: "Beamble",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress', 'CSS Keyframe Animations'],
        link: 'https://beamable.com/',
        image: image_path + 'beamable.mp4',
        overlay: 'white',
        body: `<p>This was one of my favorite projects. The product was fun and future-forward, so the website had to reflect that.</p>
        <video src="${image_path}projects/beamable-homepage-hero-animation.mp4" alt="beamable homepage hero animation" autoplay loop muted></video>
        <p>With a little imagination, and a lot of CSS (684 lines of keyframe animation SCSS to be exact), I turned a beautiful design into an animated dream.</p>
        <p>Everything was treated with a tasteful amount of whimsy.</p>
        <video src="${image_path}projects/beamable-blog.mp4" alt="beamable blog hero" autoplay loop muted></video>
        <p>All the animations were subtle. I implemented slight delay offsets for intrigue.</p> 
        <video src="${image_path}projects/beamable-customers-hero.mp4" alt="beamable customers hero" autoplay loop muted></video>
        <p>This project was a testiment to what a little love and imagination can do for a site. Web development is more than just a job for me. It's an opportunity to create something incredible.</p>`
    },
    {
        slug: "cybernetix-playbook",
        title: "Cybernetix Playbook",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress'],
        link: 'https://theroboticsplaybook.com/',
        image: image_path + 'cybernetixplaybook.mp4',
        overlay: 'white',
        body: `<p>I had a lot of fun building this website. The client wanted it to look and behave like a book. Far from your standard site.</p>
        <video src="${image_path}projects/cybernetix-welcome.mp4" autoplay loop muted></video>
        <p>The idea had been proposed to a different dev team, and they estimated it would take about 230-280 hours. I built it in an eighth of the time. Sometimes all you need is a strong foundation to give you the flexibility to tackle curveballs.</p>
        <video src="${image_path}projects/cybernetix-product-development.mp4" autoplay loop muted></video>
        <p>There's no WordPress plugin or JavaScript library to satisfy this ask. The behavior is simple JavaScript, and the appearance is just CSS.</p>
        <video src="${image_path}projects/cybernetix-verticle.mp4" autoplay loop muted></video>
        <p>Websites can look and behave however you want. Anything is possible - all you need is a vision, and a developer who will delight in a "non-standard" request.</p>`
    },
    {
        slug: "companyon",
        title: "Companyon",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['Leadership', 'PHP', 'JavaScript', 'SCSS', 'WordPress', 'Code Review'],
        link: 'https://companyon.vc/',
        image: image_path + 'companyon.png',
        body: `<p>This was the first website I built as a Tech Lead.</p>
        <video src="${image_path}projects/companyon-homepage-hero.mp4" autoplay loop muted></video>
        <p>The team was small - just me and a junior developer. But it was all the same to me, and I wanted to be the best lead possible. This was the perfect project to train with, because it was small - yet the unique design posed a few little coding challenges.</p>
        <video src="${image_path}projects/companyon-color-change-svgs.mp4" autoplay loop muted></video>
        <p>This design required us to really dig into SVG code. Those little images carry an entire ecosystem (of code) inside of them - and we were bending the laws of nature. It was a learning opportunity for everyone, including me.</p>
        <video src="${image_path}projects/companyon-pixel-buttons.mp4" autoplay loop muted></video>
        <p>I've had some pretty awful mentors. People who were not available, who didn't care. My goal was to be the opposite of that.</p>
        <img loading="lazy" src="${image_path}projects/companyon-blog-hero.png" alt="companyon blog post hero"/>
        <p>I wanted to inspire - to share my excitement for code. I qualified all my instructions and advice with "but there could be a better way..." to open the door to experimentation.</p>
        <img loading="lazy" src="${image_path}projects/companyon-recent-posts.png" alt="companyon recent posts"/>
        <p>I set the standard high from the start. I held the whole team to the same standard that I held myself.</p>
        <p> The client loved the final product, and we were officially a team.</p>`
    },
    {
        slug: "allstacks-roi-calculator",
        title: "Allstacks ROI Calculator",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['JavaScript'],
        link: 'https://www.allstacks.com/roi-calculator',
        image: image_path + 'allstacks.mp4'
    },
    {
        slug: "travel-tech-titans",
        title: "Travel Tech Titans",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['PHP', 'SCSS', 'JavaScript', 'Git'],
        image: image_path + 'traveltechtitans.png',
        overlay: 'white'
    },
    {
        slug: "design-statements",
        title: 'Design Statements LLC Official',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sapien dui, eu facilisis justo convallis quis. Praesent et dignissim dui.',
        tech: ['WordPress', 'PHP', 'Git'],
        link: 'http://designstatements-llc.com/',
        image: image_path + 'designstatements.mp4',
        overlay: 'white'
    },
    {
        slug: "hyperloop",
        title: "Hyperloop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['Git', 'CSS', 'JavaScript'],
        link: 'https://companyon.vc/',
        image: image_path + 'hyperloop.mp4'
    }
]
export const PROJECTS = [
    {
        slug: "expletive",
        title: '!@#$% Official',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sapien dui, eu facilisis justo convallis quis. Praesent et dignissim dui.',
        tech: ['JavaScript', 'CSS', 'Jekyll', 'Liquid', 'CSS Framework Animation', 'Git'],
        link: 'https://expletive.plumbing/',
        image: image_path + 'expletiveplumbing.mp4'
    },
    {
        slug: "playlists-with-friends",
        title: 'Playlists With Friends (WIP)',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sapien dui, eu facilisis justo convallis quis. Praesent et dignissim dui.',
        tech: ['JavaScript', 'Ruby', 'Rails', 'YouTube API', 'Git', 'Dokku'],
        link: 'https://playlistswithfriends.app/',
        image: image_path + 'playlistswithfriends.mp4'
    },
    {
        slug: "guess-the-phrase",
        title: 'Guess The Phrase',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sapien dui, eu facilisis justo convallis quis. Praesent et dignissim dui.',
        tech: ['JavaScript', 'React', 'Git'],
        link: 'https://jillii.github.io/guess-the-phrase/',
        image: image_path + 'guessthephrase.mp4'
    },
    {
        slug: "cake-factory",
        title: 'Cake Factory Official',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sapien dui, eu facilisis justo convallis quis. Praesent et dignissim dui.',
        tech: ['JavaScript', 'CSS', 'Jekyll', 'Liquid', 'Firebase', 'Git'],
        link: 'https://cakefactory.party/',
        image: image_path + 'cakefactory.mp4',
        overlay: 'white'
    }
]
