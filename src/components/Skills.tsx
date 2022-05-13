import htmlImageUrl from '../assets/html.svg'
import cssImageUrl from '../assets/css.svg'
import javascriptImageUrl from '../assets/javascript.svg'
import rubyImageUrl from '../assets/ruby.svg'
import rubyOnRailsImageUrl from '../assets/ruby-on-rails.svg'
import reactJsImageUrl from '../assets/react-js.svg'
import tailwindCssImageUrl from '../assets/tailwind-css.svg'

const techSkills = [
  {
    name: 'HTML',
    src: htmlImageUrl,
    alt: 'HTML logo',
  },
  {
    name: 'CSS',
    src: cssImageUrl,
    alt: 'CSS logo',
  },
  {
    name: 'Javascript',
    src: javascriptImageUrl,
    alt: 'Javascript logo',
  },
  {
    name: 'Ruby',
    src: rubyImageUrl,
    alt: 'Ruby logo',
  },
  {
    name: 'Ruby on Rails',
    src: rubyOnRailsImageUrl,
    alt: 'Ruby on rails logo',
  },
  {
    name: 'React.js',
    src: reactJsImageUrl,
    alt: 'React.js logo',
  },
  {
    name: 'Tailwind CSS',
    src: tailwindCssImageUrl,
    alt: 'Tailwind CSS logo',
  },
]

export function Skills() {
  return (
    <section>
      <h1 className='text-center text-zinc-100 md:text-2xl font-bold mt-2'>
        Tech Skills
      </h1>
      <div className='w-full flex flex-wrap gap-2 md:gap-4 p-1 md:p-4 items-center justify-center'>
        { techSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-800 w-28 md:w-44 h-24 md:h-32 transition-all rounded-md p-4 flex flex-col gap-2 items-center justify-center shadow-md hover:bg-gradient-to-t from-purple-800"
          >
            <p className="text-zinc-100 text-sm text-center">
              {skill.name}
            </p>
            <img
              src={skill.src}
              alt={skill.alt}
              className="h-10 md:h-14 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
}