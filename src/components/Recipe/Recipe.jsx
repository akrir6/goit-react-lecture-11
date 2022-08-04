import { HiOutlineChartBar, HiOutlineChartPie } from "react-icons/hi";
import { BsAlarm } from "react-icons/bs";
import { RecipeInfo } from "components/RecipeInfo/RecipeInfo";
import { CardWrapper, InfoContainer } from "./Recipe.styled";



export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
    return <CardWrapper>
        <h2>{name}</h2>
        <InfoContainer>
            <RecipeInfo text={`${time} min`} icon={BsAlarm} />
            <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
            <RecipeInfo text={`${calories} calories`}  icon={HiOutlineChartBar}/>
          </InfoContainer>
    </CardWrapper>;
};

