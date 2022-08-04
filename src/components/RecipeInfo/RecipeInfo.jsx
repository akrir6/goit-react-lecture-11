import { InfoWrapper } from "./RecipeInfo.styled"

export const RecipeInfo = ({ icon: Icon, text }) => { 
    return <InfoWrapper>
        <Icon size={24} />
        <p>{text}</p>
    </InfoWrapper>
}