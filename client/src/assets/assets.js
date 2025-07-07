import logo from './logo.png'
import logoo from './logoo.png'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.jpg'
import sample_img_2 from './sample_img_2.png'
import profile from './profile.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import step_icon_4 from './step_icon_4.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import header from './header.svg'
import login from './login.jpg'
import golden from './golden.png'
import piyush1 from './piyush1.png'
import amit1 from './amit1.png'

export const assets = {
  logo,
  login,
  logoo,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  header,
}

export const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Tell us what you imagine! Simply enter a text prompt describing your idea, from futuristic landscapes to dreamlike portraits.',
    icon: step_icon_1,
  },
  {
    title:'AI Brings it to Life',
    description: 'Our powerful AI transforms your words into breathtaking, high-quality images in seconds—completely unique to you!',
    icon: step_icon_4,
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: step_icon_2,
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: piyush1,
    name: 'Piyush Singh',
    role: 'Developer',
    stars: 5,
    text: `DreamCanvas is like having a creative partner in my dev toolkit. As a backend developer, I rarely dabble in design, but this tool empowers me to generate stunning visuals for my projects without hiring designers. From UI concept art to landing page backgrounds, it saves time and boosts presentation quality.`
  },
  {
    image: golden,
    name: 'Golden Sharma',
    role: 'Front-end Developer',
    stars: 5,
    text: `As a frontend developer, visual appeal is crucial—and DreamCanvas delivers. I use it to mock up hero sections, banners, and even animated prompt-based illustrations. It’s intuitive, fast, and integrates perfectly into my workflow. It bridges the gap between code and creativity, making my UI work stand out.`
  },
  {
    image: amit1,
    name: 'Amit Vishwakarma',
    role: 'Developer',
    stars: 5,
    text: `I never imagined AI-generated art could be this refined. DreamCanvas helped me create engaging onboarding screens and promotional images for my mobile app within minutes. It’s accurate, sleek, and surprisingly customizable. Highly recommended for developers who want beautiful assets without the design hassle.`
  },
]

export const plans = [
  {
    id: 'Basic Plan',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced Plan',
    price: 50,
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business Plan',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.'
  },
]