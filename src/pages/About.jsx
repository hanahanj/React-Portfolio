import profilePhoto from '../assets/profile.jpg'; 
import './about.css';
export default function About() {
  return (
    <div>
      {/* <h1>About Jonathan</h1> */}
      <div className="profile-container">
          <img src={profilePhoto} alt="Jonathan Hanahan" className="profile-photo" />
      </div>
      <section className="m-5">
      
      <p >
       
       Jonathan Hanahan is a researcher, critical designer, and educator with a complex relationship with technology—simultaneously fascinated and apprehensive. His innovative approach involves harnessing technology to scrutinize its own impact. Through speculative exploration, he delves into the tangible, cultural, and societal consequences of digital experiences and technology's role in shaping our daily existence. Hanahan specializes in crafting Thick Interfaces—media, experiences, and interfaces that disrupt the familiar digital veneers, revealing the complexity beneath.
       </p>
       <p>
       Currently, Hanahan's research is centered on alternative and ambient interfaces. In 2022, he established the Sensory and Ambient Interfaces Lab (SAIL), dedicated to envisioning a future less reliant on screens. SAIL explores non-visual interfaces and interactions, fostering a digitally enhanced yet less intrusive future. The lab operates in contexts where screens are impractical, unsafe, or distracting, investigating ambient design strategies that harmonize with human experiences to convey information.
       </p>
       <p>
       Hanahan received his BARCH from Virginia Tech and an MFA from The Rhode Island School of Design. As an Associate Professor at the Sam Fox School of Design & Visual Arts at Washington University in St. Louis, he spearheads Human-Computer Interaction and Emerging Technologies curriculum. Additionally, Hanahan co-founded and co-directs Fox Fridays, an interdisciplinary workshop series promoting experimentation with tools, processes, and technology.
       </p>

      </section>
     

    </div>
  );
}
