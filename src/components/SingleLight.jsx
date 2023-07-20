import { useState } from "react";
import LightTurnedOff from "/public/images/light-turned-off.svg";
import LightBlue from "/public/images/light-blue.svg";
import LightGreen from "/public/images/light-green.svg";
import LightOrange from "/public/images/light-orange.svg";
import LightPink from "/public/images/light-pink.svg";
import LightRed from "/public/images/light-red.svg";
import LightYellow from "/public/images/light-yellow.svg";

const lights = [LightBlue, LightGreen, LightOrange, LightPink, LightRed, LightYellow];

export const SingleLight = () =>
{
    const [isOn, setOn] = useState(true);

    const getRandomIndex = () =>
    {
        return Math.floor(Math.random() * lights.length);
    }

    const randomIndex = getRandomIndex();

    const imageSrc = isOn ? lights[randomIndex] : LightTurnedOff;

    const handleToggle = () =>
    {
        setOn(!isOn);
    }

    return <img onClick={handleToggle} src={imageSrc} alt="Single Light" />;
};