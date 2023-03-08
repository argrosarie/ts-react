const max = 739;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min) + min);
export const RandomCapy = (): JSX.Element => {
    const image = `https://api.capy.lol/v1/capybara/${random()}` 
    return <img width={320} height="auto" src={image} className="rounded"/>
}