import React from 'react'

const Team = () => {
  return (
    <section className="team" id="team">
        <h2 className="title">TEAM</h2>
        <div className="team-cards">
            <div className="team-card1 team-card">
            <img src={require('../assets/images/Ibex bb.webp')} alt= "Kirubel Tibebu"/>
            <h2>Kirubel Tibebu</h2>
            <div className="answers answer1">
                <p>Co-Founder and Artist</p>
            </div>
            <div>
                <a href="https://twitter.com/robel_tibebu?t=Tx2wz2dIBYw2kZHgKWHKNw&s=09" target="_blank" rel="noreferrer"><i className="lni lni-twitter-filled"></i></a>
            </div>
            </div>
            <div className="team-card2 team-card">
            <img src={require('../assets/images/Ibex y.webp')} alt="Tinsae Demissie"/>
            <h2>Tinsae Demissie</h2>
            <div className="answers answer1">
                <p>Co-Founder & Web3 Devloper</p>
            </div>
            <div>
                <a href="https://twitter.com/robiromeo1?t=NZCIE9LEK5cPBIY92gBOVg&s=09" target="_blank" rel="noreferrer"><i className="lni lni-twitter-filled"></i></a>
            </div>
            </div>
            <div className="team-card3 team-card">
            <img src={require('../assets/images/Ibex o.webp')} alt="The IbexClub Team" />
            <h2>Ibex Team</h2>
            <div className="answers answer1">
                <p>Web Design and Digital marketing</p>
            </div>
            <div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Team