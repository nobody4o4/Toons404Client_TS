function Forum() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center">
            <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

                  <div className="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                  <div className="relative">
                    <img
                      className="mx-auto rounded-lg object-cover object-center shadow-2xl"
                      alt="hero"
                      src="/assets/images/placeholders/squareCard.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
              {/* <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                {" "}
                Your tagline{" "}
              </span> */}
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-text md:text-7xl lg:text-5xl">
                Medium length display headline.
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-text">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
              <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                <button
                  type="submit"
                  value="Subscribe"
                  name="member[subscribe]"
                  id="member_submit"
                  className="block w-full rounded-lg border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-text shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                >
                  Subscribe
                </button>
                <div className="sm:flex sm:max-w-lg">
                  <p className="mt-3 text-xs text-text">
                    By subscribing, you agree with Revue’s
                    <a target="_blank" href="https://www.getrevue.co/terms">
                      Terms of Service
                    </a>
                    and
                    <a target="_blank" href="https://www.getrevue.co/privacy">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Forum;

// documentation ko format kasari garda thik hunxa ani tesko kun kun topic ra section lai badi focus ra priority dida thik hunxa
// kun kun diagrams haru complusory ho
// ani methodoogy anusar garnai parxa ra
// ani aaru file structure haru kashari garna parxa
