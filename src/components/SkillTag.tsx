import '../css/SkillTag.css'

export default function SkillTag({skillName}: {skillName : string}){
    return (
        <>
            <div className="skill-tag d-flex align-items-center justify-content-center">
                <span className='mx-2'>{skillName}</span>
            </div>
        </>
    )
}