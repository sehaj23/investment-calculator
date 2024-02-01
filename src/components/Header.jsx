import investmentImage  from "../assets/investment-calculator-logo.png"
export default function Header(){
    return (
        <header id="header">
        <img src={investmentImage} alt="Logo Showing a money bag"></img>
        <h1>Investment Calculator</h1>
        </header>
    )
}