
import ICard from './ICard'
import cat from '../img/scene.jpg'
function ICardGallery() {

    const student=
    [
        {
        pic:cat,
        name:"AKshita",
        roll:"3435454",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Ansh Tomer",
        roll:"89080",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Aanya",
        roll:"14242",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Aashi",
        roll:"906464",
        branch:"CSE-DS",
        college:"ABES Engineering College"
    }

]
  return (
    <div style={{display:'flex'}}>
    {/* <ICard name="Rahul" roll="35464" branch="CSE" college="ABES Engineering College" />
    <ICard name="Ajay" roll="898989" barnch="CSE" college="ABES Engineering College" />
    <ICard />
    <ICard /> */}

    {/* <ICard data={student[1]} /> */}

    {
        student.map(ele=>(
             <ICard data={ele} />        
        ))
    }

    </div>
  )
}

export default ICardGallery