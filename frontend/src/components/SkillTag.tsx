import '../css/SkillTag.css'

export default function SkillTag({skill}: {skill : SkillObject}) {

    console.log(skill)
    if (!skill) {
        console.log("Skill is undefined in SkillTag: ", skill);
        return null;  // Prevents rendering an invalid component
    }

    const getSkillColor = (skillType: string) => {
        switch(skillType) {
            case "language":
                return "tag-red"
            case "framework":
                return "tag-blue"
            case "tool":
                return "tag-green"
            case "other":
                return "tag-gray"
            default:
                return "tag-gray"
        }
    }

    return (
        <>
            <div className={`skill-tag d-flex align-items-center justify-content-center ${getSkillColor(skill.type)}`}>
                <span className='mx-2'>{skill.name}</span>
            </div>
        </>
    )
}