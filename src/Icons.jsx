import { ReactComponent as NinjaStarIcon } from './images/ninja_star.svg';



function NinjaIcon() {
  const iconStyle = {
    fill: "red", // Change the color of the SVG
    width: "50px", // Change the size of the SVG
    height: "50px",
    border: "20px solid blue", // Change the border thickness and color
    colorFill: "red",
  };

  return (
    <div>
      <NinjaStarIcon style={iconStyle}/> 
    </div>
  );
}

export { NinjaIcon };



