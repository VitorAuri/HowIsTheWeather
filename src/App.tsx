import { Background } from "./components/Background"
import { Logo } from "./components/Logo"
import { WeatherApp } from "./components/WeatherApp"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <>
      <Background />
      <GlobalStyle />
      <Logo />
      <WeatherApp />
    </>
  )
}