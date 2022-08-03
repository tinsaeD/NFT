import React from 'react'

const About = () => {
  return (
    <section className="about-us" id="about-us">
        <h1 className="scale-reduction">About</h1>
        <div className="description scale-reduction">
        <p>
            The Ibex Club is a collection of 10,000 resilient Ibex NFTs, each with unique digital collectibles living on the Solana blockchain. The Ibex Club is inspired by the unique, endangered and indigenous species of Walia Ibex of which only 400 of them exist. Our role at the IbexClub is to preseve Ibexes both on physical and digital world.
        </p>
        </div>  
        
        <div className="nfts">
            <img src={require('../assets/images/Ibex bb.webp')} alt="The IbexClub NFT"/>
            <img src={require('../assets/images/Ibex o.webp')} alt="The IbexClub NFT"/>
            <img src={require('../assets/images/Ibex y.webp')} alt="The IbexClub NFT"/>
            <img src={require('../assets/images/Ibex p.webp')} alt="The IbexClub NFT"/>
            <img src={require('../assets/images/Ibex py.webp')} alt="The IbexClub NFT"/>
        </div>
    </section>
  )
}

export default About