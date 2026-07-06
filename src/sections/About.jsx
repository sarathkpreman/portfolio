export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <p>01</p>
            <h2>ABOUT.json</h2>
            <h3>Get to know me better</h3>
          </div>

          <div>
            {/* <RoleStack /> */}
          </div>
        </header>

        {/* Content */}
        <div>
          <div>
            {/* <ProfilePhoto /> */}
          </div>

          <div>
            <section>
              {/* <MyJourneyCard /> */}
              {/* <OutsideCard /> */}
            </section>

            <section>
              {/* <TechStackCard /> */}
              {/* <CurrentLearningCard /> */}
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div>
            {/* <Activities /> */}
          </div>

          {/* <NextSectionIndicator /> */}
        </footer>
      </div>
    </section>
  );
};