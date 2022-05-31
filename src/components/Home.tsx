import homePhoto from '../assets/home-photo.jpg'

export function Home() {
  return (
    <section
      id="home"
      className='m-auto w-[90%] pt-28 grid gap-4 md:gap-6 sm:grid-cols-2 items-center justify-items-center'
    >
      <div className='text-center'>
        <h1 className='text-lg md:text-2xl text-purple-800'>
        👋🏻 Hello there, my name is <strong>Bruno Paulino Peruchi</strong>.
        </h1>
        <p className='text-sm md:text-lg text-zinc-100'>
          Full-Stack Developer
        </p>
      </div>
      <img
        src={homePhoto}
        alt="Bruno Peruchi photo"
        className='h-36 md:h-64 w-36 md:w-64 rounded-full border-2 border-purple-800 shadow-md md:shadow-lg'
      />
    </section>
  );
}
