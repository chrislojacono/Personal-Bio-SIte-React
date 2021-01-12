import profilePic from '../../helpers/images/profilepic2.jpeg';

export default function Header() {
  return (
   <>
    <header className='head'>
      <h1>Chris LoJacono</h1>
      <h6 className='headerInfo'>Full Stack Web-Developer</h6>
    </header>
    <div className='d-flex container-fluid infoContainer'>
    <div className="profilePic" style={{ backgroundImage: `url(${profilePic})` }}>
      </div>
      <div className="aboutMe container-md clearfix">
        <div className="aboutChild">
          <h3>About Me</h3>
          <p>My name is Chris LoJacono, local to Nashville, TN, and  am currently a student attending The Nashville Software School. Our cohort is a full stack program with a back-end focus on C#/.NET. Over the past few years I've learned that I was drawn towards problem solving and I am a person that deeply strives to find things that offer a challenge. Software development checked all the boxes for me. The aspect of working in teams, untangling code, and using logic to solve problems was exactly what I am looking for in a career. </p>
        </div>
      </div>
    </div>

      </>
  );
}
