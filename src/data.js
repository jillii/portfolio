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
        tech: ['PHP', 'SCSS', 'JavaScript', 'Git', 'WordPress'],
        link: 'https://www.quorumfcu.org/',
        image: image_path + 'quorum-homepage.png',
        body: `<p>This site was a complete overhaul.</p><img src="${image_path}projects/quorum-rates-table.png" alt="quorum rates table" />`
    },
    {
        slug: 'beamable',
        title: "Beamble",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['PHP', 'SCSS', 'JavaScript', 'Git', 'WordPress'],
        link: 'https://beamable.com/',
        image: image_path + 'beamable.mp4',
        overlay: 'white',
        body: "This is some body copy."
    },
    {
        slug: "cybernetix-playbook",
        title: "Cybernetix Playbook",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['PHP', 'SCSS', 'JavaScript', 'Git', 'test'],
        link: 'https://theroboticsplaybook.com/',
        image: image_path + 'cybernetixplaybook.mp4',
        overlay: 'white',
        body: "This is some body copy"
    },
    {
        slug: "companyon",
        title: "Companyon",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tech: ['WorrdPress', 'Git', 'PHP', 'JavaScript'],
        link: 'https://companyon.vc/',
        image: image_path + 'companyon.png'
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
