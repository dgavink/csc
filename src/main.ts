import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page">
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-left">
          <a href="#" class="logo">
            <img src="/logo1.png" alt="Lemon Grid Logo" />
          </a>
        </div>
        <div class="nav-center">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#sponsorship">Sponsorship</a></li>
            <li><a href="#reach">Reach</a></li>
            <li><a href="#calender">Calender</a></li>
          </ul>
        </div>
        <div class="nav-right">
          <a href="#involved" class="btn btn-secondary">Get involved</a>
          <a href="#donate" class="btn btn-primary">Donate</a>
          <button class="theme-toggle" type="button" aria-label="Switch to light mode" aria-pressed="false">
            <span class="theme-toggle-icon" aria-hidden="true">☀</span>
          </button>
        </div>
        <button class="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <header class="hero">
      <video class="hero-background" autoplay muted loop playsinline aria-hidden="true">
        <source src="/herovid.mp4" type="video/mp4" />
      </video>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-content">
        <div class="hero-main">
          <div class="hero-copy">
            <p class="hero-kicker"><span></span> Motorsport &middot; Community &middot; Future</p>
            <h1 class="hero-title"><span>Lemon</span><em>Grid</em></h1>
            <h2 class="hero-subtitle">A motorsport themed camp</h2>
            <p class="hero-description">
              Where curious minds meet the racing world. Learn, build and race
              alongside the people shaping the next generation of motorsport.
            </p>
            <div class="hero-actions">
              <a href="#join" class="btn btn-cta">JOIN OUR COMMUNITY <span>&#8599;</span></a>
              <a href="#about" class="hero-text-link">Discover the grid <span>&#8595;</span></a>
            </div>
            <div class="contact-pills">
              <div class="pill"><span class="pill-label">Email</span>info@lemon-grid.org</div>
              <div class="pill-dot"></div>
              <div class="pill"><span class="pill-label">Web</span>lemon-grid.org</div>
            </div>
          </div>

          <div class="hero-visual">
            <img class="hero-driver" src="/driver.png" alt="Motorsport driver" />
            <div class="visual-caption"><span>01</span></div>
          </div>
        </div>

        <div class="hero-footer">
          <div class="hero-scroll"><span>Scroll to explore</span><div class="scroll-indicator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
          </div></div>
          <div class="hero-index" aria-hidden="true">LG<span>/</span>01</div>
          </div>
        </div>
      </div>
    </header>

    <section class="about-section" id="about">
      <div class="about-content">
        <div class="about-copy">
          <p class="section-kicker"><span></span> The story behind the grid</p>
          <h2 class="about-title">A message from us to you</h2>
          <p>
            Lemon Grid was born from a shared belief that motorsport should be
            accessible to everyone. We have brought together creators, fans,
            and professionals from across teams and driver communities with one
            goal: to give young people the chance to experience the world of
            racing, no matter their background or financial means.
          </p>
          <p>
            Even before announcing the LemonGrid to the public, the combined
            communities of everyone involved already reach more than 2.5
            million fans worldwide. By combining our passion, skills, and
            networks, we are building something meaningful: a camp where
            education, opportunity, and inspiration come together.
          </p>
          <p>
            With your support, we can prove that when people join forces for a
            shared purpose, real change is possible and the next generation of
            motorsport talent can truly thrive.
          </p>
        </div>

        <div class="about-feature">
          <div class="about-image-frame">
            <img src="/about-community.png" alt="Lemon Grid community working on a race car" />
            <span class="visual-corner visual-corner-tl"></span>
            <span class="visual-corner visual-corner-br"></span>
          </div>
          <div class="about-reach">
            <strong><span class="count-up" data-count="2.5" data-decimals="1">0</span>M<span>+</span></strong>
            <span>Combined community reach</span>
          </div>
          <div class="about-stats">
            <div class="about-stat">
              <strong><span class="count-up" data-count="40">0</span><span>+</span></strong>
              <span>Motorsport creators</span>
            </div>
            <div class="about-stat">
              <strong class="count-up" data-count="20">0</strong>
              <span>Youth participants</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="challenge-section" id="reach">
      <div class="challenge-content">
        <div class="challenge-image-frame">
          <img src="/karting-community.png" alt="Young drivers racing go-karts" />
          <span class="visual-corner visual-corner-tl"></span>
          <span class="visual-corner visual-corner-br"></span>
        </div>
        <div class="challenge-copy">
          <p class="section-kicker"><span></span> The challenge</p>
          <h2 class="challenge-title">
            Motorsport <span>inspires millions</span>, but <span>excludes most</span>
          </h2>
          <p>
            All over the world, talented teens dream of making it in racing.
            They've got the passion, the drive, and the raw skill - but often,
            that's not enough. Many come from places where access to travel,
            resources, or real opportunities just isn't a reality.
          </p>
          <p>
            Until now, there's been no clear path to help these young hopefuls
            break into motorsport. No program linking them to the people,
            places, and chances they need to take that first step.
          </p>
        </div>
      </div>
      <div class="challenge-callout">That's about to <span>change</span>.</div>
    </section>

    <section class="camp-section" id="sponsorship">
      <div class="camp-content">
        <p class="section-kicker"><span></span> The Lemon Grid experience</p>
        <h2 class="camp-title">LemonGrid is a motorsport-themed summer camp</h2>

        <div class="camp-hero-card">
          <img src="/experience-karting.png" alt="Young drivers racing go-karts around a circuit" />
          <div class="camp-hero-overlay"></div>
          <div class="camp-hero-stat">
            <strong>20</strong>
            <span>Youth from Every Continent</span>
          </div>
        </div>

        <div class="experience-free">
          <div class="experience-free-message">
            <div class="experience-free-copy">
              <span>Entrance</span>
              <strong>Totally Free</strong>
            </div>
          </div>

          <div class="experience-stats">
            <div class="experience-stat">
              <strong><span class="count-up" data-count="15">0</span> - <span class="count-up" data-count="19">0</span></strong>
              <span>Age Range</span>
            </div>
            <div class="experience-stat">
              <strong><span class="count-up" data-count="7">0</span></strong>
              <span>Days</span>
            </div>
            <div class="experience-stat">
              <strong>€<span class="count-up" data-count="0">0</span></strong>
              <span>Cost</span>
            </div>
            <div class="experience-stat">
              <strong><span class="count-up" data-count="100">0</span>%</strong>
              <span>Covered</span>
            </div>
          </div>

          <div class="experience-impact">
            <div class="experience-impact-copy">
              <h3>Real-World Impact</h3>
              <p>
                Hands-on workshops, exciting excursions, team-building
                activities, and one-on-one mentorship led by real professionals -
                ex-racing drivers, engineers, fitness coaches, and motorsport
                media creators.
              </p>
            </div>
            <div class="experience-goal">
              <strong>Our Goal</strong>
              <span>
                Each edition aims to secure at least one participant a
                motorsport internship - turning potential into a genuine
                pathway forward.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="calendar-section" id="calender">
      <div class="calendar-content">
        <p class="section-kicker"><span></span> Event timeline</p>
        <h2 class="calendar-title">Upcoming Editions</h2>

        <div class="calendar-grid">
          <article class="calendar-item">
            <div class="calendar-media">
              <img src="/slovenia-2026.png" alt="Lake Bled and the Slovenian Alps" />
              <div class="calendar-date-badge">
                <span>JUNE</span>
                <strong>2026</strong>
              </div>
            </div>
            <div class="calendar-item-details">
              <div class="slovenia-summary">
                <div class="slovenia-copy">
                  <h3>SLOVENIA</h3>
                  <p>SUMMER CAMP <span>2026</span></p>
                  <div class="slovenia-meta">
                    <strong>7<small>DAYS</small></strong>
                    <strong>UNTIL <b>JULY</b></strong>
                  </div>
                </div>
                <div class="slovenia-divider" aria-hidden="true"></div>
                <div class="slovenia-tracks">
                  <strong>Tracks</strong>
                  <span>Imola</span>
                  <span>Mugello</span>
                  <span>Red Bull Ring</span>
                </div>
              </div>
            </div>
          </article>
          <article class="calendar-item">
            <div class="calendar-media">
              <img src="/gulf-region-2027.png" alt="Gulf Region desert coastline" />
              <div class="calendar-date-badge">
                <span>WINTER</span>
                <strong>2027</strong>
              </div>
            </div>
            <div class="calendar-item-details">
              <div class="slovenia-summary">
                <div class="slovenia-copy">
                  <h3>GULF REGION</h3>
                  <p>WINTER CAMP <span>2027</span></p>
                </div>
                <div class="slovenia-divider" aria-hidden="true"></div>
                <div class="slovenia-tracks">
                  <strong>Tracks</strong>
                  <span>Bahrain</span>
                  <span>Jeddah</span>
                  <span class="tracks-more">more TBA</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="community-section" id="community">
      <div class="community-content">
        <div class="community-heading">
          <p class="section-kicker"><span></span> The movement</p>
          <h2>A Project<br /><span class="community-intro">by the</span> <em>MOTORSPORT COMMUNITY.</em></h2>
          <p class="community-backed">Backed by<br /><strong>Rotaract Kranj</strong></p>
        </div>

        <div class="community-body">
          <div class="community-photo">
            <img src="/community-session.png" alt="Young people gathered at a motorsport community session" />
            <span class="community-photo-label">THE NEXT GENERATION</span>
          </div>
          <p>
            Over 40 motorsport creators have already joined the movement,
            bringing with them a combined reach of more than 2.5 million
            passionate fans. And the momentum is only growing.
          </p>
          <div class="community-stats">
            <div class="community-stat">
              <strong>40<span>+</span></strong>
              <span class="community-stat-label">Motorsport Creators</span>
              <p>Influencers from across the racing world coming together for a unified mission</p>
            </div>
            <div class="community-stat community-stat-featured">
              <strong>2.5<span>M</span><i>+</i></strong>
              <span class="community-stat-label">Fan Reach</span>
              <p>Combined audience of passionate motorsport fans worldwide</p>
            </div>
            <div class="community-stat">
              <strong>1</strong>
              <span class="community-stat-label">Shared Mission</span>
              <p>Give youth who love racing a real chance to be part of it</p>
            </div>
          </div>
        </div>
      </div>
      <div class="community-mark" aria-hidden="true">JOIN<br /><span>THE GRID</span></div>
    </section>

    <section class="sponsorship-section" id="sponsorship-opportunities">
      <div class="sponsorship-content">
        <p class="section-kicker"><span></span> Partner with the grid</p>
        <h2 class="sponsorship-title">Sponsorship <em>Opportunities</em></h2>
        <p class="sponsorship-intro">
          LemonGrid offers brands a chance to do more than just show up -
          it's a chance to stand for something. Through layered partnership
          tiers, we're opening the door to meaningful brand integration.
        </p>

        <div class="sponsorship-grid">
          <article class="sponsorship-card sponsorship-card-featured">
            <span class="sponsorship-tier">TIER 1</span>
            <h3>Title Partner</h3>
            <strong>€25,000<span>+</span></strong>
            <ul>
              <li>"LemonGrid presented by [Your Brand]"</li>
              <li>Lead logo placement</li>
              <li>Official recognition throughout camp</li>
              <li>Media coverage branding</li>
            </ul>
          </article>
          <article class="sponsorship-card">
            <span class="sponsorship-tier">TIER 2</span>
            <h3>Program Sponsor</h3>
            <strong>€5,000–10,000</strong>
            <ul>
              <li>Day sponsor branding</li>
              <li>Social content presence</li>
              <li>Co-branded shoutouts</li>
              <li>Branded content option</li>
            </ul>
          </article>
          <article class="sponsorship-card">
            <span class="sponsorship-tier">TIER 3</span>
            <h3>Participant Sponsor</h3>
            <strong>€3,000</strong>
            <ul>
              <li>Sponsor one participant</li>
              <li>Recap video recognition</li>
              <li>Website recognition</li>
              <li>Social media shoutout</li>
            </ul>
          </article>
          <article class="sponsorship-card">
            <span class="sponsorship-tier">FLEX</span>
            <h3>Flexible Partnership</h3>
            <strong>Custom</strong>
            <ul>
              <li>Special experiences</li>
              <li>Partial funding</li>
              <li>In-kind support</li>
              <li>Customized benefits</li>
            </ul>
          </article>
        </div>

        <div class="inkind-opportunities">
          <div class="inkind-heading">
            <p class="section-kicker"><span></span> Beyond funding</p>
            <h3>In-Kind Partnership <em>Opportunities</em></h3>
          </div>
          <div class="inkind-grid">
            <article class="inkind-card">
              <span class="inkind-number">01</span>
              <h4>Airline Partners</h4>
              <p>Cover participant travel</p>
            </article>
            <article class="inkind-card">
              <span class="inkind-number">02</span>
              <h4>Circuits &amp; Facilities</h4>
              <p>Track access &amp; experiences</p>
            </article>
            <article class="inkind-card">
              <span class="inkind-number">03</span>
              <h4>Food &amp; Beverages</h4>
              <p>Daily meals &amp; branded snacks</p>
            </article>
            <article class="inkind-card">
              <span class="inkind-number">04</span>
              <h4>Equipment</h4>
              <p>Clothing, tech, safety gear</p>
            </article>
            <article class="inkind-card">
              <span class="inkind-number">05</span>
              <h4>Accommodation</h4>
              <p>Support for mentors &amp; participants</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section" id="timeline">
      <div class="timeline-content">
        <p class="section-kicker"><span></span> The roadmap</p>
        <h2 class="timeline-title">The <em>Timeline</em></h2>

        <div class="timeline-bus">
          <div class="timeline-rail" aria-hidden="true"></div>
          <article class="timeline-stop">
            <div class="timeline-date">Now - End of 2025</div>
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-copy">
              <h3>Foundation Building</h3>
              <p>Finalizing key partnerships and sponsors, launching crowdfunding and influencer-driven campaign, locking in mentor lineup and logistics.</p>
            </div>
          </article>
          <article class="timeline-stop">
            <div class="timeline-date">Beginning 2026</div>
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-copy">
              <h3>Participant Selection</h3>
              <p>Opening applications and selecting participants, preparing media, ordering gear, and getting everything ready for the camp experience.</p>
            </div>
          </article>
          <article class="timeline-stop">
            <div class="timeline-date">June - August 2026</div>
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-copy">
              <h3>First LemonGrid Camp</h3>
              <p>The first LemonGrid camp kicks off, followed by comprehensive coverage, recap content, and ongoing support to secure internships.</p>
            </div>
          </article>
          <article class="timeline-stop">
            <div class="timeline-date">August - October 2026</div>
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-copy">
              <h3>Reflection &amp; Growth</h3>
              <p>Team reflects on the camp's success and lays the foundation for the next edition, building on lessons learned and new opportunities.</p>
            </div>
          </article>
        </div>
        <div class="timeline-callout"><span>Motorsport</span> gave us something to <span>believe in.</span></div>
        <p class="timeline-followup">Now it's time we give back.</p>
        <div class="timeline-cta">
          <p>Join us in making LemonGrid a global proof that fans, teams, and brands can build real access and real futures.</p>
          <a class="btn btn-primary" href="#sponsorship-opportunities">Become a Partner</a>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="#" class="footer-logo">
            <img src="/logo1.png" alt="Lemon Grid Logo" />
          </a>
          <p>Building access, opportunity, and a future for the next generation of motorsport.</p>
        </div>
        <div class="footer-column">
          <h3>Navigate</h3>
          <a href="#about">About</a>
          <a href="#sponsorship">Experience</a>
          <a href="#calender">Calendar</a>
          <a href="#community">Community</a>
          <a href="#sponsorship-opportunities">Sponsorship</a>
          <a href="#timeline">Timeline</a>
        </div>
        <div class="footer-column footer-contact">
          <h3>Contact</h3>
          <a href="mailto:info@lemon-grid.org">info@lemon-grid.org</a>
          <a href="https://lemon-grid.org">lemon-grid.org</a>
          <span>Rotaract Kranj</span>
        </div>
      </div>
      <div class="footer-bottom">
        <span>LEMON GRID <b>/</b> COMMUNITY · MOTORSPORT · FUTURE</span>
        <span>© 2026 Lemon Grid</span>
      </div>
    </footer>
  </div>
`

// Simple Navbar scroll effect
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled')
  } else {
    nav?.classList.remove('scrolled')
  }
})

// Mobile Nav Toggle
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-center')
const navRight = document.querySelector('.nav-right')
const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle')

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active')
  navLinks?.classList.toggle('active')
  navRight?.classList.toggle('active')
})

themeToggle?.addEventListener('click', () => {
  const isLightMode = document.body.classList.toggle('light-mode')
  themeToggle.setAttribute('aria-pressed', String(isLightMode))
  themeToggle.setAttribute('aria-label', isLightMode ? 'Switch to dark mode' : 'Switch to light mode')
  themeToggle.querySelector<HTMLElement>('.theme-toggle-icon')!.textContent = isLightMode ? '☾' : '☀'
})

const countUpElements = document.querySelectorAll<HTMLElement>('.count-up')
const countUpObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return

    const element = entry.target as HTMLElement
    const target = Number(element.dataset.count)
    const decimals = Number(element.dataset.decimals ?? 0)
    const duration = 1400
    const startTime = performance.now()

    const updateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const value = target * easedProgress
      element.textContent = value.toFixed(decimals)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
    observer.unobserve(element)
  })
}, { threshold: 0.1 })

countUpElements.forEach((element) => countUpObserver.observe(element))
