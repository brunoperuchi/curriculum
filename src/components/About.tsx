export function About() {
  return(
    <section className="w-full">
      <h1 className='text-center text-zinc-100 md:text-2xl font-bold mt-2'>
        About
      </h1>
      <div className='flex flex-col gap-1 md:gap-4 p-2 md:p-4 items-center justify-center'>
        <p className="text-zinc-100 text-center">
          I have a degree in Information and Communication Technologies from the Federal University of Santa Catarina.
          I've been passionate about technology since the first contact, i love the feeling of being able to solve any
          problem with a little effort and some internet searches.
        </p>
        <h2 className='text-center text-zinc-100 md:text-xl font-bold mt-2'>
          Other Skills
        </h2>
        <p className="text-zinc-100 text-center">
        I have skills as a designer mainly with coreldraw, I know a lot about computers and their daily problems in
        companies with a large workflow.
        </p>
      </div>
    </section>
  );
}