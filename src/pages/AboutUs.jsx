import Header from "@/components/Header";


export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="container about-us">
        <section className="hero">
          <h1>About Us</h1>
          <p>
            We are on a mission to make homeownership simpler, faster, and more
            transparent — just like Better.com. This page is a replica for
            assignment purposes.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            To redefine the mortgage experience by cutting out complexity and
            helping people achieve their dream of owning a home.
          </p>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/assets/avatar-placeholder.png" alt="Team Member" />
              <h3>Jane Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="/assets/avatar-placeholder.png" alt="Team Member" />
              <h3>John Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="/assets/avatar-placeholder.png" alt="Team Member" />
              <h3>Emily Davis</h3>
              <p>Head of Design</p>
            </div>
          </div>
        </section>
      </main>
   
    </>
  );
}
