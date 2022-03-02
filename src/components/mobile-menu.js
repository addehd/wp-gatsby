import React from 'react'

export default function MobileMenu() {
  return (
    <>
      <section className="top visible sm:hidden">
          <div>
              <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </section>
      <div id="side">
          <nav>
              <a href="/">Hem</a>
              <a href="/om-oss">Historia</a>
              <a href="/aktiv">Aktiv</a>
              <a href="/vaken">Vaken</a>
          </nav>
      </div>
    </>
  )
}
