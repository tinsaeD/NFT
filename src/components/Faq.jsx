import React from 'react'

const Faq = () => {
  return (
    <section className="FAQ" id="FAQ">
        <h2 className="faq scale-reduction">FAQ</h2>
        <div className="cards border">
            <div className="card1 card scale-reduction">
            <img src={require('../assets/images/icon/supply.png')} alt="The IbexClub Supply"/>
            <h2>Supply</h2>
            <div className="answers answer1">
                <p>There are a total of 10,000 Ibex's available.</p>
            </div>
            </div>
            <div className="card2 card scale-reduction">
            <img className="scale-reduction" src={require('../assets/images/icon/dateicon.svg')} alt="The IbexClub Mint"/>
            <h2>Mint Date</h2>
            <div className="answers answer1">
                <p>June 30, 2022</p>
            </div>
            </div>
            <div className="card3 card scale-reduction">
            <img src={require('../assets/images/icon/utility.png')} alt="The IbexClub Utility"/>
            <h2>Utility</h2>
            <div className="answers answer1">
                <p>Holders of Ibex will donate 5% to the preservation of Walia Ibex and have access to our <br/> community, holder-exclusive giveaways and more.</p>
            </div>
            </div>
            <div className="card4 card scale-reduction">
            <img src={require('../assets/images/icon/map.png')} alt="The IbexClub Place"/>
            <h2>Where</h2>
            <div className="answers answer1">
                <p>Once mint is live you can mint here on the site.</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Faq