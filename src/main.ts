import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page">
    <header class="hero" id="home">
      <nav class="nav">
        <div class="logo">
          <img src="/logonav.png" alt="Xtreme kart racing logo" />
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#steam">STEAM</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#details">Details</a></li>
          <li><a href="#timeline">Timeline</a></li>
        </ul>
      </nav>

      <div class="hero-content">
        <div class="hero-text">
          <h1>
            <span class="hero-title">
              <img class="hero-logo" src="/logo.png" alt="Xtreme kart racing logo" />
            </span>
            <span class="hero-subtitle">Ceylon STEM championship</span>
          </h1>
          <p class="hero-copy">
            Feel the torque, chase the apex, and own the track with high-speed
            electric karts built for pure adrenaline.
          </p>
          <a class="cta" href="#details">Click here for more info</a>
        </div>
      </div>
    </header>

    <section class="slogan" id="slogan" data-reveal>
      <div class="slogan-lines">
        <div class="slogan-line">
          <span>DESIGN it,</span>
          <span>BUILD it,</span>
        </div>
        <div class="slogan-line">
          <span>TEST it,</span>
          <span>RACE it</span>
        </div>
      </div>
    </section>

    <section class="about-section" id="steam" data-reveal>
      <div class="about-grid">
        <div class="about-left">
          <div class="steam-heading">
            <div class="steam-lines">
              <span>What is</span>
              <span class="steam-accent">STEAM</span>
              <span>in Motorsports</span>
            </div>
            <span class="steam-qmark">?</span>
          </div>
          <p class="steam-copy">
            STEAM in motorsport combines Science, Technology, Engineering, Art, and
            Mathematics to design, build, analyze, and compete in racing. Together,
            these disciplines drive innovation, performance, strategy, and creative
            expression in modern motorsport.
          </p>
          <div class="stem-image">
            <img src="/stem.png" alt="STEAM disciplines: Science, Technology, Engineering, Art, Mathematics" />
          </div>
        </div>
        <div class="about-right">
          <div class="pit-image">
            <img src="/pit.png" alt="Motorsport pit crew in action" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-detail" id="about" data-reveal>
      <div class="about-flame" aria-hidden="true"></div>
      <h2>About the event</h2>
      <p>
        This event is designed to give students a real-world racing experience,
        immersing them in every aspect of a professional motorsport environment.
        Participants will work directly with real drivers and race engineers while
        gaining hands-on exposure to the complete motorsport ecosystem, from vehicle
        manufacturing and technical operations to team management and securing
        sponsorships. The ultimate goal of this initiative is to uplift and develop
        STEAM motorsport in Sri Lanka by bridging the gap between academic learning
        and real racing industry practices.
      </p>
    </section>

    <section class="event-details" id="details" data-reveal>
      <h2>Event Details</h2>
      <div class="details-grid">
        <div class="detail-card detail-large">
          <div class="detail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 9h18M8 3v4M16 3v4" />
            </svg>
          </div>
          <h3>November<br />14,15</h3>
          <p>Date</p>
        </div>
        <div class="detail-card detail-large">
          <div class="detail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>
          <h3>Rotherham,<br />Katukurunda</h3>
          <p>Location</p>
        </div>
        <div class="detail-card">
          <div class="detail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <circle cx="8" cy="7" r="3" />
              <circle cx="16" cy="7" r="3" />
              <path d="M3 20c0-3 3-5 5-5h0c2 0 5 2 5 5M11 20c0-2.6 2.4-4.4 5-4.4h0c2.6 0 5 1.8 5 4.4" />
            </svg>
          </div>
          <h3>10-<span data-count="15">0</span></h3>
          <p>Teams Competing</p>
        </div>
        <div class="detail-card">
          <div class="detail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <circle cx="9" cy="8" r="3" />
              <circle cx="16.5" cy="9.5" r="2.5" />
              <path d="M4 20c0-3 2.5-5 5-5h0c2.5 0 5 2 5 5M13 20c0-2.2 2-3.8 4.5-3.8h0c1.5 0 2.9.6 3.5 1.6" />
            </svg>
          </div>
          <h3><span data-count="400">0</span>+</h3>
          <p>Expected Attendees</p>
        </div>
        <div class="detail-card">
          <div class="detail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M4 12l4-4 4 4 4-4 4 4" />
              <path d="M8 16l4 4 4-4" />
            </svg>
          </div>
          <h3><span data-count="4">0</span></h3>
          <p>Sponsorship Packages</p>
        </div>
      </div>
    </section>

    <section class="timeline" id="timeline" data-reveal>
      <h2>Event Timeline</h2>
      <div class="timeline-track">
        <div class="timeline-item t1">
          <h3>Event Briefing</h3>
          <p>June 21</p>
        </div>
        <div class="timeline-item t2">
          <h3>Field Visit</h3>
          <p>July 5</p>
        </div>
        <div class="timeline-item t3">
          <h3>Workshop 01 - Designing</h3>
          <p>July 12</p>
        </div>
        <div class="timeline-item t4">
          <h3>Workshop 02 - Manufacturing</h3>
          <p>September 20</p>
        </div>
        <div class="timeline-item t5">
          <h3>Testing</h3>
          <p>October 18</p>
        </div>
        <div class="timeline-item t6">
          <h3>Practice Sessions</h3>
          <p>November 14</p>
        </div>
        <div class="timeline-item t7">
          <h3>Qualifying & Race</h3>
          <p>November 15</p>
        </div>
      </div>
    </section>

    <section class="tagline" id="action" data-reveal>
      <p>
        <span class="tagline-accent">ADRENALIN FUELLED</span>
        <span class="tagline-white">RACING ACTION</span>
      </p>
    </section>

    <footer class="footer" id="location" data-reveal>
      <div class="footer-brand">
        <img src="/logo.png" alt="Xtreme kart racing logo" />
        <p>11 Hatfield Drive</p>
        <p>Thomastown VIC 3074</p>
        <p>03 9460 7888</p>
      </div>
      <div>
        <p>Privacy</p>
        <p>Terms and Conditions</p>
        <p>Disclaimer</p>
        <p>Copyright Notice</p>
      </div>
      <div>
        <p>Follow us on Facebook</p>
        <p>Follow us on Twitter</p>
      </div>
    </footer>
  </div>
`

const nav = document.querySelector<HTMLElement>('.nav')
const toggleNav = () => {
  if (!nav) return
  nav.classList.toggle('scrolled', window.scrollY > 10)
}

toggleNav()
window.addEventListener('scroll', toggleNav)

const detailCounters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'))
const animateCount = (el: HTMLElement, to: number) => {
  const start = performance.now()
  const duration = 1200
  const from = 0
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const value = Math.round(from + (to - from) * progress)
    el.textContent = value.toString()
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

let countersPlayed = false
const detailsSection = document.querySelector('.event-details')
if (detailsSection && detailCounters.length) {
  const observer = new IntersectionObserver(
    entries => {
      if (countersPlayed) return
      if (entries.some(entry => entry.isIntersecting)) {
        detailCounters.forEach(el => animateCount(el, Number(el.dataset.count || 0)))
        countersPlayed = true
        observer.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  observer.observe(detailsSection)
}

const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.2 }
)

revealTargets.forEach(el => revealObserver.observe(el))

const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'))
const sections = navLinks
  .map(link => document.querySelector<HTMLElement>(link.getAttribute('href') || ''))
  .filter(Boolean) as HTMLElement[]

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const id = entry.target.getAttribute('id')
        navLinks.forEach(link => {
          const match = link.getAttribute('href') === `#${id}`
          link.classList.toggle('active', match)
        })
      })
    },
    { threshold: 0.55 }
  )

  sections.forEach(section => sectionObserver.observe(section))
}
